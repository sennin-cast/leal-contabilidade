export interface Professional {
  id: string;
  name: string;
  initials: string;
  area: 'Psicologia' | 'Contabilidade';
  registryLabel: string;
  registryPendingNote: string;
  whatsappDisplay: string;
  whatsappNumber: string; // E.164 digits only (55 + DDD + number)
  bio: string;
  photoUrl?: string;
}

export interface OfficePhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: 'tall' | 'wide' | 'square';
}

export const siteConfig = {
  brand: {
    shortName: 'LN INTEGRA',
    fullName: 'LN INTEGRA — Contabilidade e Psicologia',
    tagline: 'Contabilidade e Psicologia',
    description:
      'Contabilidade e Psicologia reunidas em um espaço onde confiança, conhecimento e acolhimento caminham juntos.',
    logoPath: './images/logo-ln-integra.jpg',
  },
  contact: {
    mainWhatsappDisplay: '(21) 97974-1307',
    mainWhatsappNumber: '5521979741307',
    accountingWhatsappNumber: '5521979741307',
    psychologyWhatsappNumber: '5521974271660',
    email: '', // Pendente de confirmação antes da publicação
    businessHours: '', // Pendente de confirmação antes da publicação
    address: {
      street: 'Rua Otávio Tarquínio, 74',
      complement: 'Sala 201',
      neighborhood: 'Centro',
      city: 'Nova Iguaçu',
      state: 'RJ',
      fullFormatted: 'Rua Otávio Tarquínio, 74 — Sala 201, Centro, Nova Iguaçu - RJ',
      googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Rua+Ot%C3%A1vio+Tarqu%C3%ADnio,+74,+Centro,+Nova+Igua%C3%A7u,+RJ',
      googleMapsEmbedUrl:
        'https://www.google.com/maps?q=Rua+Ot%C3%A1vio+Tarqu%C3%ADnio,+74,+Centro,+Nova+Igua%C3%A7u,+RJ&output=embed',
    },
    social: {
      instagram: '', // Pendente de confirmação
      linkedin: '', // Pendente de confirmação
    },
  },
  professionals: [
    {
      id: 'larissa',
      name: 'Larissa Moura Rodrigues',
      initials: 'LM',
      area: 'Psicologia',
      registryLabel: 'CRP RJ 05/66262',
      registryPendingNote: 'Registro transcrito da placa do escritório — sujeito à confirmação final.',
      whatsappDisplay: '(21) 97427-1660',
      whatsappNumber: '5521974271660',
      bio: 'Atendimento psicológico pautado pela escuta qualificada, ética profissional e acolhimento individualizado.',
    },
    {
      id: 'nilson',
      name: 'Nilson Machado Eherhardt Santos',
      initials: 'NM',
      area: 'Contabilidade',
      registryLabel: 'CRC RJ 124838-O1',
      registryPendingNote: 'Registro transcrito da placa do escritório — sujeito à confirmação final.',
      whatsappDisplay: '(21) 97497-7021',
      whatsappNumber: '5521974977021',
      bio: 'Orientação e suporte contábil com foco em organização, clareza e segurança para a gestão de atividades.',
    },
    {
      id: 'lucas',
      name: 'Lucas Heckert Leal',
      initials: 'LH',
      area: 'Contabilidade',
      registryLabel: 'CRC RJ 119264-O8',
      registryPendingNote: 'Registro transcrito da placa do escritório — sujeito à confirmação final.',
      whatsappDisplay: '(21) 97974-1307',
      whatsappNumber: '5521979741307',
      bio: 'Atuação contábil dedicada ao acompanhamento próximo, conformidade e tranquilidade fiscal.',
    },
  ] as Professional[],
  officePhotos: [
    {
      id: 'recepcao-logo',
      src: './images/office/recepcao-logo.jpg',
      alt: 'Recepção da LN INTEGRA com logo dourada na parede e balcão em mármore bege',
      caption: 'Recepção principal com identidade LN INTEGRA',
      aspect: 'wide',
    },
    {
      id: 'recepcao-ampla',
      src: './images/office/recepcao-ampla.jpg',
      alt: 'Visão ampla do escritório LN INTEGRA com poltronas e balcão de atendimento',
      caption: 'Ambiente integrado e luminoso',
      aspect: 'tall',
    },
    {
      id: 'sala-acolhimento',
      src: './images/office/sala-acolhimento.jpg',
      alt: 'Espaço de acolhimento com sofá bege, poltrona e iluminação suave',
      caption: 'Espaço pensado para conforto e tranquilidade',
      aspect: 'square',
    },
    {
      id: 'espaco-atendimento',
      src: './images/office/espaco-atendimento.jpg',
      alt: 'Sala de espera e recepção da LN INTEGRA',
      caption: 'Detalhes em tons neutros e dourado champagne',
      aspect: 'square',
    },
    {
      id: 'balcao-marmore',
      src: './images/office/balcao-marmore.jpg',
      alt: 'Mesa de atendimento em mármore com luminária dourada',
      caption: 'Estrutura organizada para atendimento individualizado',
      aspect: 'wide',
    },
  ] as OfficePhoto[],
};

export function buildWhatsAppUrl(phoneDigits: string, message: string): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}
