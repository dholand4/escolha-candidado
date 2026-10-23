import { HeartPulse, GraduationCap, Landmark, Leaf, ShieldCheck, Users } from 'lucide-react'

// `classe` é para fundo escuro; `claro` para o visor claro da urna.
export const ESTILO_CATEGORIA = {
  Economia: { icone: Landmark, classe: 'text-amber-200 bg-amber-400/10 border-amber-300/30', claro: 'text-amber-900 bg-amber-100 border-amber-300' },
  Segurança: { icone: ShieldCheck, classe: 'text-red-200 bg-red-400/10 border-red-300/30', claro: 'text-red-900 bg-red-100 border-red-300' },
  Saúde: { icone: HeartPulse, classe: 'text-pink-200 bg-pink-400/10 border-pink-300/30', claro: 'text-pink-900 bg-pink-100 border-pink-300' },
  Educação: { icone: GraduationCap, classe: 'text-violet-200 bg-violet-400/10 border-violet-300/30', claro: 'text-violet-900 bg-violet-100 border-violet-300' },
  'Meio Ambiente': { icone: Leaf, classe: 'text-emerald-200 bg-emerald-400/10 border-emerald-300/30', claro: 'text-emerald-900 bg-emerald-100 border-emerald-300' },
  Social: { icone: Users, classe: 'text-cyan-200 bg-cyan-400/10 border-cyan-300/30', claro: 'text-cyan-900 bg-cyan-100 border-cyan-300' },
}

export default function CategoriaTag({ categoria, pequena = false, clara = false }) {
  const { icone: Icone, classe: escura, claro } = ESTILO_CATEGORIA[categoria]
  const classe = clara ? claro : escura
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
