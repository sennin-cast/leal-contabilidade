import React, { useState } from 'react';
import { Clock, Info, Mail, MapPin, Navigation, Phone } from 'lucide-react';
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
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setValidated(false);

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Por favor, preencha nome, telefone e mensagem antes de continuar.');
      return;
    }

    setValidated(true);
  };

  const mainWhatsappUrl = buildWhatsAppUrl(
    siteConfig.contact.mainWhatsappNumber,
    'Olá! Gostaria de falar com a LN INTEGRA.'
  );

  return (
    <section
      id="contato"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#F8F6F0] border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C2A36A]" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#A48650] font-semibold">
              Contato & Localização
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#34322F] leading-[1.15]">
            Onde nos encontrar e como falar conosco.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Info + Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#E9E3D9]/40 border border-[#E9E3D9] rounded-2xl p-7 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-[#C2A36A]/50 bg-[#F8F6F0] flex items-center justify-center text-[#A48650] flex-shrink-0">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-[#34322F]">Endereço</h3>
                  <p className="text-sm text-[#766044] leading-relaxed">
                    {siteConfig.contact.address.fullFormatted}
                  </p>
                  <a
                    href={siteConfig.contact.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#34322F] hover:text-[#A48650] border-b border-[#C2A36A] pb-0.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#A48650]" />
                    <span>Como chegar no Google Maps</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp / Phones */}
              <div className="flex items-start gap-4 pt-5 border-t border-[#E9E3D9]">
                <div className="w-10 h-10 rounded-lg border border-[#C2A36A]/50 bg-[#F8F6F0] flex items-center justify-center text-[#A48650] flex-shrink-0">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl text-[#34322F]">WhatsApp & Telefones</h3>
                  <p className="text-sm text-[#766044]">
                    Principal:{' '}
                    <a
                      href={mainWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#34322F] hover:text-[#A48650] transition-colors"
                    >
                      {siteConfig.contact.mainWhatsappDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-[#766044]">
                    Contabilidade: (21) 97974-1307 · (21) 97497-7021 | Psicologia: (21) 97427-1660
                  </p>
                </div>
              </div>

              {/* Editable Pending Fields: Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-[#E9E3D9]">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#A48650] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#34322F]">
                      Horário de Atendimento
                    </p>
                    <p className="text-xs text-[#766044] mt-1">
                      {siteConfig.contact.businessHours || 'A confirmar antes da publicação'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#A48650] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#34322F]">
                      E-mail Institucional
                    </p>
                    <p className="text-xs text-[#766044] mt-1">
                      {siteConfig.contact.email || 'A confirmar antes da publicação'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-[#E9E3D9] bg-[#E9E3D9] h-64 sm:h-72 shadow-soft">
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
              className="bg-[#F8F6F0] border border-[#E9E3D9] rounded-2xl p-7 sm:p-9 space-y-5 shadow-soft"
            >
              <div className="space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#34322F]">
                  Envie uma mensagem
                </h3>
                <p className="text-sm text-[#766044]">
                  Selecione a área desejada e descreva brevemente como podemos ajudar.
                </p>
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#766044] mb-1.5"
                >
                  Nome completo
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border border-[#B7AEA1]/60 text-sm text-[#34322F] placeholder-[#B7AEA1] focus:outline-none focus:border-[#C2A36A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#766044] mb-1.5"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border border-[#B7AEA1]/60 text-sm text-[#34322F] placeholder-[#B7AEA1] focus:outline-none focus:border-[#C2A36A]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-area"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#766044] mb-1.5"
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
                    className="w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border border-[#B7AEA1]/60 text-sm text-[#34322F] focus:outline-none focus:border-[#C2A36A]"
                  >
                    <option value="Contabilidade">Contabilidade</option>
                    <option value="Psicologia">Psicologia</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#766044] mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Como podemos auxiliar você?"
                  className="w-full px-4 py-3 rounded-lg bg-[#F8F6F0] border border-[#B7AEA1]/60 text-sm text-[#34322F] placeholder-[#B7AEA1] focus:outline-none focus:border-[#C2A36A] resize-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs text-[#766044] bg-[#E9E3D9] px-3.5 py-2.5 rounded-lg">
                  {error}
                </p>
              )}

              {validated && (
                <div
                  role="status"
                  className="flex items-start gap-2.5 text-xs text-[#34322F] bg-[#E9E3D9]/70 border border-[#C2A36A]/60 px-4 py-3 rounded-lg"
                >
                  <Info className="w-4 h-4 text-[#A48650] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">
                      Dados validados. Integração de envio pendente antes da publicação.
                    </p>
                    <p className="text-[#766044]">
                      Enquanto o endpoint de e-mail não estiver conectado, você pode falar
                      diretamente pelo WhatsApp da área de {form.area}.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-[#34322F] text-[#F8F6F0] text-sm font-medium hover:bg-[#766044] transition-colors"
              >
                Validar e enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
