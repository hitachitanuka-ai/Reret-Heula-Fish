import React, { useEffect } from 'react';
import { X, MessageSquare, Check, Snowflake, Package } from 'lucide-react';
import { ProductItem } from '../data/products';
import { createWhatsAppUrl, defaultMessages } from '../data/siteConfig';

interface ProductModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal open
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

  if (!isOpen || !product) return null;

  const productWhatsAppUrl = createWhatsAppUrl(defaultMessages.productInquiry(product.name));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0B1F33]/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Content with Gradient Border Wrap */}
      <div className="relative z-10 w-full max-w-3xl my-8 p-[1.5px] rounded-3xl bg-gradient-to-br from-[#087EAC] via-[#69BCE0]/40 to-white/90 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="relative bg-white rounded-[1.4rem] overflow-hidden">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#102A43] hover:text-[#087EAC] shadow-md flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
            aria-label="Tutup jendela detail produk"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image Side with Soft Radial Mask */}
            <div className="relative h-64 md:h-full bg-[#F4FAFD] min-h-[280px]">
              <img
                src={product.image}
                alt={product.altText}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 md:from-transparent md:bg-gradient-to-r md:from-transparent md:to-white/80 via-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-semibold text-[#087EAC] shadow-xs border border-[#DCE7EF]">
                {product.code}
              </div>
            </div>

            {/* Details Side */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#087EAC] mb-1">
                  {product.category}
                </div>
                <h3 id="modal-product-title" className="font-serif text-2xl font-bold text-[#102A43] mb-2">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-[#087EAC] mb-4">
                  {product.tagline}
                </p>

                <p className="text-sm text-[#526477] leading-relaxed mb-5">
                  {product.fullDescription}
                </p>

                {/* Highlights */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#102A43] mb-2.5">
                    Keunggulan & Karakteristik
                  </h4>
                  <ul className="space-y-1.5">
                    {product.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#526477]">
                        <Check className="w-4 h-4 text-[#087EAC] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Table */}
                <div className="mb-5 bg-[#F4FAFD] p-3.5 rounded-xl border border-[#DCE7EF] space-y-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="text-[#8495A5] font-medium">{spec.label}</span>
                      <span className="text-[#102A43] font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Packaging & Storage info */}
                <div className="space-y-2 text-xs text-[#526477] mb-6">
                  <div className="flex items-start gap-2">
                    <Package className="w-4 h-4 text-[#087EAC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#102A43]">Pengemasan: </strong>
                      {product.packagingInfo}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Snowflake className="w-4 h-4 text-[#087EAC] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#102A43]">Penyimpanan: </strong>
                      {product.storageInfo}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#DCE7EF] flex flex-col sm:flex-row gap-3">
                <a
                  href={productWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#087EAC] hover:bg-[#06658b] rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Pesan Produk via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 px-4 text-xs font-semibold text-[#526477] hover:text-[#102A43] hover:bg-[#F4FAFD] rounded-xl transition-colors border border-[#DCE7EF]"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
