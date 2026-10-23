import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { track } from '@vercel/analytics'
import Background from './components/Background.jsx'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import Result from './components/Result.jsx'
import { carregarEstado, novoEstado, salvarEstado } from './lib/quiz.js'

export default function App() {
  const [estado, setEstado] = useState(carregarEstado)
  const [restaurado] = useState(() => estado !== null && !estado.concluido)

  // Cada alteração (ordem sorteada, pergunta atual, respostas) é gravada no localStorage na hora.
  useEffect(() => salvarEstado(estado), [estado])

  const iniciar = useCallback((modo) => setEstado(novoEstado(modo)), [])
  const recomecar = useCallback(() => {
    if (window.confirm('Apagar o progresso salvo e recomeçar do zero?')) setEstado(null)
  }, [])

  const responder = useCallback((valor) => {
    setEstado((e) => {
      const id = e.ordem[e.atual]
      const respostas = { ...e.respostas, [id]: valor }
      const ultima = e.atual === e.ordem.length - 1
      return { ...e, respostas, atual: ultima ? e.atual : e.atual + 1, concluido: ultima }
    })
  }, [])

  const alternarImportante = useCallback(() => {
    setEstado((e) => {
      const id = e.ordem[e.atual]
      const importantes = { ...e.importantes }
      if (importantes[id]) delete importantes[id]
      else importantes[id] = true
      return { ...e, importantes }
    })
  }, [])

  const voltar = useCallback(() => {
    setEstado((e) => (e.atual > 0 ? { ...e, atual: e.atual - 1 } : e))
  }, [])

  const revisar = useCallback(() => setEstado((e) => ({ ...e, concluido: false })), [])

  const tela = !estado ? 'home' : estado.concluido ? 'resultado' : 'quiz'

  // Conta, de forma anônima, quantos testes foram concluídos. Só o modo é enviado, nunca as respostas.
  // Dispara apenas na passagem do quiz para o resultado, não ao recarregar a tela de resultado.
  const telaAnterior = useRef(tela)
  useEffect(() => {
    if (telaAnterior.current === 'quiz' && tela === 'resultado') track('teste_concluido', { modo: estado.modo })
    telaAnterior.current = tela
  }, [tela, estado])

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Background />
      <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 py-6 sm:px-6 sm:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tela}
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-1 flex-col"
          >
            {tela === 'home' && <Home onIniciar={iniciar} />}
            {tela === 'quiz' && (
              <Quiz
                estado={estado}
                restaurado={restaurado}
                onResponder={responder}
                onAlternarImportante={alternarImportante}
                onVoltar={voltar}
                onRecomecar={recomecar}
              />
            )}
            {tela === 'resultado' && <Result estado={estado} onRevisar={revisar} onRecomecar={recomecar} />}
          </motion.div>
        </AnimatePresence>
        <footer className="mt-10 text-center text-[11px] leading-relaxed text-slate-500">
          Projeto independente e apartidário. Propostas resumidas dos planos de governo registrados no TSE.
          <br />
          Tudo roda no seu navegador: nenhuma resposta é enviada para servidores. Contamos só visitas anônimas, sem cookies.
        </footer>
        <Analytics />
      </main>
    </div>
  )
}
