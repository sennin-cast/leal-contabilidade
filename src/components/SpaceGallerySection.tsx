import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const SpaceGallerySection: React.FC = () => {
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
      className="py-20 sm:py-28 bg-[#D8CCB8] border-t border-[#C4B69F]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="section-heading">Conheça nosso espaço em Nova Iguaçu</h2>
            <p className="text-sm sm:text-base text-[#3A3128] leading-relaxed">
              Ambiente real preparado para oferecer discrição, conforto e tranquilidade desde a
              recepção.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#3A3128] tabular-nums">
            {photos.length} fotos do espaço · clique para ampliar
          </span>
        </div>

        {/* Balanced 6-Photo Architectural Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {photos.map((photo, index) => {
            const spanClass =
              index === 0
                ? 'lg:col-span-7 h-72 sm:h-96'
                : index === 1
                ? 'lg:col-span-5 h-72 sm:h-96'
                : index === 2 || index === 3
                ? 'lg:col-span-6 h-64 sm:h-80'
                : 'lg:col-span-6 h-64 sm:h-72';

            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ampliar foto: ${photo.caption}`}
                className={`group relative rounded-2xl overflow-hidden border border-[#B5A58C] bg-[#EDE5D8] text-left cursor-pointer shadow-soft ${spanClass}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181512]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#F5EFE6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold tracking-wide">{photo.caption}</span>
                  <span className="p-1.5 rounded-full bg-[#1C1814]/80 border border-[#C6A15B]/50">
                    <Expand className="w-3.5 h-3.5 text-[#D4AF6A]" />
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
          className="fixed inset-0 z-50 bg-[#181512]/92 backdrop-blur-sm flex items-center justify-center p-4"
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
              className="absolute -top-12 right-0 p-2 rounded-full text-[#F5EFE6]/90 hover:text-[#F5EFE6] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full rounded-2xl overflow-hidden border border-[#C6A15B]/45 bg-[#1C1814]">
              <img
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
            </div>

            <div className="w-full mt-4 flex items-center justify-between text-[#F5EFE6]">
              <p className="text-sm text-[#E4DAC9]">{photos[activeIndex].caption}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex - 1 + photos.length) % photos.length)
                  }
                  aria-label="Foto anterior"
                  className="p-2 rounded-xl border border-[#C6A15B]/40 hover:border-[#C6A15B] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#E4DAC9] px-2 tabular-nums">
                  {activeIndex + 1} / {photos.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + 1) % photos.length)}
                  aria-label="Próxima foto"
                  className="p-2 rounded-xl border border-[#C6A15B]/40 hover:border-[#C6A15B] transition-colors cursor-pointer"
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
