import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/gallery';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Penampil Galeri Foto"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dark overlay backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0B1F33]/90 backdrop-blur-md transition-opacity"
      />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#102A43] flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Tutup penampil galeri"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#102A43] flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Foto sebelumnya"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#102A43] flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Foto selanjutnya"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main Image Container */}
      <div className="relative z-10 max-w-5xl max-h-[85vh] flex flex-col items-center bg-black/40 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="relative overflow-hidden flex items-center justify-center max-h-[70vh]">
          <img
            src={item.image}
            alt={item.altText}
            className="w-full h-auto max-h-[70vh] object-contain rounded-t-xl"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Caption Bar */}
        <div className="w-full p-4 sm:p-6 bg-[#0B1F33] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#69BCE0]">
              {item.category}
            </span>
            <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs text-slate-300 mt-0.5">{item.description}</p>
          </div>
          <div className="text-xs text-[#8495A5] shrink-0 font-medium">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
