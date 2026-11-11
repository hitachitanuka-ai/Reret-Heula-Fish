import React from 'react';
import { MessageSquare, Eye, CheckCircle2 } from 'lucide-react';
import { ProductItem } from '../data/products';
import { createWhatsAppUrl, defaultMessages } from '../data/siteConfig';

interface ProductCardProps {
  product: ProductItem;
  onOpenDetail: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetail }) => {
  const whatsappUrl = createWhatsAppUrl(defaultMessages.productInquiry(product.name));

  return (
    /* Gradient Border Outer Wrap: Softens the rigid rectangular silhouette */
    <div className="group p-[1.5px] rounded-3xl bg-gradient-to-br from-[#087EAC]/35 via-[#DCE7EF] to-white/80 hover:from-[#087EAC] hover:via-[#69BCE0] hover:to-[#087EAC]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-2xl">
      <div className="bg-white rounded-[1.35rem] flex flex-col h-full overflow-hidden">
        {/* Product Image Frame with Soft Bottom Feather Gradient */}
        <div className="relative h-60 sm:h-64 overflow-hidden bg-[#F4FAFD]">
          <img
            src={product.image}
            alt={product.altText}
            className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Soft Bottom Gradient Feathering so Image Merges with Card Body */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none" />

          {/* Category & Code Chip with Soft Rounded Glass */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="bg-[#102A43]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg tracking-wider uppercase shadow-xs">
              {product.code}
            </span>
            <span className="bg-white/95 backdrop-blur-xs text-[#087EAC] text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xs border border-[#DCE7EF]">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Information Body */}
        <div className="p-6 flex-1 flex flex-col justify-between -mt-4 relative z-10">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#102A43] group-hover:text-[#087EAC] transition-colors mb-1">
              {product.name}
            </h3>
            <p className="text-xs font-semibold text-[#087EAC] mb-3">
              {product.tagline}
            </p>
            <p className="text-sm text-[#526477] leading-relaxed mb-4 line-clamp-3">
              {product.shortDescription}
            </p>

            {/* Key Quick Bullets */}
            <ul className="space-y-1.5 mb-6 text-xs text-[#526477]">
              {product.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087EAC] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Controls */}
          <div className="pt-4 border-t border-[#DCE7EF] grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onOpenDetail(product)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#102A43] bg-[#EAF6FB] hover:bg-[#D9F0FA] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
            >
              <Eye className="w-3.5 h-3.5 text-[#087EAC]" />
              <span>Detail Produk</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-[#087EAC] hover:bg-[#06658b] rounded-xl transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Pesan Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
