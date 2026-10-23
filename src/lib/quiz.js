import { CANDIDATOS, CATEGORIAS, PROPOSTAS, PROPOSTAS_POR_ID } from '../data/propostas.js'

export const STORAGE_KEY = 'match-eleitoral-2026:v1'

export const OPCOES = [
  { valor: -2, rotulo: 'Discordo totalmente', curto: 'Discordo total.' },
  { valor: -1, rotulo: 'Discordo', curto: 'Discordo' },
  { valor: 0, rotulo: 'Neutro', curto: 'Neutro' },
  { valor: 1, rotulo: 'Concordo', curto: 'Concordo' },
  { valor: 2, rotulo: 'Concordo totalmente', curto: 'Concordo total.' },
]

export const ROTULO_VOTO = Object.fromEntries(OPCOES.map((o) => [o.valor, o.rotulo]))

export const MODOS = {
  rapido: { id: 'rapido', titulo: 'Teste Rápido', total: 20 },
  completo: { id: 'completo', titulo: 'Teste Completo', total: PROPOSTAS.length },
}

function embaralhar(lista) {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

// No modo rápido, sorteia metade das perguntas de cada candidato para manter o teste equilibrado.
export function sortearOrdem(modo) {
  const total = MODOS[modo].total
  const porCandidato = Object.keys(CANDIDATOS).map((c) =>
    embaralhar(PROPOSTAS.filter((p) => p.candidato === c)).slice(0, total / 2),
  )
  return embaralhar(porCandidato.flat()).map((p) => p.id)
}

export function novoEstado(modo) {
  return { modo, ordem: sortearOrdem(modo), atual: 0, respostas: {}, concluido: false }
}

export function carregarEstado() {
  try {
    const bruto = localStorage.getItem(STORAGE_KEY)
    if (!bruto) return null
    const estado = JSON.parse(bruto)
    const valido =
      estado &&
      MODOS[estado.modo] &&
      Array.isArray(estado.ordem) &&
      estado.ordem.length > 0 &&
      estado.ordem.every((id) => PROPOSTAS_POR_ID[id]) &&
      Number.isInteger(estado.atual) &&
      estado.atual >= 0 &&
      estado.atual < estado.ordem.length &&
      estado.respostas &&
      typeof estado.respostas === 'object'
    return valido ? estado : null
  } catch {
    return null
  }
}

export function salvarEstado(estado) {
  try {
    if (estado) localStorage.setItem(STORAGE_KEY, JSON.stringify(estado))
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Sem armazenamento disponível (aba anônima, bloqueio): o teste segue só em memória.
  }
}

// Converte a soma de pontos em afinidade de 0 a 100%: -2 em tudo = 0%, neutro em tudo = 50%, +2 em tudo = 100%.
function percentual(soma, quantidade) {
  if (quantidade === 0) return null
  return Math.round(((soma + 2 * quantidade) / (4 * quantidade)) * 100)
}

export function calcularResultado(estado) {
  const ids = Object.keys(CANDIDATOS)
  const vazio = () => Object.fromEntries(ids.map((c) => [c, { soma: 0, quantidade: 0 }]))
  const geral = vazio()
  const porCategoria = Object.fromEntries(CATEGORIAS.map((cat) => [cat, vazio()]))

  for (const id of estado.ordem) {
    const voto = estado.respostas[id]
    if (voto === undefined) continue
    const proposta = PROPOSTAS_POR_ID[id]
    for (const alvo of [geral[proposta.candidato], porCategoria[proposta.categoria][proposta.candidato]]) {
      alvo.soma += voto
      alvo.quantidade += 1
    }
  }

  const afinidade = Object.fromEntries(
    ids.map((c) => [c, { ...geral[c], pct: percentual(geral[c].soma, geral[c].quantidade) ?? 50 }]),
  )
  const temas = CATEGORIAS.map((categoria) => ({
    categoria,
    candidatos: Object.fromEntries(
      ids.map((c) => {
        const { soma, quantidade } = porCategoria[categoria][c]
        return [c, { soma, quantidade, pct: percentual(soma, quantidade) }]
      }),
    ),
  })).filter((t) => ids.some((c) => t.candidatos[c].quantidade > 0))

  const [a, b] = ids
  const diferenca = afinidade[a].pct - afinidade[b].pct
  const vencedor = diferenca === 0 ? null : diferenca > 0 ? a : b

  return { afinidade, temas, vencedor, diferenca: Math.abs(diferenca) }
}
