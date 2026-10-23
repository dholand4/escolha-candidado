import { motion } from 'framer-motion'
import { ArrowRight, EyeOff, HardDrive, Lightbulb, ListChecks, Scale, Sparkles, Zap } from 'lucide-react'
import { PROPOSTAS } from '../data/propostas.js'
import { MODOS } from '../lib/quiz.js'

const PASSOS = [
  { icone: EyeOff, titulo: 'Teste cego', texto: 'Os autores das propostas ficam ocultos até o final. Você avalia a ideia, não o nome.' },
  { icone: Scale, titulo: 'Sempre diferente', texto: `Metade das propostas é de cada candidato, sorteadas de um banco de ${PROPOSTAS.length}.` },
  { icone: Lightbulb, titulo: 'Fácil de entender', texto: 'Palavras difíceis vêm sublinhadas com explicação, e cada proposta tem versão em linguagem simples.' },
  { icone: HardDrive, titulo: 'Privado', texto: 'Tudo fica no seu navegador. Se fechar a aba, o progresso continua salvo.' },
]

const OPCOES_MODO = [
  { ...MODOS.rapido, icone: Zap, descricao: '10 de cada candidato', tempo: '~3 min', destaque: 'from-cyan-400 to-sky-500' },
  { ...MODOS.completo, icone: ListChecks, descricao: '25 de cada candidato', tempo: '~8 min', destaque: 'from-violet-400 to-fuchsia-500' },
]

const item = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.45, ease: 'easeOut' } }),
}

export default function Home({ onIniciar }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-8 py-4">
      <motion.div custom={0} variants={item} initial="hidden" animate="show" className="text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide text-cyan-200">
          <Sparkles className="h-3.5 w-3.5" /> Eleições Presidenciais 2026 · 2º turno
        </span>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Match <span className="text-gradient">Eleitoral</span> 2026
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
          Responda às propostas reais dos planos de governo e descubra com qual candidato suas ideias combinam mais.
        </p>
      </motion.div>

      <motion.div custom={1} variants={item} initial="hidden" animate="show">
        <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Escolha o seu teste</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {OPCOES_MODO.map(({ id, titulo, total, icone: Icone, descricao, tempo, destaque }) => (
            <motion.button
              key={id}
              type="button"
              onClick={() => onIniciar(id)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="glass-strong group relative overflow-hidden rounded-3xl p-6 text-left outline-none transition-colors hover:border-white/30 focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${destaque} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
              <div className={`inline-flex rounded-xl bg-gradient-to-br ${destaque} p-2.5 text-slate-950`}>
                <Icone className="h-5 w-5" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-xl font-semibold text-white">{titulo}</span>
                <span className="text-sm text-slate-400">{total} perguntas</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">
                {descricao} · {tempo}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-200">
                Começar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <section aria-labelledby="titulo-informacoes">
        <motion.h2 id="titulo-informacoes" custom={2} variants={item} initial="hidden" animate="show" className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Informações
        </motion.h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {PASSOS.map(({ icone: Icone, titulo, texto }, i) => (
            <motion.div key={titulo} custom={i + 3} variants={item} initial="hidden" animate="show" className="glass rounded-2xl p-4">
              <Icone className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-3 font-display text-sm font-semibold text-white">{titulo}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{texto}</p>
            </motion.div>
          ))}
        </div>
        <motion.p custom={7} variants={item} initial="hidden" animate="show" className="mt-4 text-center text-xs text-slate-500">
          Escala de resposta: Discordo totalmente (−2) · Discordo (−1) · Neutro (0) · Concordo (+1) · Concordo totalmente (+2)
        </motion.p>
      </section>
    </div>
  )
}
