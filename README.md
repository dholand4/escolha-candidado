# Match Eleitoral 2026

Teste cego de afinidade com as propostas dos planos de governo de **Lula (PT)** e **Flávio Bolsonaro (PL)** para o 2º turno das Eleições 2026.

Aplicação 100% front-end (React + Tailwind CSS + Lucide Icons + Framer Motion): sem banco de dados, sem login e sem servidor. As respostas nunca saem do navegador.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a versão estática em dist/
```

A pasta `dist/` pode ser publicada em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel…).

## Como funciona

- **Banco fixo de 100 propostas** em `src/data/propostas.js` (50 de cada candidato), escritas de forma neutra, com categoria, autor e uma versão em linguagem simples. Só entram propostas exclusivas de um candidato: ideias que aparecem nos dois planos ficaram de fora.
- **Teste Rápido (20)** sorteia 10 propostas de cada candidato; **Teste Completo (50)** sorteia 25 de cada. Cada teste traz propostas e ordem diferentes.
- **Fácil de entender:** termos técnicos vêm sublinhados (glossário em `src/data/glossario.js`) e mostram a explicação ao passar o mouse ou tocar; o botão "Explicar em linguagem simples" mostra a proposta reescrita de forma leiga.
- **Escala:** Concordo totalmente +2 · Concordo +1 · Neutro 0 · Discordo −1 · Discordo totalmente −2. Os pontos vão para o autor da proposta.
- **Afinidade (%)** = `(soma + 2·n) / (4·n)`, onde `n` é o número de propostas do candidato respondidas: 0% = discordou totalmente de tudo, 50% = neutro, 100% = concordou totalmente com tudo. O mesmo cálculo é feito por tema.
- **Salvamento automático** no `localStorage` (ordem sorteada, pergunta atual e respostas). Um F5 ou fechar a aba não perde o progresso; o botão "Recomeçar do zero" limpa tudo.
- **Atalhos:** teclas 1–5 respondem; ← ou Backspace voltam.

## Fontes

As propostas foram resumidas dos planos registrados no TSE e da cobertura jornalística sobre eles. Confira os textos integrais em
[TSE — Planos de governo (2º turno)](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno).
