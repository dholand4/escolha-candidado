import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BookOpenText, Check, History, Lightbulb, RotateCcw, Square, Volume2, VolumeX, X } from 'lucide-react'
import { PROPOSTAS_POR_ID } from '../data/propostas.js'
import { MODOS, OPCOES, ROTULO_VOTO, carregarPreferenciaSimples, salvarPreferenciaSimples } from '../lib/quiz.js'
import { carregarPreferenciaSom, salvarPreferenciaSom, tocarFim, tocarTecla } from '../lib/som.js'
import CategoriaTag from './CategoriaTag.jsx'
import TextoComGlossario from './TextoComGlossario.jsx'

const variantesCard = {
  entrar: (direcao) => ({ opacity: 0, x: direcao * 40 }),
  centro: { opacity: 1, x: 0 },
  sair: (direcao) => ({ opacity: 0, x: direcao * -40 }),
}

// Teclado da urna: 1 a 5 votam; 6 a 9 e 0 ficam só de enfeite, como numa urna de verdade.
const TECLAS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const VALOR_DA_TECLA = Object.fromEntries(OPCOES.map((o, i) => [String(i + 1), o.valor]))

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
    ativo ? cor : 'border-slate-300 bg-white/80 text-slate-700 hover:bg-white'
  }`

// Conteúdo do visor da urna: a proposta, o glossário, a versão simples e o voto já dado.
function Visor({ proposta, numero, total, voto, simples, onAlternarSimples }) {
  const [termo, setTermo] = useState(null)
  const { falando, alternar: alternarLeitura } = useLeitura()
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        <span>Seu voto para</span>
        <span className="font-mono tracking-normal">
          {String(numero).padStart(2, '0')}/{total}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <CategoriaTag categoria={proposta.categoria} clara />
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Um candidato propõe:</p>
      <h2 className="mt-1.5 font-display text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        <TextoComGlossario texto={proposta.texto} termoAtivo={termo?.termo} onEscolherTermo={setTermo} claro />
      </h2>

      <AnimatePresence initial={false}>
        {termo && (
          <motion.div
            key={termo.termo}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex gap-2.5 rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm text-slate-800">
              <BookOpenText className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
              <p className="flex-1">
                <span className="font-semibold text-sky-900">{termo.termo}:</span> {termo.definicao}
              </p>
              <button
                type="button"
                onClick={() => setTermo(null)}
                aria-label="Fechar explicação"
                className="self-start rounded-full p-0.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
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
            className="overflow-hidden"
          >
            <div className="mt-3 flex gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-relaxed text-amber-950">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <p>
                <span className="font-semibold">Em outras palavras: </span>
                {proposta.simples}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onAlternarSimples}
          aria-pressed={simples}
          className={estiloAcao(simples, 'border-amber-400 bg-amber-100 text-amber-900')}
        >
          <Lightbulb className="h-3.5 w-3.5" />
          {simples ? 'Linguagem simples: ligada' : 'Explicar em linguagem simples'}
        </button>
        {VOZ_DISPONIVEL && (
          <button
            type="button"
            onClick={() => alternarLeitura(`Um candidato propõe: ${simples ? proposta.simples : proposta.texto}`)}
            aria-pressed={falando}
            className={estiloAcao(falando, 'border-violet-400 bg-violet-100 text-violet-900')}
          >
            {falando ? <Square className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            {falando ? 'Parar' : 'Ouvir'}
          </button>
        )}
      </div>

      <div className="mt-auto pt-4">
        {voto !== undefined && (
          <p className="mb-2 inline-flex items-center gap-1.5 text-xs text-slate-700">
            <Check className="h-3.5 w-3.5 text-green-700" />
            Seu voto: <strong>{ROTULO_VOTO[voto]}</strong>. Aperte CONFIRMA para manter ou outra tecla para mudar.
          </p>
        )}
        <p className="border-t border-slate-400/60 pt-2 text-[11px] leading-relaxed text-slate-600">
          Aperte uma tecla de <strong>1 a 5</strong> para votar · <strong>BRANCO</strong> é neutro ·{' '}
          <strong>CORRIGE</strong> volta à anterior · palavras sublinhadas têm explicação.
        </p>
      </div>
    </div>
  )
}

export default function Quiz({ estado, restaurado, onResponder, onVoltar, onRecomecar }) {
  const { ordem, atual, respostas, modo } = estado
  const proposta = PROPOSTAS_POR_ID[ordem[atual]]
  const respostaAtual = respostas[proposta.id]
  const respondidas = ordem.filter((id) => respostas[id] !== undefined).length
  const progresso = (respondidas / ordem.length) * 100
  const ultima = atual === ordem.length - 1

  const [direcao, setDirecao] = useState(1)
  const [simples, setSimples] = useState(carregarPreferenciaSimples)
  const [som, setSom] = useState(carregarPreferenciaSom)
  const [pressionada, setPressionada] = useState(null)
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

  // Afunda a tecla na tela por um instante, também quando ela é apertada pelo teclado do computador.
  const afundar = (tecla) => {
    setPressionada(tecla)
    setTimeout(() => setPressionada((p) => (p === tecla ? null : p)), 140)
  }

  const votar = (valor, tecla) => {
    if (bloqueado.current) return
    bloqueado.current = true
    afundar(tecla)
    if (som) (ultima ? tocarFim : tocarTecla)()
    setDirecao(1)
    onResponder(valor)
  }

  const corrigir = () => {
    if (atual === 0) return
    afundar('corrige')
    if (som) tocarTecla()
    setDirecao(-1)
    onVoltar()
  }

  const confirmar = () => {
    if (respostaAtual === undefined) return
    votar(respostaAtual, 'confirma')
  }

  const alternarSimples = () => {
    setSimples((v) => {
      salvarPreferenciaSimples(!v)
      return !v
    })
  }

  const alternarSom = () => {
    setSom((v) => {
      salvarPreferenciaSom(!v)
      if (!v) tocarTecla()
      return !v
    })
  }

  // Atalhos: 1–5 votam; B é branco (neutro); Enter confirma; seta para a esquerda ou Backspace corrigem.
  useEffect(() => {
    const aoTeclar = (ev) => {
      if (ev.metaKey || ev.ctrlKey || ev.altKey) return
      if (VALOR_DA_TECLA[ev.key] !== undefined) votar(VALOR_DA_TECLA[ev.key], ev.key)
      else if (ev.key === 'b' || ev.key === 'B') votar(0, 'branco')
      else if (ev.key === 'Enter' && ev.target === document.body) confirmar()
      else if (ev.key === 'ArrowLeft' || ev.key === 'Backspace') corrigir()
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  })

  return (
    <div className="flex flex-1 flex-col gap-4">
      <header className="flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm font-semibold text-white">Match Eleitoral 2026</p>
          <p className="text-xs text-slate-400">{MODOS[modo].titulo} · teste cego</p>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={alternarSom}
            aria-pressed={som}
            aria-label={som ? 'Desligar som das teclas' : 'Ligar som das teclas'}
            title={som ? 'Desligar som' : 'Ligar som'}
            className="rounded-full p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
          >
            {som ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={onRecomecar}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Recomeçar do zero
          </button>
        </div>
      </header>

      <div>
        <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
          <span>
            Pergunta <span className="font-semibold text-white">{atual + 1}</span> de {ordem.length}
          </span>
          <span>{Math.round(progresso)}% respondido</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-slate-300 to-white shadow-[0_0_12px_rgba(255,255,255,0.45)]"
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
            className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-slate-100"
          >
            <History className="h-4 w-4 shrink-0 text-slate-300" />
            Progresso recuperado! Você continua de onde parou.
          </motion.div>
        )}
      </AnimatePresence>

      <section aria-label="Urna" className="urna-corpo rounded-[28px] p-3 sm:p-4">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <div className="urna-visor relative min-h-[22rem] overflow-hidden rounded-2xl p-4 sm:p-5">
            <AnimatePresence mode="wait" custom={direcao} initial={false}>
              <motion.div
                key={proposta.id}
                custom={direcao}
                variants={variantesCard}
                initial="entrar"
                animate="centro"
                exit="sair"
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="h-full"
              >
                <Visor
                  proposta={proposta}
                  numero={atual + 1}
                  total={ordem.length}
                  voto={respostaAtual}
                  simples={simples}
                  onAlternarSimples={alternarSimples}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="urna-teclado flex flex-col rounded-2xl p-3 sm:p-4">
            <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Match Eleitoral</p>
            <div className="grid grid-cols-3 gap-2.5">
              {TECLAS.map((tecla) => {
                const valor = VALOR_DA_TECLA[tecla]
                const ativa = valor !== undefined
                const selecionada = ativa && respostaAtual === valor
                return (
                  <button
                    key={tecla}
                    type="button"
                    disabled={!ativa}
                    aria-hidden={!ativa}
                    tabIndex={ativa ? 0 : -1}
                    aria-label={ativa ? `${tecla}: ${ROTULO_VOTO[valor]}` : undefined}
                    aria-pressed={ativa ? selecionada : undefined}
                    data-pressionada={pressionada === tecla}
                    onClick={() => votar(valor, tecla)}
                    className={`tecla tecla-numero h-14 ${tecla === '0' ? 'col-start-2' : ''} ${
                      ativa ? 'cursor-pointer' : 'cursor-default opacity-35'
                    } ${selecionada ? 'ring-2 ring-sky-400 ring-offset-2 ring-offset-[#cfcec8]' : ''}`}
                  >
                    <span className="text-xl leading-none">{tecla}</span>
                    {ativa && (
                      <span className="mt-1 px-1 text-center font-sans text-[9px] font-medium leading-tight text-slate-300 sm:text-[10px]">
                        {ROTULO_VOTO[valor]}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => votar(0, 'branco')}
                aria-label="Branco: Neutro"
                data-pressionada={pressionada === 'branco'}
                className={`tecla tecla-branco h-14 cursor-pointer ${respostaAtual === 0 ? 'ring-2 ring-sky-400 ring-offset-2 ring-offset-[#cfcec8]' : ''}`}
              >
                <span className="text-[11px] tracking-wide">BRANCO</span>
                <span className="font-sans text-[9px] font-medium text-slate-500">neutro</span>
              </button>
              <button
                type="button"
                onClick={corrigir}
                disabled={atual === 0}
                aria-label="Corrige: voltar à pergunta anterior"
                data-pressionada={pressionada === 'corrige'}
                className="tecla tecla-corrige h-14 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="text-[11px] tracking-wide">CORRIGE</span>
                <span className="font-sans text-[9px] font-medium text-slate-900/70">voltar</span>
              </button>
              <button
                type="button"
                onClick={confirmar}
                disabled={respostaAtual === undefined}
                aria-label="Confirma: manter o voto e seguir"
                data-pressionada={pressionada === 'confirma'}
                className="tecla tecla-confirma h-16 -mt-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="text-[11px] tracking-wide">CONFIRMA</span>
                <span className="font-sans text-[9px] font-medium text-white/80">manter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <p className="hidden text-center text-xs text-slate-500 sm:block">
        No computador: teclas 1–5 votam · B branco · Enter confirma · ← corrige
      </p>
    </div>
  )
}
