import { CANDIDATOS } from '../data/propostas.js'

const LARGURA = 1080
const ALTURA = 1350

function retanguloArredondado(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.roundRect(x, y, w, h, r)
}

// Desenha no navegador um cartão 1080x1350 (formato de post/stories) com o resultado.
// Só usa as porcentagens: as respostas individuais não aparecem na imagem.
export async function gerarImagemResultado(resultado, url) {
  await document.fonts?.ready
  const canvas = document.createElement('canvas')
  canvas.width = LARGURA
  canvas.height = ALTURA
  const ctx = canvas.getContext('2d')

  const fundo = ctx.createLinearGradient(0, 0, LARGURA, ALTURA)
  fundo.addColorStop(0, '#ffffff')
  fundo.addColorStop(0.55, '#f6f6f3')
  fundo.addColorStop(1, '#ebebe6')
  ctx.fillStyle = fundo
  ctx.fillRect(0, 0, LARGURA, ALTURA)

  for (const [x, y, r, cor] of [
    [120, 140, 420, 'rgba(148,163,184,0.18)'],
    [980, 1180, 480, 'rgba(148,163,184,0.22)'],
  ]) {
    const brilho = ctx.createRadialGradient(x, y, 0, x, y, r)
    brilho.addColorStop(0, cor)
    brilho.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = brilho
    ctx.fillRect(0, 0, LARGURA, ALTURA)
  }

  ctx.textAlign = 'center'
  ctx.fillStyle = '#64748b'
  ctx.font = '600 30px Inter, sans-serif'
  ctx.fillText('ELEIÇÕES 2026 · TESTE CEGO', LARGURA / 2, 150)

  const titulo = ctx.createLinearGradient(240, 0, 840, 0)
  titulo.addColorStop(0, '#0f172a')
  titulo.addColorStop(0.5, '#334155')
  titulo.addColorStop(1, '#64748b')
  ctx.fillStyle = titulo
  ctx.font = '700 92px "Space Grotesk", Inter, sans-serif'
  ctx.fillText('Meu Match', LARGURA / 2, 260)
  ctx.fillStyle = '#0f172a'
  ctx.fillText('Eleitoral', LARGURA / 2, 360)

  ctx.fillStyle = '#64748b'
  ctx.font = '400 32px Inter, sans-serif'
  ctx.fillText('Afinidade com as propostas de cada candidato', LARGURA / 2, 440)

  let y = 530
  for (const id of resultado.ranking) {
    const c = CANDIDATOS[id]
    const pct = resultado.afinidade[id].pct
    ctx.textAlign = 'left'
    ctx.fillStyle = '#0f172a'
    ctx.font = '700 52px "Space Grotesk", Inter, sans-serif'
    ctx.fillText(c.nome, 110, y)
    ctx.textAlign = 'right'
    ctx.font = '700 72px "Space Grotesk", Inter, sans-serif'
    ctx.fillText(`${pct}%`, LARGURA - 110, y + 8)

    retanguloArredondado(ctx, 110, y + 40, LARGURA - 220, 44, 22)
    ctx.fillStyle = 'rgba(15,23,42,0.08)'
    ctx.fill()
    const barra = ctx.createLinearGradient(110, 0, LARGURA - 110, 0)
    barra.addColorStop(0, c.cor)
    barra.addColorStop(1, c.corFinal)
    if (pct > 0) {
      retanguloArredondado(ctx, 110, y + 40, Math.max(44, ((LARGURA - 220) * pct) / 100), 44, 22)
      ctx.fillStyle = barra
      ctx.fill()
    }
    y += 200
  }

  const temas = resultado.temas
    .filter((t) => t.lider)
    .map((t) => ({ categoria: t.categoria, lider: t.lider }))
    .slice(0, 6)
  if (temas.length) {
    ctx.textAlign = 'left'
    ctx.fillStyle = '#64748b'
    ctx.font = '600 28px Inter, sans-serif'
    ctx.fillText('MAIS PERTO POR TEMA', 110, y + 10)
    let ty = y + 70
    ctx.font = '500 32px Inter, sans-serif'
    temas.forEach((t, i) => {
      const x = i % 2 === 0 ? 110 : LARGURA / 2 + 20
      if (i > 0 && i % 2 === 0) ty += 56
      ctx.fillStyle = '#334155'
      ctx.fillText(`${t.categoria}:`, x, ty)
      const largura = ctx.measureText(`${t.categoria}: `).width
      ctx.fillStyle = CANDIDATOS[t.lider].cor
      ctx.fillText(CANDIDATOS[t.lider].nome.split(' ')[0], x + largura, ty)
    })
  }

  ctx.textAlign = 'center'
  ctx.fillStyle = '#334155'
  ctx.font = '600 34px Inter, sans-serif'
  ctx.fillText('Faça o seu teste:', LARGURA / 2, ALTURA - 120)
  ctx.fillStyle = '#0f172a'
  ctx.font = '700 38px "Space Grotesk", Inter, sans-serif'
  ctx.fillText(url.replace(/^https?:\/\//, '').replace(/\/$/, ''), LARGURA / 2, ALTURA - 70)

  return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'))
}

export function textoCompartilhamento(resultado, url) {
  const partes = resultado.ranking.map((id) => `${CANDIDATOS[id].nome} ${resultado.afinidade[id].pct}%`)
  return `Fiz o teste cego do Match Eleitoral 2026: ${partes.join(' · ')}. Descubra o seu: ${url}`
}

// Usa o compartilhar nativo do celular quando ele aceita imagens; senão, baixa a imagem.
export async function compartilharResultado(resultado) {
  const url = window.location.origin + window.location.pathname
  const texto = textoCompartilhamento(resultado, url)
  const blob = await gerarImagemResultado(resultado, url)
  const arquivo = new File([blob], 'meu-match-eleitoral-2026.png', { type: 'image/png' })
  if (navigator.canShare?.({ files: [arquivo] })) {
    try {
      await navigator.share({ files: [arquivo], text: texto, title: 'Meu Match Eleitoral 2026' })
      return 'compartilhado'
    } catch (erro) {
      if (erro?.name === 'AbortError') return 'cancelado'
    }
  }
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = arquivo.name
  link.click()
  setTimeout(() => URL.revokeObjectURL(link.href), 10_000)
  return 'baixado'
}
