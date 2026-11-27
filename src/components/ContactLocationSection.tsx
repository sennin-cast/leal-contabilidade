import React, { useState } from 'react';
import {
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

interface FormState {
  name: string;
  phone: string;
  area: 'Contabilidade' | 'Psicologia';
  subject: string;
  message: string;
}

const quickSubjects: { label: string; area: 'Contabilidade' | 'Psicologia'; template: string }[] = [
  {
    label: 'Acompanhamento contábil',
    area: 'Contabilidade',
    template: 'Gostaria de informações sobre acompanhamento contábil para minha empresa.',
  },
  {
    label: 'Orientação fiscal',
    area: 'Contabilidade',
    template: 'Preciso de uma orientação contábil/fiscal e gostaria de agendar uma conversa.',
  },
  {
    label: 'Atendimento psicológico',
    area: 'Psicologia',
    template: 'Gostaria de saber sobre disponibilidade e horários para atendimento em Psicologia.',
  },
  {
    label: 'Agendar visita presencial',
    area: 'Contabilidade',
    template: 'Gostaria de agendar uma visita presencial na Sala 201 no Centro de Nova Iguaçu.',
  },
];

function formatPhoneInput(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export const ContactLocationSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    area: 'Contabilidade',
    subject: '',
    message: '',
  });
  const [error, setError] = useState<string>('');
  const [submittedUrl, setSubmittedUrl] = useState<string>('');
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.address.fullFormatted);
      setCopiedAddress(true);
      window.setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      // Clipboard fallback not needed; link to Google Maps remains available
    }
  };

  const handleQuickSubject = (item: (typeof quickSubjects)[number]) => {
    setForm((prev) => ({
      ...prev,
      area: item.area,
      subject: item.label,
      message: prev.message.trim() ? prev.message : item.template,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmittedUrl('');

    if (!form.name.trim()) {
      setError('Informe seu nome completo para sabermos com quem estamos falando.');
      document.getElementById('contact-name')?.focus();
      return;
    }
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setError('Informe um telefone ou WhatsApp válido com DDD (ex.: (21) 99999-9999).');
      document.getElementById('contact-phone')?.focus();
      return;
    }
    if (!form.message.trim()) {
      setError('Escreva uma breve mensagem descrevendo como podemos ajudar.');
      document.getElementById('contact-message')?.focus();
      return;
    }

    const targetNumber =
      form.area === 'Contabilidade'
        ? siteConfig.contact.accountingWhatsappNumber
        : siteConfig.contact.psychologyWhatsappNumber;

    const text = [
      `Olá! Gostaria de atendimento na área de *${form.area}* da LN INTEGRA.`,
      form.subject ? `*Assunto:* ${form.subject}` : '',
      '',
      `*Nome:* ${form.name.trim()}`,
      `*Telefone/WhatsApp:* ${form.phone.trim()}`,
      `*Mensagem:* ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = buildWhatsAppUrl(targetNumber, text);
    setSubmittedUrl(whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const mainWhatsappUrl = buildWhatsAppUrl(
    siteConfig.contact.mainWhatsappNumber,
    'Olá! Gostaria de falar com a LN INTEGRA.'
  );

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 bg-[#E4DAC9] border-t border-[#C4B69F]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <h2 className="section-heading">Onde estamos e como falar conosco</h2>
          <p className="text-base text-[#3A3128] leading-relaxed">
            Envie sua mensagem direcionada pelo formulário ou utilize o mapa para chegar ao nosso
            escritório no Centro de Nova Iguaçu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Smart Contact Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#EDE5D8] border border-[#C4B69F] rounded-2xl p-7 sm:p-9 space-y-5 shadow-soft"
            >
              <div className="space-y-1">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181512]">
                  Envie uma mensagem
                </h3>
                <p className="text-sm text-[#3A3128]">
                  Escolha um assunto rápido ou preencha os campos abaixo.
                </p>
              </div>

              {/* Quick Subject Chips */}
              <div className="flex flex-wrap gap-2" aria-label="Assuntos rápidos">
                {quickSubjects.map((item) => {
                  const isActive = form.subject === item.label;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleQuickSubject(item)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#1C1814] text-[#F5EFE6] border-[#1C1814]'
                          : 'bg-[#E4DAC9] text-[#181512] border-[#C4B69F] hover:border-[#7A5B22]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold text-[#181512] mb-1.5"
                >
                  Nome completo
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(error && !form.name.trim())}
                  aria-describedby={error && !form.name.trim() ? 'contact-form-error' : undefined}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Como prefere ser chamado(a)…"
                  className="w-full px-4 py-3 rounded-xl bg-[#E4DAC9] border border-[#B5A58C] text-sm text-[#181512] placeholder-[#3A3128]/60 focus:border-[#7A5B22]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold text-[#181512] mb-1.5"
                  >
                    WhatsApp / Telefone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(error && form.phone.replace(/\D/g, '').length < 10)}
                    aria-describedby={
                      error && form.phone.replace(/\D/g, '').length < 10
                        ? 'contact-form-error'
                        : undefined
                    }
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: formatPhoneInput(e.target.value) })
                    }
                    placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-[#E4DAC9] border border-[#B5A58C] text-sm text-[#181512] placeholder-[#3A3128]/60 focus:border-[#7A5B22] tabular-nums"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-area"
                    className="block text-xs font-bold text-[#181512] mb-1.5"
                  >
                    Área de atendimento
                  </label>
                  <select
                    id="contact-area"
                    name="area"
                    value={form.area}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        area: e.target.value as 'Contabilidade' | 'Psicologia',
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#E4DAC9] border border-[#B5A58C] text-sm text-[#181512] focus:border-[#7A5B22] cursor-pointer"
                  >
                    <option value="Contabilidade">Contabilidade</option>
                    <option value="Psicologia">Psicologia</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold text-[#181512] mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  aria-invalid={Boolean(error && !form.message.trim())}
                  aria-describedby={error && !form.message.trim() ? 'contact-form-error' : undefined}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Conte brevemente como podemos ajudar você ou sua empresa…"
                  className="w-full px-4 py-3 rounded-xl bg-[#E4DAC9] border border-[#B5A58C] text-sm text-[#181512] placeholder-[#3A3128]/60 focus:border-[#7A5B22] resize-none"
                />
              </div>

              {error && (
                <p
                  id="contact-form-error"
                  role="alert"
                  className="text-xs font-semibold text-[#181512] bg-[#D8CCB8] border border-[#7A5B22]/70 px-4 py-3 rounded-xl"
                >
                  {error}
                </p>
              )}

              {submittedUrl && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-2.5 text-xs text-[#181512] bg-[#E4DAC9] border border-[#7A5B22]/60 px-4 py-3 rounded-xl"
                >
                  <MessageCircle className="w-4 h-4 text-[#7A5B22] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="font-bold">
                      Abrindo o WhatsApp da área de {form.area}.
                    </p>
                    <p className="text-[#3A3128]">
                      Caso não abra automaticamente,{' '}
                      <a
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#181512] underline underline-offset-4 hover:text-[#7A5B22]"
                      >
                        clique aqui para enviar agora
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                <MessageCircle className="w-4 h-4 text-[#C6A15B]" aria-hidden="true" />
                <span>Enviar pelo WhatsApp ({form.area})</span>
              </button>
            </form>
          </div>

          {/* Right: Location Details + Enhanced Maps */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#EDE5D8] border border-[#C4B69F] rounded-2xl p-7 space-y-6 shadow-soft">
              {/* Address + Copy + Route */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl border border-[#7A5B22]/45 bg-[#E4DAC9] flex items-center justify-center text-[#7A5B22] flex-shrink-0">
                  <MapPin className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-3 flex-grow">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#181512]">
                      Endereço em Nova Iguaçu
                    </h3>
                    <p className="text-sm text-[#3A3128] leading-relaxed mt-1">
                      {siteConfig.contact.address.fullFormatted}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={siteConfig.contact.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1C1814] text-[#F5EFE6] text-xs font-semibold hover:bg-[#3A3128] active:scale-[0.98] transition-[background-color,transform] cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C6A15B]" aria-hidden="true" />
                      <span>Traçar rota no Maps</span>
                      <ExternalLink className="w-3 h-3 text-[#D4AF6A]" aria-hidden="true" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      aria-live="polite"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#7A5B22]/60 bg-[#E4DAC9] text-[#181512] text-xs font-semibold hover:bg-[#D8CCB8] active:scale-[0.98] transition-[background-color,transform] cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#7A5B22]" aria-hidden="true" />
                          <span>Endereço copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#7A5B22]" aria-hidden="true" />
                          <span>Copiar endereço</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* WhatsApp / Phones */}
              <div className="flex items-start gap-4 pt-5 border-t border-[#C4B69F]">
                <div className="w-10 h-10 rounded-xl border border-[#7A5B22]/45 bg-[#E4DAC9] flex items-center justify-center text-[#7A5B22] flex-shrink-0">
                  <Phone className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-xl font-semibold text-[#181512]">
                    WhatsApp &amp; Telefones
                  </h3>
                  <p className="text-sm text-[#3A3128]">
                    Principal:{' '}
                    <a
                      href={mainWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#181512] hover:text-[#7A5B22] underline underline-offset-4 transition-colors cursor-pointer tabular-nums"
                    >
                      {siteConfig.contact.mainWhatsappDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-[#3A3128] font-medium tabular-nums">
                    Contabilidade: (21) 97974-1307 · (21) 97497-7021 | Psicologia: (21) 97427-1660
                  </p>
                </div>
              </div>

              {/* Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-[#C4B69F]">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#7A5B22] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold text-[#181512]">Atendimento</p>
                    <p className="text-xs text-[#3A3128] mt-0.5">
                      {siteConfig.contact.businessHours || 'Presencial sob agendamento via WhatsApp'}
                    </p>
                  </div>
                </div>
                {siteConfig.contact.email ? (
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#7A5B22] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-[#181512]">E-mail</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-xs text-[#3A3128] hover:text-[#181512] underline underline-offset-4 mt-0.5 inline-block"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 text-[#7A5B22] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold text-[#181512]">Canal direto</p>
                      <p className="text-xs text-[#3A3128] mt-0.5">
                        Atendimento por WhatsApp sem triagem automática
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-[#C4B69F] bg-[#EDE5D8] shadow-soft">
              <div className="px-5 py-3 bg-[#1C1814] text-[#F5EFE6] flex items-center justify-between text-xs">
                <span className="font-semibold">Centro, Nova Iguaçu — RJ</span>
                <a
                  href={siteConfig.contact.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF6A] hover:underline underline-offset-4 cursor-pointer"
                >
                  Abrir mapa completo
                </a>
              </div>
              <div className="h-64 sm:h-72">
                <iframe
                  title="Mapa de localização LN INTEGRA — Rua Otávio Tarquínio, 74, Centro, Nova Iguaçu"
                  src={siteConfig.contact.address.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
