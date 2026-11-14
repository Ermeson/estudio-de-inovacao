export interface CanvasBlockData {
  id: string;
  title: string;
  description: string;
  placeholder: string;
  content: string;
  category: string;
  gridSpan: string;
}

export interface CanvasDemo {
  title: string;
  blocks: Record<string, string>;
}

export interface CanvasConfig {
  id: string;
  path: string;
  label: string;
  subtitle: string;
  defaultTitle: string;
  fileSuffix: string;
  gridContainerClassName: string;
  blocks: CanvasBlockData[];
  suggestions: Record<string, string>;
  demo?: CanvasDemo;
}

const AI_CANVAS_BLOCKS: CanvasBlockData[] = [
  {
    id: 'problem',
    title: 'O Problema',
    description: 'A descrição clara da "dor" que você quer curar.',
    placeholder: 'Qual o cenário crítico atual? Qual o impacto do problema?',
    content: '',
    category: 'CONTEXTO',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'persona',
    title: 'O Público (Persona)',
    description: 'Quem sofre com o problema e quem será o usuário final.',
    placeholder: 'Quem são as pessoas impactadas? Qual o perfil do usuário?',
    content: '',
    category: 'CONTEXTO',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'value-prop',
    title: 'Proposta de Solução AI-Based',
    description: 'Benefício que a solução traz que um software comum não traria.',
    placeholder: "Qual a 'mágica' exclusiva da inteligência artificial neste contexto?",
    content: '',
    category: 'SOLUÇÃO',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'interaction',
    title: 'Mecanismos de Interação',
    description: 'Como a solução se apresenta e como o usuário interage.',
    placeholder: 'Chatbot, dashboard, API, extensão de navegador, voz?',
    content: '',
    category: 'OPERAÇÃO',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'prediction',
    title: 'Ferramentas Utilizadas',
    description: 'As tecnologias, frameworks e bibliotecas que compõem a solução.',
    placeholder: 'Quais ferramentas, técnicas e tecnologias planeja utilizar?',
    content: '',
    category: 'MECÂNICA',
    gridSpan: 'col-span-12 md:col-span-4',
  },
  {
    id: 'guardrails',
    title: 'Guardrails',
    description: 'Mecanismos de segurança e validação que restringem o comportamento de modelos de IA',
    placeholder: 'Filtros de conteúdo, moderação de saída, restrições de domínio?',
    content: '',
    category: 'QUALIDADE',
    gridSpan: 'col-span-12 md:col-span-4',
  },
  {
    id: 'data-sources',
    title: 'Fontes de Dados (A Matéria-Prima)',
    description: 'De onde virão as informações para "ensinar" a IA. Elas são éticas?',
    placeholder: 'APIs, bancos de dados, logs históricos, sensores...',
    content: '',
    category: 'INFRAESTRUTURA',
    gridSpan: 'col-span-12 md:col-span-4',
  },
  {
    id: 'hallucination',
    title: 'Veracidade e Alucinação',
    description: 'Mecanismos de checagem para garantir que a IA não gere desinformação ou fatos inventados.',
    placeholder: 'Como você validará a precisão das respostas? Haverá RAG ou revisão humana?',
    content: '',
    category: 'GOVERNANÇA',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'transparency',
    title: 'Transparência e Explicabilidade',
    description: 'A capacidade de explicar por que a IA chegou àquela conclusão.',
    placeholder: 'Como o usuário saberá os motivos por trás da recomendação?',
    content: '',
    category: 'ÉTICA',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'automation-bias',
    title: 'Viés de Automação',
    description: 'Como garantir que o risco de confiar cegamente na máquina seja mitigado por design.',
    placeholder: 'Alertas de incerteza, revisões obrigatórias ou variações de resposta?',
    content: '',
    category: 'CULTURA',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'metrics',
    title: 'Métricas de Sucesso e ROI',
    description: 'Como saberemos que o projeto deu certo e se pagou.',
    placeholder: 'KPIs de negócio, precisão do modelo e economia de tempo.',
    content: '',
    category: 'RESULTADO',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
];

const BUSINESS_MODEL_CANVAS_BLOCKS: CanvasBlockData[] = [
  {
    id: 'key-partners',
    title: 'Parcerias Principais',
    description: 'Quem são os parceiros e fornecedores essenciais para o modelo funcionar.',
    placeholder: 'Quais parceiros-chave, fornecedores e alianças estratégicas o negócio depende?',
    content: '',
    category: 'INFRAESTRUTURA',
    gridSpan: 'col-span-1 md:[grid-area:1/1/3/3]',
  },
  {
    id: 'key-activities',
    title: 'Atividades-Chave',
    description: 'As ações mais importantes que a empresa deve executar para entregar valor.',
    placeholder: 'Quais atividades essenciais sustentam a proposta de valor, os canais e o relacionamento?',
    content: '',
    category: 'INFRAESTRUTURA',
    gridSpan: 'col-span-1 md:[grid-area:1/3/2/5]',
  },
  {
    id: 'key-resources',
    title: 'Recursos Principais',
    description: 'Os ativos estratégicos necessários para criar e entregar a proposta de valor.',
    placeholder: 'Quais recursos físicos, intelectuais, humanos ou financeiros são indispensáveis?',
    content: '',
    category: 'INFRAESTRUTURA',
    gridSpan: 'col-span-1 md:[grid-area:2/3/3/5]',
  },
  {
    id: 'value-proposition',
    title: 'Proposta de Valor',
    description: 'O conjunto de produtos e serviços que cria valor para um segmento de clientes.',
    placeholder: 'Que problema você resolve? Qual valor você entrega a cada segmento de clientes?',
    content: '',
    category: 'OFERTA',
    gridSpan: 'col-span-1 md:[grid-area:1/5/3/7]',
  },
  {
    id: 'customer-relationships',
    title: 'Relacionamento com Clientes',
    description: 'O tipo de relação que a empresa estabelece com cada segmento de clientes.',
    placeholder: 'Como você adquire, mantém e expande a base de clientes?',
    content: '',
    category: 'CLIENTES',
    gridSpan: 'col-span-1 md:[grid-area:1/7/2/9]',
  },
  {
    id: 'channels',
    title: 'Canais',
    description: 'Como a proposta de valor é comunicada, vendida e entregue aos clientes.',
    placeholder: 'Quais canais de comunicação, distribuição e vendas serão utilizados?',
    content: '',
    category: 'CLIENTES',
    gridSpan: 'col-span-1 md:[grid-area:2/7/3/9]',
  },
  {
    id: 'customer-segments',
    title: 'Segmentos de Clientes',
    description: 'Os diferentes grupos de pessoas ou organizações que a empresa deseja alcançar.',
    placeholder: 'Para quem você está criando valor? Quem são seus clientes mais importantes?',
    content: '',
    category: 'CLIENTES',
    gridSpan: 'col-span-1 md:[grid-area:1/9/3/11]',
  },
  {
    id: 'cost-structure',
    title: 'Estrutura de Custos',
    description: 'Todos os custos envolvidos na operação do modelo de negócio.',
    placeholder: 'Quais são os custos mais importantes do modelo? Quais recursos e atividades são mais caros?',
    content: '',
    category: 'FINANÇAS',
    gridSpan: 'col-span-1 md:[grid-area:3/1/5/6]',
  },
  {
    id: 'revenue-streams',
    title: 'Fontes de Receita',
    description: 'Como a empresa gera receita a partir de cada segmento de clientes.',
    placeholder: 'Por quais formas de pagamento os clientes estão dispostos a pagar? Qual o modelo de precificação?',
    content: '',
    category: 'FINANÇAS',
    gridSpan: 'col-span-1 md:[grid-area:3/6/5/11]',
  },
];

const MVP_CANVAS_BLOCKS: CanvasBlockData[] = [
  {
    id: 'personas',
    title: 'Personas Segmentadas',
    description: 'Os perfis de usuários ou clientes que este MVP pretende atender.',
    placeholder: 'Quem são as personas-alvo deste MVP?',
    content: '',
    category: 'CLIENTE',
    gridSpan: 'col-span-1 md:[grid-area:1/1/3/2]',
  },
  {
    id: 'jornadas',
    title: 'Jornadas',
    description: 'Os passos que a persona percorre até obter valor com o produto.',
    placeholder: 'Qual a jornada da persona até alcançar o resultado esperado?',
    content: '',
    category: 'CLIENTE',
    gridSpan: 'col-span-1 md:[grid-area:3/1/5/2]',
  },
  {
    id: 'proposta-mvp',
    title: 'Proposta do MVP',
    description: 'O que é o MVP e qual hipótese de negócio ele busca validar.',
    placeholder: 'Qual é a proposta central do MVP? Que hipótese ele vai testar?',
    content: '',
    category: 'PRODUTO',
    gridSpan: 'col-span-1 md:[grid-area:1/2/2/3]',
  },
  {
    id: 'funcionalidades',
    title: 'Funcionalidades',
    description: 'O conjunto mínimo de funcionalidades necessárias para entregar a proposta do MVP.',
    placeholder: 'Quais funcionalidades essenciais o MVP precisa ter — e o que pode ficar de fora?',
    content: '',
    category: 'PRODUTO',
    gridSpan: 'col-span-1 md:[grid-area:2/2/4/3]',
  },
  {
    id: 'custo-cronograma',
    title: 'Custo & Cronograma',
    description: 'O investimento e o prazo estimados para construir e validar o MVP.',
    placeholder: 'Qual o custo e o prazo estimados para este MVP?',
    content: '',
    category: 'PRODUTO',
    gridSpan: 'col-span-1 md:[grid-area:4/2/5/3]',
  },
  {
    id: 'resultado-esperado',
    title: 'Resultado Esperado',
    description: 'O impacto de negócio que se espera alcançar com o MVP.',
    placeholder: 'Qual resultado de negócio o MVP deve gerar?',
    content: '',
    category: 'RESULTADO',
    gridSpan: 'col-span-1 md:[grid-area:1/3/3/4]',
  },
  {
    id: 'metricas-validacao',
    title: 'Métricas para Validar as Hipóteses de Negócio',
    description: 'Os indicadores que confirmarão, ou não, as hipóteses assumidas.',
    placeholder: 'Quais métricas indicarão que a hipótese foi validada?',
    content: '',
    category: 'RESULTADO',
    gridSpan: 'col-span-1 md:[grid-area:3/3/5/4]',
  },
];

export const CANVASES: CanvasConfig[] = [
  {
    id: 'ai',
    path: 'ia-project-canvas',
    label: 'IA Project Canvas',
    subtitle: 'Modele uma solução de IA de ponta',
    defaultTitle: 'Untitled Strategy',
    fileSuffix: 'IA',
    gridContainerClassName: 'grid-cols-1 md:grid-cols-12 auto-rows-fr',
    blocks: AI_CANVAS_BLOCKS,
    suggestions: {
      problem: 'Sugiro focar na predição de Churn Risk para aumentar o ROI nos primeiros 6 meses. Deseja aplicar as métricas sugeridas?',
      'value-prop': "A IA poderia atuar como um 'copiloto' de decisões, reduzindo o tempo de análise em 40%.",
      metrics: 'Considere incluir o custo de aquisição de cliente (CAC) vs o valor vitalício (LTV) como métrica primária.',
      default: 'Com base nos dados atuais, recomendo otimizar o fluxo de coleta de dados para maior precisão.',
    },
  },
  {
    id: 'bmc',
    path: 'business-model-canvas',
    label: 'Business Model Canvas',
    subtitle: 'Desenhe o modelo de negócio da sua iniciativa',
    defaultTitle: 'Untitled Business Model',
    fileSuffix: 'BMC',
    gridContainerClassName: 'grid-cols-1 md:grid-cols-10 md:[grid-template-rows:11fr_11fr_5fr_5fr]',
    blocks: BUSINESS_MODEL_CANVAS_BLOCKS,
    suggestions: {
      'value-proposition': 'Destaque o diferencial competitivo em uma frase: o que torna sua proposta impossível de ignorar?',
      'customer-segments': 'Considere segmentar por comportamento, não apenas por demografia — isso refina o encaixe produto-mercado.',
      'revenue-streams': 'Avalie modelos híbridos (assinatura + uso) para capturar mais valor ao longo do tempo.',
      default: 'Com base no restante do canvas, recomendo validar esta hipótese com entrevistas reais de clientes.',
    },
    demo: {
      title: 'Plataforma de Estágios por Área',
      blocks: {
        'customer-segments':
          'Estudantes em fase final da graduação que buscam estágio; empresas que precisam divulgar vagas e encontrar candidatos qualificados, especialmente nas áreas inicialmente validadas.',
        'value-proposition':
          'Para estudantes: acesso gratuito a vagas organizadas por área, com informações claras e candidatura simplificada.\n\nPara empresas: divulgação de vagas para um público relevante, gestão das candidaturas e planos que acompanham o volume de recrutamento.',
        channels:
          'Site da plataforma, visitas e parcerias com faculdades, centros acadêmicos, serviços de carreira, redes sociais e campanhas digitais.',
        'customer-relationships':
          'Estudantes recebem uma experiência gratuita e simples para buscar vagas e acompanhar suas candidaturas. Empresas contam com suporte no cadastro e na divulgação das vagas, além de uma área para gerenciar anúncios e candidaturas.',
        'revenue-streams':
          'Assinaturas mensais pagas pelas empresas, com pacotes definidos pelo número de vagas ativas e pelas funcionalidades incluídas. Vagas adicionais podem ser cobradas à parte. A candidatura dos estudantes permanece gratuita.\n\nEstrutura sugerida dos pacotes — comece com poucos planos, fáceis de entender e comparar:\n- Básico: poucas vagas ativas, cadastro e recebimento de candidaturas.\n- Profissional: mais vagas, filtros e organização de candidatos, além de métricas básicas.\n- Empresarial: maior volume de vagas, múltiplos usuários e suporte prioritário.\n\nDefina preços e limites após conversar com as empresas que participaram do piloto. Assim, os pacotes refletem a frequência de contratação e o valor percebido, sem cobrar por funções que ainda não foram validadas.',
        'key-resources':
          'Plataforma e banco de vagas, sistema de cadastro e candidatura, equipe responsável por revisar anúncios, relacionamento com empresas e faculdades, e dados de uso para aprimorar o serviço.',
        'key-activities':
          'Atrair empresas e estudantes, revisar e publicar vagas, manter a plataforma, apoiar o processo de candidatura e acompanhar a qualidade e o desempenho dos anúncios.',
        'key-partners':
          'Faculdades, centros acadêmicos e serviços de carreira; empresas contratantes; comunidades estudantis e canais de divulgação profissional.',
        'cost-structure':
          'Desenvolvimento e manutenção do site, ferramentas digitais, divulgação e aquisição de usuários, atendimento e operação de revisão das vagas.',
      },
    },
  },
  {
    id: 'mvp',
    path: 'mvp-canvas',
    label: 'MVP Canvas',
    subtitle: 'Desenhe o MVP e as hipóteses que ele precisa validar',
    defaultTitle: 'Untitled MVP',
    fileSuffix: 'MVP',
    gridContainerClassName: 'grid-cols-1 md:grid-cols-3 md:grid-rows-4',
    blocks: MVP_CANVAS_BLOCKS,
    suggestions: {
      funcionalidades: 'Liste apenas as funcionalidades indispensáveis para testar a hipótese central — corte tudo que for "bom ter".',
      'metricas-validacao': 'Defina um critério numérico de sucesso antes de lançar: isso evita viés na leitura dos resultados.',
      'custo-cronograma': 'Compare o custo do MVP com o custo de continuar supondo sem aprender nada com usuários reais.',
      default: 'Volte à proposta do MVP e verifique se este bloco está realmente alinhado com a hipótese que você quer validar.',
    },
    demo: {
      title: 'Plataforma de Estágios por Área',
      blocks: {
        personas:
          'Estudante em fase final da graduação: está se preparando para ingressar no mercado de trabalho e busca um estágio alinhado à sua área de formação. Valoriza vagas atualizadas, requisitos claros e filtros que facilitem encontrar oportunidades compatíveis com sua disponibilidade e localização.\n\nEmpresa que busca estagiários: precisa divulgar oportunidades e encontrar estudantes qualificados para seus processos seletivos. Valoriza um cadastro simples de vagas e candidaturas que atendam aos requisitos informados.',
        'proposta-mvp':
          'Um site para encontrar e se candidatar a vagas de estágio organizadas por área, com informações claras e atualizadas.',
        funcionalidades:
          '- Empresas enviam vagas por um formulário.\n- Um operador revisa as informações e publica as vagas.\n- Candidatos consultam uma área de vagas com filtros por área.\n- Cada vaga apresenta requisitos, localidade, modalidade, prazo e instruções para candidatura.\n- A candidatura é feita pelo site ou por um link indicado pela empresa.',
        jornadas:
          '1. A empresa preenche o formulário de cadastro da vaga.\n2. O operador confere e publica a vaga na área correspondente.\n3. O candidato filtra e consulta as vagas disponíveis.\n4. O candidato se candidata conforme as instruções da vaga.',
        'custo-cronograma':
          'Custo: R$ 400 por mês — R$ 100 para o Lovable e R$ 300 para tráfego pago.\n\nCronograma: na primeira semana, desenvolver e testar o site. Na segunda, prospectar empresas e coletar vagas. Na terceira, visitar faculdades e divulgar a plataforma aos estudantes. Na quarta, publicar vagas, acompanhar candidaturas e avaliar os resultados do MVP.',
        'resultado-esperado':
          '- Empresas cadastram vagas usando o formulário simples.\n- Candidatos consultam as vagas e usam os filtros por área para encontrar oportunidades.\n- A revisão manual mantém as vagas completas, atualizadas e confiáveis.\n- Empresas recebem candidaturas alinhadas aos requisitos das vagas.\n- Estagiários conseguem entrevistas.',
        'metricas-validacao':
          '- Empresas que enviam vagas.\n- Vagas aprovadas e publicadas.\n- Candidatos que acessam e consultam vagas.\n- Candidaturas iniciadas ou concluídas.\n- Tempo entre o envio da vaga e a publicação.\n- Empresas que voltam a cadastrar vagas.\n\n- Tempo para publicar uma vaga: mediana entre o envio do formulário pela empresa e a publicação da vaga no site.\n- Taxa de conclusão do cadastro: percentual de empresas que iniciam e conseguem enviar o formulário de vaga.\n- Tempo para receber candidaturas: mediana entre a publicação da vaga e o recebimento da primeira candidatura.',
      },
    },
  },
];
