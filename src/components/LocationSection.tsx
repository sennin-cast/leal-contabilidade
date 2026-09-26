import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, Building, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const address = "Rua Otávio Tarquino, 507, Loja – Centro, Nova Iguaçu - RJ, CEP: 26210-171";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Rua Otávio Tarquino, 507, Centro, Nova Iguaçu - RJ, 26210-171"
  )}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    "Rua Otávio Tarquino, 507, Centro, Nova Iguaçu - RJ"
  )}`;

  return (
    <section id="localizacao" className="py-20 relative bg-brand-navy-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Sede Própria & Presença Regional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Venha Nos Visitar ou <span className="gold-gradient-text">Seja Atendido Online</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Infraestrutura moderna no Centro de Nova Iguaçu para recebê-lo com conforto ou atendimento 100% digital em todo o Brasil.
          </p>
        </div>

        {/* Map & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Col: Contact Details Card */}
          <div className="lg:col-span-5 bg-glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-brand-gold-500/30 space-y-6">
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-gold-400 uppercase tracking-widest block mb-1">
                  Sede Corporativa
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Leal Assessoria Contábil
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Endereço Oficial:</strong>
                  <span>Rua Otávio Tarquino, 507, Loja</span>
                  <br />
                  <span>Centro, Nova Iguaçu - RJ</span>
                  <br />
                  <span className="text-xs text-slate-400">CEP: 26210-171 &bull; Brasil</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Horário de Atendimento:</strong>
                  <span>Segunda a Sexta: 08:30 às 17:30</span>
                  <br />
                  <span className="text-xs text-emerald-400 font-medium">Plataforma digital e envio de notas 24/7</span>
                </div>
              </div>

              {/* Direct Phone / WhatsApp */}
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="p-2 rounded-lg bg-brand-navy-850 border border-brand-gold-500/30 text-brand-gold-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">WhatsApp & Telefone:</strong>
                  <a
                    href="https://wa.me/5521979741307?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Leal%20Assessoria%20Cont%C3%A1bil."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold-300 hover:underline font-bold text-base block"
                  >
                    (21) 97974-1307
                  </a>
                  <span className="text-xs text-slate-400">Atendimento imediato em até 15 minutos</span>
                </div>
              </div>
            </div>

            {/* GPS Route Buttons */}
            <div className="pt-4 border-t border-slate-800 space-y-2.5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Traçar Rota até a Sede:
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-brand-navy-850 hover:bg-brand-navy-800 border border-slate-700 hover:border-brand-gold-400 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-brand-navy-850 hover:bg-brand-navy-800 border border-slate-700 hover:border-brand-gold-400 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Waze</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Col: Google Maps Interactive Embed Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-brand-gold-500/30 shadow-2xl relative min-h-[380px] bg-brand-navy-950 flex flex-col">
            <iframe
              title="Localização Leal Assessoria Contábil Nova Iguaçu"
              src="https://maps.google.com/maps?q=Rua+Otavio+Tarquino+507+Centro+Nova+Iguacu+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};
