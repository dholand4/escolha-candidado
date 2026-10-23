import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, ChevronDown, ExternalLink, PencilLine, RotateCcw, Scale, Trophy } from 'lucide-react'
import { CANDIDATOS, FONTES, PROPOSTAS_POR_ID } from '../data/propostas.js'
import { ROTULO_VOTO, calcularResultado } from '../lib/quiz.js'
import CategoriaTag from './CategoriaTag.jsx'

const IDS = Object.keys(CANDIDATOS)

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

export default function Result({ estado, onRevisar, onRecomecar }) {
  const resultado = useMemo(() => calcularResultado(estado), [estado])
  const [gabaritoAberto, setGabaritoAberto] = useState(false)
  const { afinidade, temas, vencedor, diferenca } = resultado

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
          {IDS.map((id, i) => {
            const c = CANDIDATOS[id]
            const a = afinidade[id]
            return (
              <div key={id}>
                <div className="mb-2 flex items-end justify-between gap-3">
                  <div>
                    <p className={`font-display text-lg font-semibold ${c.texto}`}>
                      {c.nome} <span className="text-xs font-normal text-slate-500">({c.partido})</span>
                    </p>
                    <p className="text-xs text-slate-500">
                      {a.quantidade} propostas avaliadas · saldo {a.soma > 0 ? `+${a.soma}` : a.soma} pts
                    </p>
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

      <section className="glass rounded-3xl p-5 sm:p-7">
        <h2 className="font-display text-lg font-semibold text-white">Afinidade por tema</h2>
        <p className="mt-1 text-sm text-slate-400">Como suas respostas se distribuem em cada área.</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
          {IDS.map((id) => (
            <span key={id} className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: CANDIDATOS[id].cor }} />
              {CANDIDATOS[id].nome}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {temas.map(({ categoria, candidatos }, i) => {
            const pcts = IDS.map((id) => candidatos[id].pct ?? -1)
            const lider = pcts[0] === pcts[1] ? null : IDS[pcts[0] > pcts[1] ? 0 : 1]
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
                  <span className={`text-[11px] font-medium ${lider ? CANDIDATOS[lider].texto : 'text-slate-400'}`}>
                    {lider ? `Mais perto de ${CANDIDATOS[lider].nome}` : 'Empate'}
                  </span>
                </div>
                <div className="mt-3 space-y-2.5">
                  {IDS.map((id) => {
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
              <span className="block text-sm text-slate-400">Veja de quem era cada proposta e como você votou</span>
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
                {estado.ordem.map((id, i) => {
                  const p = PROPOSTAS_POR_ID[id]
                  const c = CANDIDATOS[p.candidato]
                  return (
                    <li key={id} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-slate-500">#{String(i + 1).padStart(2, '0')}</span>
                        <CategoriaTag categoria={p.categoria} pequena />
                        <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${c.borda} ${c.fundo} ${c.texto}`}>
                          {c.nome}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200">{p.texto}</p>
                      <p className="mt-1.5 text-xs text-slate-400">
                        Seu voto: <CorVoto voto={estado.respostas[id]} />
                      </p>
                    </li>
                  )
                })}
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
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-90"
        >
          <RotateCcw className="h-4 w-4" /> Fazer o teste de novo
        </button>
      </div>

      <section className="text-xs leading-relaxed text-slate-500">
        <p className="font-medium text-slate-400">Sobre as propostas</p>
        <p className="mt-1">
          Os textos resumem, de forma neutra, propostas dos planos de governo registrados no TSE (
          {IDS.map((id, i) => (
            <span key={id}>
              {i > 0 && '; '}
              {CANDIDATOS[id].nome}: {CANDIDATOS[id].plano}
            </span>
          ))}
          ) e de declarações públicas dos candidatos. O teste é um exercício de reflexão e não substitui a leitura dos planos completos.
        </p>
        <ul className="mt-2 space-y-1">
          {FONTES.map((f) => (
            <li key={f.url}>
              <a href={f.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-300">
                {f.nome} <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
