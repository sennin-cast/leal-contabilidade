export interface NicheItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  painPoint: string;
  solution: string;
  benefits: string[];
  taxStrategy: string;
  exampleSaving: string;
  iconName: string;
}

export const NICHES_DATA: NicheItem[] = [
  {
    id: 'saude',
    title: 'Médicos, Clínicas e Saúde',
    badge: 'Alta Redução de IRPF',
    subtitle: 'Plantões, consultórios e sociedades médicas com máxima eficiência tributária',
    painPoint: 'Tributação de até 27,5% no IRPF por atuar como Pessoa Física ou clínicas enquadradas em alíquotas erradas no Simples.',
    solution: 'Aplicação da Equiparação Hospitalar (redução do IRPJ e CSLL de 32% para 8% e 12%) e estratégia do Fator R no Simples Nacional.',
    benefits: [
      'Alíquotas reduzidas de 27,5% (PF) para a partir de 6% (PJ)',
      'Emissão e controle de notas fiscais de plantões e convênios',
      'Elisão fiscal legal com Equiparação Hospitalar para procedimentos',
      'Distribuição de lucros 100% isenta de Imposto de Renda'
    ],
    taxStrategy: 'Equiparação Hospitalar + Fator R (Anexo III)',
    exampleSaving: 'Economia média de R$ 4.200 a R$ 12.000/mês por médico',
    iconName: 'Stethoscope'
  },
  {
    id: 'tecnologia',
    title: 'Prestadores de Serviços & TI',
    badge: 'Desenvolvedores & Startups',
    subtitle: 'Contabilidade para devs, designers, consultores e quem recebe do exterior',
    painPoint: 'Enquadramento incorreto no Anexo V do Simples (alíquota de 15,5%+) ou bitributação em remessas internacionais.',
    solution: 'Planejamento de pró-labore estratégico com Fator R para tributar no Anexo III (6%) e isenção de PIS/COFINS em exportação de software.',
    benefits: [
      'Tributação inicial de 6% no Simples Nacional com Fator R',
      'Isenção de impostos em recebimentos internacionais (Payoneer, Wise, Deel)',
      'Abertura de CNPJ em endereço fiscal sem custo extra',
      'Emissão de NFs automatizada e suporte em fuso horário flexível'
    ],
    taxStrategy: 'Fator R (Anexo III) + Exportação de Serviços Isenta',
    exampleSaving: 'Redução de carga fiscal de 15,5% para 6% no Simples',
    iconName: 'Laptop'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & Negócios Digitais',
    badge: 'Dropshipping, Mercado Livre & Hotmart',
    subtitle: 'Vendas online, marketplaces, infoprodutos e coprodução',
    painPoint: 'Bloqueios de conta em marketplaces por divergência fiscal, multas de DIFAL/ICMS-ST e confusão com taxas de intermediação.',
    solution: 'Segregação rigorosa de receitas, emissão em massa integrada via ERPs (Bling, Tiny) e planejamento de ICMS entre estados.',
    benefits: [
      'Integração total com Mercado Livre, Shopee, Shopify e Amazon',
      'Contabilidade para Infoprodutores e Coprodutores (Hotmart, Kiwify)',
      'Apuração precisa de DIFAL, Substituição Tributária e ICMS',
      'Gestão de estoque e conciliação com gateways de pagamento'
    ],
    taxStrategy: 'Segregação de Receitas + Isenções Específicas de ICMS',
    exampleSaving: 'Eliminação de riscos de autuação fiscal e multas interestaduais',
    iconName: 'ShoppingBag'
  },
  {
    id: 'advocacia-engenharia',
    title: 'Advogados, Engenheiros & Consultores',
    badge: 'Profissionais Liberais',
    subtitle: 'Sociedades Unipessoais, escritórios associados e consultorias técnicas',
    painPoint: 'Recebimento de honorários de sucumbência ou projetos com retenção máxima na fonte.',
    solution: 'Constituição de Sociedade Unipessoal de Advocacia (SUA) ou PJ de Engenharia com retenção otimizada e repasse limpo.',
    benefits: [
      'Alíquota a partir de 4,5% no Simples Nacional para Advocacia (Anexo IV)',
      'Controle rigoroso de honorários e contratos por êxito',
      'Distribuição formal de dividendos com blindagem patrimonial',
      'Assessoria em registros no OAB, CREA e CAU'
    ],
    taxStrategy: 'Sociedade Unipessoal (Anexo IV / Fator R)',
    exampleSaving: 'Economia tributária de até 70% comparado à Pessoa Física',
    iconName: 'Scale'
  },
  {
    id: 'comercio-pmes',
    title: 'Comércio & PMEs em Geral',
    badge: 'Indústria, Varejo & Serviços',
    subtitle: 'Gestão completa, apuração de impostos e assessoria trabalhista para empresas em crescimento',
    painPoint: 'Falta de visão financeira, desorganização no controle de notas e custos trabalhistas descontrolados.',
    solution: 'BPO Financeiro, recuperação de tributos monofásicos e assessoria contínua para alavancagem de margem.',
    benefits: [
      'Recuperação de créditos de PIS/COFINS em produtos monofásicos',
      'Departamento pessoal ágil com gestão completa de eSocial',
      'Relatórios mensais de DRE e fluxo de caixa simplificados',
      'Garantia contratual de entrega de obrigações sem multas'
    ],
    taxStrategy: 'Exclusão de Produtos Monofásicos + BPO Financeiro Integrado',
    exampleSaving: 'Recuperação média de tributos pagos a mais nos últimos 5 anos',
    iconName: 'Building2'
  }
];
