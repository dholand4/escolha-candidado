// Sons no estilo da urna eletrônica, sintetizados no navegador com Web Audio (nenhum arquivo de áudio).
// Só tocam depois de um toque ou tecla da pessoa, como os navegadores exigem.

const SOM_KEY = 'match-eleitoral-2026:som'

let contexto = null

function obterContexto() {
  if (typeof window === 'undefined') return null
  const Ctx = window.AudioContext || window.webkitAudioContext
  if (!Ctx) return null
  contexto ??= new Ctx()
  if (contexto.state === 'suspended') contexto.resume()
  return contexto
}

export function carregarPreferenciaSom() {
  try {
    return localStorage.getItem(SOM_KEY) !== '0'
  } catch {
    return true
  }
}

export function salvarPreferenciaSom(ativo) {
  try {
    localStorage.setItem(SOM_KEY, ativo ? '1' : '0')
  } catch {
    // Preferência só em memória.
  }
}

// Agenda um bipe de onda quadrada com ataque e soltura curtos, para não estalar.
function bipe(ctx, frequencia, inicio, duracao, volume = 0.08) {
  const osc = ctx.createOscillator()
  const ganho = ctx.createGain()
  osc.type = 'square'
  osc.frequency.setValueAtTime(frequencia, inicio)
  ganho.gain.setValueAtTime(0, inicio)
  ganho.gain.linearRampToValueAtTime(volume, inicio + 0.005)
  ganho.gain.setValueAtTime(volume, inicio + duracao - 0.01)
  ganho.gain.linearRampToValueAtTime(0, inicio + duracao)
  osc.connect(ganho).connect(ctx.destination)
  osc.start(inicio)
  osc.stop(inicio + duracao + 0.01)
}

// Bipe curto de tecla pressionada.
export function tocarTecla() {
  const ctx = obterContexto()
  if (!ctx) return
  bipe(ctx, 1046, ctx.currentTime, 0.07)
}

// Sequência rápida e aguda que lembra o encerramento da votação.
export function tocarFim() {
  const ctx = obterContexto()
  if (!ctx) return
  const notas = [1568, 1319, 1568, 1319, 1568, 1319, 1568, 1319, 1760]
  let t = ctx.currentTime + 0.02
  notas.forEach((freq, i) => {
    const ultima = i === notas.length - 1
    bipe(ctx, freq, t, ultima ? 0.32 : 0.075, 0.07)
    t += ultima ? 0.32 : 0.085
  })
}
