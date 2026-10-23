import { CANDIDATOS, CATEGORIAS, PROPOSTAS, PROPOSTAS_POR_ID } from '../data/propostas.js'

// v3: banco refeito a partir dos PDFs dos planos; progresso salvo de versões anteriores é descartado.
export const STORAGE_KEY = 'match-eleitoral-2026:v3'
export const SIMPLES_KEY = 'match-eleitoral-2026:linguagem-simples'

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
  completo: { id: 'completo', titulo: 'Teste Completo', total: 50 },
}

function embaralhar(lista) {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

// Sorteia metade das perguntas de cada candidato a partir do banco, para o teste ficar equilibrado
// e mudar a cada vez que é refeito.
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

export function carregarPreferenciaSimples() {
  try {
    return localStorage.getItem(SIMPLES_KEY) === '1'
  } catch {
    return false
  }
}

export function salvarPreferenciaSimples(ativo) {
  try {
    localStorage.setItem(SIMPLES_KEY, ativo ? '1' : '0')
  } catch {
    // Preferência só em memória.
  }
}

// Converte a soma de pontos em afinidade de 0 a 100%: -2 em tudo = 0%, neutro em tudo = 50%, +2 em tudo = 100%.
function percentual(soma, quantidade) {
  if (quantidade === 0) return null
  return Math.round(((soma + 2 * quantidade) / (4 * quantidade)) * 100)
}

export function calcularResultado(estado) {
  const vazio = () => Object.fromEntries(Object.keys(CANDIDATOS).map((c) => [c, { soma: 0, quantidade: 0 }]))
  const geral = vazio()
  const porCategoria = Object.fromEntries(CATEGORIAS.map((cat) => [cat, vazio()]))
  const respondidas = []

  for (const id of estado.ordem) {
    const voto = estado.respostas[id]
    if (voto === undefined) continue
    const proposta = PROPOSTAS_POR_ID[id]
    respondidas.push({ proposta, voto })
    for (const alvo of [geral[proposta.candidato], porCategoria[proposta.categoria][proposta.candidato]]) {
      alvo.soma += voto
      alvo.quantidade += 1
    }
  }

  const afinidade = Object.fromEntries(
    Object.keys(CANDIDATOS).map((c) => [c, { ...geral[c], pct: percentual(geral[c].soma, geral[c].quantidade) ?? 50 }]),
  )

  // Ordem de exibição: maior afinidade primeiro; em empate, ordem alfabética, para nenhum candidato
  // aparecer sempre em primeiro por padrão.
  const ranking = Object.keys(CANDIDATOS).sort(
    (a, b) => afinidade[b].pct - afinidade[a].pct || CANDIDATOS[a].nome.localeCompare(CANDIDATOS[b].nome, 'pt-BR'),
  )

  // `lider` só é definido quando os dois candidatos têm propostas respondidas no tema e não há empate;
  // com propostas de um só candidato, não dá para dizer de quem a pessoa está mais perto.
  const temas = CATEGORIAS.map((categoria) => {
    const candidatos = Object.fromEntries(
      ranking.map((c) => {
        const { soma, quantidade } = porCategoria[categoria][c]
        return [c, { soma, quantidade, pct: percentual(soma, quantidade) }]
      }),
    )
    const [a, b] = ranking.map((c) => candidatos[c].pct)
    const comparavel = a !== null && b !== null && a !== b
    return { categoria, candidatos, lider: comparavel ? ranking[a > b ? 0 : 1] : null }
  }).filter((t) => ranking.some((c) => t.candidatos[c].quantidade > 0))

  // Até 3 propostas de cada candidato com que a pessoa mais concordou e que mais rejeitou.
  const intensidade = (r) => Math.abs(r.voto)
  const destaques = Object.fromEntries(
    ranking.map((c) => {
      const doCandidato = respondidas.filter((r) => r.proposta.candidato === c)
      const ordenar = (lista) => lista.sort((a, b) => intensidade(b) - intensidade(a)).slice(0, 3)
      return [c, { concorda: ordenar(doCandidato.filter((r) => r.voto > 0)), discorda: ordenar(doCandidato.filter((r) => r.voto < 0)) }]
    }),
  )

  const [primeiro, segundo] = ranking
  const diferenca = afinidade[primeiro].pct - afinidade[segundo].pct
  const vencedor = diferenca === 0 ? null : primeiro

  return { afinidade, ranking, temas, destaques, vencedor, diferenca }
}
