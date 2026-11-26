import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useReveal } from '../hooks/useReveal';

export const SpaceGallerySection: React.FC = () => {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const photos = siteConfig.officePhotos;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + photos.length) % photos.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, photos.length]);

  return (
    <section
      id="espaco"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#F8F6F0] border-t border-[#E9E3D9] reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C2A36A]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#A48650] font-semibold">
                Nosso Espaço
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#34322F] leading-[1.15]">
              Um ambiente pensado para acolher.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#766044] max-w-md leading-relaxed">
            Cada detalhe do nosso espaço foi pensado para proporcionar conforto, tranquilidade e
            uma experiência agradável desde o primeiro contato.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {photos.map((photo, index) => {
            const spanClass =
              index === 0
                ? 'lg:col-span-7 h-72 sm:h-96'
                : index === 1
                ? 'lg:col-span-5 h-72 sm:h-96'
                : 'lg:col-span-4 h-64 sm:h-72';

            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative rounded-xl overflow-hidden border border-[#E9E3D9] bg-[#E9E3D9] text-left focus:outline-none focus:ring-2 focus:ring-[#C2A36A] ${spanClass}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#34322F]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#F8F6F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium tracking-wide">{photo.caption}</span>
                  <span className="p-1.5 rounded-full bg-[#F8F6F0]/20 backdrop-blur-sm">
                    <Expand className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada do espaço"
          className="fixed inset-0 z-50 bg-[#34322F]/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Fechar visualização"
              className="absolute -top-12 right-0 p-2 rounded-full text-[#F8F6F0]/80 hover:text-[#F8F6F0] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full rounded-xl overflow-hidden border border-[#C2A36A]/40 bg-[#34322F]">
              <img
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
            </div>

            <div className="w-full mt-4 flex items-center justify-between text-[#F8F6F0]">
              <p className="text-sm text-[#E9E3D9]">{photos[activeIndex].caption}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex - 1 + photos.length) % photos.length)
                  }
                  aria-label="Foto anterior"
                  className="p-2 rounded-lg border border-[#B7AEA1]/40 hover:border-[#C2A36A] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#B7AEA1] px-2">
                  {activeIndex + 1} / {photos.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + 1) % photos.length)}
                  aria-label="Próxima foto"
                  className="p-2 rounded-lg border border-[#B7AEA1]/40 hover:border-[#C2A36A] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
