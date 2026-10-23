import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  BookOpenText,
  Check,
  CheckCheck,
  History,
  Lightbulb,
  Minus,
  Volume2,
  RotateCcw,
  Square,
  Star,
  ThumbsDown,
  ThumbsUp,
  X,
} from 'lucide-react'
import { PROPOSTAS_POR_ID } from '../data/propostas.js'
import { MODOS, OPCOES, carregarPreferenciaSimples, salvarPreferenciaSimples } from '../lib/quiz.js'
import CategoriaTag from './CategoriaTag.jsx'
import TextoComGlossario from './TextoComGlossario.jsx'

const VISUAL_OPCAO = {
  [-2]: { icone: X, classe: 'border-rose-400/40 bg-rose-500/15 text-rose-100 hover:bg-rose-500/30', ativo: 'ring-rose-300 bg-rose-500/40' },
  [-1]: { icone: ThumbsDown, classe: 'border-rose-300/25 bg-rose-400/[0.07] text-rose-100 hover:bg-rose-400/20', ativo: 'ring-rose-200 bg-rose-400/30' },
  0: { icone: Minus, classe: 'border-slate-300/20 bg-white/[0.05] text-slate-100 hover:bg-white/15', ativo: 'ring-slate-200 bg-white/20' },
  1: { icone: ThumbsUp, classe: 'border-emerald-300/25 bg-emerald-400/[0.07] text-emerald-100 hover:bg-emerald-400/20', ativo: 'ring-emerald-200 bg-emerald-400/30' },
  2: { icone: CheckCheck, classe: 'border-emerald-400/40 bg-emerald-500/15 text-emerald-100 hover:bg-emerald-500/30', ativo: 'ring-emerald-300 bg-emerald-500/40' },
}

const variantesCard = {
  entrar: (direcao) => ({ opacity: 0, x: direcao * 60, rotate: direcao * 2, scale: 0.97 }),
  centro: { opacity: 1, x: 0, rotate: 0, scale: 1 },
  sair: (direcao) => ({ opacity: 0, x: direcao * -60, rotate: direcao * -2, scale: 0.97 }),
}

const VOZ_DISPONIVEL = typeof window !== 'undefined' && 'speechSynthesis' in window

// Lê o texto em voz alta com a voz em português do próprio navegador (nada é enviado a servidores).
function useLeitura() {
  const [falando, setFalando] = useState(false)
  useEffect(() => () => VOZ_DISPONIVEL && window.speechSynthesis.cancel(), [])
  const alternar = (texto) => {
    const sintese = window.speechSynthesis
    if (falando) {
      sintese.cancel()
      setFalando(false)
      return
    }
    sintese.cancel()
    const fala = new SpeechSynthesisUtterance(texto)
    fala.lang = 'pt-BR'
    fala.rate = 0.95
    const voz = sintese.getVoices().find((v) => v.lang?.toLowerCase().startsWith('pt'))
    if (voz) fala.voice = voz
    fala.onend = fala.onerror = () => setFalando(false)
    setFalando(true)
    sintese.speak(fala)
  }
  return { falando, alternar }
}

const estiloAcao = (ativo, cor) =>
  `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
    ativo ? cor : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
  }`

function CartaoProposta({ proposta, numero, respondida, simples, onAlternarSimples, importante, onAlternarImportante }) {
  const [termo, setTermo] = useState(null)
  const { falando, alternar: alternarLeitura } = useLeitura()
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative flex items-center justify-between gap-2">
        <CategoriaTag categoria={proposta.categoria} />
        <span className="font-mono text-xs text-slate-500">#{String(numero).padStart(2, '0')}</span>
      </div>
      <p className="relative mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Um candidato propõe:</p>
      <h2 className="relative mt-3 min-h-[6.5rem] font-display text-xl font-semibold leading-snug text-white sm:min-h-[7.5rem] sm:text-3xl sm:leading-snug">
        <TextoComGlossario texto={proposta.texto} termoAtivo={termo?.termo} onEscolherTermo={setTermo} />
      </h2>

      <AnimatePresence initial={false}>
        {termo && (
          <motion.div
            key={termo.termo}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative overflow-hidden"
          >
            <div className="mt-4 flex gap-2.5 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.07] p-3 text-sm text-slate-200">
              <BookOpenText className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <p className="flex-1">
                <span className="font-semibold text-cyan-200">{termo.termo}:</span> {termo.definicao}
              </p>
              <button
                type="button"
                onClick={() => setTermo(null)}
                aria-label="Fechar explicação"
                className="self-start rounded-full p-0.5 text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {simples && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative overflow-hidden"
          >
            <div className="mt-4 flex gap-2.5 rounded-2xl border border-amber-300/20 bg-amber-400/[0.07] p-3 text-sm leading-relaxed text-amber-50 sm:text-base">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-300 sm:mt-1" />
              <p>
                <span className="font-semibold text-amber-200">Em outras palavras: </span>
                {proposta.simples}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mt-5 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onAlternarSimples}
          aria-pressed={simples}
          className={estiloAcao(simples, 'border-amber-300/40 bg-amber-400/15 text-amber-100')}
        >
          <Lightbulb className="h-3.5 w-3.5" />
          {simples ? 'Linguagem simples: ligada' : 'Explicar em linguagem simples'}
        </button>
        {VOZ_DISPONIVEL && (
          <button
            type="button"
            onClick={() => alternarLeitura(`Um candidato propõe: ${simples ? proposta.simples : proposta.texto}`)}
            aria-pressed={falando}
            className={estiloAcao(falando, 'border-violet-300/40 bg-violet-400/15 text-violet-100')}
          >
            {falando ? <Square className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            {falando ? 'Parar' : 'Ouvir'}
          </button>
        )}
        <button
          type="button"
          onClick={onAlternarImportante}
          aria-pressed={importante}
          title="Propostas importantes valem o dobro no resultado"
          className={estiloAcao(importante, 'border-yellow-300/40 bg-yellow-400/15 text-yellow-100')}
        >
          <Star className={`h-3.5 w-3.5 ${importante ? 'fill-yellow-300 text-yellow-300' : ''}`} />
          {importante ? 'Importante (vale o dobro)' : 'Importante para mim'}
        </button>
      </div>
      <p className="relative mt-3 text-[11px] text-slate-500">
        Palavras sublinhadas têm explicação: toque nelas. Marque como importante os temas que mais pesam no seu voto.
      </p>

      {respondida && (
        <p className="relative mt-3 inline-flex items-center gap-1.5 text-xs text-slate-400">
          <Check className="h-3.5 w-3.5 text-cyan-300" /> Você já respondeu esta. Escolha de novo para alterar.
        </p>
      )}
    </>
  )
}

export default function Quiz({ estado, restaurado, onResponder, onAlternarImportante, onVoltar, onRecomecar }) {
  const { ordem, atual, respostas, modo } = estado
  const proposta = PROPOSTAS_POR_ID[ordem[atual]]
  const respostaAtual = respostas[proposta.id]
  const respondidas = ordem.filter((id) => respostas[id] !== undefined).length
  const progresso = (respondidas / ordem.length) * 100

  const [direcao, setDirecao] = useState(1)
  const [simples, setSimples] = useState(carregarPreferenciaSimples)
  const [avisoRestaurado, setAvisoRestaurado] = useState(restaurado && (atual > 0 || respondidas > 0))
  const bloqueado = useRef(false)

  useEffect(() => {
    if (!avisoRestaurado) return
    const t = setTimeout(() => setAvisoRestaurado(false), 4000)
    return () => clearTimeout(t)
  }, [avisoRestaurado])

  // Evita cliques duplos pulando duas perguntas durante a animação de troca.
  useEffect(() => {
    const t = setTimeout(() => (bloqueado.current = false), 250)
    return () => clearTimeout(t)
  }, [atual])

  const responder = (valor) => {
    if (bloqueado.current) return
    bloqueado.current = true
    setDirecao(1)
    onResponder(valor)
  }

  // A escolha fica salva: quem liga a linguagem simples continua vendo-a nas próximas propostas.
  const alternarSimples = () => {
    setSimples((v) => {
      salvarPreferenciaSimples(!v)
      return !v
    })
  }

  const voltar = () => {
    if (atual === 0) return
    setDirecao(-1)
    onVoltar()
  }

  // Atalhos: teclas 1–5 respondem; I marca como importante; seta para a esquerda ou Backspace voltam.
  useEffect(() => {
    const aoTeclar = (ev) => {
      if (ev.metaKey || ev.ctrlKey || ev.altKey) return
      const indice = ['1', '2', '3', '4', '5'].indexOf(ev.key)
      if (indice >= 0) responder(OPCOES[indice].valor)
      else if (ev.key === 'i' || ev.key === 'I') onAlternarImportante()
      else if (ev.key === 'ArrowLeft' || ev.key === 'Backspace') voltar()
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  })

  return (
    <div className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm font-semibold text-white">Match Eleitoral 2026</p>
          <p className="text-xs text-slate-400">{MODOS[modo].titulo} · teste cego</p>
        </div>
        <button
          type="button"
          onClick={onRecomecar}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Recomeçar do zero
        </button>
      </header>

      <div>
        <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
          <span>
            Pergunta <span className="font-semibold text-white">{atual + 1}</span> de {ordem.length}
          </span>
          <span>{Math.round(progresso)}% respondido</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 shadow-[0_0_16px_rgba(34,211,238,0.6)]"
            initial={false}
            animate={{ width: `${progresso}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      <AnimatePresence>
        {avisoRestaurado && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-cyan-100"
          >
            <History className="h-4 w-4 shrink-0 text-cyan-300" />
            Progresso recuperado! Você continua de onde parou.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex flex-1 items-center">
        <AnimatePresence mode="wait" custom={direcao} initial={false}>
          <motion.article
            key={proposta.id}
            custom={direcao}
            variants={variantesCard}
            initial="entrar"
            animate="centro"
            exit="sair"
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="glass-strong relative w-full rounded-3xl p-6 sm:p-10"
          >
            <CartaoProposta
              proposta={proposta}
              numero={atual + 1}
              respondida={respostaAtual !== undefined}
              simples={simples}
              onAlternarSimples={alternarSimples}
              importante={Boolean(estado.importantes?.[proposta.id])}
              onAlternarImportante={onAlternarImportante}
            />
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-3">
        {OPCOES.map(({ valor, rotulo }, i) => {
          const { icone: Icone, classe, ativo } = VISUAL_OPCAO[valor]
          const selecionado = respostaAtual === valor
          return (
            <motion.button
              key={valor}
              type="button"
              onClick={() => responder(valor)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              aria-pressed={selecionado}
              aria-label={rotulo}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-sm font-semibold backdrop-blur-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:flex-col sm:justify-center sm:gap-2 sm:px-2 sm:py-5 sm:text-center ${classe} ${
                selecionado ? `ring-2 ${ativo}` : ''
              }`}
            >
              <Icone className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              <span className="flex-1 text-left sm:flex-none sm:text-center sm:leading-tight">{rotulo}</span>
              <span className="hidden font-mono text-[10px] font-normal opacity-50 sm:inline">{i + 1}</span>
              <span className="font-mono text-xs font-normal opacity-60 sm:hidden">
                {valor > 0 ? `+${valor}` : valor}
              </span>
            </motion.button>
          )
        })}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={voltar}
          disabled={atual === 0}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" /> Pergunta anterior
        </button>
        <span className="hidden text-xs text-slate-500 sm:inline">Atalhos: 1–5 respondem · I importante · ← volta</span>
      </div>
    </div>
  )
}
