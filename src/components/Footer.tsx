import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageSquare, ArrowUp, ArrowUpRight } from 'lucide-react';
import { siteConfig, createWhatsAppUrl, defaultMessages } from '../data/siteConfig';

interface FooterProps {
  onProductClick?: (index: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onProductClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (index: number) => {
    if (onProductClick) {
      onProductClick(index);
    }
    const productsElement = document.getElementById('products');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = createWhatsAppUrl(defaultMessages.general);

  return (
    <footer className="bg-[#0B1F33] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-11_at_12.34.57_8b6c0d96.jpeg"
                alt="Logo Reret Heula Fish Farm"
                className="w-12 h-12 object-contain rounded-full border border-slate-700 bg-white"
              />
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {siteConfig.brandName}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#69BCE0] font-medium">
                  {siteConfig.subBrand}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Reret Heula Fish merupakan usaha budidaya ikan nila sejak tahun 2016 dengan penerapan teknologi bioflok dan pengembangan produk perikanan segar maupun olahan.
            </p>
          </div>

          {/* Quick Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-[#69BCE0] transition-colors">
                  Home (Beranda)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#69BCE0] transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#69BCE0] transition-colors">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#69BCE0] transition-colors">
                  Proses Budidaya
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#69BCE0] transition-colors">
                  Kenapa Memilih Kami
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#69BCE0] transition-colors">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#69BCE0] transition-colors">
                  Kontak & Pemesanan
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
              Produk Pilihan
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <button
                type="button"
                onClick={() => handleProductSelect(0)}
                className="w-full text-left p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-[#69BCE0]/60 transition-all duration-300 group cursor-pointer shadow-xs active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69BCE0]"
                aria-label="Lihat produk Ikan Nila Segar di katalog"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#69BCE0] font-bold group-hover:text-white transition-colors">
                    01. Ikan Nila Segar
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#69BCE0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Pilihan utuh atau sudah dibersihkan higienis.
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleProductSelect(1)}
                className="w-full text-left p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-[#69BCE0]/60 transition-all duration-300 group cursor-pointer shadow-xs active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69BCE0]"
                aria-label="Lihat produk Ikan Nila Fillet di katalog"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#69BCE0] font-bold group-hover:text-white transition-colors">
                    02. Ikan Nila Fillet
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#69BCE0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Daging fillet tanpa duri utama, praktis siap olah.
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleProductSelect(2)}
                className="w-full text-left p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-[#69BCE0]/60 transition-all duration-300 group cursor-pointer shadow-xs active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69BCE0]"
                aria-label="Lihat produk Ikan Nila Bumbu Marinasi di katalog"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#69BCE0] font-bold group-hover:text-white transition-colors">
                    03. Ikan Nila Bumbu Marinasi
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#69BCE0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Bumbu rempah alami pilihan meresap sempurna.
                </span>
              </button>
            </div>
          </div>

          {/* Official Contact & Social Media (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
                Kontak & Jaringan
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#69BCE0] shrink-0" />
                  <span>{siteConfig.whatsAppDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#69BCE0] shrink-0" />
                  <span>{siteConfig.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#69BCE0] shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </div>

            {/* Social Media Link Buttons */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Media Sosial Resmi:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#69BCE0] hover:text-[#69BCE0] flex items-center justify-center transition-colors"
                  aria-label="Instagram Reret Heula Fish"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#69BCE0] hover:text-[#69BCE0] flex items-center justify-center transition-colors font-bold text-xs"
                  aria-label="TikTok Reret Heula Fish"
                >
                  TT
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#087EAC] hover:bg-[#69BCE0] hover:text-[#102A43] text-white flex items-center justify-center transition-colors shadow-xs"
                  aria-label="WhatsApp Reret Heula Fish"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 {siteConfig.brandName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-500">Premium Modern Aquaculture & Fresh Seafood</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#69BCE0] hover:text-white transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
