export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a contabilidade digital? Vou falar com pessoas de verdade?',
    answer: 'Sim, absolutamente! Na Leal Assessoria Contábil unimos tecnologia avançada com atendimento 100% humanizado. Você não fica preso a robôs ou chatbots que não entendem seu negócio. Nossa equipe de especialistas e os contadores responsáveis Ademar Leal e Lucas Leal estão disponíveis via WhatsApp, ligação, e-mail e em nossa sede física em Nova Iguaçu, com tempo de resposta ágil em até 15 minutos.'
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo leva para abrir meu CNPJ?',
    answer: 'Graças aos nossos processos 100% digitais integrados com a JUCERJA e Receita Federal, a emissão do seu CNPJ costuma ocorrer entre 24 horas e 5 dias úteis, a depender da atividade e da liberação da prefeitura municipal. Nós cuidamos de cada etapa burocrática para você não perder tempo.'
  },
  {
    id: 'faq-3',
    question: 'Tenho débitos tributários pendentes, vocês podem me ajudar a parcelar e regularizar?',
    answer: 'Com certeza. Realizamos um diagnóstico fiscal completo da sua empresa perante a Receita Federal, Procuradoria Geral da Fazenda Nacional (PGFN), Estado e Município. Em seguida, indicamos as melhores modalidades de parcelamento especial, transação tributária e recuperação de benefícios para você voltar a emitir CND com desconto em multas e juros.'
  },
  {
    id: 'faq-4',
    question: 'É difícil trocar de contador no meio do ano fiscal?',
    answer: 'De forma alguma! Trocar de contador é um direito do empresário e o processo é extremamente simples. A Leal Assessoria Contábil assume todo o contato ético e técnico com o seu escritório anterior, solicitando os arquivos do SPED, livros fiscais, cadastros e acessos. Você não precisa se desgastar com nenhuma conversa difícil.'
  },
  {
    id: 'faq-5',
    question: 'Quais documentos preciso enviar para começar?',
    answer: 'Para darmos início imediato, precisamos basicamente do Contrato Social (ou Certificado MEI), Cartão CNPJ, documento dos sócios (RG ou CNH) e comprovante de endereço. Se você já possui Certificado Digital (e-CNPJ ou e-CPF), nos conectamos instantaneamente. Caso não possua, auxiliamos na emissão rápida.'
  }
];
