import { motion } from 'framer-motion'

// Tela de encerramento no estilo da urna: o visor mostra "FIM" antes de abrir o resultado.
export default function FimUrna() {
  return (
    <div className="flex flex-1 items-center justify-center py-10">
      <div className="urna-corpo w-full max-w-md rounded-[28px] p-4">
        <div className="urna-visor flex min-h-[16rem] flex-col items-center justify-center rounded-2xl p-6 text-center">
          <motion.p
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 16 }}
            className="font-display text-8xl font-bold tracking-[0.15em] text-slate-900"
          >
            FIM
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.4, 1] }}
            transition={{ delay: 0.4, duration: 1.4 }}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
          >
            Apurando seu resultado…
          </motion.p>
        </div>
        <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Match Eleitoral</p>
      </div>
    </div>
  )
}
