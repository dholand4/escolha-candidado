# Match Eleitoral 2026

Teste cego de afinidade com as propostas dos planos de governo de **Lula (PT)** e **Flávio Bolsonaro (PL)** para o 2º turno das Eleições 2026.

Aplicação 100% front-end (React + Tailwind CSS + Lucide Icons + Framer Motion): sem banco de dados, sem login e sem servidor. As respostas nunca saem do navegador.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a versão estática em dist/
npm test         # testes do cálculo, do sorteio e dos dados
```

A pasta `dist/` pode ser publicada em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel…).

## Como funciona

- **Banco fixo de 100 propostas** em `src/data/propostas.js` (50 de cada candidato), tiradas dos PDFs dos planos de governo registrados no TSE (`public/planos/`). Cada proposta tem texto neutro, categoria, autor, versão em linguagem simples, página e trecho literal do plano. Só entram propostas exclusivas de um candidato: ideias que aparecem nos dois planos ficaram de fora.
- **Teste Rápido (20)** sorteia 10 propostas de cada candidato; **Teste Completo (50)** sorteia 25 de cada. Cada teste traz propostas e ordem diferentes.
- **Fácil de entender:** termos técnicos vêm sublinhados (glossário em `src/data/glossario.js`) e mostram a explicação ao passar o mouse ou tocar; o botão "Explicar em linguagem simples" mostra a proposta reescrita de forma leiga.
- **Ouvir:** o botão "Ouvir" lê a proposta em voz alta com a voz em português do próprio navegador.
- **Escala:** Concordo totalmente +2 · Concordo +1 · Neutro 0 · Discordo −1 · Discordo totalmente −2. Os pontos vão para o autor da proposta.
- **Afinidade (%)** = `(soma + 2·n) / (4·n)`, onde `n` é o número de propostas do candidato respondidas: 0% = discordou totalmente de tudo, 50% = neutro, 100% = concordou totalmente com tudo. O mesmo cálculo é feito por tema.
- **Salvamento automático** no `localStorage` (ordem sorteada, pergunta atual e respostas). Um F5 ou fechar a aba não perde o progresso; o botão "Recomeçar do zero" limpa tudo.
- **Resultado:** candidatos ordenados por afinidade, afinidade por tema, as propostas de cada um que a pessoa mais apoiou e mais rejeitou, e gabarito em que cada proposta mostra o trecho original do plano, a página e um link que abre o PDF naquela página.
- **Compartilhar:** gera no navegador uma imagem com as porcentagens (nunca as respostas) e abre o compartilhar do celular; também há envio pelo WhatsApp e cópia do texto.
- **Prévia do link:** metatags Open Graph com `public/og.png`, apontando para `https://escolha-candidado.vercel.app`. Se o domínio mudar, atualize as URLs em `index.html`.
- **Offline:** `public/sw.js` guarda o app depois da primeira visita, e ele pode ser instalado na tela inicial do celular.
- **Visitas:** Vercel Web Analytics, sem cookies, conta visitas e o evento `teste_concluido` (só o modo do teste). Precisa ser ativado no painel da Vercel em *Analytics*; eventos personalizados exigem plano pago.
- **Estilo urna:** tema claro, com teclas de 1 a 5 inspiradas na urna eletrônica e um botão para voltar à pergunta anterior. Cada tecla faz um bipe e o fim do teste toca uma sequência que lembra o encerramento da votação, com a tela "FIM". Os sons são gerados no navegador (`src/lib/som.js`) e podem ser desligados no ícone de alto-falante.
- **Neutralidade visual:** paleta em cinza e prata, sem cores associadas a candidatos; os números decorativos do fundo não formam números de partido.
- **Atalhos:** teclas 1–5 votam; ← ou Backspace voltam.

## Fontes

As propostas foram tiradas dos planos registrados no TSE, cujos PDFs estão em `public/planos/`. Página oficial:
[TSE — Planos de governo (2º turno)](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno).
