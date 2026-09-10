(function () {
  const STORAGE_KEY = 'estudio_inovacao_cronograma_v3_manha';

  const EMENTA_TEXT = `Introdução à inovação e tendências tecnológicas (startups e spin-offs). Tendências emergentes e as novas habilidades profissionais na era da Inteligência Artificial (IA). Tipologias, modelos de inovação, Manual de Oslo e marcos regulatórios. Métodos de inovação e modelagem de negócios. Introdução à Inteligência Artificial e LLM. IA na pesquisa acadêmica. IA na escrita acadêmica. IA para produtividade. Seminários de IA e ética, análise de dados. IA em inovação e desenvolvimento de produtos. Modelagem de projetos de IA.`;

  const INITIAL_CLASSES = [
    {
      id: 'class-1',
      title: 'Apresentação da disciplina',
      date: '2026-08-13',
      format: 'presencial',
      startTime: 'Encontro Presencial',
      locationOrLink: 'Sala de Aula / Campus',
      locationType: 'room',
      description: 'Ementa, objetivos, competências e habilidades, cronograma, critérios de avaliação. Introdução: O que é inovação?'
    },
    {
      id: 'class-2',
      title: 'Tipos de Inovação',
      date: '2026-08-20',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Inovações radicais, incrementais e disruptivas.'
    },
    {
      id: 'class-3',
      title: 'Empresa Startup e Lean Startup',
      date: '2026-08-27',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Conceitos de metodologias ágeis, validação de hipóteses e modelos enxutos de negócios.'
    },
    {
      id: 'class-4',
      title: 'ChatGPT',
      date: '2026-09-03',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Exploração de LLMs, geração de conteúdo e aplicações práticas no ambiente corporativo e acadêmico.'
    },
    {
      id: 'class-5',
      title: 'Engenharia de Prompts, Viés de Máquina e Ética em IA',
      date: '2026-09-10',
      format: 'online_ao_vivo',
      startTime: 'Encontro Online (Ao vivo)',
      locationOrLink: 'Mediado pelo AVA',
      locationType: 'meet',
      description: 'Técnicas avançadas de encadeamento de prompts, mitigação de vieses alucinatórios e aspectos éticos na IA.'
    },
    {
      id: 'class-6',
      title: 'Design Thinking',
      date: '2026-09-17',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Fundamentos da abordagem centrada no ser humano para solução de desafios complexos.'
    },
    {
      id: 'class-7',
      title: 'Design Thinking: Compreensão do problema',
      date: '2026-09-24',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Fase de empatia, pesquisa com usuários, mapeamento de dores e definição do problema central.'
    },
    {
      id: 'class-8',
      title: 'AVALIAÇÃO PARCIAL 1 (AVP1)',
      date: '2026-10-01',
      format: 'avaliacao',
      startTime: 'Prova Presencial',
      locationOrLink: 'Confirmar data no calendário de provas',
      locationType: 'moodle',
      description: 'Verificação de aprendizagem sobre os tópicos de Inovação, Lean Startup, IA e Design Thinking.'
    },
    {
      id: 'class-9',
      title: 'Modelos de Negócios (Business Model Canvas)',
      date: '2026-10-08',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Estruturação dos 9 blocos do Business Model Canvas para validação de propostas de valor.'
    },
    {
      id: 'class-10',
      title: 'Open Innovation',
      date: '2026-10-15',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Inovação aberta, ecossistemas colaborativos e parcerias estratégicas entre empresas e startups.'
    },
    {
      id: 'class-11',
      title: 'Design Thinking: Ideação',
      date: '2026-10-22',
      format: 'online_ao_vivo',
      startTime: 'Encontro Online (Ao vivo)',
      locationOrLink: 'Mediado pelo AVA',
      locationType: 'meet',
      description: 'Dinâmica ao vivo de geração de ideias, brainstorming estruturado e seleção de soluções inovadoras.'
    },
    {
      id: 'class-12',
      title: 'Design Thinking: Prototipagem',
      date: '2026-10-29',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Criação de protótipos de baixa e média fidelidade para testar conceitos com rapidez.'
    },
    {
      id: 'class-13',
      title: 'Prototipagem de projetos com Design Thinking + Inteligência Artificial',
      date: '2026-11-05',
      format: 'online_ao_vivo',
      startTime: 'Encontro Online (Ao vivo)',
      locationOrLink: 'Mediado pelo AVA',
      locationType: 'meet',
      description: 'Sessão ao vivo de aceleração de protótipos integrando ferramentas avançadas de IA generativa.'
    },
    {
      id: 'class-14',
      title: 'IA na Pesquisa Acadêmica',
      date: '2026-11-12',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Uso responsável de IA para síntese bibliográfica, análise de dados e rigor científico.'
    },
    {
      id: 'class-15',
      title: 'Gestão da inovação',
      date: '2026-11-19',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Processos de gestão de projetos inovadores, cultura de inovação e métricas corporativas.'
    },
    {
      id: 'class-16',
      title: 'Estímulos e fomento à inovação no Brasil e indicadores de inovação',
      date: '2026-11-26',
      format: 'online_assincrona',
      startTime: 'Aula Assíncrona',
      locationOrLink: 'Plataforma AVA',
      locationType: 'moodle',
      description: 'Programas de fomento, leis de incentivo, agências reguladoras e indicadores nacionais de inovação.'
    },
    {
      id: 'class-17',
      title: 'AVALIAÇÃO PARCIAL 2 (AVP2)',
      date: '2026-12-03',
      format: 'avaliacao',
      startTime: 'Prova Presencial',
      locationOrLink: 'Confirmar data no calendário de provas',
      locationType: 'moodle',
      description: 'Avaliação teórica e prática do segundo ciclo de conteúdos da disciplina.'
    },
    {
      id: 'class-18',
      title: 'Segunda chamada AVP 1 e AVP 2',
      date: '2026-12-10',
      format: 'avaliacao',
      startTime: 'Prova Presencial',
      locationOrLink: 'Confirmar data no calendário de provas',
      locationType: 'moodle',
      description: 'Aplicação de exames em segunda chamada para alunos com justificativa deferida.'
    },
    {
      id: 'class-19',
      title: 'Avaliação Final',
      date: '2026-12-17',
      format: 'avaliacao',
      startTime: 'Prova Presencial',
      locationOrLink: 'Confirmar data no calendário de provas',
      locationType: 'moodle',
      description: 'Exame final de encerramento do semestre letivo do Estúdio de Inovação.'
    }
  ];

  const MONTHS_PT = {
    1: 'Janeiro', 2: 'Fevereiro', 3: 'Março', 4: 'Abril', 5: 'Maio', 6: 'Junho',
    7: 'Julho', 8: 'Agosto', 9: 'Setembro', 10: 'Outubro', 11: 'Novembro', 12: 'Dezembro'
  };

  const FORMAT_CONFIG = {
    presencial: {
      label: 'Encontro Presencial',
      badgeClass: 'bg-live-presencial font-bold shadow-xs',
      category: 'live_presencial'
    },
    online_ao_vivo: {
      label: 'Encontro Online (Ao vivo)',
      badgeClass: 'bg-live-presencial font-bold shadow-xs',
      category: 'live_presencial'
    },
    online_assincrona: {
      label: 'Aula Assíncrona (On-line)',
      badgeClass: 'bg-assincrona font-bold shadow-xs',
      category: 'assincrona'
    },
    avaliacao: {
      label: 'Prova / Avaliação',
      badgeClass: 'bg-provas font-bold shadow-xs',
      category: 'provas'
    }
  };

  const ICONS = {
    calendar: `<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`,
    video: `<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>`,
    mapPin: `<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    award: `<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    externalLink: `<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
    bookOpen: `<svg class="w-5 h-5 text-neutral-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  };

  let state = {
    classes: JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(INITIAL_CLASSES)),
    selectedCategory: 'all',
    searchQuery: '',
    dateFilter: ''
  };

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.classes));
  }

  function formatDisplayDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return parseInt(parts[2], 10) + ' de ' + (MONTHS_PT[parseInt(parts[1], 10)] || '');
  }

  function render() {
    const container = document.getElementById('app') || document.getElementById('root');
    if (!container) return;

    const filtered = state.classes.filter(item => {
      const cat = (item.format === 'presencial' || item.format === 'online_ao_vivo') ? 'live_presencial' : item.format === 'online_assincrona' ? 'assincrona' : 'provas';
      if (state.selectedCategory !== 'all' && cat !== state.selectedCategory) return false;
      if (state.dateFilter && item.date !== state.dateFilter) return false;
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        if (!item.title.toLowerCase().includes(q) && !(item.description || '').toLowerCase().includes(q)) return false;
      }
      return true;
    }).sort((a, b) => a.date.localeCompare(b.date));

    container.innerHTML = `
      <div class="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <div>
            <div class="flex items-center gap-2 mb-2 flex-wrap">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-live-presencial text-white uppercase tracking-wide">
                Manhã
              </span>
              <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800 uppercase tracking-wide border border-neutral-200">
                Plano de Ensino Digital
              </span>
            </div>
            <h1 class="my-1">
              <img src="logo-ei.svg" alt="Estúdio de Inovação" class="h-10 sm:h-14 w-auto object-contain" />
            </h1>
          </div>
          <div class="flex items-center gap-2">
            <a href="https://faponline.fapce.edu.br" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 text-xs font-bold text-white bg-black hover:bg-neutral-800 rounded-xl flex items-center gap-2 cursor-pointer shadow-sm transition-all">
              ${ICONS.externalLink} <span>Acessar AVA</span>
            </a>
          </div>
        </div>

        <!-- Color Legend (Legenda de Cores) -->
        <div class="mt-6 p-4 bg-white border border-neutral-200 rounded-2xl shadow-xs">
          <p class="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-3">Legenda dos Formatos de Aula</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div class="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-50 border border-neutral-100">
              <span class="w-4 h-4 rounded-full bg-live-presencial flex-shrink-0"></span>
              <span class="text-xs font-bold text-neutral-900">Ao Vivo & Presencial</span>
            </div>
            <div class="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-50 border border-neutral-100">
              <span class="w-4 h-4 rounded-full bg-assincrona flex-shrink-0"></span>
              <span class="text-xs font-bold text-neutral-900">Aula Assíncrona</span>
            </div>
            <div class="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-50 border border-neutral-100">
              <span class="w-4 h-4 rounded-full bg-provas flex-shrink-0"></span>
              <span class="text-xs font-bold text-neutral-900">Provas & Avaliações</span>
            </div>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="mt-6 flex flex-col sm:flex-row justify-between gap-3">
          <div class="flex flex-wrap gap-2">
            <button onclick="window.setCategory('all')" class="px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${state.selectedCategory === 'all' ? 'bg-black text-white shadow-sm' : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'}">
              Todos
            </button>
            <button onclick="window.setCategory('live_presencial')" class="px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${state.selectedCategory === 'live_presencial' ? 'bg-live-presencial shadow-sm' : 'bg-white border border-neutral-200 text-neutral-800 hover:opacity-90'}" style="${state.selectedCategory !== 'live_presencial' ? 'border-color: #FF04A3;' : ''}">
              Ao Vivo & Presenciais
            </button>
            <button onclick="window.setCategory('assincrona')" class="px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${state.selectedCategory === 'assincrona' ? 'bg-assincrona shadow-sm' : 'bg-white border border-neutral-200 text-neutral-900 hover:opacity-90'}" style="${state.selectedCategory !== 'assincrona' ? 'border-color: #CDFF3C;' : ''}">
              Assíncronas
            </button>
            <button onclick="window.setCategory('provas')" class="px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${state.selectedCategory === 'provas' ? 'bg-provas shadow-sm' : 'bg-white border border-neutral-200 text-neutral-800 hover:opacity-90'}" style="${state.selectedCategory !== 'provas' ? 'border-color: #FF0037;' : ''}">
              Provas
            </button>
          </div>
        </div>

        <!-- Search & Date Filter -->
        <div class="mt-4 flex flex-col sm:flex-row gap-2">
          <input type="text" value="${state.searchQuery}" oninput="window.setSearch(this.value)" placeholder="Buscar por tema ou palavra-chave..." class="flex-1 px-4 py-2.5 text-xs bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all" />
          <input type="date" value="${state.dateFilter}" onchange="window.setDate(this.value)" class="px-4 py-2.5 text-xs bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all" />
          ${state.searchQuery || state.dateFilter ? `
            <button onclick="window.resetFilters()" class="px-4 py-2.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-bold rounded-xl cursor-pointer">Limpar</button>
          ` : ''}
        </div>

        <!-- Cards Schedule List -->
        <div class="mt-6 space-y-4">
          ${filtered.length === 0 ? `
            <div class="bg-white border border-neutral-200 rounded-2xl p-10 text-center shadow-xs">
              <p class="text-sm font-bold text-neutral-800">Nenhuma aula encontrada para a busca realizada.</p>
              <button onclick="window.resetFilters()" class="mt-3 px-4 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-bold rounded-xl cursor-pointer">Limpar Filtros</button>
            </div>
          ` : filtered.map(item => {
      const fmt = FORMAT_CONFIG[item.format] || FORMAT_CONFIG.online_assincrona;
      const isExam = item.format === 'avaliacao';
      const isLiveOrRoom = item.format === 'presencial' || item.format === 'online_ao_vivo';
      const cardBorder = isExam ? 'border-provas' : isLiveOrRoom ? 'border-live-presencial' : 'border-assincrona';

      return `
              <div class="bg-white border-2 ${cardBorder} rounded-2xl p-6 shadow-xs hover:shadow-md transition-all">
                <div class="flex flex-wrap justify-between items-center gap-2">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-neutral-100 text-neutral-900">
                    ${ICONS.calendar} ${formatDisplayDate(item.date)}
                  </span>
                  <span class="px-3.5 py-1 rounded-full text-xs font-extrabold ${fmt.badgeClass}">
                    ${fmt.label}
                  </span>
                </div>
                
                <h3 class="text-lg sm:text-xl font-extrabold text-neutral-900 mt-3">${item.title}</h3>
                ${item.description ? `<p class="text-xs sm:text-sm text-neutral-700 mt-2 leading-relaxed font-normal">${item.description}</p>` : ''}

                <div class="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600">
                  <span class="flex items-center gap-1.5 font-semibold">
                    ${item.format === 'online_ao_vivo' ? ICONS.video : isExam ? ICONS.award : ICONS.mapPin}
                    <span>${item.startTime} • ${item.locationOrLink}</span>
                  </span>
                </div>
              </div>
            `;
    }).join('')}
        </div>

        <!-- Ementa da Disciplina (Fixed Footer Block) -->
        <div class="mt-12 bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-neutral-800">
          <div class="flex items-center gap-3 border-b border-neutral-800 pb-4 mb-4">
            <div class="p-2 bg-neutral-800 rounded-xl">
              ${ICONS.bookOpen}
            </div>
            <div>
              <h2 class="text-lg font-extrabold text-white tracking-tight">Ementa da Disciplina</h2>
              <p class="text-xs text-neutral-400">Estúdio de Inovação</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            ${EMENTA_TEXT}
          </p>
        </div>

        <!-- Bottom Footer Info -->
        <div class="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-3">
          <span>Estúdio de Inovação • Cronograma & Ementa</span>
        </div>
      </div>
    `;
  }

  window.setCategory = function (c) { state.selectedCategory = c; render(); };
  window.setSearch = function (q) { state.searchQuery = q; render(); };
  window.setDate = function (d) { state.dateFilter = d; render(); };
  window.resetFilters = function () { state.selectedCategory = 'all'; state.searchQuery = ''; state.dateFilter = ''; render(); };

  render();
})();



