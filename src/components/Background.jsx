import { motion } from 'framer-motion'

const BLOBS = [
  { className: 'left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-slate-300/10', x: [0, 60, 0], y: [0, 40, 0], duration: 18 },
  { className: 'right-[-15%] top-[20%] h-[32rem] w-[32rem] bg-zinc-400/10', x: [0, -50, 0], y: [0, 60, 0], duration: 22 },
  { className: 'bottom-[-20%] left-[20%] h-[30rem] w-[30rem] bg-slate-500/10', x: [0, 40, 0], y: [0, -50, 0], duration: 26 },
]

// Dígitos soltos, como teclas da urna, espalhados longe uns dos outros para nunca formarem um número de partido.
const DIGITOS = [
  { d: '1', className: 'left-[6%] top-[12%] text-7xl', duration: 14 },
  { d: '4', className: 'right-[8%] top-[8%] text-8xl', duration: 17 },
  { d: '7', className: 'left-[42%] top-[30%] text-6xl', duration: 19 },
  { d: '0', className: 'right-[14%] top-[46%] text-9xl', duration: 16 },
  { d: '5', className: 'left-[10%] top-[58%] text-8xl', duration: 21 },
  { d: '8', className: 'left-[48%] bottom-[8%] text-7xl', duration: 18 },
  { d: '6', className: 'right-[30%] bottom-[24%] text-6xl', duration: 15 },
  { d: '9', className: 'left-[24%] bottom-[30%] text-6xl', duration: 20 },
]

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.className}`}
          animate={{ x: b.x, y: b.y }}
          transition={{ duration: b.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {DIGITOS.map(({ d, className, duration }) => (
        <motion.span
          key={d}
          className={`absolute select-none font-display font-bold text-white/[0.035] ${className}`}
          animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
          transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          {d}
        </motion.span>
      ))}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
    </div>
  )
}
