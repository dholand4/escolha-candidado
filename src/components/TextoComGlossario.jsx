import { useMemo } from 'react'
import { marcarTermos } from '../data/glossario.js'

// Renderiza o texto com os termos do glossário sublinhados. Passar o mouse mostra a explicação
// num balão; tocar ou clicar escolhe o termo, que o componente pai exibe abaixo do texto.
export default function TextoComGlossario({ texto, termoAtivo, onEscolherTermo }) {
  const partes = useMemo(() => marcarTermos(texto), [texto])
  return partes.map((parte, i) => {
    if (typeof parte === 'string') return parte
    const ativo = termoAtivo?.toLowerCase() === parte.termo.toLowerCase()
    return (
      <span key={i} className="group/termo relative inline">
        <button
          type="button"
          onClick={() => onEscolherTermo(ativo ? null : parte)}
          aria-label={`${parte.termo}: ${parte.definicao}`}
          className={`cursor-help rounded-sm underline decoration-dashed decoration-2 underline-offset-[6px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
            ativo ? 'bg-cyan-400/15 text-cyan-100 decoration-cyan-300' : 'decoration-cyan-400/60 hover:text-cyan-100'
          }`}
        >
          {parte.termo}
        </button>
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 hidden w-64 -translate-x-1/2 rounded-xl border border-white/15 bg-slate-900/95 px-3 py-2 text-left font-sans text-xs font-normal leading-relaxed text-slate-200 shadow-xl backdrop-blur-xl [@media(hover:hover)]:group-hover/termo:block"
        >
          <span className="block font-semibold text-cyan-200">{parte.termo}</span>
          {parte.definicao}
        </span>
      </span>
    )
  })
}
