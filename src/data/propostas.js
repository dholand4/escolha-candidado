// Lista fixa de propostas, resumidas de forma neutra a partir dos planos de governo
// registrados no TSE para as Eleições 2026 e da cobertura jornalística sobre eles.
// O texto não revela o autor; o campo `candidato` só aparece no gabarito.

export const CANDIDATOS = {
  lula: {
    id: 'lula',
    nome: 'Lula',
    nomeCompleto: 'Luiz Inácio Lula da Silva',
    partido: 'PT',
    plano: 'Programa de Governo 2026 (84 páginas, 13 diretrizes)',
    cor: '#f43f5e',
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
    gradiente: 'from-sky-400 to-indigo-500',
    texto: 'text-sky-300',
    borda: 'border-sky-400/40',
    fundo: 'bg-sky-500/15',
  },
}

export const CATEGORIAS = ['Economia', 'Segurança', 'Saúde', 'Educação', 'Meio Ambiente', 'Social']

export const PROPOSTAS = [
  // ---------------------------------------------------------------- Lula (25)
  // Economia
  { id: 1, candidato: 'lula', categoria: 'Economia', texto: 'Garantir isenção total do Imposto de Renda para quem ganha até R$ 5 mil por mês.' },
  { id: 2, candidato: 'lula', categoria: 'Economia', texto: 'Aumentar a tributação sobre as pessoas de renda mais alta, em nome da justiça tributária.' },
  { id: 3, candidato: 'lula', categoria: 'Economia', texto: 'Manter a política de valorização do salário mínimo, com reajustes anuais acima da inflação.' },
  { id: 4, candidato: 'lula', categoria: 'Economia', texto: 'Promover a reindustrialização do país com o Estado como indutor, priorizando inteligência artificial e minerais críticos.' },
  { id: 5, candidato: 'lula', categoria: 'Economia', texto: 'Fazer a Petrobras voltar a atuar na distribuição de combustíveis.' },
  // Social
  { id: 6, candidato: 'lula', categoria: 'Social', texto: 'Acabar com a escala de trabalho 6x1, adotando jornada de 40 horas semanais sem redução de salário.' },
  { id: 7, candidato: 'lula', categoria: 'Social', texto: 'Ampliar o programa federal de habitação popular para todas as faixas de renda, mantendo prioridade às famílias mais pobres.' },
  { id: 8, candidato: 'lula', categoria: 'Social', texto: 'Criar uma Política Nacional de Envelhecimento Ativo e expandir o atendimento domiciliar a idosos.' },
  { id: 9, candidato: 'lula', categoria: 'Social', texto: 'Manter as cotas raciais e sociais nos concursos públicos federais.' },
  // Saúde
  { id: 10, candidato: 'lula', categoria: 'Saúde', texto: 'Reduzir filas de consultas e cirurgias com especialistas por meio de uma fila única digital e de parcerias com a rede privada.' },
  { id: 11, candidato: 'lula', categoria: 'Saúde', texto: 'Incluir exames laboratoriais gratuitos no programa federal de farmácias que oferece remédios gratuitos ou subsidiados.' },
  { id: 12, candidato: 'lula', categoria: 'Saúde', texto: 'Manter e ampliar o programa federal que leva médicos para regiões carentes e do interior.' },
  { id: 13, candidato: 'lula', categoria: 'Saúde', texto: 'Ampliar o uso da telemedicina no SUS.' },
  // Educação
  { id: 14, candidato: 'lula', categoria: 'Educação', texto: 'Elevar para 80% a taxa de crianças alfabetizadas na idade certa.' },
  { id: 15, candidato: 'lula', categoria: 'Educação', texto: 'Priorizar a expansão das matrículas em escolas de tempo integral.' },
  { id: 16, candidato: 'lula', categoria: 'Educação', texto: 'Ampliar a poupança paga a estudantes de baixa renda do ensino médio para que permaneçam na escola.' },
  { id: 17, candidato: 'lula', categoria: 'Educação', texto: 'Ampliar o número de vagas em creches públicas.' },
  // Segurança
  { id: 18, candidato: 'lula', categoria: 'Segurança', texto: 'Criar um Ministério da Segurança Pública, separado do Ministério da Justiça.' },
  { id: 19, candidato: 'lula', categoria: 'Segurança', texto: 'Aprovar uma emenda constitucional que amplia o papel da União e integra as polícias no combate ao crime.' },
  { id: 20, candidato: 'lula', categoria: 'Segurança', texto: 'Combater facções pela "asfixia financeira": bloquear dinheiro, bens e empresas ligados ao crime organizado.' },
  { id: 21, candidato: 'lula', categoria: 'Segurança', texto: 'Transformar 138 unidades prisionais em presídios de segurança máxima para isolar lideranças de facções.' },
  // Meio Ambiente
  { id: 22, candidato: 'lula', categoria: 'Meio Ambiente', texto: 'Atingir desmatamento líquido zero até 2030, com fiscalização, regularização fundiária e recuperação de áreas degradadas.' },
  { id: 23, candidato: 'lula', categoria: 'Meio Ambiente', texto: 'Fortalecer os órgãos federais de fiscalização ambiental no combate a crimes ambientais.' },
  { id: 24, candidato: 'lula', categoria: 'Meio Ambiente', texto: 'Destinar mais terras públicas a unidades de conservação e a territórios indígenas e quilombolas.' },
  { id: 25, candidato: 'lula', categoria: 'Meio Ambiente', texto: 'Ampliar o pagamento a produtores e comunidades por serviços ambientais, como a restauração de florestas.' },

  // ------------------------------------------------------ Flávio Bolsonaro (25)
  // Segurança
  { id: 26, candidato: 'flavio', categoria: 'Segurança', texto: 'Reduzir a maioridade penal, permitindo punir adolescentes como adultos em crimes graves.' },
  { id: 27, candidato: 'flavio', categoria: 'Segurança', texto: 'Aplicar castração química a condenados por crimes sexuais.' },
  { id: 28, candidato: 'flavio', categoria: 'Segurança', texto: 'Acabar com a progressão de regime de pena para condenados por crimes hediondos.' },
  { id: 29, candidato: 'flavio', categoria: 'Segurança', texto: 'Classificar facções como PCC, Comando Vermelho e milícias como organizações narcoterroristas.' },
  { id: 30, candidato: 'flavio', categoria: 'Segurança', texto: 'Construir novos presídios federais de segurança máxima.' },
  // Economia
  { id: 31, candidato: 'flavio', categoria: 'Economia', texto: 'Revisar a reforma tributária aprovada para reduzir a alíquota do novo imposto sobre consumo (IVA).' },
  { id: 32, candidato: 'flavio', categoria: 'Economia', texto: 'Zerar os tributos federais sobre combustíveis e energia elétrica.' },
  { id: 33, candidato: 'flavio', categoria: 'Economia', texto: 'Extinguir pelo menos dez ministérios, cortar cargos comissionados e acabar com supersalários no setor público.' },
  { id: 34, candidato: 'flavio', categoria: 'Economia', texto: 'Retomar o programa de privatizações, concentrando o Estado em suas funções essenciais.' },
  { id: 35, candidato: 'flavio', categoria: 'Economia', texto: 'Criar contratos de trabalho com menos encargos para jovens de 18 a 24 anos no primeiro emprego e desempregados com mais de 50 anos.' },
  // Social
  { id: 36, candidato: 'flavio', categoria: 'Social', texto: 'Manter os programas de transferência de renda, dando aos beneficiários prioridade em qualificação e primeiro emprego, com volta garantida ao benefício se perderem o trabalho.' },
  { id: 37, candidato: 'flavio', categoria: 'Social', texto: 'Criar uma linha de microcrédito específica para mulheres empreendedoras.' },
  { id: 38, candidato: 'flavio', categoria: 'Social', texto: 'Acabar com a reeleição para presidente, governadores e prefeitos.' },
  { id: 39, candidato: 'flavio', categoria: 'Social', texto: 'Redirecionar recursos hoje pagos a famílias de presos para amparar as famílias das vítimas de crimes.' },
  // Saúde
  { id: 40, candidato: 'flavio', categoria: 'Saúde', texto: 'Entregar remédios em casa para idosos, doentes crônicos e pessoas com deficiência.' },
  { id: 41, candidato: 'flavio', categoria: 'Saúde', texto: 'Corrigir a tabela de valores que o SUS paga a hospitais e profissionais por procedimentos.' },
  { id: 42, candidato: 'flavio', categoria: 'Saúde', texto: 'Investir na produção nacional de vacinas.' },
  { id: 43, candidato: 'flavio', categoria: 'Saúde', texto: 'Compartilhar os prontuários dos pacientes do SUS com hospitais privados para integrar o atendimento.' },
  // Educação
  { id: 44, candidato: 'flavio', categoria: 'Educação', texto: 'Adotar o método fônico na alfabetização e vincular repasses federais ao cumprimento de metas de aprendizagem.' },
  { id: 45, candidato: 'flavio', categoria: 'Educação', texto: 'Ampliar o número de escolas cívico-militares.' },
  { id: 46, candidato: 'flavio', categoria: 'Educação', texto: 'Oferecer vouchers para escolas e creches privadas onde faltarem vagas na rede pública.' },
  { id: 47, candidato: 'flavio', categoria: 'Educação', texto: 'Pagar uma bolsa a alunos de bom desempenho para que ajudem colegas com dificuldade de aprendizagem.' },
  // Meio Ambiente
  { id: 48, candidato: 'flavio', categoria: 'Meio Ambiente', texto: 'Conceder licença ambiental automaticamente quando o órgão responsável não responder dentro do prazo.' },
  { id: 49, candidato: 'flavio', categoria: 'Meio Ambiente', texto: 'Zerar o desmatamento ilegal até 2029, concentrando a fiscalização em organizações criminosas, sem criar novas obrigações ao produtor rural.' },
  { id: 50, candidato: 'flavio', categoria: 'Meio Ambiente', texto: 'Autorizar a exploração de gás de xisto pelo fraturamento hidráulico (fracking).' },
]

export const PROPOSTAS_POR_ID = Object.fromEntries(PROPOSTAS.map((p) => [p.id, p]))

export const FONTES = [
  { nome: 'TSE — Planos de governo (2º turno, Eleições 2026)', url: 'https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno' },
  { nome: 'Agência Brasil — planos de Flávio e Lula para meio ambiente', url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-10/veja-como-os-planos-de-governo-de-flavio-e-lula-tratam-meio-ambiente' },
  { nome: 'Agência Brasil — Flávio propõe enxugar Estado e endurecer segurança', url: 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/flavio-bolsonaro-propoe-enxugar-estado-e-endurecer-acoes-de-seguranca' },
  { nome: 'Congresso em Foco — o plano de Lula para novo mandato', url: 'https://www.congressoemfoco.com.br/noticia/121276/fim-da-6x1-soberania-e-seguranca-o-plano-de-lula-para-novo-mandato' },
  { nome: 'Exame — planos para a economia de Lula e Flávio', url: 'https://exame.com/brasil/eleicoes-2026-veja-os-planos-de-economia-de-lula-e-flavio-bolsonaro/' },
]
