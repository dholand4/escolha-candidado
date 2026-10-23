// Banco fixo de propostas, resumidas de forma neutra a partir dos planos de governo
// registrados no TSE para as Eleições 2026 e da cobertura jornalística sobre eles.
// Só entram propostas que aparecem no plano de um candidato e não no do outro,
// para que concordar com uma ideia nunca some pontos ao candidato "errado".
// O texto não revela o autor; o campo `candidato` só aparece no gabarito.
// `simples` é a mesma proposta reescrita em linguagem do dia a dia.
// `fonte` aponta para a reportagem de referência em FONTES (quando houver uma específica).

export const CANDIDATOS = {
  lula: {
    id: 'lula',
    nome: 'Lula',
    nomeCompleto: 'Luiz Inácio Lula da Silva',
    partido: 'PT',
    plano: 'Programa de Governo 2026 (84 páginas, 13 diretrizes)',
    cor: '#f43f5e',
    corFinal: '#fb923c',
    gradiente: 'from-rose-500 to-orange-400',
    texto: 'text-rose-300',
    borda: 'border-rose-400/40',
    fundo: 'bg-rose-500/15',
  },
  flavio: {
    id: 'flavio',
    nome: 'Flávio Bolsonaro',
    nomeCompleto: 'Flávio Bolsonaro',
    partido: 'PL',
    plano: '"Para o Brasil vencer o atraso" (76 páginas, 9 eixos)',
    cor: '#38bdf8',
    corFinal: '#6366f1',
    gradiente: 'from-sky-400 to-indigo-500',
    texto: 'text-sky-300',
    borda: 'border-sky-400/40',
    fundo: 'bg-sky-500/15',
  },
}

export const CATEGORIAS = ['Economia', 'Segurança', 'Saúde', 'Educação', 'Meio Ambiente', 'Social']

export const PROPOSTAS = [
  // ================================================================ Lula (50)
  // ---- Economia
  {
    id: 1, candidato: 'lula', categoria: 'Economia', fonte: 'gazeta-lula-eco',
    texto: 'Aprofundar a tributação sobre as pessoas de renda mais alta, em nome da justiça tributária.',
    simples: 'Quem ganha muito passaria a pagar mais imposto, para dividir melhor o peso dos impostos.',
  },
  {
    id: 2, candidato: 'lula', categoria: 'Economia', fonte: 'agbr-lula-min',
    texto: 'Manter a política de valorização do salário mínimo, com reajustes anuais acima da inflação.',
    simples: 'Todo ano o salário mínimo sobe mais do que os preços, para que dê para comprar um pouco mais com ele.',
  },
  {
    id: 3, candidato: 'lula', categoria: 'Economia', fonte: 'forbes-lula',
    texto: 'Promover a reindustrialização com o Estado como indutor e financiamento do BNDES, priorizando inteligência artificial e minerais críticos.',
    simples: 'O governo empresta dinheiro e incentiva empresas para o Brasil voltar a ter mais fábricas, principalmente de tecnologia e de minérios importantes.',
  },
  {
    id: 4, candidato: 'lula', categoria: 'Economia', fonte: 'cf-lula',
    texto: 'Fazer a Petrobras voltar a atuar na distribuição de combustíveis.',
    simples: 'A Petrobras volta a ser dona de uma rede que leva gasolina e diesel até os postos, e não só a produzir o combustível.',
  },
  {
    id: 5, candidato: 'lula', categoria: 'Economia', fonte: 'gazeta-lula-eco',
    texto: 'Manter o arcabouço fiscal atual, controlando o ritmo de crescimento dos gastos públicos sem uma agenda de cortes profundos.',
    simples: 'Manter a regra de hoje que limita quanto os gastos do governo podem crescer por ano, sem cortar muitas despesas.',
  },
  {
    id: 6, candidato: 'lula', categoria: 'Economia', fonte: 'pg2026-lula',
    texto: 'Revisar os benefícios e isenções fiscais concedidos a empresas.',
    simples: 'Rever os descontos de impostos que o governo dá a empresas, cortando os que não trazem retorno ao país.',
  },
  {
    id: 7, candidato: 'lula', categoria: 'Economia', fonte: 'infomoney-lula',
    texto: 'Manter o programa federal de obras públicas de infraestrutura, com o investimento público como motor do crescimento.',
    simples: 'O próprio governo continua pagando grandes obras, como estradas, saneamento e creches, para fazer a economia crescer.',
  },
  {
    id: 8, candidato: 'lula', categoria: 'Economia', fonte: 'olhar-digital',
    texto: 'Exigir dos novos data centers contrapartidas como energia renovável, salvaguardas socioambientais, conteúdo local e capacidade computacional reservada ao país.',
    simples: 'Empresas que montarem grandes centros de computadores no Brasil terão de usar energia limpa, cuidar do meio ambiente e deixar parte da estrutura para uso do país.',
  },
  {
    id: 9, candidato: 'lula', categoria: 'Economia', fonte: 'olhar-digital',
    texto: 'Regulamentar o trabalho por aplicativos, como motoristas e entregadores.',
    simples: 'Criar regras de lei para o trabalho de motoristas e entregadores de aplicativo.',
  },
  {
    id: 10, candidato: 'lula', categoria: 'Economia', fonte: 'olhar-digital',
    texto: 'Desenvolver modelos de inteligência artificial em língua portuguesa com investimento público.',
    simples: 'O governo investe para o Brasil ter sua própria inteligência artificial, que entenda bem o português.',
  },
  {
    id: 11, candidato: 'lula', categoria: 'Economia', fonte: 'qconcursos',
    texto: 'Valorizar as carreiras dos servidores públicos federais.',
    simples: 'Melhorar salários e condições de trabalho de quem trabalha no governo federal.',
  },
  // ---- Social
  {
    id: 12, candidato: 'lula', categoria: 'Social', fonte: 'voz-comunidades',
    texto: 'Investir de forma contínua na urbanização de favelas e periferias, com requalificação de espaços públicos.',
    simples: 'Levar obras de asfalto, esgoto, iluminação, praças e contenção de encostas para favelas e bairros de periferia.',
  },
  {
    id: 13, candidato: 'lula', categoria: 'Social', fonte: 'mixvale',
    texto: 'Ampliar o programa federal de habitação popular para todas as faixas de renda, mantendo a prioridade às famílias mais pobres.',
    simples: 'O programa de casa própria do governo passaria a atender também a classe média, sem deixar de priorizar os mais pobres.',
  },
  {
    id: 14, candidato: 'lula', categoria: 'Social',
    texto: 'Criar uma Política Nacional de Envelhecimento Ativo e expandir o atendimento domiciliar a idosos.',
    simples: 'Ações para os idosos viverem com mais saúde e autonomia, e equipes de saúde indo atendê-los em casa.',
  },
  {
    id: 15, candidato: 'lula', categoria: 'Social', fonte: 'qconcursos',
    texto: 'Manter as cotas raciais e sociais nos concursos públicos federais.',
    simples: 'Continuar reservando parte das vagas de concursos federais para pessoas negras e de baixa renda.',
  },
  {
    id: 16, candidato: 'lula', categoria: 'Social', fonte: 'radiosampaio',
    texto: 'Reforçar a aplicação da Lei de Igualdade Salarial entre homens e mulheres.',
    simples: 'Fiscalizar mais as empresas para que mulheres ganhem o mesmo que homens na mesma função.',
  },
  {
    id: 17, candidato: 'lula', categoria: 'Social', fonte: 'sbt-saude-pobreza',
    texto: 'Ampliar o principal programa de transferência de renda, com valores extras para famílias com crianças e adolescentes.',
    simples: 'Aumentar a ajuda em dinheiro que o governo dá às famílias pobres, com um valor a mais para quem tem filhos.',
  },
  {
    id: 18, candidato: 'lula', categoria: 'Social', fonte: 'sbt-saude-pobreza',
    texto: 'Manter o botijão de gás de cozinha gratuito para famílias de baixa renda.',
    simples: 'Famílias pobres continuam recebendo o gás de cozinha de graça.',
  },
  {
    id: 19, candidato: 'lula', categoria: 'Social', fonte: 'folha-valinhos',
    texto: 'Garantir que os serviços públicos levem em conta a orientação sexual e a identidade de gênero, e reprimir crimes de ódio contra pessoas LGBTQIA+.',
    simples: 'Atendimento público preparado para pessoas LGBTQIA+ e punição para quem as ataca por preconceito.',
  },
  {
    id: 20, candidato: 'lula', categoria: 'Social', fonte: 'folha-valinhos',
    texto: 'Avançar na demarcação de terras indígenas e quilombolas e na desintrusão de invasores.',
    simples: 'Reconhecer oficialmente as terras de indígenas e quilombolas e retirar delas quem entrou ilegalmente.',
  },
  {
    id: 21, candidato: 'lula', categoria: 'Social', fonte: 'olhar-digital',
    texto: 'Criar um Conselho Nacional pela Soberania Digital e regular as grandes plataformas digitais.',
    simples: 'Criar regras para redes sociais e grandes empresas de internet, para que o Brasil tenha mais controle sobre elas.',
  },
  {
    id: 22, candidato: 'lula', categoria: 'Social', fonte: 'olhar-digital',
    texto: 'Criar um Centro Nacional de Transparência Algorítmica, com rastreabilidade de conteúdos gerados por inteligência artificial.',
    simples: 'Um órgão para explicar como funcionam os algoritmos das plataformas e identificar vídeos, fotos e textos feitos por inteligência artificial.',
  },
  // ---- Saúde
  {
    id: 23, candidato: 'lula', categoria: 'Saúde', fonte: 'cf-lula',
    texto: 'Incluir exames laboratoriais gratuitos no programa federal de farmácias que hoje oferece remédios de graça.',
    simples: 'Além de remédio grátis, as farmácias do programa do governo também fariam exames de sangue e outros de graça.',
  },
  {
    id: 24, candidato: 'lula', categoria: 'Saúde', fonte: 'gazeta-parana-saude',
    texto: 'Ampliar o programa federal que contrata médicos para regiões carentes e do interior.',
    simples: 'Mandar mais médicos pagos pelo governo federal para cidades pequenas e bairros pobres.',
  },
  {
    id: 25, candidato: 'lula', categoria: 'Saúde',
    texto: 'Fortalecer a rede pública de atendimento em saúde mental.',
    simples: 'Mais serviços públicos para quem sofre com depressão, ansiedade, vício e outros problemas emocionais.',
  },
  {
    id: 26, candidato: 'lula', categoria: 'Saúde', fonte: 'folha-valinhos',
    texto: 'Adotar um modelo diferenciado de atendimento de saúde para os povos indígenas.',
    simples: 'Atendimento de saúde adaptado à cultura e à realidade das aldeias.',
  },
  {
    id: 27, candidato: 'lula', categoria: 'Saúde', fonte: 'gazeta-parana-saude',
    texto: 'Manter os pisos constitucionais de gastos com saúde e educação.',
    simples: 'Continuar obrigando o governo a gastar um valor mínimo, definido na Constituição, com saúde e escola.',
  },
  // ---- Educação
  {
    id: 28, candidato: 'lula', categoria: 'Educação', fonte: 'sbt-edu-lula',
    texto: 'Estender a todos os estudantes do ensino médio público a poupança paga para que permaneçam na escola.',
    simples: 'Todo aluno do ensino médio de escola pública ganharia um dinheiro guardado para não largar os estudos.',
  },
  {
    id: 29, candidato: 'lula', categoria: 'Educação', fonte: 'sbt-edu-lula',
    texto: 'Construir mais creches e pré-escolas públicas com recursos federais de obras.',
    simples: 'O governo federal paga a construção de mais creches públicas.',
  },
  {
    id: 30, candidato: 'lula', categoria: 'Educação', fonte: 'sbt-edu-lula',
    texto: 'Criar 111 novos campi de institutos federais, priorizando o interior e as periferias.',
    simples: 'Abrir 111 novas escolas federais de ensino técnico e superior, principalmente no interior e em bairros afastados.',
  },
  {
    id: 31, candidato: 'lula', categoria: 'Educação', fonte: 'adufrj',
    texto: 'Expandir e interiorizar as universidades federais, com novas vagas em áreas estratégicas e mais assistência estudantil.',
    simples: 'Mais vagas em universidades federais, inclusive em cidades do interior, e mais ajuda para o aluno se manter estudando.',
  },
  {
    id: 32, candidato: 'lula', categoria: 'Educação', fonte: 'sbt-edu-lula',
    texto: 'Retomar o programa federal de bolsas de intercâmbio para estudantes universitários no exterior.',
    simples: 'Voltar a pagar bolsas para universitários estudarem um tempo fora do país.',
  },
  {
    id: 33, candidato: 'lula', categoria: 'Educação', fonte: 'sbt-edu-lula',
    texto: 'Universalizar a conexão de internet adequada em todas as escolas públicas.',
    simples: 'Internet boa em todas as escolas públicas.',
  },
  {
    id: 34, candidato: 'lula', categoria: 'Educação', fonte: 'sbt-edu-lula',
    texto: 'Pagar bolsas para atrair jovens aos cursos de licenciatura e à carreira de professor.',
    simples: 'Pagar bolsa a quem estuda para ser professor, para ter mais gente na profissão.',
  },
  {
    id: 35, candidato: 'lula', categoria: 'Educação', fonte: 'folha-valinhos',
    texto: 'Implantar plenamente uma Universidade Indígena.',
    simples: 'Criar de vez uma universidade voltada para os povos indígenas.',
  },
  // ---- Segurança
  {
    id: 36, candidato: 'lula', categoria: 'Segurança', fonte: 'agbr-seg',
    texto: 'Criar um Ministério da Segurança Pública, separado do Ministério da Justiça.',
    simples: 'Ter um ministério só para cuidar da segurança pública.',
  },
  {
    id: 37, candidato: 'lula', categoria: 'Segurança', fonte: 'agbr-seg',
    texto: 'Aprovar uma emenda constitucional que amplia o papel da União e integra as polícias no combate ao crime.',
    simples: 'Mudar a Constituição para o governo federal ajudar mais os estados e as polícias trabalharem juntas.',
  },
  {
    id: 38, candidato: 'lula', categoria: 'Segurança', fonte: 'cf-lula',
    texto: 'Combater as facções pela asfixia financeira: bloquear dinheiro, bens e empresas ligados ao crime organizado.',
    simples: 'Enfraquecer o crime organizado tirando o dinheiro dele: congelar contas, bens e empresas dos bandidos.',
  },
  {
    id: 39, candidato: 'lula', categoria: 'Segurança', fonte: 'gazeta-lula-seg',
    texto: 'Manter as restrições ao acesso a armas de fogo por civis.',
    simples: 'Continuar dificultando que pessoas comuns comprem e andem com armas.',
  },
  {
    id: 40, candidato: 'lula', categoria: 'Segurança', fonte: 'gazeta-lula-seg',
    texto: 'Ampliar a fiscalização sobre os registros de CACs.',
    simples: 'Fiscalizar mais as pessoas que têm armas registradas como caçadores, atiradores esportivos ou colecionadores.',
  },
  {
    id: 41, candidato: 'lula', categoria: 'Segurança', fonte: 'agbr-seg',
    texto: 'Ampliar o uso de câmeras corporais pelas polícias, com padrões nacionais, e investir em policiamento de proximidade.',
    simples: 'Policiais com câmeras no uniforme gravando as abordagens, e policiais mais próximos da comunidade.',
  },
  {
    id: 42, candidato: 'lula', categoria: 'Segurança', fonte: 'gazeta-lula-seg',
    texto: 'Ampliar as atribuições da Polícia Federal no combate ao crime organizado.',
    simples: 'Dar mais poder para a Polícia Federal investigar e combater as facções.',
  },
  {
    id: 43, candidato: 'lula', categoria: 'Segurança', fonte: 'folha-valinhos',
    texto: 'Executar um plano nacional para enfrentar a superlotação e as violações de direitos nos presídios.',
    simples: 'Reduzir a lotação das cadeias e melhorar as condições dentro delas.',
  },
  // ---- Meio Ambiente
  {
    id: 44, candidato: 'lula', categoria: 'Meio Ambiente', fonte: 'agbr-ma',
    texto: 'Atingir o desmatamento líquido zero até 2030, com fiscalização, regularização fundiária e recuperação de áreas degradadas.',
    simples: 'Até 2030, para cada área de floresta derrubada, outra igual teria de ser replantada ou recuperada.',
  },
  {
    id: 45, candidato: 'lula', categoria: 'Meio Ambiente', fonte: 'infoamazonia',
    texto: 'Fortalecer os órgãos federais de fiscalização ambiental no combate a crimes ambientais.',
    simples: 'Mais fiscais e estrutura para punir quem desmata, queima ou polui ilegalmente.',
  },
  {
    id: 46, candidato: 'lula', categoria: 'Meio Ambiente', fonte: 'agbr-ma',
    texto: 'Destinar mais terras públicas para unidades de conservação.',
    simples: 'Transformar mais áreas do governo em parques e reservas naturais protegidas.',
  },
  {
    id: 47, candidato: 'lula', categoria: 'Meio Ambiente', fonte: 'agbr-ma',
    texto: 'Ampliar o pagamento por serviços ambientais a produtores e comunidades que preservam ou restauram florestas.',
    simples: 'Pagar quem mantém a floresta em pé ou replanta árvores na sua terra.',
  },
  {
    id: 48, candidato: 'lula', categoria: 'Meio Ambiente', fonte: 'agbr-ma',
    texto: 'Fortalecer a prevenção a incêndios florestais com manejo integrado do fogo.',
    simples: 'Planejar e controlar o uso do fogo no campo para evitar grandes queimadas.',
  },
  {
    id: 49, candidato: 'lula', categoria: 'Meio Ambiente', fonte: 'sbt-ma',
    texto: 'Acelerar a substituição de combustíveis fósseis por fontes de energia de menor emissão.',
    simples: 'Trocar mais rápido gasolina, diesel e carvão por energias que poluem menos, como solar, eólica e biocombustíveis.',
  },
  {
    id: 50, candidato: 'lula', categoria: 'Meio Ambiente', fonte: 'maisgoias',
    texto: 'Investir em saneamento básico e em prevenção de desastres climáticos.',
    simples: 'Levar água tratada e esgoto a mais casas e preparar as cidades contra enchentes, secas e deslizamentos.',
  },

  // ====================================================== Flávio Bolsonaro (50)
  // ---- Segurança
  {
    id: 51, candidato: 'flavio', categoria: 'Segurança', fonte: 'jbr-seg',
    texto: 'Reduzir a maioridade penal para 16 anos, com punição a partir de 14 anos para crimes graves.',
    simples: 'Jovens de 16 anos seriam julgados e presos como adultos; para crimes graves, a partir dos 14 anos.',
  },
  {
    id: 52, candidato: 'flavio', categoria: 'Segurança', fonte: 'agbr-flavio',
    texto: 'Aplicar castração química a condenados por crimes sexuais.',
    simples: 'Dar remédios que cortam o desejo sexual a quem for condenado por estupro e outros crimes sexuais.',
  },
  {
    id: 53, candidato: 'flavio', categoria: 'Segurança', fonte: 'jbr-seg',
    texto: 'Acabar com a progressão de regime de pena para condenados por crimes hediondos.',
    simples: 'Quem cometer crimes muito graves, como estupro ou homicídio qualificado, cumpriria a pena toda em regime fechado.',
  },
  {
    id: 54, candidato: 'flavio', categoria: 'Segurança', fonte: 'agbr-flavio',
    texto: 'Classificar facções como PCC, Comando Vermelho e milícias como organizações narcoterroristas.',
    simples: 'Tratar as grandes facções e milícias como terroristas, com punições mais duras.',
  },
  {
    id: 55, candidato: 'flavio', categoria: 'Segurança', fonte: 'folha-valinhos',
    texto: 'Construir um complexo federal com cinco presídios de segurança máxima inspirados no modelo de El Salvador e abrir 500 mil novas vagas prisionais.',
    simples: 'Fazer megaprisões muito rígidas, como as de El Salvador, e criar lugar para mais 500 mil presos.',
  },
  {
    id: 56, candidato: 'flavio', categoria: 'Segurança', fonte: 'site-flavio',
    texto: 'Autorizar as forças de segurança a abater criminosos que estejam portando fuzis.',
    simples: 'A polícia poderia atirar para matar em bandidos armados com fuzil.',
  },
  {
    id: 57, candidato: 'flavio', categoria: 'Segurança', fonte: 'ndmais',
    texto: 'Acabar com as saídas temporárias de presos.',
    simples: 'Fim da "saidinha": presos não poderiam mais sair da cadeia em datas como Natal e Dia das Mães.',
  },
  {
    id: 58, candidato: 'flavio', categoria: 'Segurança',
    texto: 'Criar um Sistema Nacional de Fronteira, com uma força de elite do Exército, da Marinha e da Aeronáutica.',
    simples: 'Uma tropa especial das Forças Armadas para vigiar as fronteiras contra tráfico de drogas e armas.',
  },
  {
    id: 59, candidato: 'flavio', categoria: 'Segurança',
    texto: 'Ocupar permanentemente portos e aeroportos com forças militares para combater o tráfico internacional de cocaína.',
    simples: 'Militares ficariam o tempo todo em portos e aeroportos para impedir a saída de drogas do país.',
  },
  {
    id: 60, candidato: 'flavio', categoria: 'Segurança',
    texto: 'Dobrar o investimento federal em segurança pública ao longo do mandato.',
    simples: 'O governo federal gastaria o dobro com segurança pública em quatro anos.',
  },
  {
    id: 61, candidato: 'flavio', categoria: 'Segurança', fonte: 'folha-valinhos',
    texto: 'Exigir o cumprimento integral da pena para condenados por feminicídio.',
    simples: 'Quem matar uma mulher por ser mulher cumpriria a pena inteira, sem redução nem saída antecipada.',
  },
  {
    id: 62, candidato: 'flavio', categoria: 'Segurança', fonte: 'folha-valinhos',
    texto: 'Monitorar agressores de mulheres com tornozeleira eletrônica e criar um aplicativo nacional de acolhimento às vítimas.',
    simples: 'Quem agride mulher usaria tornozeleira para ser vigiado, e as vítimas teriam um aplicativo para pedir ajuda.',
  },
  // ---- Economia
  {
    id: 63, candidato: 'flavio', categoria: 'Economia', fonte: 'exame',
    texto: 'Revisar a reforma tributária aprovada para reduzir a alíquota do novo imposto sobre consumo (IVA).',
    simples: 'Mudar a reforma dos impostos para que o novo imposto cobrado nas compras seja menor.',
  },
  {
    id: 64, candidato: 'flavio', categoria: 'Economia', fonte: 'infomoney-flavio',
    texto: 'Zerar os tributos federais sobre combustíveis e energia elétrica.',
    simples: 'O governo federal deixaria de cobrar impostos na gasolina, no diesel e na conta de luz.',
  },
  {
    id: 65, candidato: 'flavio', categoria: 'Economia', fonte: 'infomoney-flavio',
    texto: 'Eliminar o IOF sobre operações de câmbio.',
    simples: 'Acabar com o imposto cobrado quando alguém compra dólar ou outra moeda, ou usa o cartão no exterior.',
  },
  {
    id: 66, candidato: 'flavio', categoria: 'Economia', fonte: 'forbes-flavio',
    texto: 'Extinguir pelo menos dez ministérios, cortar cargos comissionados e acabar com supersalários no setor público.',
    simples: 'Fechar ao menos dez ministérios, demitir indicados políticos e impedir que servidores ganhem acima do teto.',
  },
  {
    id: 67, candidato: 'flavio', categoria: 'Economia', fonte: 'forbes-flavio',
    texto: 'Retomar o programa de privatizações, concentrando o Estado em suas funções essenciais.',
    simples: 'Vender empresas do governo para a iniciativa privada e deixar o governo cuidar só do básico.',
  },
  {
    id: 68, candidato: 'flavio', categoria: 'Economia', fonte: 'agbr-flavio',
    texto: 'Criar contratos de trabalho com menos encargos para jovens de 18 a 24 anos no primeiro emprego e para desempregados com mais de 50 anos.',
    simples: 'Ficaria mais barato para a empresa contratar jovens no primeiro emprego e pessoas com mais de 50 anos.',
  },
  {
    id: 69, candidato: 'flavio', categoria: 'Economia', fonte: 'gazeta-flavio-eco',
    texto: 'Substituir o arcabouço fiscal atual por uma regra com limite de gastos atrelado ao tamanho da dívida pública em relação ao PIB.',
    simples: 'Trocar a regra de gastos do governo por outra mais rígida: quanto maior a dívida do país, menos o governo pode gastar.',
  },
  {
    id: 70, candidato: 'flavio', categoria: 'Economia', fonte: 'forbes-flavio',
    texto: 'Atrair R$ 900 bilhões em infraestrutura em quatro anos, apoiado principalmente em investimento privado e concessões.',
    simples: 'Empresas privadas construiriam e administrariam estradas, ferrovias, portos e aeroportos, cobrando pelo uso.',
  },
  {
    id: 71, candidato: 'flavio', categoria: 'Economia', fonte: 'cfemea',
    texto: 'Fazer o acordo negociado entre patrões e empregados prevalecer sobre o legislado e regulamentar jornadas flexíveis.',
    simples: 'O que a empresa combinar com os funcionários valeria mais do que a lei, e os horários de trabalho poderiam ser mais flexíveis.',
  },
  {
    id: 72, candidato: 'flavio', categoria: 'Economia', fonte: 'cfemea',
    texto: 'Manter o modelo atual de trabalho por aplicativos, com proteção previdenciária, sem dar aos sindicatos o comando da regulação.',
    simples: 'Motoristas e entregadores de aplicativo continuariam como estão hoje, com acesso ao INSS, sem regras feitas pelos sindicatos.',
  },
  {
    id: 73, candidato: 'flavio', categoria: 'Economia', fonte: 'gazeta-flavio-eco',
    texto: 'Ampliar o seguro rural e criar ferramentas de securitização e reorganização das dívidas do agronegócio.',
    simples: 'Mais seguro para o produtor rural contra perdas na safra e facilidades para ele renegociar o que deve.',
  },
  {
    id: 74, candidato: 'flavio', categoria: 'Economia', fonte: 'gazeta-flavio-eco',
    texto: 'Apoiar a produção nacional de fertilizantes e ampliar a armazenagem de safras e a irrigação.',
    simples: 'Produzir adubo no Brasil, em vez de importar, e ter mais armazéns e irrigação para o campo.',
  },
  {
    id: 75, candidato: 'flavio', categoria: 'Economia', fonte: 'capital-digital',
    texto: 'Criar uma lei de inteligência artificial focada na liberdade de inovar, sem regras que afastem investimentos.',
    simples: 'Ter poucas regras para inteligência artificial, para não espantar as empresas de tecnologia.',
  },
  // ---- Social
  {
    id: 76, candidato: 'flavio', categoria: 'Social', fonte: 'jovempan-flavio',
    texto: 'Dar aos beneficiários de programas de transferência de renda prioridade em qualificação e primeiro emprego, com volta garantida ao benefício se perderem o trabalho.',
    simples: 'Quem recebe ajuda do governo teria preferência em cursos e vagas de emprego e, se for demitido, voltaria a receber a ajuda.',
  },
  {
    id: 77, candidato: 'flavio', categoria: 'Social', fonte: 'band-flavio',
    texto: 'Criar uma linha de microcrédito específica para mulheres empreendedoras.',
    simples: 'Pequenos empréstimos facilitados para mulheres abrirem ou manterem o próprio negócio.',
  },
  {
    id: 78, candidato: 'flavio', categoria: 'Social', fonte: 'band-flavio',
    texto: 'Acabar com a reeleição para presidente, governadores e prefeitos.',
    simples: 'Presidente, governador e prefeito só poderiam ficar um mandato seguido.',
  },
  {
    id: 79, candidato: 'flavio', categoria: 'Social', fonte: 'site-flavio',
    texto: 'Redirecionar recursos hoje pagos a famílias de presos para amparar as famílias das vítimas de crimes.',
    simples: 'O dinheiro que hoje vai para a família de quem está preso iria para a família de quem foi vítima de crime.',
  },
  {
    id: 80, candidato: 'flavio', categoria: 'Social', fonte: 'mixvale',
    texto: 'Emitir a escritura preferencialmente em nome da mulher na regularização fundiária.',
    simples: 'Quando o governo legalizar casas e terrenos sem documento, o papel sairia de preferência no nome da mulher.',
  },
  {
    id: 81, candidato: 'flavio', categoria: 'Social', fonte: 'aosfatos',
    texto: 'Rejeitar a regulação das redes sociais e restrições a conteúdos, em defesa da liberdade de expressão.',
    simples: 'Não criar leis que controlem o que se publica nas redes sociais, para proteger o direito de opinar.',
  },
  {
    id: 82, candidato: 'flavio', categoria: 'Social', fonte: 'folha-valinhos',
    texto: 'Orientar as políticas públicas pela defesa da família tradicional e de valores morais e religiosos.',
    simples: 'As ações do governo seguiriam valores da família tradicional e da religião.',
  },
  {
    id: 83, candidato: 'flavio', categoria: 'Social', fonte: 'cfemea',
    texto: 'Acabar com as filas do INSS por meio da digitalização completa dos pedidos de benefícios.',
    simples: 'Pedir aposentadoria e outros benefícios do INSS todo pela internet, sem fila.',
  },
  // ---- Saúde
  {
    id: 84, candidato: 'flavio', categoria: 'Saúde', fonte: 'em-flavio',
    texto: 'Entregar remédios em casa para idosos, doentes crônicos e pessoas com deficiência.',
    simples: 'O remédio chegaria na casa de idosos, pessoas com doenças de longa duração e pessoas com deficiência.',
  },
  {
    id: 85, candidato: 'flavio', categoria: 'Saúde', fonte: 'jovempan-flavio',
    texto: 'Corrigir a tabela de valores que o SUS paga a hospitais e profissionais por procedimentos.',
    simples: 'Aumentar o valor que o SUS paga aos hospitais por cada consulta, exame ou cirurgia.',
  },
  {
    id: 86, candidato: 'flavio', categoria: 'Saúde', fonte: 'agbr-flavio',
    texto: 'Compartilhar os prontuários dos pacientes do SUS com hospitais privados para integrar o atendimento.',
    simples: 'Hospitais particulares poderiam ver o histórico médico dos pacientes do SUS.',
  },
  // ---- Educação
  {
    id: 87, candidato: 'flavio', categoria: 'Educação', fonte: 'agbr-edu',
    texto: 'Adotar o método fônico na alfabetização e vincular repasses federais ao cumprimento de metas de aprendizagem.',
    simples: 'Ensinar a ler pelo som das letras, e as escolas que ensinarem melhor recebem mais dinheiro do governo.',
  },
  {
    id: 88, candidato: 'flavio', categoria: 'Educação', fonte: 'agbr-edu',
    texto: 'Ampliar o número de escolas cívico-militares.',
    simples: 'Mais escolas públicas com disciplina e organização no estilo militar.',
  },
  {
    id: 89, candidato: 'flavio', categoria: 'Educação', fonte: 'agbr-edu',
    texto: 'Oferecer vouchers para escolas e creches privadas onde faltarem vagas na rede pública.',
    simples: 'Se não houver vaga na escola ou creche pública, o governo paga uma particular para a criança.',
  },
  {
    id: 90, candidato: 'flavio', categoria: 'Educação', fonte: 'em-flavio',
    texto: 'Pagar uma bolsa a alunos de bom desempenho para que ajudem colegas com dificuldade de aprendizagem.',
    simples: 'Bons alunos ganhariam um dinheiro para dar reforço aos colegas que estão com dificuldade.',
  },
  {
    id: 91, candidato: 'flavio', categoria: 'Educação', fonte: 'em-flavio',
    texto: 'Adotar medidas contra a doutrinação político-ideológica nas escolas.',
    simples: 'Regras para impedir que professores influenciem os alunos sobre política e ideologia em sala de aula.',
  },
  {
    id: 92, candidato: 'flavio', categoria: 'Educação', fonte: 'votoporideias',
    texto: 'Transferir o ensino superior do Ministério da Educação para o Ministério da Ciência e Tecnologia.',
    simples: 'As universidades passariam a ser cuidadas pelo ministério da ciência, e não mais pelo da educação.',
  },
  {
    id: 93, candidato: 'flavio', categoria: 'Educação', fonte: 'votoporideias',
    texto: 'Financiar estudantes universitários com empréstimo contingente à renda, pago só depois que o formado estiver empregado.',
    simples: 'O governo empresta o dinheiro da faculdade, e o estudante só começa a pagar quando arrumar emprego.',
  },
  {
    id: 94, candidato: 'flavio', categoria: 'Educação', fonte: 'votoporideias',
    texto: 'Reformular o ensino técnico em parceria com o setor produtivo.',
    simples: 'Os cursos técnicos seriam montados junto com as empresas, para ensinar o que o mercado precisa.',
  },
  // ---- Meio Ambiente
  {
    id: 95, candidato: 'flavio', categoria: 'Meio Ambiente', fonte: 'jornalpequeno',
    texto: 'Conceder licença ambiental automaticamente quando o órgão responsável não responder dentro do prazo.',
    simples: 'Se o órgão ambiental demorar demais para analisar uma obra, ela fica liberada automaticamente.',
  },
  {
    id: 96, candidato: 'flavio', categoria: 'Meio Ambiente', fonte: 'climainfo',
    texto: 'Concentrar a fiscalização ambiental no combate a organizações criminosas, sem criar novas obrigações ao produtor rural.',
    simples: 'A fiscalização ambiental focaria em quadrilhas que desmatam, sem novas exigências para quem produz no campo.',
  },
  {
    id: 97, candidato: 'flavio', categoria: 'Meio Ambiente', fonte: 'sbt-ma',
    texto: 'Autorizar a exploração de gás de xisto pelo fraturamento hidráulico (fracking).',
    simples: 'Permitir tirar gás de rochas no subsolo quebrando-as com água, areia e produtos químicos sob alta pressão.',
  },
  {
    id: 98, candidato: 'flavio', categoria: 'Meio Ambiente', fonte: 'jbr-ma',
    texto: 'Revisar as competências do Ibama, do ICMBio e da Funai para eliminar sobreposições entre os órgãos.',
    simples: 'Mudar o que cada órgão ambiental e indígena pode fazer, para que não façam o mesmo trabalho em dobro.',
  },
  {
    id: 99, candidato: 'flavio', categoria: 'Meio Ambiente',
    texto: 'Acelerar o licenciamento para mineração de minerais críticos, com áreas pré-aprovadas.',
    simples: 'Liberar mais rápido a mineração de minérios usados em baterias e tecnologia, em áreas já autorizadas antes.',
  },
  {
    id: 100, candidato: 'flavio', categoria: 'Meio Ambiente',
    texto: 'Garantir por 20 anos as condições da licença ambiental de um empreendimento, com penalização do Estado se as regras mudarem.',
    simples: 'Depois de liberada, uma obra teria as regras congeladas por 20 anos; se o governo mudar as regras, paga multa à empresa.',
  },
]

export const PROPOSTAS_POR_ID = Object.fromEntries(PROPOSTAS.map((p) => [p.id, p]))

// Reportagens usadas como referência. Cada proposta aponta para uma delas em `fonte`
// (quando havia uma reportagem específica) e sempre para o plano completo do candidato.
export const FONTES = {
  'plano-lula': { nome: 'Programa de Governo de Lula (PDF)', url: 'https://static.poder360.com.br/uploads/2026/08/Programa-Governo-LULA-2026.pdf' },
  'plano-flavio': { nome: 'Plano de Governo de Flávio Bolsonaro (PDF)', url: 'https://static.poder360.com.br/uploads/2026/08/plano-flavio.pdf' },
  'gazeta-lula-eco': { nome: 'Gazeta do Povo', url: 'https://www.gazetadopovo.com.br/eleicoes/2026/plano-de-governo-lula-economia/' },
  'agbr-lula-min': { nome: 'Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/lula-propoe-criar-ministerio-da-seguranca-e-aumento-real-do-minimo' },
  'forbes-lula': { nome: 'Forbes Brasil', url: 'https://forbes.com.br/forbes-money/2026/10/o-que-lula-quer-manter-e-mudar-na-economia-em-um-novo-mandato/' },
  'cf-lula': { nome: 'Congresso em Foco', url: 'https://www.congressoemfoco.com.br/noticia/121276/fim-da-6x1-soberania-e-seguranca-o-plano-de-lula-para-novo-mandato' },
  'pg2026-lula': { nome: 'Plano de Governo 2026 (resumo)', url: 'https://planodegoverno2026.com.br/candidatos/presidente/lula/' },
  'infomoney-lula': { nome: 'InfoMoney', url: 'https://www.infomoney.com.br/politica/o-que-lula-ja-prometeu-para-a-economia-se-conquistar-a-reeleicao/' },
  'olhar-digital': { nome: 'Olhar Digital', url: 'https://olhardigital.com.br/2026/10/21/pro/eleicoes-2026-os-planos-de-lula-e-flavio-bolsonaro-para-ia-data-centers-e-soberania-digital/' },
  'qconcursos': { nome: 'Folha Dirigida / Qconcursos', url: 'https://folha.qconcursos.com/n/eleicoes-2026-segundo-turno-propostas-concursos' },
  'voz-comunidades': { nome: 'Voz das Comunidades', url: 'https://vozdascomunidades.com.br/destaques/eleicoes-2026-o-que-lula-e-flavio-prometem-para-as-favelas/' },
  'mixvale': { nome: 'Mixvale', url: 'https://www.mixvale.com.br/2026/10/22/planos-de-governo-de-lula-e-flavio-bolsonaro-no-tse-detalham-regras-para-clt-mei-inss-e-moradia-ate-2030/' },
  'radiosampaio': { nome: 'Rádio Sampaio', url: 'https://radiosampaio.com.br/clt-aposentados-estudantes-e-meis-veja-as-propostas-de-lula-e-flavio-bolsonaro-para-o-seu-bolso/' },
  'sbt-saude-pobreza': { nome: 'SBT News', url: 'https://sbtnews.sbt.com.br/noticia/eleicoes/flavio-x-lula-o-que-defendem-para-saude-e-combate-a-pobreza' },
  'folha-valinhos': { nome: 'Folha de Valinhos', url: 'https://www.folhadevalinhos.com.br/destaque/direitos-humanos-as-propostas-de-lula-e-flavio-bolsonaro-no-tse/' },
  'gazeta-parana-saude': { nome: 'Gazeta do Paraná', url: 'https://gazetadoparana.com.br/publico/saude-nas-eleicoes-2026-o-que-lula-e-flavio-bolsonaro-prometem-e-o-que-ja-existe-no-sus' },
  'sbt-edu-lula': { nome: 'SBT News', url: 'https://sbtnews.sbt.com.br/noticia/eleicoes/educacao-o-que-lula-propoe-em-plano-de-governo' },
  'adufrj': { nome: 'Adufrj', url: 'https://www.adufrj.org.br/noticias/6323-lula-4-mantem-foco-na-expansao-universitaria' },
  'agbr-seg': { nome: 'Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/conheca-propostas-de-flavio-e-lula-para-seguranca-publica' },
  'gazeta-lula-seg': { nome: 'Gazeta do Povo', url: 'https://www.gazetadopovo.com.br/eleicoes/2026/lula-propostas-plano-de-governo-seguranca-publica/' },
  'agbr-ma': { nome: 'Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-10/veja-como-os-planos-de-governo-de-flavio-e-lula-tratam-meio-ambiente' },
  'infoamazonia': { nome: 'InfoAmazonia', url: 'https://infoamazonia.org/2026/10/21/flavio-bolsonaro-promete-acabar-com-entraves-ambientais-lula-defende-fiscalizacao-forte/' },
  'sbt-ma': { nome: 'SBT News', url: 'https://sbtnews.sbt.com.br/noticia/eleicoes/flavio-x-lula-o-que-defendem-para-meio-ambiente-e-energia' },
  'maisgoias': { nome: 'Mais Goiás', url: 'https://www.maisgoias.com.br/politica/eleicoes-2026-veja-resumo-do-plano-de-governo-de-lula-dividido-em-topicos/' },
  'jbr-seg': { nome: 'Jornal de Brasília', url: 'https://jornaldebrasilia.com.br/noticias/politica-e-poder/fim-da-marcacao-de-municoes-e-a-progressao-de-pena-veja-o-que-flavio-defende-na-seguranca/' },
  'agbr-flavio': { nome: 'Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/flavio-bolsonaro-propoe-enxugar-estado-e-endurecer-acoes-de-seguranca' },
  'ndmais': { nome: 'ND Mais', url: 'https://ndmais.com.br/politica/lula-flavio-seguranca-eleicoes-2026/' },
  'exame': { nome: 'Exame', url: 'https://exame.com/brasil/eleicoes-2026-veja-os-planos-de-economia-de-lula-e-flavio-bolsonaro/' },
  'infomoney-flavio': { nome: 'InfoMoney', url: 'https://www.infomoney.com.br/politica/o-que-muda-na-economia-com-flavio-veja-as-propostas-apresentadas-pelo-candidato/' },
  'forbes-flavio': { nome: 'Forbes Brasil', url: 'https://forbes.com.br/forbes-money/2026/10/tesouraco-flavio-bolsonaro-plano-economico/' },
  'gazeta-flavio-eco': { nome: 'Gazeta do Povo', url: 'https://www.gazetadopovo.com.br/eleicoes/2026/plano-de-governo-flavio-bolsonaro-economia/' },
  'cfemea': { nome: 'CFEMEA', url: 'https://www.cfemea.org.br/pt/noticias/11776-o-que-flavio-propoe-aos-trabalhadores.html' },
  'capital-digital': { nome: 'Capital Digital', url: 'https://capitaldigital.com.br/flavio-incorpora-agenda-digital-ja-em-curso-mas-propoe-mudar-papel-do-estado/' },
  'jovempan-flavio': { nome: 'Jovem Pan', url: 'https://jovempan.com.br/politica/plano-de-governo-de-flavio-bolsonaro-contradiz-montagens-espalhadas-na-web/' },
  'band-flavio': { nome: 'Band', url: 'https://www.band.com.br/politica/eleicoes/eleicoes-2026-conheca-as-propostas-e-o-perfil-de-flavio-bolsonaro-pl' },
  'site-flavio': { nome: 'Site da campanha de Flávio', url: 'https://www.flaviobolsonaro.com.br/plano-de-governo/leitura' },
  'aosfatos': { nome: 'Aos Fatos', url: 'https://www.aosfatos.org/noticias/incentivo-data-centers-programas-governo-presidenciaveis/' },
  'em-flavio': { nome: 'Estado de Minas', url: 'https://www.em.com.br/politica/2026/08/7490602-flavio-bolsonaro-2026-conheca-as-principais-propostas-do-plano-de-governo.html' },
  'agbr-edu': { nome: 'Agência Brasil', url: 'https://agenciabrasil.ebc.com.br/educacao/noticia/2026-10/flavio-quer-escolas-militares-lula-propoe-ampliar-educacao-integral' },
  'votoporideias': { nome: 'Voto por Ideias', url: 'https://www.votoporideias.com.br/segundo-turno-2026/propostas/educacao' },
  'climainfo': { nome: 'ClimaInfo', url: 'https://climainfo.org.br/2026/10/12/flavio-bolsonaro-promete-revisar-papel-de-orgaos-ambientais-e-liberar-fracking/' },
  'jornalpequeno': { nome: 'Jornal Pequeno', url: 'https://jornalpequeno.com.br/2026/10/09/plano-de-flavio-bolsonaro-preve-mudancas-no-ibama-e-licencas-ambientais/' },
  'jbr-ma': { nome: 'Jornal de Brasília', url: 'https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-promete-revisar-papel-do-ibama-funai-e-icmbio-e-quer-explorar-gas-de-fracking/' },
}

export const PLANO_COMPLETO = { lula: FONTES['plano-lula'], flavio: FONTES['plano-flavio'] }

export const TSE_PLANOS =
  'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno'
