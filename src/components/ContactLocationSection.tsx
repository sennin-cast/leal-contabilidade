import React, { useState } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import { useReveal } from '../hooks/useReveal';

interface FormState {
  name: string;
  phone: string;
  area: 'Contabilidade' | 'Psicologia';
  message: string;
}

export const ContactLocationSection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    area: 'Contabilidade',
    message: '',
  });
  const [error, setError] = useState<string>('');
  const [submittedUrl, setSubmittedUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmittedUrl('');

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Por favor, preencha nome, telefone e mensagem antes de continuar.');
      return;
    }

    const targetNumber =
      form.area === 'Contabilidade'
        ? siteConfig.contact.accountingWhatsappNumber
        : siteConfig.contact.psychologyWhatsappNumber;

    const text = [
      `Olá! Gostaria de atendimento na área de *${form.area}* da LN INTEGRA.`,
      '',
      `*Nome:* ${form.name.trim()}`,
      `*Telefone/WhatsApp:* ${form.phone.trim()}`,
      `*Mensagem:* ${form.message.trim()}`,
    ].join('\n');

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
      ref={ref}
      className={`py-20 sm:py-28 bg-[#D8CCB8] border-t border-[#C4B69F] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Contato &amp; Localização</span>
          </div>
          <h2 className="section-heading">Onde nos encontrar e como falar conosco.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Info + Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#EDE5D8] border border-[#C4B69F] rounded-2xl p-7 space-y-6 shadow-soft">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-[#7A5B22]/45 bg-[#E4DAC9] flex items-center justify-center text-[#7A5B22] flex-shrink-0">
                  <MapPin className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-[#1A1714]">Endereço</h3>
                  <p className="text-sm text-[#3A3128] leading-relaxed">
                    {siteConfig.contact.address.fullFormatted}
                  </p>
                  <a
                    href={siteConfig.contact.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1A1714] hover:text-[#7A5B22] border-b border-[#7A5B22] pb-0.5 transition-colors cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#7A5B22]" />
                    <span>Como chegar no Google Maps</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp / Phones */}
              <div className="flex items-start gap-4 pt-5 border-t border-[#C4B69F]">
                <div className="w-10 h-10 rounded-lg border border-[#7A5B22]/45 bg-[#E4DAC9] flex items-center justify-center text-[#7A5B22] flex-shrink-0">
                  <Phone className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-semibold text-[#1A1714]">
                    WhatsApp &amp; Telefones
                  </h3>
                  <p className="text-sm text-[#3A3128]">
                    Principal:{' '}
                    <a
                      href={mainWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#1A1714] hover:text-[#7A5B22] transition-colors cursor-pointer"
                    >
                      {siteConfig.contact.mainWhatsappDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-[#3A3128] font-medium">
                    Contabilidade: (21) 97974-1307 · (21) 97497-7021 | Psicologia: (21) 97427-1660
                  </p>
                </div>
              </div>

              {/* Editable Pending Fields: Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-[#C4B69F]">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#7A5B22] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1A1714]">
                      Horário de Atendimento
                    </p>
                    <p className="text-xs text-[#3A3128] mt-1">
                      {siteConfig.contact.businessHours || 'Sob agendamento via WhatsApp'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#7A5B22] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1A1714]">
                      E-mail Institucional
                    </p>
                    <p className="text-xs text-[#3A3128] mt-1">
                      {siteConfig.contact.email || 'A confirmar antes da publicação'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-[#C4B69F] bg-[#EDE5D8] h-64 sm:h-72 shadow-soft">
              <iframe
                title="Mapa de localização LN INTEGRA — Rua Otávio Tarquínio, 74, Centro, Nova Iguaçu"
                src={siteConfig.contact.address.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#EDE5D8] border border-[#C4B69F] rounded-2xl p-7 sm:p-9 space-y-5 shadow-soft"
            >
              <div className="space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1714]">
                  Envie uma mensagem
                </h3>
                <p className="text-sm text-[#3A3128]">
                  Selecione a área desejada e descreva brevemente como podemos ajudar.
                </p>
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-wider text-[#3A3128] mb-1.5"
                >
                  Nome completo
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  aria-invalid={Boolean(error && !form.name.trim())}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-[#E4DAC9]/75 border border-[#B5A58C] text-sm text-[#1A1714] placeholder-[#3A3128]/65 focus:border-[#7A5B22]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#3A3128] mb-1.5"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    aria-invalid={Boolean(error && !form.phone.trim())}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg bg-[#E4DAC9]/75 border border-[#B5A58C] text-sm text-[#1A1714] placeholder-[#3A3128]/65 focus:border-[#7A5B22]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-area"
                    className="block text-xs font-bold uppercase tracking-wider text-[#3A3128] mb-1.5"
                  >
                    Área de interesse
                  </label>
                  <select
                    id="contact-area"
                    value={form.area}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        area: e.target.value as 'Contabilidade' | 'Psicologia',
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#E4DAC9]/75 border border-[#B5A58C] text-sm text-[#1A1714] focus:border-[#7A5B22] cursor-pointer"
                  >
                    <option value="Contabilidade">Contabilidade</option>
                    <option value="Psicologia">Psicologia</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#3A3128] mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  aria-invalid={Boolean(error && !form.message.trim())}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Como podemos auxiliar você?"
                  className="w-full px-4 py-3 rounded-lg bg-[#E4DAC9]/75 border border-[#B5A58C] text-sm text-[#1A1714] placeholder-[#3A3128]/65 focus:border-[#7A5B22] resize-none"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="text-xs font-semibold text-[#1A1714] bg-[#D8CCB8] border border-[#7A5B22]/60 px-3.5 py-2.5 rounded-lg"
                >
                  {error}
                </p>
              )}

              {submittedUrl && (
                <div
                  role="status"
                  className="flex items-start gap-2.5 text-xs text-[#1A1714] bg-[#E4DAC9] border border-[#7A5B22]/60 px-4 py-3 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4 text-[#7A5B22] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">
                      Redirecionando para o WhatsApp da área de {form.area}.
                    </p>
                    <p className="text-[#3A3128]">
                      Se a janela não abrir automaticamente,{' '}
                      <a
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#1A1714] underline underline-offset-2 hover:text-[#7A5B22]"
                      >
                        clique aqui para enviar pelo WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A15B]" />
                <span>Enviar mensagem pelo WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
