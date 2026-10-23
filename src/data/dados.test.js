import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { CANDIDATOS, CATEGORIAS, PROPOSTAS } from './propostas.js'
import { GLOSSARIO, marcarTermos } from './glossario.js'

describe('banco de propostas', () => {
  it('tem 100 propostas, 50 de cada candidato, com ids únicos', () => {
    expect(PROPOSTAS).toHaveLength(100)
    expect(new Set(PROPOSTAS.map((p) => p.id)).size).toBe(100)
    expect(PROPOSTAS.filter((p) => p.candidato === 'lula')).toHaveLength(50)
    expect(PROPOSTAS.filter((p) => p.candidato === 'flavio')).toHaveLength(50)
  })

  it('cada proposta tem categoria válida, versão simples, página e trecho do plano', () => {
    for (const p of PROPOSTAS) {
      expect(CATEGORIAS, `categoria da ${p.id}`).toContain(p.categoria)
      expect(p.simples?.length, `simples da ${p.id}`).toBeGreaterThan(10)
      expect(Number.isInteger(p.pagina) && p.pagina > 0, `página da ${p.id}`).toBe(true)
      for (const t of [p.trecho].flat()) expect(t?.length, `trecho da ${p.id}`).toBeGreaterThan(10)
    }
  })

  it('os PDFs dos planos estão publicados junto com o app', () => {
    for (const c of Object.values(CANDIDATOS)) {
      expect(existsSync(new URL(`../../public/${c.pdf.replace('./', '')}`, import.meta.url)), c.pdf).toBe(true)
    }
  })

  it('todo candidato tem ao menos uma proposta por tema', () => {
    for (const c of ['lula', 'flavio']) {
      for (const cat of CATEGORIAS) {
        expect(PROPOSTAS.some((p) => p.candidato === c && p.categoria === cat), `${c} em ${cat}`).toBe(true)
      }
    }
  })
})

describe('glossário', () => {
  it('marca termos sem alterar o texto', () => {
    for (const p of PROPOSTAS) {
      const partes = marcarTermos(p.texto)
      expect(partes.map((x) => (typeof x === 'string' ? x : x.termo)).join('')).toBe(p.texto)
      for (const x of partes) if (typeof x !== 'string') expect(x.definicao).toBeTruthy()
    }
  })

  it('não casa pedaços de palavras', () => {
    const partes = marcarTermos('Uniãozinha e União')
    expect(partes.filter((x) => typeof x !== 'string').map((x) => x.termo)).toEqual(['União'])
  })

  it('todo termo do glossário aparece em alguma proposta', () => {
    const usados = new Set(
      PROPOSTAS.flatMap((p) => marcarTermos(p.texto).filter((x) => typeof x !== 'string').map((x) => x.termo.toLowerCase())),
    )
    expect(Object.keys(GLOSSARIO).filter((t) => !usados.has(t.toLowerCase()))).toEqual([])
  })
})
