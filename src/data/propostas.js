// Banco fixo de propostas, tiradas dos planos de governo registrados no TSE para o 2º turno de 2026.
// Só entram propostas que aparecem no plano de um candidato e não no do outro,
// para que concordar com uma ideia nunca some pontos ao candidato "errado".
// O texto não revela o autor; o campo `candidato` só aparece no gabarito.
// `simples` é a mesma proposta reescrita em linguagem do dia a dia.
// `pagina` é a página do PDF do plano e `trecho` é o texto literal dessa página (uma frase
// ou uma lista de frases da mesma página),
// mostrados no gabarito (os PDFs ficam em public/planos/).

export const CANDIDATOS = {
  lula: {
    id: 'lula',
    nome: 'Lula',
    nomeCompleto: 'Luiz Inácio Lula da Silva',
    partido: 'PT',
    plano: 'Programa de Governo 2027–2030',
    pdf: './planos/lula.pdf',
    cor: '#f43f5e',
    corFinal: '#fb923c',
    gradiente: 'from-rose-500 to-orange-400',
    texto: 'text-rose-600',
    borda: 'border-rose-300',
    fundo: 'bg-rose-50',
  },
  flavio: {
    id: 'flavio',
    nome: 'Flávio Bolsonaro',
    nomeCompleto: 'Flávio Bolsonaro',
    partido: 'PL',
    plano: 'Diretrizes do Plano de Governo 2027–2030',
    pdf: './planos/flavio.pdf',
    cor: '#38bdf8',
    corFinal: '#6366f1',
    gradiente: 'from-sky-400 to-indigo-500',
    texto: 'text-sky-600',
    borda: 'border-sky-300',
    fundo: 'bg-sky-50',
  },
}

export const CATEGORIAS = ['Economia', 'Segurança', 'Saúde', 'Educação', 'Meio Ambiente', 'Social']

export const TSE_PLANOS =
  'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno'

export const PROPOSTAS = [
  // ================================================================ Lula (50)
  // ---- Economia
  {
    id: 1, candidato: 'lula', categoria: 'Economia', pagina: 49,
    texto: 'Manter o arcabouço fiscal atual, que controla o crescimento dos gastos sem cortar políticas sociais.',
    simples: 'Continuar com a regra de hoje que limita quanto os gastos do governo podem crescer por ano, sem cortar programas sociais.',
    trecho: 'manteremos o novo arcabouço fiscal, que controlou o crescimento das despesas sem prejudicar as políticas sociais e permitiu uma redução significativa do déficit primário.',
  },
  {
    id: 2, candidato: 'lula', categoria: 'Economia', pagina: 74,
    texto: 'Manter a política de valorização do salário mínimo, com aumento acima da inflação.',
    simples: 'Todo ano o salário mínimo sobe mais do que os preços, para dar para comprar um pouco mais com ele.',
    trecho: 'o novo mandato de Lula dará continuidade à política de valorização do salário mínimo como meio estratégico de distribuição de renda, combate à pobreza e promoção do desenvolvimento econômico e social.',
  },
  {
    id: 3, candidato: 'lula', categoria: 'Economia', pagina: 51,
    texto: 'Usar crédito público, compras do governo e benefícios condicionados a conteúdo local e margens de preferência para estimular empresas brasileiras.',
    simples: 'O governo daria empréstimos, compraria e daria vantagens de preferência a empresas que produzem no Brasil, com peças e serviços nacionais.',
    trecho: 'Utilizaremos financiamento direcionado, com soluções inovadoras de parceria entre crédito público e privado, compras públicas, concessões, regulações e benefícios condicionados a conteúdo local, valor agregado nacional, margens de preferência com estímulos para empresas brasileiras.',
  },
  {
    id: 4, candidato: 'lula', categoria: 'Economia', pagina: 67,
    texto: 'Fazer a Petrobras voltar a atuar na distribuição de combustíveis e ampliar sua capacidade de refino.',
    simples: 'A Petrobras voltaria a ter uma rede que leva gasolina e diesel até os postos, e refinaria mais petróleo no Brasil.',
    trecho: 'A Petrobras deverá retornar ao segmento de distribuição de combustíveis, expandindo sua capacidade de refino e ampliando a atuação da Transpetro para logística de GNL.',
  },
  {
    id: 5, candidato: 'lula', categoria: 'Economia', pagina: 55,
    texto: 'Exigir dos novos data centers energia renovável, avaliação de impactos, contrapartidas de conteúdo local e capacidade computacional reservada ao mercado interno.',
    simples: 'Empresas que montarem grandes centros de computadores no Brasil teriam de usar energia limpa, cuidar dos impactos e deixar parte da estrutura para uso do país.',
    trecho: 'exigindo eficiência energética, utilização progressiva de fontes 100% renováveis e avaliação de impactos sobre o sistema elétrico, hídrico e populações locais. Além disso, a instalação dos datacenters em solo brasileiro deve prever contrapartidas de conteúdo local e capacidade computacional para o mercado interno.',
  },
  {
    id: 6, candidato: 'lula', categoria: 'Economia', pagina: 75,
    texto: 'Regulamentar o trabalho por aplicativos, definindo relação de trabalho, remuneração, direitos trabalhistas e previdenciários e transparência dos algoritmos.',
    simples: 'Criar uma lei com regras de pagamento, direitos e aposentadoria para motoristas e entregadores de aplicativo.',
    trecho: 'digital e de plataformas, que normatize de forma adequada a atividade empresarial e estabeleça as regras para definir a relação de trabalho, a remuneração, condições de trabalho, proteções e direitos laborais e previdenciários, transparência algorítmica.',
  },
  {
    id: 7, candidato: 'lula', categoria: 'Economia', pagina: 74,
    texto: 'Combater a "pejotização" irregular, com mais fiscalização e regras contra a troca fraudulenta de empregados com carteira por contratos de empresa (PJ).',
    simples: 'Impedir que empresas demitam funcionários com carteira assinada para recontratá-los como "empresa" só para pagar menos direitos.',
    trecho: 'Vamos continuar combatendo a pejotização espúria, com fiscalização, regras que inibam migrações fraudulentas, equiparando responsabilidades administrativas e previdenciárias e fortalecendo a inspeção do trabalho.',
  },
  {
    id: 8, candidato: 'lula', categoria: 'Economia', pagina: 75,
    texto: 'Alterar regras da legislação trabalhista que induzem a precarização, combater fraudes em terceirizações e retomar a assistência sindical na rescisão do contrato.',
    simples: 'Mudar partes da lei do trabalho vistas como prejudiciais ao trabalhador e voltar a ter o sindicato acompanhando a demissão.',
    trecho: 'Vamos aprimorar a legislação trabalhista, alterando regras que induzem a precarização das condições de trabalho, os marcos regressivos contidos na legislação, as fraudes presentes em muitas terceirizações, e retomando assistência sindical nas homologações de rescisão do contrato de trabalho.',
  },
  {
    id: 9, candidato: 'lula', categoria: 'Economia', pagina: 76,
    texto: 'Regulamentar o direito de negociação coletiva dos servidores públicos.',
    simples: 'Criar regras para que os servidores públicos negociem salários e condições de trabalho com o governo, como fazem os sindicatos no setor privado.',
    trecho: 'Vamos implementar a regulamentação do direito de negociação coletiva no setor público',
  },
  {
    id: 10, candidato: 'lula', categoria: 'Economia', pagina: 81,
    texto: 'Aprofundar a aproximação do Brasil com o BRICS e o Sul Global.',
    simples: 'Estreitar laços com países como China, Índia, Rússia e África do Sul e com outros países em desenvolvimento.',
    trecho: 'Aprofundaremos a aproximação geopolítica com o BRICS e com o Sul Global, bem como com o G20, espaços fundamentais para a afirmação dos interesses da maioria da humanidade.',
  },
  {
    id: 11, candidato: 'lula', categoria: 'Economia', pagina: 42,
    texto: 'Aprovar uma lei de direito autoral no ambiente digital e regular a inteligência artificial para que artistas sejam pagos quando plataformas usarem conteúdo brasileiro.',
    simples: 'Músicos e autores receberiam dinheiro quando redes sociais, streamings e inteligências artificiais usassem suas obras.',
    trecho: 'Trabalharemos pela aprovação de lei do direito autoral em ambiente digital e a regulamentação da inteligência artificial, para que músicos, autores e artistas sejam pagos quando as plataformas usarem conteúdo brasileiro.',
  },
  {
    id: 12, candidato: 'lula', categoria: 'Economia', pagina: 59,
    texto: 'Expandir o Plano Safra da Agricultura Familiar, com juros de acordo com o perfil do agricultor e prioridade aos alimentos da cesta básica.',
    simples: 'Mais crédito barato para pequenos agricultores, principalmente para quem planta arroz, feijão e outros alimentos do dia a dia.',
    trecho: 'Vamos continuar expandindo o Plano Safra da Agricultura Familiar, com juros compatíveis com o perfil do agricultor e tipo de produto, com prioridade para produção de alimentos da cesta básica.',
  },
  // ---- Social
  {
    id: 13, candidato: 'lula', categoria: 'Social', pagina: 19,
    texto: 'Dar continuidade às cotas e às políticas para ampliar a presença de pessoas negras no serviço público, inclusive nos cargos de chefia.',
    simples: 'Continuar reservando vagas em concursos para pessoas negras e incentivar que elas cheguem aos cargos mais altos do governo.',
    trecho: 'As políticas de fomento à participação da população negra no funcionalismo público, especialmente nos espaços superiores da gestão governamental, terão continuidade, alinhadas à política de cotas no serviço público que aprimoramos no atual mandato.',
  },
  {
    id: 14, candidato: 'lula', categoria: 'Social', pagina: 75,
    texto: 'Tornar obrigatórios planos de ação, com metas progressivas, nas empresas com diferença salarial entre homens e mulheres.',
    simples: 'Empresas que pagam menos às mulheres teriam de cumprir metas para igualar os salários.',
    trecho: 'A execução dos Planos de Ação nas empresas com desigualdades identificadas será tornada obrigatória, com metas progressivas de redução das disparidades salariais e ampliação da presença de mulheres, especialmente negras e pessoas com deficiência.',
  },
  {
    id: 15, candidato: 'lula', categoria: 'Social', pagina: 23,
    texto: 'Planejar as políticas públicas considerando identidade de gênero e orientação sexual, para atender às especificidades das pessoas LGBTQIAP+.',
    simples: 'Serviços públicos preparados para atender pessoas LGBTQIAP+ de acordo com suas necessidades.',
    trecho: 'Continuaremos a planejar e construir políticas e ações levando em conta as dimensões de gênero, identidade, orientação sexual, étnico-raciais e classe social assim como as demais desigualdades sociais, de modo a garantir capacidade de o Estado atender, de forma adequada, justa e inclusiva, às pessoas LGBTQIAP+ e todas as suas especificidades.',
  },
  {
    id: 16, candidato: 'lula', categoria: 'Social', pagina: 20,
    texto: 'Continuar a demarcação de terras indígenas e a desintrusão de invasores.',
    simples: 'Reconhecer oficialmente as terras indígenas e retirar delas quem entrou ilegalmente.',
    trecho: 'Persistiremos, garantindo proteção a seus territórios, com ações para demarcação e desintrusão de terras sempre que necessárias.',
  },
  {
    id: 17, candidato: 'lula', categoria: 'Social', pagina: 16,
    texto: 'Avançar na regulação das redes sociais e das plataformas digitais para impedir a difusão de desinformação e de campanhas de ódio.',
    simples: 'Criar regras para que redes sociais não espalhem notícias falsas e ataques de ódio.',
    trecho: 'É parte da reafirmação da democracia avançar ainda mais na regulação democrática das redes sociais e das plataformas digitais, de modo a impedir que elas difundam desinformação, acolham campanhas de ódio e outras formas de comunicação nocivas para a democracia.',
  },
  {
    id: 18, candidato: 'lula', categoria: 'Social', pagina: 55,
    texto: 'Consolidar um Centro Nacional de Transparência Algorítmica e a rastreabilidade de conteúdos gerados por inteligência artificial.',
    simples: 'Um órgão para explicar como os algoritmos das plataformas decidem as coisas e identificar fotos, vídeos e textos feitos por inteligência artificial.',
    trecho: 'Vamos consolidar a transparência algorítmica e a rastreabilidade de conteúdo sintético, ancoradas no Centro Nacional de Transparência Algorítmica',
  },
  {
    id: 19, candidato: 'lula', categoria: 'Social', pagina: 60,
    texto: 'Avançar na reforma agrária, assentando as famílias acampadas e ampliando o crédito fundiário.',
    simples: 'Distribuir terras a famílias sem-terra que estão acampadas e facilitar empréstimos para comprar terra.',
    trecho: 'Continuaremos a avançar na política de reforma agrária, assentando as famílias acampadas, estruturando os assentamentos e ampliando o acesso ao crédito fundiário.',
  },
  {
    id: 20, candidato: 'lula', categoria: 'Social', pagina: 15,
    texto: 'Ampliar a participação social, com conferências nacionais e participação da sociedade no orçamento federal.',
    simples: 'Mais consultas e encontros com a população para decidir políticas públicas e onde o dinheiro do governo vai ser gasto.',
    trecho: [
      'continuaremos realizando conferências para implantar e aprimorar políticas e programas sob responsabilidade federal.',
      'Queremos que o PPA 20282031 seja ainda mais participativo e que o ciclo orçamentário federal brasileiro também seja objeto de participação social.',
    ],
  },
  // ---- Segurança
  {
    id: 21, candidato: 'lula', categoria: 'Segurança', pagina: 30,
    texto: 'Criar o Ministério da Segurança Pública depois da aprovação da emenda constitucional da segurança.',
    simples: 'Ter um ministério só para cuidar da segurança pública, coordenando estados e municípios.',
    trecho: 'Uma vez aprovada a PEC da Segurança Pública proposta pelo Executivo, criaremos o Ministério da Segurança Pública para coordenar, em articulação com estados e municípios, a execução das políticas nacionais de segurança pública',
  },
  {
    id: 22, candidato: 'lula', categoria: 'Segurança', pagina: 27,
    texto: 'Ampliar o papel do governo federal na segurança pública e a cooperação entre União, estados e municípios.',
    simples: 'O governo federal passaria a atuar mais na segurança, junto com as polícias estaduais e as prefeituras.',
    trecho: 'Precisamos aprofundar a cooperação entre as instituições dos três níveis de governo e ampliar o escopo de ação do Poder Federal para podermos avançar ainda mais no enfrentamento à violência.',
  },
  {
    id: 23, candidato: 'lula', categoria: 'Segurança', pagina: 28,
    texto: 'Manter uma política de controle de armas e munições.',
    simples: 'Continuar dificultando que pessoas comuns comprem armas e munição.',
    trecho: 'manteremos uma política de controle de armas e munições, fundamental para reduzir a violência e fortalecer uma política democrática de segurança pública.',
  },
  {
    id: 24, candidato: 'lula', categoria: 'Segurança', pagina: 28,
    texto: 'Aprimorar a rastreabilidade de armas e munições e reforçar a fiscalização sobre os registros de CACs.',
    simples: 'Saber de onde veio cada arma e bala e fiscalizar mais quem tem armas como caçador, atirador ou colecionador.',
    trecho: 'Aprimoraremos os mecanismos de rastreabilidade de armas e munições e reforçaremos a capacidade de fiscalização da Polícia Federal e do Exército sobre empresas de segurança privada, defesa pessoal e registros de caçadores, atiradores e colecionadores.',
  },
  {
    id: 25, candidato: 'lula', categoria: 'Segurança', pagina: 30,
    texto: 'Ampliar o uso de câmeras corporais pelas polícias, com padrões nacionais.',
    simples: 'Policiais com câmeras no uniforme gravando as abordagens.',
    trecho: 'Ampliaremos o programa de estímulos para uso de câmeras corporais, com padrões nacionais para utilização, gestão e preservação das imagens.',
  },
  {
    id: 26, candidato: 'lula', categoria: 'Segurança', pagina: 30,
    texto: 'Criar programas de policiamento de proximidade, aproximando polícias e comunidades.',
    simples: 'Policiais fixos em cada bairro, que conhecem e conversam com os moradores.',
    trecho: 'Construiremos, junto com os entes federados, programas no modelo de policiamento de proximidade, fortalecendo a relação entre polícias e comunidades.',
  },
  {
    id: 27, candidato: 'lula', categoria: 'Segurança', pagina: 27,
    texto: 'Adotar medidas rígidas para barrar candidaturas de pessoas ligadas ao crime organizado.',
    simples: 'Impedir que pessoas ligadas a facções e milícias se candidatem nas eleições.',
    trecho: 'medidas rígidas para barrar candidaturas de indivíduos ligados ao crime organizado.',
  },
  {
    id: 28, candidato: 'lula', categoria: 'Segurança', pagina: 28,
    texto: 'Cumprir as metas do Plano Pena Justa para o sistema prisional e criar um Pacto Nacional de Execução Penal.',
    simples: 'Seguir um plano nacional para melhorar as condições das prisões e a forma de cumprir as penas.',
    trecho: 'Cumpriremos as metas do Plano Pena Justa e instituiremos o Pacto Nacional de Execução Penal para o Enfrentamento ao Crime Organizado',
  },
  {
    id: 29, candidato: 'lula', categoria: 'Segurança', pagina: 29,
    texto: 'Fortalecer a prevenção da violência com foco na juventude negra, com mediação comunitária e justiça restaurativa.',
    simples: 'Programas para evitar que jovens negros sejam vítimas da violência e para resolver conflitos com conversa e reparação, não só com punição.',
    trecho: 'Fortaleceremos as políticas de prevenção à violência com foco na proteção da juventude negra e da expansão de programas de mediação comunitária e justiça restaurativa em parceria com estados e municípios.',
  },
  // ---- Educação
  {
    id: 30, candidato: 'lula', categoria: 'Educação', pagina: 32,
    texto: 'Continuar e fortalecer a poupança paga a estudantes de baixa renda do ensino médio para que não deixem a escola.',
    simples: 'Alunos pobres do ensino médio continuariam ganhando um dinheiro guardado para não largar os estudos.',
    trecho: 'Vamos dar continuidade e fortalecer o Pé-de-Meia. Nenhum jovem em situação de pobreza ou vulnerabilidade social no Brasil deve deixar a escola por falta de renda.',
  },
  {
    id: 31, candidato: 'lula', categoria: 'Educação', pagina: 33,
    texto: 'Criar mais 111 institutos federais de ensino técnico, com novos campi em 106 municípios.',
    simples: 'Abrir 111 novas escolas federais de ensino técnico, em cidades de todos os estados.',
    trecho: 'Serão mais 111 IFs, com novos campus em 106 municípios de todos os estados.',
  },
  {
    id: 32, candidato: 'lula', categoria: 'Educação', pagina: 33,
    texto: 'Fazer um novo ciclo de expansão e interiorização das universidades públicas.',
    simples: 'Mais vagas em universidades públicas, principalmente em cidades do interior.',
    trecho: 'Haverá também novo ciclo expansão e interiorização da educação superior pública para superar os vazios educacionais e as assimetrias regionais.',
  },
  {
    id: 33, candidato: 'lula', categoria: 'Educação', pagina: 33,
    texto: 'Manter o Piso Nacional do Magistério e pagar bolsas para atrair jovens às licenciaturas.',
    simples: 'Garantir o salário mínimo nacional dos professores e pagar bolsa a quem estuda para ser professor.',
    trecho: 'O Piso Nacional do Magistério será mantido e daremos continuidade às medidas de apoio à formação docente, de elevação da atratividade das licenciaturas, por meio do Pé-de-Meia Licenciatura',
  },
  {
    id: 34, candidato: 'lula', categoria: 'Educação', pagina: 20,
    texto: 'Implantar plenamente a Universidade Indígena.',
    simples: 'Colocar para funcionar de vez uma universidade voltada aos povos indígenas.',
    trecho: 'Vamos implantar plenamente a Universidade Indígena, criada em 2026.',
  },
  {
    id: 35, candidato: 'lula', categoria: 'Educação', pagina: 24,
    texto: 'Manter os investimentos na rede nacional de cursinhos populares para o acesso ao ensino superior.',
    simples: 'Continuar pagando cursinhos pré-vestibular gratuitos para jovens de baixa renda.',
    trecho: 'Manteremos os investimentos na rede nacional de cursinhos populares (CPop), de modo a facilitar o acesso da juventude ao ensino superior.',
  },
  {
    id: 36, candidato: 'lula', categoria: 'Educação', pagina: 24,
    texto: 'Regulamentar o uso de telas por faixa etária e as plataformas de jogos, aprimorando o ECA Digital.',
    simples: 'Regras de quanto tempo e como crianças e adolescentes podem usar celular, internet e jogos, de acordo com a idade.',
    trecho: 'Não recuaremos um passo sequer na proteção digital de crianças e adolescentes, com aprimoramento do ECA Digital, regulamentação do uso de telas por faixa etária, promoção do uso seguro das tecnologias e regulamentação das plataformas de jogos e dos ambientes digitais.',
  },
  {
    id: 37, candidato: 'lula', categoria: 'Educação', pagina: 20,
    texto: 'Acelerar a política nacional de educação para as relações étnico-raciais e de educação escolar quilombola.',
    simples: 'Ensinar nas escolas sobre a história e a cultura afro-brasileira e indígena e apoiar as escolas de comunidades quilombolas.',
    trecho: 'Vamos acelerar a implementação da Política Nacional de Equidade, Educação para as Relações Étnico-Raciais e Educação Escolar Quilombola (PNEERQ).',
  },
  // ---- Saúde
  {
    id: 38, candidato: 'lula', categoria: 'Saúde', pagina: 36,
    texto: 'Incluir exames laboratoriais e de acompanhamento de doenças crônicas no programa federal de farmácias que oferece remédios de graça.',
    simples: 'Além de remédio grátis, as farmácias do programa do governo fariam exames, por exemplo, para quem tem pressão alta ou diabetes.',
    trecho: 'Uma inovação do programa será incluir exames laboratoriais, de diagnóstico e de monitoramento de condições crônicas de saúde',
  },
  {
    id: 39, candidato: 'lula', categoria: 'Saúde', pagina: 35,
    texto: 'Manter o programa federal que leva médicos a regiões carentes, com foco em fixar os profissionais nesses locais.',
    simples: 'Continuar mandando médicos para cidades pequenas e bairros pobres e fazer com que eles fiquem por lá.',
    trecho: 'O Programa Mais Médicos, que dobrou de tamanho em nossa gestão, seguirá o caminho de vinculação e fixação de profissionais',
  },
  {
    id: 40, candidato: 'lula', categoria: 'Saúde', pagina: 21,
    texto: 'Manter atenção diferenciada à saúde indígena, com participação dos indígenas na gestão.',
    simples: 'Atendimento de saúde adaptado à realidade das aldeias, com os próprios indígenas ajudando a administrar.',
    trecho: 'A saúde indígena continuará merecendo atenção diferenciada, com os indígenas tendo participação efetiva em sua gestão.',
  },
  {
    id: 41, candidato: 'lula', categoria: 'Saúde', pagina: 38,
    texto: 'Fortalecer o programa que distribui absorventes e medicamentos para a saúde menstrual.',
    simples: 'Distribuir absorventes de graça para meninas e mulheres que não podem comprar.',
    trecho: 'Fortaleceremos, também, o Programa Dignidade Menstrual, com acesso aos insumos essenciais para a saúde menstrual – absorventes e medicamentos.',
  },
  {
    id: 42, candidato: 'lula', categoria: 'Saúde', pagina: 38,
    texto: 'Distribuir gratuitamente no SUS métodos contraceptivos modernos e de longa duração.',
    simples: 'O SUS daria de graça anticoncepcionais que duram anos, como implantes, para quem quiser evitar a gravidez.',
    trecho: 'Fortaleceremos o planejamento reprodutivo ampliando o acesso a métodos contraceptivos modernos e de longa duração, a serem distribuídos gratuitamente no SUS',
  },
  {
    id: 43, candidato: 'lula', categoria: 'Saúde', pagina: 59,
    texto: 'Usar o Imposto Seletivo e regras de publicidade para desestimular produtos nocivos à saúde.',
    simples: 'Cobrar mais imposto e limitar propaganda de produtos que fazem mal à saúde, como cigarro, bebida e alimentos ultraprocessados.',
    trecho: 'Vamos também manter regras de publicidade que evitem a indução do consumo de produtos nocivos à saúde. Ao regulamentar a reforma tributária, vamos, por meio do Imposto Seletivo, desestimular produtos nocivos à saúde.',
  },
  {
    id: 44, candidato: 'lula', categoria: 'Saúde', pagina: 38,
    texto: 'Consolidar uma grande rede pública de prevenção, diagnóstico e tratamento do câncer.',
    simples: 'Mais hospitais, aparelhos e remédios modernos no SUS para quem tem câncer.',
    trecho: 'Vamos consolidar, em todo o Brasil, a maior rede pública de cuidado ao câncer do mundo, com prevenção, diagnóstico e tratamento ao câncer com equipamentos e tratamentos modernos e atualização de novos medicamentos quimioterápicos e imunoterápicos.',
  },
  // ---- Meio Ambiente
  {
    id: 45, candidato: 'lula', categoria: 'Meio Ambiente', pagina: 70,
    texto: 'Destinar terras públicas para unidades de conservação, territórios indígenas e quilombolas ou assentamentos.',
    simples: 'Transformar terras do governo em reservas ambientais, terras indígenas e quilombolas ou assentamentos de reforma agrária.',
    trecho: 'Vamos avançar na destinação das terras públicas para unidades de conservação, territórios indígenas e quilombolas ou assentamentos, e reforçar a regularização fundiária.',
  },
  {
    id: 46, candidato: 'lula', categoria: 'Meio Ambiente', pagina: 71,
    texto: 'Colocar em funcionamento o Fundo Florestas Tropicais para Sempre, criado para pagar pela conservação de florestas.',
    simples: 'Pôr para funcionar um fundo internacional que paga países e comunidades para manter as florestas em pé.',
    trecho: 'O Fundo Florestas Tropicais para Sempre implementará suas estruturas de governança para que os investimentos possam começar a ocorrer.',
  },
  {
    id: 47, candidato: 'lula', categoria: 'Meio Ambiente', pagina: 71,
    texto: 'Ampliar o programa federal de castração de cães e gatos e manter o cadastro nacional desses animais.',
    simples: 'Mais castrações de graça para cachorros e gatos e um registro nacional dos animais.',
    trecho: 'Vamos ampliar o ProPatinhas, fortalecendo as caravanas de castração, e dar continuidade ao SinPatinhas, cadastro nacional de cães e gatos.',
  },
  {
    id: 48, candidato: 'lula', categoria: 'Meio Ambiente', pagina: 71,
    texto: 'Mobilizar governo, empresas e sociedade para cumprir a meta climática do Brasil de redução de emissões (NDC).',
    simples: 'Trabalhar para o Brasil cumprir a promessa feita à ONU de soltar menos gases que esquentam o planeta.',
    trecho: 'Articularemos as políticas e mobilizaremos todos os atores governamentais, privados e da sociedade civil para que cumpramos a nossa nova NDC.',
  },
  {
    id: 49, candidato: 'lula', categoria: 'Meio Ambiente', pagina: 65,
    texto: 'Acelerar a redução da produção de energia a carvão.',
    simples: 'Usar cada vez menos carvão para gerar energia, porque ele polui muito.',
    trecho: 'acelerar a redução da produção de carvão.',
  },
  {
    id: 50, candidato: 'lula', categoria: 'Meio Ambiente', pagina: 59,
    texto: 'Reforçar linhas de crédito específicas para agroecologia, produção orgânica e sociobiodiversidade.',
    simples: 'Empréstimos facilitados para quem produz alimentos orgânicos e sem agrotóxicos, preservando a natureza.',
    trecho: 'Reforçaremos ainda mais as linhas de crédito específicas para agroecologia, produção orgânica e sociobiodiversidade',
  },

  // ====================================================== Flávio Bolsonaro (50)
  // ---- Segurança
  {
    id: 51, candidato: 'flavio', categoria: 'Segurança', pagina: 13,
    texto: 'Reduzir a maioridade penal de 18 para 16 anos e punir a partir dos 14 anos quem cometer crimes graves.',
    simples: 'Jovens de 16 anos seriam julgados e presos como adultos; para crimes graves, como estupro e assassinato, a partir dos 14 anos.',
    trecho: 'O novo governo do Brasil vai apoiar e sancionar a redução da maioridade penal de 18 para 16 anos. Vamos punir também maiores de 14 anos que cometerem crimes graves, como estupro, tráfico, tortura e assassinato.',
  },
  {
    id: 52, candidato: 'flavio', categoria: 'Segurança', pagina: 14,
    texto: 'Aprovar e aplicar a castração química de condenados por estupro e abuso de crianças.',
    simples: 'Dar remédios que cortam o desejo sexual a quem for condenado por estupro ou abuso de crianças.',
    trecho: 'aprovar e implementar a castração química de criminosos que abusam de mulheres e crianças.',
  },
  {
    id: 53, candidato: 'flavio', categoria: 'Segurança', pagina: 15,
    texto: 'Acabar com a progressão de regime de pena para quem comete crimes hediondos.',
    simples: 'Quem cometer crimes muito graves cumpriria a pena toda em regime fechado, sem passar para o semiaberto.',
    trecho: 'vai usar toda a sua força para acabar com a progressão de regime de quem comete crimes hediondos.',
  },
  {
    id: 54, candidato: 'flavio', categoria: 'Segurança', pagina: 13,
    texto: 'Declarar PCC, Comando Vermelho, milícias e demais facções como organizações narcoterroristas.',
    simples: 'Tratar as grandes facções e milícias como grupos terroristas.',
    trecho: 'PCC, CV, milícias e todas as outras facções serão declaradas como organizações narcoterroristas.',
  },
  {
    id: 55, candidato: 'flavio', categoria: 'Segurança', pagina: 14,
    texto: 'Construir 5 presídios de segurança máxima no modelo de El Salvador, sem visita íntima, e criar meio milhão de novas vagas prisionais.',
    simples: 'Fazer megaprisões muito rígidas, como as de El Salvador, e abrir lugar para mais 500 mil presos.',
    trecho: [
      'O Brasil terá 5 novos presídios de segurança máxima no modelo adotado por El Salvador.',
      'Eles vão viver sem celular, sem visita íntima e com visitas monitoradas. Em parceria com os governos estaduais, vamos criar meio milhão de novas vagas no sistema prisional em 4 anos e zerar o déficit carcerário.',
    ],
  },
  {
    id: 56, candidato: 'flavio', categoria: 'Segurança', pagina: 13,
    texto: 'Autorizar as forças de segurança a abater criminosos armados com fuzil.',
    simples: 'A polícia poderia atirar para matar em bandidos armados com fuzil.',
    trecho: 'Bandido armado com fuzil na mão vai ser abatido pelas forças de segurança.',
  },
  {
    id: 57, candidato: 'flavio', categoria: 'Segurança', pagina: 15,
    texto: 'Ocupar permanentemente portos e aeroportos com tropas especiais da Marinha e da Aeronáutica contra o tráfico de cocaína.',
    simples: 'Militares ficariam o tempo todo em portos e aeroportos para impedir a saída de drogas do país.',
    trecho: 'Nós vamos usar tropas especiais da Marinha e da Aeronáutica para ocupar e monitorar, de forma permanente, os portos e aeroportos brasileiros.',
  },
  {
    id: 58, candidato: 'flavio', categoria: 'Segurança', pagina: 15,
    texto: 'Dobrar o investimento federal em segurança pública ao longo do mandato.',
    simples: 'O governo federal gastaria o dobro com segurança pública em quatro anos.',
    trecho: 'O novo governo do Brasil vai dobrar os investimentos federais em segurança pública ao longo do mandato.',
  },
  {
    id: 59, candidato: 'flavio', categoria: 'Segurança', pagina: 14,
    texto: 'Mudar a lei para obrigar assassinos e agressores de mulheres a cumprir a pena integralmente.',
    simples: 'Quem matar ou agredir uma mulher cumpriria a pena inteira, sem redução nem saída antecipada.',
    trecho: 'Vamos endurecer a lei e obrigar assassinos e agressores de mulheres a cumprir integralmente suas penas.',
  },
  {
    id: 60, candidato: 'flavio', categoria: 'Segurança', pagina: 15,
    texto: 'Criar um sistema nacional de reconhecimento facial ligado a bancos de dados criminais, com mais de 1 milhão de novas câmeras.',
    simples: 'Câmeras espalhadas pelo país reconheceriam o rosto das pessoas para encontrar foragidos.',
    trecho: [
      'Vamos implantar o Muralha Brasileira - um sistema nacional de reconhecimento facial integrado a bancos de dados criminais',
      'vamos vigiar portos, aeroportos e áreas públicas com mais de 1 milhão de novas câmeras espalhadas por todo o país.',
    ],
  },
  {
    id: 61, candidato: 'flavio', categoria: 'Segurança', pagina: 16,
    texto: 'Quadruplicar a pena inicial de quem furta ou revende celular roubado, sem benefícios.',
    simples: 'Quem furtar ou vender celular roubado pegaria uma pena quatro vezes maior.',
    trecho: 'Quem furta ou revende um aparelho fruto de crime vai ter a pena inicial quadruplicada, também sem benefícios.',
  },
  {
    id: 62, candidato: 'flavio', categoria: 'Segurança', pagina: 15,
    texto: 'Redirecionar os recursos hoje pagos a famílias de presos para as famílias das vítimas.',
    simples: 'O dinheiro que hoje vai para a família de quem está preso iria para a família de quem foi vítima de crime.',
    trecho: 'Os recursos hoje direcionados às famílias de detentos serão redirecionados às famílias das vítimas',
  },
  // ---- Economia
  {
    id: 63, candidato: 'flavio', categoria: 'Economia', pagina: 30,
    texto: 'Revisar a reforma tributária aprovada para reduzir o IVA, o novo imposto sobre consumo.',
    simples: 'Mudar a reforma dos impostos para que o novo imposto cobrado nas compras seja menor.',
    trecho: 'Vamos corrigir suas distorções, reduzir o IVA, hoje projetado num dos patamares mais altos do mundo',
  },
  {
    id: 64, candidato: 'flavio', categoria: 'Economia', pagina: 31,
    texto: 'Reduzir impostos sobre energia elétrica e combustíveis.',
    simples: 'Cobrar menos imposto na conta de luz, na gasolina e no diesel.',
    trecho: 'Vamos reduzir impostos sobre energia elétrica e combustíveis',
  },
  {
    id: 65, candidato: 'flavio', categoria: 'Economia', pagina: 63,
    texto: 'Retomar a adesão do Brasil à OCDE, com o fim gradual do IOF sobre o câmbio.',
    simples: 'Voltar a tentar entrar no grupo de países ricos (OCDE) e, aos poucos, acabar com o imposto cobrado na compra de dólar.',
    trecho: 'O passo mais urgente é retomar o cronograma interrompido de adesão à OCDE, incluindo o fim gradual do IOF sobre o câmbio',
  },
  {
    id: 66, candidato: 'flavio', categoria: 'Economia', pagina: 69,
    texto: 'Cortar no mínimo 10 ministérios, reduzir cargos comissionados e combater penduricalhos e supersalários.',
    simples: 'Fechar ao menos dez ministérios, cortar indicados políticos e impedir que servidores ganhem acima do teto.',
    trecho: 'Isso inclui o corte de no mínimo 10 ministérios, a redução de cargos comissionados e de despesas administrativas e o combate aos penduricalhos e supersalários',
  },
  {
    id: 67, candidato: 'flavio', categoria: 'Economia', pagina: 70,
    texto: 'Retomar o Programa Nacional de Desestatização, avaliando caso a caso as estatais.',
    simples: 'Voltar a vender empresas do governo quando ele avaliar que não precisa mais ser dono delas.',
    trecho: 'vamos retomar o Programa Nacional de Desestatização com critério, avaliando caso a caso onde a presença do Estado deixou de fazer sentido.',
  },
  {
    id: 68, candidato: 'flavio', categoria: 'Economia', pagina: 44,
    texto: 'Criar contratos com menor custo na folha para jovens de 18 a 24 anos no primeiro emprego e para desempregados com 50 anos ou mais.',
    simples: 'Ficaria mais barato para a empresa contratar jovens no primeiro emprego e pessoas com mais de 50 anos.',
    trecho: [
      'trabalho para os 18 a 24 anos em busca do primeiro emprego, com menor custo na folha',
      'vamos criar um contrato mais atrativo para a contratação de pessoas com 50 anos ou mais desempregadas há pelo menos 12 meses',
    ],
  },
  {
    id: 69, candidato: 'flavio', categoria: 'Economia', pagina: 71,
    texto: 'Reformular as regras fiscais com foco na estabilização e na redução da dívida pública.',
    simples: 'Trocar a regra de gastos do governo por outra focada em diminuir a dívida do país.',
    trecho: 'Apresentaremos uma reformulação nas atuais regras fiscais, com regras claras focadas na estabilização e na redução da dívida pública conforme determina a Constituição.',
  },
  {
    id: 70, candidato: 'flavio', categoria: 'Economia', pagina: 44,
    texto: 'Fazer o negociado prevalecer sobre o legislado, permitindo que trabalhador e empresa combinem diretamente as condições de trabalho.',
    simples: 'O que a empresa combinar com o funcionário valeria mais do que a regra geral da lei.',
    trecho: 'Por isso defendemos o negociado sobre o legislado, ou seja, permitir que trabalhador e empresa combinem diretamente as condições de trabalho que funcionam para os dois, dentro da lei',
  },
  {
    id: 71, candidato: 'flavio', categoria: 'Economia', pagina: 45,
    texto: 'Manter o modelo atual de trabalho por aplicativos, com proteção previdenciária, sem dirigentes sindicais à frente da regulação.',
    simples: 'Motoristas e entregadores de aplicativo continuariam como estão hoje, com acesso ao INSS, sem regras definidas por sindicatos.',
    trecho: [
      'Nosso projeto garante a manutenção das oportunidades de renda e de trabalho trazidas pelo trabalho por aplicativos.',
      'Esses trabalhadores serão protegidos, sem os interesses de dirigentes sindicais a frente do processo.',
    ],
  },
  {
    id: 72, candidato: 'flavio', categoria: 'Economia', pagina: 54,
    texto: 'Criar ferramentas de securitização e reorganização das dívidas do agronegócio.',
    simples: 'Dar mais prazo e facilidades para o produtor rural renegociar o que deve.',
    trecho: 'Vamos ampliar o Seguro Rural e trazer ferramentas de securitização e reorganização das dívidas do setor',
  },
  {
    id: 73, candidato: 'flavio', categoria: 'Economia', pagina: 56,
    texto: 'Propor uma lei de inteligência artificial voltada à liberdade de criar e inovar, sem regras que afastem investimentos.',
    simples: 'Ter poucas regras para inteligência artificial, para não espantar as empresas de tecnologia.',
    trecho: 'Proporemos uma legislação voltada à liberdade de criar e inovar, inspirada nas melhores práticas internacionais, para que a tecnologia seja desenvolvida aqui sem entraves',
  },
  // ---- Social
  {
    id: 74, candidato: 'flavio', categoria: 'Social', pagina: 43,
    texto: 'Dar a beneficiários de programas sociais prioridade em primeiro emprego e qualificação, com volta imediata ao benefício após o seguro-desemprego.',
    simples: 'Quem recebe ajuda do governo teria preferência em cursos e vagas e, se perder o emprego, voltaria a receber a ajuda sem fila.',
    trecho: [
      'o beneficiário de programa social terá prioridade em todas as ações do Estado voltadas ao trabalho',
      'E garantiremos o retorno imediato e sem fila ao benefício após o seguro-desemprego, mantidas as condições de elegibilidade',
    ],
  },
  {
    id: 75, candidato: 'flavio', categoria: 'Social', pagina: 66,
    texto: 'Acabar com a reeleição para presidente da República.',
    simples: 'O presidente não poderia concorrer de novo logo depois do mandato.',
    trecho: 'E propomos o fim da reeleição para o cargo de Presidente da República.',
  },
  {
    id: 76, candidato: 'flavio', categoria: 'Social', pagina: 20,
    texto: 'Ajudar a mulher a obter a escritura da casa própria no seu nome.',
    simples: 'O governo ajudaria para que o documento da casa saísse no nome da mulher.',
    trecho: 'vamos assessorar a mulher a obter a escritura da casa própria no seu nome',
  },
  {
    id: 77, candidato: 'flavio', categoria: 'Social', pagina: 66,
    texto: 'Acabar com estruturas do Estado que funcionem como um "Ministério da Verdade", vigiando ou punindo o que as pessoas dizem.',
    simples: 'Fechar órgãos do governo que classificam publicações como falsas, por considerá-los censura.',
    trecho: 'Vamos fazer um Tesouraço da Censura: acabar com qualquer estrutura estatal que funcione como um “Ministério da Verdade", encarregada de vigiar, rotular ou punir o que as pessoas dizem.',
  },
  {
    id: 78, candidato: 'flavio', categoria: 'Social', pagina: 19,
    texto: 'Criar um programa de pontos em que pagar contas em dia, poupar e fazer cursos rendam juros menores e cashback.',
    simples: 'Quem paga as contas certinho e se capacita ganharia pontos para conseguir empréstimo mais barato e dinheiro de volta.',
    trecho: 'Com o Ganha, Ganha, atitudes como concluir cursos de capacitação, trabalhar de forma regular, poupar e pagar as contas em dia passarão a gerar pontuação positiva.',
  },
  {
    id: 79, candidato: 'flavio', categoria: 'Social', pagina: 41,
    texto: 'Garantir que a categoria feminina do esporte seja disputada só por atletas do sexo feminino.',
    simples: 'Mulheres trans não poderiam competir nas categorias femininas do esporte.',
    trecho: 'Vamos assegurar que a categoria feminina, da base ao alto rendimento, seja disputada por atletas do sexo feminino',
  },
  {
    id: 80, candidato: 'flavio', categoria: 'Social', pagina: 65,
    texto: 'Acabar com o julgamento de parlamentares diretamente pelo STF, passando os casos para outros tribunais.',
    simples: 'Deputados e senadores deixariam de ser julgados direto pelo Supremo e passariam a ser julgados por tribunais abaixo dele.',
    trecho: 'Fim das competências criminais originárias do STF, permitindo que parlamentares sejam julgados por instâncias inferiores, como o STJ ou os TRFs',
  },
  {
    id: 81, candidato: 'flavio', categoria: 'Social', pagina: 65,
    texto: 'Limitar as decisões individuais de ministros do STF, privilegiando as decisões do plenário.',
    simples: 'Um ministro do Supremo sozinho teria menos poder para suspender leis e decisões.',
    trecho: 'Limitação das decisões monocráticas do STF, privilegiando as decisões colegiadas',
  },
  {
    id: 82, candidato: 'flavio', categoria: 'Social', pagina: 50,
    texto: 'Dar autonomia a indígenas e quilombolas para decidir sobre atividades produtivas em suas terras.',
    simples: 'Indígenas e quilombolas poderiam decidir se plantam, criam gado ou fazem outros negócios nas suas terras.',
    trecho: 'Será conferida autonomia aos povos indígenas e quilombolas para decidir sobre atividades produtivas em suas terras',
  },
  // ---- Saúde
  {
    id: 83, candidato: 'flavio', categoria: 'Saúde', pagina: 38,
    texto: 'Entregar remédios em casa para idosos, pessoas com deficiência e doentes crônicos.',
    simples: 'O remédio chegaria na casa de idosos, pessoas com deficiência e pessoas com doenças de longa duração.',
    trecho: 'um sistema de entrega de remédio em domicílio vai garantir que o idoso, a pessoa com deficiência e o doente crônico não precisem escolher entre buscar o tratamento e pagar o transporte.',
  },
  {
    id: 84, candidato: 'flavio', categoria: 'Saúde', pagina: 37,
    texto: 'Garantir a correção efetiva da tabela de valores que o SUS paga a hospitais e clínicas.',
    simples: 'Aumentar o valor que o SUS paga aos hospitais e santas casas por cada consulta, exame ou cirurgia.',
    trecho: 'Vamos garantir as condições para que seja possível a correção efetiva da tabela SUS.',
  },
  {
    id: 85, candidato: 'flavio', categoria: 'Saúde', pagina: 39,
    texto: 'Subsidiar adaptações de acessibilidade nas casas de idosos de famílias de menor renda.',
    simples: 'O governo ajudaria a pagar barras, rampas e outras adaptações para o idoso viver em casa com segurança.',
    trecho: 'vamos oferecer o programa Casa Segura para Envelhecer, com subsídio à acessibilidade domiciliar para famílias de menor renda.',
  },
  // ---- Educação
  {
    id: 86, candidato: 'flavio', categoria: 'Educação', pagina: 35,
    texto: 'Priorizar o método fônico na alfabetização e vincular repasses às escolas a metas de aprendizagem.',
    simples: 'Ensinar a ler pelo som das letras, e quem ensinar melhor recebe mais dinheiro do governo.',
    trecho: [
      'Vamos priorizar o método fônico, que é o de melhor resultado comprovado pela ciência',
      'o financiamento seguirá o orçamento por resultados, com repasses vinculados a metas de aprendizagem',
    ],
  },
  {
    id: 87, candidato: 'flavio', categoria: 'Educação', pagina: 35,
    texto: 'Ampliar as escolas cívico-militares.',
    simples: 'Mais escolas públicas com disciplina e organização no estilo militar.',
    trecho: 'Vamos ampliar as Escolas Cívico-Militares',
  },
  {
    id: 88, candidato: 'flavio', categoria: 'Educação', pagina: 36,
    texto: 'Dar voucher para matricular o filho em outra escola quando faltar vaga na rede pública.',
    simples: 'Se não tiver vaga na escola pública, o governo paga para a criança estudar em outra escola.',
    trecho: 'onde faltar vaga na rede pública, a família receberá um voucher educacional para matricular o filho em outra escola',
  },
  {
    id: 89, candidato: 'flavio', categoria: 'Educação', pagina: 35,
    texto: 'Pagar alunos de bom desempenho para dar reforço aos colegas com dificuldade.',
    simples: 'Bons alunos ganhariam um dinheiro para ajudar os colegas que estão com dificuldade.',
    trecho: 'vamos criar o Programa Acolher: um aluno com bom desempenho é remunerado para dar reforço aos colegas que precisam',
  },
  {
    id: 90, candidato: 'flavio', categoria: 'Educação', pagina: 35,
    texto: 'Orientar a educação para ser livre de doutrinação político-partidária, respeitando o papel das famílias.',
    simples: 'Impedir que professores influenciem os alunos sobre política em sala de aula, deixando os valores para os pais.',
    trecho: 'A educação será orientada pelo conhecimento e livre de doutrinação político-partidária, respeitando a liberdade de consciência e o papel das famílias.',
  },
  {
    id: 91, candidato: 'flavio', categoria: 'Educação', pagina: 36,
    texto: 'Transferir o ensino superior para o Ministério da Ciência, Tecnologia e Inovações.',
    simples: 'As universidades passariam a ser cuidadas pelo ministério da ciência, e não mais pelo da educação.',
    trecho: 'No ensino superior, vamos transferir a governança para o Ministério da Ciência, Tecnologia e Inovações',
  },
  {
    id: 92, candidato: 'flavio', categoria: 'Educação', pagina: 37,
    texto: 'Trocar o financiamento estudantil atual por um empréstimo pago só quando o estudante estiver empregado, com parcela proporcional ao salário.',
    simples: 'O governo empresta o dinheiro da faculdade, e o estudante só começa a pagar quando arrumar emprego.',
    trecho: 'vamos adotar o Empréstimo Contingente à Renda: o estudante só começa a pagar quando estiver empregado e ganhando',
  },
  {
    id: 93, candidato: 'flavio', categoria: 'Educação', pagina: 36,
    texto: 'Fazer a formação técnica do ensino médio em parceria com empresas, que poderão custear bolsas de formação.',
    simples: 'Os cursos técnicos seriam feitos junto com as empresas, que poderiam pagar bolsas para formar os profissionais de que precisam.',
    trecho: 'Nessa parceria, o setor produtivo poderá custear bolsas de formação técnica',
  },
  // ---- Meio Ambiente
  {
    id: 94, candidato: 'flavio', categoria: 'Meio Ambiente', pagina: 50,
    texto: 'Conceder a licença ambiental automaticamente se o órgão não decidir dentro do prazo.',
    simples: 'Se o órgão ambiental demorar demais para analisar uma obra, ela fica liberada.',
    trecho: 'Se não decidir nem se manifestar dentro desse prazo, a licença deve ser concedida',
  },
  {
    id: 95, candidato: 'flavio', categoria: 'Meio Ambiente', pagina: 50,
    texto: 'Garantir estabilidade das regras por até 20 anos para grandes projetos, com o Estado indenizando se voltar atrás.',
    simples: 'Depois de liberada, uma grande obra teria as regras congeladas por até 20 anos; se o governo mudar, paga o prejuízo à empresa.',
    trecho: [
      'Para os grandes projetos de longa maturação, criaremos mecanismos de estabilidade das regras de até 20 anos',
      'o Estado deve responder pelos prejuízos se voltar atrás sem que o empreendedor tenha dado causa',
    ],
  },
  {
    id: 96, candidato: 'flavio', categoria: 'Meio Ambiente', pagina: 52,
    texto: 'Permitir a exploração de gás não convencional por fraturamento hidráulico (fracking).',
    simples: 'Permitir tirar gás de rochas no subsolo quebrando-as com água, areia e produtos químicos sob pressão.',
    trecho: 'permitir a exploração do gás não convencional (fracking) com responsabilidade ambiental e cumprindo a lei',
  },
  {
    id: 97, candidato: 'flavio', categoria: 'Meio Ambiente', pagina: 59,
    texto: 'Eliminar sobreposições entre Ibama, Funai e ICMBio.',
    simples: 'Mudar o que cada órgão ambiental e indígena faz, para que não façam o mesmo trabalho em dobro.',
    trecho: 'Vamos eliminar superposições entre Ibama, Funai e ICMBio, dando eficiência à fiscalização',
  },
  {
    id: 98, candidato: 'flavio', categoria: 'Meio Ambiente', pagina: 59,
    texto: 'Exigir transparência de financiadores e projetos de ONGs que recebem recursos internacionais e processam a União.',
    simples: 'ONGs que recebem dinheiro de fora do país teriam de mostrar quem as financia e o que fazem.',
    trecho: 'exigir transparência de financiadores e de projetos das ONGs que recebem recursos internacionais e judicializam ações contra a União',
  },
  {
    id: 99, candidato: 'flavio', categoria: 'Meio Ambiente', pagina: 58,
    texto: 'Focar a fiscalização ambiental em grileiros e desmatadores ilegais, sem criar novas obrigações para o produtor rural.',
    simples: 'A fiscalização iria atrás de quem invade terras e desmata ilegalmente, sem novas exigências para quem produz dentro da lei.',
    trecho: 'O foco será identificar e combater a grilagem de terras, a ocupação ilegal de áreas públicas e os responsáveis pelo desmatamento ilegal, sem criar novas obrigações ou custos desnecessários para o produtor rural que atua dentro da lei.',
  },
  {
    id: 100, candidato: 'flavio', categoria: 'Meio Ambiente', pagina: 59,
    texto: 'Acabar com a política que criminaliza o morador da floresta, trocando a punição por orientação e regularização.',
    simples: 'Ribeirinhos e pequenos produtores da Amazônia receberiam orientação em vez de multas e punições.',
    trecho: 'Vamos acabar com a política que criminaliza o morador da floresta, substituindo a punição cega por um caminho de orientação, regularização e oportunidade.',
  },
]

export const PROPOSTAS_POR_ID = Object.fromEntries(PROPOSTAS.map((p) => [p.id, p]))

// Link que abre o PDF do plano direto na página da proposta.
export function linkPagina(proposta) {
  return `${CANDIDATOS[proposta.candidato].pdf}#page=${proposta.pagina}`
}
