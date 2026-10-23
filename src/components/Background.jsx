import { motion } from 'framer-motion'

const BLOBS = [
  { className: 'left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-cyan-500/20', x: [0, 60, 0], y: [0, 40, 0], duration: 18 },
  { className: 'right-[-15%] top-[20%] h-[32rem] w-[32rem] bg-violet-600/20', x: [0, -50, 0], y: [0, 60, 0], duration: 22 },
  { className: 'bottom-[-20%] left-[20%] h-[30rem] w-[30rem] bg-fuchsia-600/15', x: [0, 40, 0], y: [0, -50, 0], duration: 26 },
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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  )
}
