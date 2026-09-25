export interface ServicePillar {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  highlight: string;
  iconName: string;
}

export const SERVICES_DATA: ServicePillar[] = [
  {
    number: '01',
    title: 'Abertura e Regularização de Empresas',
    shortDesc: 'Estruturação societária, CNAEs estratégicos e emissão ágil de CNPJ sem burocracia.',
    fullDesc: 'Auxílio na escolha do tipo societário ideal (SLU, LTDA, S/A), enquadramento preciso de atividades (CNAE), definição estratégica do regime tributário e obtenção ágil de CNPJ, alvarás e licenças sanitárias ou municipais.',
    deliverables: [
      'Análise de viabilidade locacional e contratual',
      'Definição do regime inicial mais vantajoso',
      'Elaboração e registro do Contrato Social',
      'Emissão de CNPJ, Inscrição Estadual e Municipal',
      'Alvará de funcionamento e licenças específicas'
    ],
    highlight: 'Abertura 100% digital e sem estresse',
    iconName: 'FileText'
  },
  {
    number: '02',
    title: 'Escrituração Contábil e Fiscal',
    shortDesc: 'Apuração rigorosa, escrituração transparente e entrega pontual de todas as obrigações.',
    fullDesc: 'Registro sistemático de todas as movimentações financeiras, emissão e conferência de notas fiscais, apuração rigorosa de impostos e entrega pontual de obrigações acessórias (SPED, DEFIS, DCTF, EFD-Reinf, ECF).',
    deliverables: [
      'Balanço Patrimonial e Balancetes mensais',
      'Demonstração do Resultado do Exercício (DRE)',
      'Apuração de Simples Nacional, Lucro Presumido e Real',
      'Entrega de obrigações acessórias sem riscos de multas',
      'Auditoria preventiva contra malha fina fiscal'
    ],
    highlight: 'Zero multas com garantia contratual',
    iconName: 'BookOpen'
  },
  {
    number: '03',
    title: 'Gestão de Departamento Pessoal',
    shortDesc: 'Folha de pagamento, pró-labore, admissões, férias e conformidade integral com eSocial.',
    fullDesc: 'Elaboração completa da folha de pagamento, cálculo de férias, 13º salário, rescisões, pró-labore dos sócios e envio das obrigações trabalhistas e previdenciárias ao governo via eSocial e FGTS Digital.',
    deliverables: [
      'Folha de pagamento e holerites digitais',
      'Cálculo e orientação sobre pró-labore e INSS',
      'Processamento de admissões, rescisões e férias',
      'Transmissão segura de eventos para o eSocial',
      'Suporte consultivo para dúvidas trabalhistas e CLT'
    ],
    highlight: 'Segurança jurídica para a sua equipe',
    iconName: 'Users'
  },
  {
    number: '04',
    title: 'Planejamento Tributário',
    shortDesc: 'Engenharia fiscal preventiva para reduzir seus impostos ao menor patamar legal possível.',
    fullDesc: 'Estudos jurídicos e contábeis legais para reduzir expressivamente a carga tributária da empresa, selecionando o regime mais vantajoso (Simples Nacional, Lucro Presumido ou Lucro Real) com foco em elisão fiscal preventiva.',
    deliverables: [
      'Simulação comparativa anual de regimes fiscais',
      'Revisão tributária de produtos monofásicos e ICMS',
      'Estruturação societária de blindagem e holdings',
      'Estratégia personalizada de Fator R e pró-labore',
      'Maximização de distribuição de lucros isenta'
    ],
    highlight: 'Pague apenas o que é justo por lei',
    iconName: 'TrendingUp'
  },
  {
    number: '05',
    title: 'Consultoria Financeira e Gerencial',
    shortDesc: 'Contabilidade consultiva que funciona como copiloto estratégico das suas decisões.',
    fullDesc: 'Análise detalhada de balanços patrimoniais, Demonstração do Resultado do Exercício (DRE), controle e projeção de fluxo de caixa e suporte estratégico para a tomada de decisões corporativas de alto impacto.',
    deliverables: [
      'Relatórios gerenciais descomplicados e visuais',
      'Diagnóstico de indicadores de rentabilidade e margens',
      'Projeção de fluxo de caixa e capital de giro',
      'Reuniões consultivas com contadores seniores',
      'BPO Financeiro para terceirização de contas'
    ],
    highlight: 'Clareza financeira para expandir seu lucro',
    iconName: 'LineChart'
  }
];
