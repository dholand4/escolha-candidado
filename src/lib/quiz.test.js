import { describe, expect, it } from 'vitest'
import { PROPOSTAS_POR_ID } from '../data/propostas.js'
import { MODOS, calcularResultado, novoEstado, sortearOrdem } from './quiz.js'

// Monta um estado já respondido a partir de pares [id, voto].
function estadoCom(votos) {
  return {
    modo: 'rapido',
    ordem: votos.map(([id]) => id),
    atual: 0,
    respostas: Object.fromEntries(votos),
    concluido: true,
  }
}

describe('sortearOrdem', () => {
  for (const modo of Object.keys(MODOS)) {
    it(`no modo ${modo} sorteia metade de cada candidato, sem repetir`, () => {
      const ordem = sortearOrdem(modo)
      expect(ordem).toHaveLength(MODOS[modo].total)
      expect(new Set(ordem).size).toBe(ordem.length)
      const lula = ordem.filter((id) => PROPOSTAS_POR_ID[id].candidato === 'lula').length
      expect(lula).toBe(MODOS[modo].total / 2)
    })
  }

  it('gera testes diferentes a cada sorteio', () => {
    const a = sortearOrdem('completo')
    const b = sortearOrdem('completo')
    expect(a).not.toEqual(b)
  })

  it('novoEstado começa vazio', () => {
    const e = novoEstado('rapido')
    expect(e).toMatchObject({ atual: 0, respostas: {}, concluido: false })
  })
})

describe('calcularResultado', () => {
  it('concordar totalmente com tudo dá 100%, discordar totalmente dá 0%', () => {
    const r = calcularResultado(estadoCom([[1, 2], [2, 2], [51, -2], [52, -2]]))
    expect(r.afinidade.lula.pct).toBe(100)
    expect(r.afinidade.flavio.pct).toBe(0)
    expect(r.ranking).toEqual(['lula', 'flavio'])
    expect(r.vencedor).toBe('lula')
    expect(r.diferenca).toBe(100)
  })

  it('neutro em tudo dá 50% e empate, com ordem alfabética', () => {
    const r = calcularResultado(estadoCom([[1, 0], [51, 0]]))
    expect(r.afinidade.lula.pct).toBe(50)
    expect(r.afinidade.flavio.pct).toBe(50)
    expect(r.vencedor).toBeNull()
    expect(r.ranking).toEqual(['flavio', 'lula'])
  })

  it('aplica a escala de -2 a +2', () => {
    // +1 e -1 se anulam; +2 sozinho = 100%; (+1) sozinho = 75%
    expect(calcularResultado(estadoCom([[1, 1], [2, -1]])).afinidade.lula.pct).toBe(50)
    expect(calcularResultado(estadoCom([[1, 1]])).afinidade.lula.pct).toBe(75)
    expect(calcularResultado(estadoCom([[51, -1]])).afinidade.flavio.pct).toBe(25)
  })

  it('ignora perguntas sem resposta', () => {
    const e = estadoCom([[1, 2]])
    e.ordem.push(51)
    const r = calcularResultado(e)
    expect(r.afinidade.flavio.quantidade).toBe(0)
    expect(r.afinidade.flavio.pct).toBe(50)
  })

  it('calcula a afinidade por tema', () => {
    const r = calcularResultado(estadoCom([[2, 2], [63, -2]])) // ambas de Economia
    const economia = r.temas.find((t) => t.categoria === 'Economia')
    expect(economia.candidatos.lula.pct).toBe(100)
    expect(economia.candidatos.flavio.pct).toBe(0)
    expect(r.temas).toHaveLength(1)
  })

  it('separa as propostas mais apoiadas e mais rejeitadas de cada candidato', () => {
    const r = calcularResultado(estadoCom([[1, 1], [2, 2], [3, -2], [4, 0], [5, 1], [6, 1]]))
    expect(r.destaques.lula.concorda.map((d) => d.proposta.id)).toEqual([2, 1, 5])
    expect(r.destaques.lula.discorda.map((d) => d.proposta.id)).toEqual([3])
    expect(r.destaques.flavio.concorda).toEqual([])
  })
})

describe('líder por tema', () => {
  it('não aponta líder quando só um candidato tem propostas no tema', () => {
    const r = calcularResultado(estadoCom([[38, -2]])) // só Saúde do Lula
    expect(r.temas.find((t) => t.categoria === 'Saúde').lider).toBeNull()
  })

  it('aponta o líder quando os dois têm propostas no tema', () => {
    const r = calcularResultado(estadoCom([[38, -2], [84, 1]])) // Saúde dos dois
    expect(r.temas.find((t) => t.categoria === 'Saúde').lider).toBe('flavio')
  })
})
