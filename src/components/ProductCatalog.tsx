import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare, Eye, Sparkles, Check, ArrowRight } from 'lucide-react';
import { productsData, ProductItem } from '../data/products';
import { ProductModal } from './ProductModal';
import { createWhatsAppUrl, defaultMessages } from '../data/siteConfig';

interface ProductCatalogProps {
  externalIndex?: number | null;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ externalIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Sync activeIndex when triggered externally (e.g., from footer product click)
  React.useEffect(() => {
    if (externalIndex !== undefined && externalIndex !== null && externalIndex >= 0 && externalIndex < productsData.length) {
      setActiveIndex(externalIndex);
    }
  }, [externalIndex]);

  const activeProduct = productsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % productsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const handleOpenDetail = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const activeWhatsAppUrl = createWhatsAppUrl(
    defaultMessages.productInquiry(activeProduct.name)
  );

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#0B1F33] text-white relative overflow-hidden">
      {/* Decorative Ambient Sea Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#087EAC]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#69BCE0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#69BCE0] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Katalog Produk Unggulan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Pilihan Produk Berkualitas untuk Kebutuhan Anda.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Temukan berbagai pilihan produk ikan nila Reret Heula Fish yang disiapkan untuk kebutuhan konsumsi keluarga maupun usaha kuliner.
          </p>
        </div>

        {/* INTERACTIVE CAROUSEL SHOWCASE (Matching Video Reference Format) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
          {/* Active Product Full Background with Cinematic Scrim */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-0"
            >
              <img
                src={activeProduct.image}
                alt={activeProduct.altText}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {/* Deep Left-to-Right Scrim for High-Contrast Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/95 via-[#0B1F33]/85 lg:via-[#0B1F33]/70 to-[#0B1F33]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent lg:hidden" />
            </motion.div>
          </AnimatePresence>

          {/* Top Bar inside the Card Frame */}
          <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#69BCE0]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                Reret Heula Fish Selection
              </span>
            </div>
            <div className="text-xs font-semibold text-[#69BCE0] uppercase tracking-wider">
              {activeProduct.code}
            </div>
          </div>

          {/* Middle Body: Left Narrative + Right Floating Cards */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Title, Description, and Actions */}
            <div className="lg:col-span-6 xl:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-[#69BCE0] mb-2 flex items-center gap-2">
                    <span className="inline-block w-4 h-0.5 bg-[#69BCE0]" />
                    <span>{activeProduct.category}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    {activeProduct.name.toUpperCase()}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                    {activeProduct.shortDescription}
                  </p>

                  {/* Highlights Bullets */}
                  <ul className="space-y-2 mb-8 text-xs sm:text-sm text-slate-200">
                    {activeProduct.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#69BCE0] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenDetail(activeProduct)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#102A43] bg-white hover:bg-slate-100 rounded-xl transition-all shadow-lg active:scale-98"
                    >
                      <Eye className="w-4 h-4 text-[#087EAC]" />
                      <span>Detail Produk</span>
                    </button>

                    <a
                      href={activeWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#087EAC] hover:bg-[#06658b] rounded-xl transition-all shadow-lg active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Pesan Sekarang</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Floating Cards Row (Matching Video Reference) */}
            <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-end overflow-x-auto pb-4 pt-2 no-scrollbar">
              <div className="flex items-center gap-4 sm:gap-6">
                {productsData.map((prod, index) => {
                  const isCurrent = index === activeIndex;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => setActiveIndex(index)}
                      className={`cursor-pointer transition-all duration-400 shrink-0 ${
                        isCurrent
                          ? 'w-44 sm:w-52 h-64 sm:h-76 ring-2 ring-[#69BCE0] scale-102 shadow-2xl'
                          : 'w-36 sm:w-44 h-56 sm:h-64 opacity-75 hover:opacity-100 hover:scale-101 shadow-lg'
                      } rounded-2xl overflow-hidden relative group`}
                    >
                      <img
                        src={prod.image}
                        alt={prod.altText}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Gradient Scrim on Cards */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#69BCE0]">
                          — {prod.code}
                        </span>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                          {prod.name}
                        </h4>
                        <span className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                          {prod.tagline}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Controls Bar: Left Arrows, Progress Line, Right Number (Reference Match) */}
          <div className="relative z-10 p-6 sm:p-8 bg-black/40 backdrop-blur-md border-t border-white/10 flex items-center justify-between gap-6">
            {/* Left Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#102A43] border border-white/20 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69BCE0]"
                aria-label="Produk sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#102A43] border border-white/20 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69BCE0]"
                aria-label="Produk selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Progress Line */}
            <div className="flex-1 max-w-md mx-4 hidden sm:block">
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#087EAC] to-[#69BCE0] transition-all duration-300 rounded-full"
                  style={{
                    width: `${((activeIndex + 1) / productsData.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Right Large Styled Numbers (Like "05" in Reference) */}
            <div className="font-serif text-2xl sm:text-3xl font-extrabold tracking-widest text-white/90 tabular-nums">
              0{activeIndex + 1}
              <span className="text-xs sm:text-sm text-slate-400 font-normal"> / 0{productsData.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail Produk */}
      <ProductModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
