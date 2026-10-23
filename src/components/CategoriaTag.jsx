import { HeartPulse, GraduationCap, Landmark, Leaf, ShieldCheck, Users } from 'lucide-react'

// Cores de cada tema sobre fundo claro.
export const ESTILO_CATEGORIA = {
  Economia: { icone: Landmark, claro: 'text-amber-900 bg-amber-100 border-amber-300' },
  Segurança: { icone: ShieldCheck, claro: 'text-red-900 bg-red-100 border-red-300' },
  Saúde: { icone: HeartPulse, claro: 'text-pink-900 bg-pink-100 border-pink-300' },
  Educação: { icone: GraduationCap, claro: 'text-violet-900 bg-violet-100 border-violet-300' },
  'Meio Ambiente': { icone: Leaf, claro: 'text-emerald-900 bg-emerald-100 border-emerald-300' },
  Social: { icone: Users, claro: 'text-cyan-900 bg-cyan-100 border-cyan-300' },
}

export default function CategoriaTag({ categoria, pequena = false }) {
  const { icone: Icone, claro: classe } = ESTILO_CATEGORIA[categoria]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${classe} ${
        pequena ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'
      }`}
    >
      <Icone className={pequena ? 'h-3 w-3' : 'h-3.5 w-3.5'} />
      {categoria}
    </span>
  )
}
