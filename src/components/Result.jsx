import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BookOpen,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  Link2,
  Loader2,
  PencilLine,
  RotateCcw,
  Scale,
  Share2,
  ThumbsDown,
  ThumbsUp,
  Trophy,
} from 'lucide-react'
import { CANDIDATOS, PROPOSTAS_POR_ID, TSE_PLANOS, linkPagina } from '../data/propostas.js'
import { ROTULO_VOTO, calcularResultado } from '../lib/quiz.js'
import { compartilharResultado, textoCompartilhamento } from '../lib/compartilhar.js'
import CategoriaTag from './CategoriaTag.jsx'

function Barra({ pct, candidato, atraso = 0, grossa = false }) {
  const c = CANDIDATOS[candidato]
  return (
    <div className={`overflow-hidden rounded-full bg-white/[0.06] ${grossa ? 'h-4' : 'h-2.5'}`}>
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${c.gradiente}`}
        style={{ boxShadow: `0 0 18px ${c.cor}80` }}
        initial={{ width: 0 }}
        animate={{ width: `${pct ?? 0}%` }}
        transition={{ duration: 1, delay: atraso, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

function CorVoto({ voto }) {
  if (voto === undefined) return <span className="text-slate-500">Sem resposta</span>
  const classe = voto > 0 ? 'text-emerald-300' : voto < 0 ? 'text-rose-300' : 'text-slate-300'
  return (
    <span className={classe}>
      {ROTULO_VOTO[voto]} <span className="font-mono opacity-60">({voto > 0 ? `+${voto}` : voto})</span>
    </span>
  )
}

function Compartilhar({ resultado }) {
  const [estado, setEstado] = useState(null)

  const compartilhar = async () => {
    setEstado('gerando')
    try {
      setEstado(await compartilharResultado(resultado))
    } catch {
      setEstado('erro')
    }
  }

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(textoCompartilhamento(resultado, window.location.origin + window.location.pathname))
      setEstado('copiado')
    } catch {
      setEstado('erro')
    }
  }

  const url = window.location.origin + window.location.pathname
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(textoCompartilhamento(resultado, url))}`
  const aviso = {
    baixado: 'Imagem baixada! Agora é só postar.',
    compartilhado: 'Compartilhado!',
    copiado: 'Texto copiado! Cole onde quiser.',
    erro: 'Não deu certo neste navegador. Tente baixar a imagem ou copiar o texto.',
  }[estado]

  return (
    <section className="glass-strong rounded-3xl p-5 sm:p-7">
      <h2 className="font-display text-lg font-semibold text-white">Compartilhe seu resultado</h2>
      <p className="mt-1 text-sm text-slate-400">
        A imagem mostra só as porcentagens e os temas, nunca as suas respostas.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={compartilhar}
          disabled={estado === 'gerando'}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {estado === 'gerando' ? <Loader2 className="h-4 w-4 animate-spin" /> : navigator.canShare ? <Share2 className="h-4 w-4" /> : <Download className="h-4 w-4" />}
          {navigator.canShare ? 'Compartilhar imagem' : 'Baixar imagem'}
        </button>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-emerald-200 transition-colors hover:bg-white/10"
        >
          <Share2 className="h-4 w-4" /> Enviar no WhatsApp
        </a>
        <button
          type="button"
          onClick={copiar}
          className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
        >
          {estado === 'copiado' ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />} Copiar texto
        </button>
      </div>
      {aviso && (
        <p role="status" className="mt-3 text-xs text-slate-300">
          {aviso}
        </p>
      )}
    </section>
  )
}

function ListaDestaques({ titulo, icone: Icone, classe, itens }) {
  return (
    <div>
      <p className={`flex items-center gap-1.5 text-xs font-semibold ${classe}`}>
        <Icone className="h-3.5 w-3.5" /> {titulo}
      </p>
      {itens.length ? (
        <ul className="mt-2 space-y-2">
          {itens.map(({ proposta, voto }) => (
            <li key={proposta.id} className="rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 text-sm leading-snug text-slate-200">
              {proposta.texto}
              <span className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-400">
                <CorVoto voto={voto} />
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-slate-500">Nenhuma.</p>
      )}
    </div>
  )
}

// Uma linha do gabarito: autor, voto e, ao tocar, o trecho literal do plano com link para a página do PDF.
function ItemGabarito({ proposta, numero, voto }) {
  const [aberto, setAberto] = useState(false)
  const c = CANDIDATOS[proposta.candidato]
  const trechos = [proposta.trecho].flat()
  return (
    <li className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-slate-500">#{String(numero).padStart(2, '0')}</span>
        <CategoriaTag categoria={proposta.categoria} pequena />
        <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${c.borda} ${c.fundo} ${c.texto}`}>{c.nome}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-200">{proposta.texto}</p>
      <p className="mt-1.5 text-xs text-slate-400">
        Seu voto: <CorVoto voto={voto} />
      </p>
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/10"
      >
        <FileText className="h-3.5 w-3.5 text-cyan-300" />
        {aberto ? 'Esconder trecho' : 'Ver trecho no plano'}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${aberto ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {aberto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <figure className={`mt-3 rounded-xl border-l-2 ${c.borda} bg-white/[0.03] px-4 py-3`}>
              <blockquote className="space-y-1 font-serif text-sm italic leading-relaxed text-slate-200">
                {trechos.map((t, i) => (
                  <p key={i}>
                    “{t}”{i < trechos.length - 1 && <span className="not-italic text-slate-500"> […]</span>}
                  </p>
                ))}
              </blockquote>
              <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                <span>
                  {c.plano} · {c.nome} · pág. {proposta.pagina}
                </span>
                <a
                  href={linkPagina(proposta)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-cyan-300 hover:text-cyan-200"
                >
                  Abrir o PDF na pág. {proposta.pagina} <ExternalLink className="h-3 w-3" />
                </a>
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Result({ estado, onRevisar, onRecomecar }) {
  const resultado = useMemo(() => calcularResultado(estado), [estado])
  const [gabaritoAberto, setGabaritoAberto] = useState(false)
  const { afinidade, ranking, temas, destaques, vencedor, diferenca } = resultado

  const manchete = vencedor
    ? diferenca <= 5
      ? `Empate técnico, com leve vantagem para ${CANDIDATOS[vencedor].nome}`
      : `Suas ideias combinam mais com ${CANDIDATOS[vencedor].nome}`
    : 'Empate! Você está exatamente no meio'

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between gap-3">
        <p className="font-display text-sm font-semibold text-white">Match Eleitoral 2026</p>
        <button
          type="button"
          onClick={onRecomecar}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Recomeçar do zero
        </button>
      </header>

      <section className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: vencedor ? `${CANDIDATOS[vencedor].cor}33` : '#a78bfa33' }}
        />
        <div className="relative text-center">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
            className="mx-auto inline-flex rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 p-3 text-slate-950"
          >
            {vencedor ? <Trophy className="h-6 w-6" /> : <Scale className="h-6 w-6" />}
          </motion.div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Seu resultado</p>
          <h1 className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-4xl">{manchete}</h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Afinidade de 0% (discordou totalmente de tudo) a 100% (concordou totalmente com tudo). 50% equivale a neutro.
          </p>
        </div>

        <div className="relative mt-8 space-y-6">
          {ranking.map((id, i) => {
            const c = CANDIDATOS[id]
            const a = afinidade[id]
            return (
              <div key={id}>
                <div className="mb-2 flex items-end justify-between gap-3">
                  <div>
                    <p className={`font-display text-lg font-semibold ${c.texto}`}>
                      {c.nome} <span className="text-xs font-normal text-slate-500">({c.partido})</span>
                    </p>
                    <p className="text-xs text-slate-500">{a.quantidade} propostas avaliadas</p>
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="font-display text-3xl font-bold text-white sm:text-4xl"
                  >
                    {a.pct}%
                  </motion.span>
                </div>
                <Barra pct={a.pct} candidato={id} atraso={0.2 + i * 0.15} grossa />
              </div>
            )
          })}
        </div>
      </section>

      <Compartilhar resultado={resultado} />

      <section className="glass rounded-3xl p-5 sm:p-7">
        <h2 className="font-display text-lg font-semibold text-white">Afinidade por tema</h2>
        <p className="mt-1 text-sm text-slate-400">Como suas respostas se distribuem em cada área.</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
          {ranking.map((id) => (
            <span key={id} className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: CANDIDATOS[id].cor }} />
              {CANDIDATOS[id].nome}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {temas.map(({ categoria, candidatos, lider }, i) => {
            const soUm = ranking.filter((id) => candidatos[id].quantidade > 0)
            const rotulo = lider
              ? `Mais perto de ${CANDIDATOS[lider].nome}`
              : soUm.length === 1
                ? `Só propostas de ${CANDIDATOS[soUm[0]].nome} neste teste`
                : 'Empate'
            return (
              <motion.div
                key={categoria}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <CategoriaTag categoria={categoria} pequena />
                  <span className={`text-right text-[11px] font-medium ${lider ? CANDIDATOS[lider].texto : 'text-slate-400'}`}>
                    {rotulo}
                  </span>
                </div>
                <div className="mt-3 space-y-2.5">
                  {ranking.map((id) => {
                    const { pct, quantidade } = candidatos[id]
                    return (
                      <div key={id} className="flex items-center gap-3">
                        <div className="flex-1">
                          <Barra pct={pct} candidato={id} atraso={0.3 + 0.05 * i} />
                        </div>
                        <span className="w-12 text-right font-mono text-xs text-slate-300">
                          {quantidade ? `${pct}%` : '—'}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="glass rounded-3xl p-5 sm:p-7">
        <h2 className="font-display text-lg font-semibold text-white">Onde você concorda e diverge</h2>
        <p className="mt-1 text-sm text-slate-400">As propostas de cada candidato que você mais apoiou e mais rejeitou.</p>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {ranking.map((id) => {
            const c = CANDIDATOS[id]
            return (
              <div key={id} className={`rounded-2xl border ${c.borda} bg-white/[0.02] p-4`}>
                <p className={`font-display font-semibold ${c.texto}`}>{c.nome}</p>
                <div className="mt-3 space-y-4">
                  <ListaDestaques titulo="Você mais apoiou" icone={ThumbsUp} classe="text-emerald-300" itens={destaques[id].concorda} />
                  <ListaDestaques titulo="Você mais rejeitou" icone={ThumbsDown} classe="text-rose-300" itens={destaques[id].discorda} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="glass overflow-hidden rounded-3xl">
        <button
          type="button"
          onClick={() => setGabaritoAberto((v) => !v)}
          aria-expanded={gabaritoAberto}
          className="flex w-full items-center justify-between gap-3 p-5 text-left transition-colors hover:bg-white/[0.03] sm:p-7"
        >
          <span className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-cyan-300" />
            <span>
              <span className="block font-display text-lg font-semibold text-white">Gabarito</span>
              <span className="block text-sm text-slate-400">De quem era cada proposta, como você votou e o trecho do plano</span>
            </span>
          </span>
          <motion.span animate={{ rotate: gabaritoAberto ? 180 : 0 }}>
            <ChevronDown className="h-5 w-5 text-slate-400" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {gabaritoAberto && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <ol className="space-y-2 border-t border-white/5 p-3 sm:p-5">
                {estado.ordem.map((id, i) => (
                  <ItemGabarito key={id} proposta={PROPOSTAS_POR_ID[id]} numero={i + 1} voto={estado.respostas[id]} />
                ))}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onRevisar}
          className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
        >
          <PencilLine className="h-4 w-4" /> Revisar minhas respostas
        </button>
        <button
          type="button"
          onClick={onRecomecar}
          className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
        >
          <RotateCcw className="h-4 w-4" /> Fazer o teste de novo
        </button>
      </div>

      <section className="text-xs leading-relaxed text-slate-500">
        <p className="font-medium text-slate-400">Sobre as propostas</p>
        <p className="mt-1">
          Cada proposta foi tirada dos planos de governo registrados no TSE e reescrita de forma neutra; no gabarito
          você vê o trecho original e a página. Ideias que aparecem nos dois planos ficaram de fora. O teste é um
          exercício de reflexão, não é pesquisa eleitoral e não substitui a leitura dos planos completos:
        </p>
        <ul className="mt-2 space-y-1">
          {ranking.map((id) => (
            <li key={id}>
              <a href={CANDIDATOS[id].pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-300">
                {CANDIDATOS[id].nome}: {CANDIDATOS[id].plano} (PDF) <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          ))}
          <li>
            <a href={TSE_PLANOS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-300">
              Página oficial dos planos no TSE <ExternalLink className="h-3 w-3" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
