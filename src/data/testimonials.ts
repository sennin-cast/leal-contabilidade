export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  segment: string;
  comment: string;
  rating: number;
  highlightSaving: string;
  location: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Rodrigo Mendes',
    role: 'Médico Cirurgião e Diretor Clínico',
    company: 'Clínica CardioVida',
    segment: 'Saúde & Medicina',
    comment: 'Eu pagava quase 27,5% no carnê-leão e achava normal. A equipe do Lucas Leal fez um estudo detalhado, estruturou nossa clínica com Equiparação Hospitalar e Fator R. Hoje nossa economia passa de R$ 9.000 por mês de forma 100% legal e transparente.',
    rating: 5,
    highlightSaving: 'Economia de R$ 9.400/mês',
    location: 'Nova Iguaçu - RJ'
  },
  {
    id: '2',
    name: 'Mariana Duarte',
    role: 'CEO & Founder',
    company: 'Apex Code Tech',
    segment: 'Tecnologia & Software',
    comment: 'Trabalho para empresas no exterior e o meu antigo contador nem sabia como classificar invoice. A Leal organizou todas as remessas, eliminou o risco de bitributação e enquadrou a empresa no Anexo III. O atendimento no WhatsApp em minutos é outro nível.',
    rating: 5,
    highlightSaving: 'Redução de 15,5% para 6% no Simples',
    location: 'Rio de Janeiro - RJ'
  },
  {
    id: '3',
    name: 'Carlos Eduardo Nogueira',
    role: 'Diretor Comercial',
    company: 'Distribuidora Nova Aliança',
    segment: 'Comércio & Varejo',
    comment: 'A Leal cuida da contabilidade da nossa família há mais de 20 anos. O Seu Ademar construiu uma relação de confiança inabalável e o Lucas trouxe uma modernização impressionante. Relatórios na mão, folha sem erros e auditoria fiscal impecável.',
    rating: 5,
    highlightSaving: 'Cliente há 22 anos com zero autuações',
    location: 'Nova Iguaçu - RJ'
  },
  {
    id: '4',
    name: 'Dra. Beatriz Vasconcelos',
    role: 'Sócia Administradora',
    company: 'Vasconcelos Advocacia Associados',
    segment: 'Advocacia & Consultoria',
    comment: 'A migração para a Leal foi a melhor decisão societária que tomamos. Eles cuidaram de tudo com o antigo escritório sem eu precisar intervir. A distribuição de lucros isenta e o controle de honorários nos deram previsibilidade total.',
    rating: 5,
    highlightSaving: 'Migração 100% assistida em 48h',
    location: 'Centro - RJ'
  }
];

export const PARTNERS_DATA = [
  { name: 'Omie ERP', badge: 'Parceiro Homologado', description: 'Gestão integrada para PMEs' },
  { name: 'ContaAzul', badge: 'Certificação Ouro', description: 'Contabilidade em tempo real' },
  { name: 'Totvs', badge: 'Conexão Especializada', description: 'Sistemas corporativos' },
  { name: 'Domínio Thomson Reuters', badge: 'Plataforma Contábil', description: 'Precisão fiscal máxima' },
  { name: 'Certisign', badge: 'Emissor Credenciado', description: 'Certificado digital com desconto' },
  { name: 'CFC / CRC-RJ', badge: 'Registro Regular Ativo', description: 'Conformidade ética e legal' }
];

export const STATS_DATA = [
  { value: '+35', label: 'Anos de Tradição', subtext: 'Fundada em 1989 em Nova Iguaçu' },
  { value: 'R$ 18M+', label: 'Economizados em Tributos', subtext: 'Elisão fiscal 100% legal comprovada' },
  { value: '4.9 ★', label: 'Avaliação no Google', subtext: 'Mais de 250 avaliações 5 estrelas' },
  { value: '15 min', label: 'Tempo Médio de Resposta', subtext: 'Atendimento humanizado sem robôs' }
];
