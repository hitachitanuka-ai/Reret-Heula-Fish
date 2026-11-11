import React, { useState } from 'react';
import { Camera, ZoomIn } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryCategory, GalleryItem } from '../data/gallery';
import { Lightbox } from './Lightbox';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('Semua');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === 'Semua'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxItem(null);
  };

  const handleNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-ocean-waves bg-water-texture border-t border-[#DCE7EF] relative overflow-hidden">
      {/* Decorative Fluid Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#69BCE0]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#D9F0FA]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#087EAC] mb-3">
            <Camera className="w-4 h-4" />
            <span>Dokumentasi Usaha</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A43] tracking-tight text-balance">
            Melihat Lebih Dekat Reret Heula Fish.
          </h2>
          <p className="mt-3 text-base text-[#526477]">
            Transparansi fasilitas pemeliharaan bioflok, mutu panen ikan nila, hingga ragam pengolahan produk kami.
          </p>
        </div>

        {/* Category Filters with Soft Pill Buttons */}
        <div className="gradient-border-subtle max-w-fit mx-auto mb-12 p-1">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-white/80 backdrop-blur-xs p-1 rounded-[1.15rem]">
            {galleryCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#087EAC] text-white shadow-sm'
                      : 'text-[#526477] hover:text-[#102A43] hover:bg-[#EAF6FB]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid with Gradient Border Frames for Soft, Non-Boxy Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="p-[1.5px] rounded-3xl bg-gradient-to-tr from-[#087EAC]/45 via-[#DCE7EF] to-white/70 hover:from-[#087EAC] hover:via-[#69BCE0] hover:to-[#087EAC]/40 transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-2xl cursor-pointer group"
            >
              <div className="relative rounded-[1.35rem] overflow-hidden bg-[#F4FAFD] aspect-4/3 flex flex-col justify-end">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Soft Gradient Mask to Dissolve Boxy Borders */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#69BCE0] px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-xs border border-white/10">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-[#087EAC] transition-colors shadow-xs">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-bold text-white mt-2 group-hover:text-[#69BCE0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        isOpen={activeLightboxItem !== null}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
