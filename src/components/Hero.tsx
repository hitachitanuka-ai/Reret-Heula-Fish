import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Sparkles, Mouse } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroSlide {
  id: string;
  badge: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  highlight: string;
  targetAnchor: string;
  ctaText: string;
}

const slides: HeroSlide[] = [
  {
    id: '01',
    badge: 'ESTABLISHED SINCE 2016 · TEKNOLOGI BIOFLOK',
    titlePrimary: 'BUDIDAYA IKAN NILA',
    titleSecondary: 'DARI KOLAM HINGGA MEJA MAKAN.',
    description:
      'Menghadirkan ikan nila segar dan berbagai produk olahan berkualitas melalui proses budidaya dengan teknologi bioflok sejak 2016.',
    highlight: 'Daging tebal, gurih alami, dan tidak berbau lumpur/tanah.',
    targetAnchor: '#products',
    ctaText: 'JELAJAHI PRODUK',
  },
  {
    id: '02',
    badge: 'KUALITAS SEGAR · NUTRISI TERBAIK',
    titlePrimary: 'SEGAR & BEBAS BAU TANAH',
    titleSecondary: 'KUALITAS TERJAMIN UNTUK KELUARGA.',
    description:
      'Dipelihara di kolam bioflok dengan parameter air terkontrol ketat, memberikan tekstur daging ikan yang padat, bersih, dan segar.',
    highlight: 'Pilihan utuh, dibersihkan higienis, maupun fillet murni.',
    targetAnchor: '#products',
    ctaText: 'LIHAT PILIHAN PRODUK',
  },
  {
    id: '03',
    badge: 'KEMITRAAN USAHA · B2B & RESTORAN',
    titlePrimary: 'PASOKAN RUTIN BERMUTU',
    titleSecondary: 'MITRA TERPERCAYA USAHA KULINER.',
    description:
      'Melayani pasokan ikan nila hidup, segar harian, dan olahan untuk kebutuhan restoran, katering, distributor, dan bisnis kuliner Anda.',
    highlight: 'Kapasitas suplai stabil dan penanganan pascapanen higienis.',
    targetAnchor: '#contact',
    ctaText: 'KONSULTASI PASOKAN B2B',
  },
];

export const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];

  // Typewriter state for titleSecondary
  const [displayedSecondaryTitle, setDisplayedSecondaryTitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect on titleSecondary
  useEffect(() => {
    let index = 0;
    const fullText = currentSlide.titleSecondary;
    setDisplayedSecondaryTitle('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedSecondaryTitle(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 38);

    return () => clearInterval(typingInterval);
  }, [currentSlideIndex]);

  // Automatic slide rotation after reading pause
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  const scrollToContent = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-white pt-20 pb-4 sm:pt-24 lg:pt-28 lg:pb-8"
    >
      {/* FIXED BACKGROUND IMAGE: Strictly preserved aspect ratio, invariant, no shifts */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/src/assets/images/hero_tilapia_panoramic_ice_1794379125393.jpg"
          alt="Latar belakang panorama ikan nila segar di atas es kristal"
          className="w-full h-full object-cover object-[78%_center] lg:object-center select-none"
          referrerPolicy="no-referrer"
        />

        {/* Textured Overlay: Water Ripple Texture Pattern */}
        <div className="absolute inset-0 bg-water-texture opacity-50 mix-blend-overlay pointer-events-none" />

        {/* Soft, measured icy gradient wash on the left to guarantee WCAG AA contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:w-[68%]" />
        
        {/* Soft vignette feathered mask for non-boxy edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
      </div>

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-[#69BCE0]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 rounded-full bg-[#D9F0FA]/50 blur-3xl pointer-events-none" />

      {/* MAIN CONTAINER: Responsive sizing so text never gets clipped or overlaps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center my-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column: Balanced typography to fit comfortably on all viewport heights */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex flex-col"
              >
                {/* Clean Unboxed Kicker Badge */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#087EAC] mb-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#087EAC]" />
                  <span>{currentSlide.badge}</span>
                </div>

                {/* Dual-Tone Headline: Calibrated to clamp smoothly and prevent vertical overflow */}
                <h1 className="font-serif font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-balance leading-tight mb-3 sm:mb-4">
                  <span className="block text-[#087EAC] tracking-tight">
                    {currentSlide.titlePrimary}
                  </span>
                  <span className="block text-[#102A43] mt-0.5 tracking-tight">
                    {displayedSecondaryTitle}
                    <span
                      className={`inline-block w-0.5 sm:w-1 h-5 sm:h-7 bg-[#087EAC] ml-1.5 align-middle ${
                        isTyping ? 'opacity-100' : 'animate-pulse'
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </h1>

                {/* Subtitle Body: Clean measure and balanced line height */}
                <p className="text-sm sm:text-base text-[#526477] max-w-xl leading-relaxed mb-4 font-normal">
                  {currentSlide.description}
                </p>

                {/* Motto / Highlight Bullet with Gradient Border Wrapper */}
                <div className="gradient-border-subtle inline-block mb-6 max-w-fit">
                  <div className="bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-[1.15rem] flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#102A43]">
                    <Sparkles className="w-3.5 h-3.5 text-[#087EAC] shrink-0" />
                    <span>{currentSlide.highlight}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href={currentSlide.targetAnchor}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#102A43] hover:bg-[#087EAC] active:scale-98 transition-all rounded-xl shadow-md whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
                  >
                    <span>{currentSlide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#about"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-[#102A43] bg-white/95 hover:bg-white border border-[#DCE7EF] hover:border-[#69BCE0] rounded-xl shadow-xs transition-colors whitespace-nowrap"
                  >
                    <span>TENTANG KAMI</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right column has open view onto the fixed panoramic background image */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
        </div>
      </div>

      {/* BOTTOM BAR: Scroll indicator and organic wave transition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 flex items-center justify-between text-xs text-[#8495A5]">
        <button
          type="button"
          onClick={scrollToContent}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#102A43] hover:text-[#087EAC] transition-colors focus:outline-none"
        >
          <Mouse className="w-4 h-4 text-[#087EAC] group-hover:translate-y-1 transition-transform animate-bounce" />
          <span>SCROLL KE BAWAH</span>
        </button>

        <div className="hidden sm:flex items-center gap-3 text-[11px] text-[#526477]">
          <span>{siteConfig.brandName}</span>
          <span>·</span>
          <span>Sistem Budidaya Bioflok Sejak 2016</span>
        </div>
      </div>

      {/* Organic Subtle Water Wave Bottom Edge Transition into White Section */}
      <div className="w-full overflow-hidden leading-none z-10 -mb-1 mt-2">
        <svg
          className="relative block w-full h-6 sm:h-10 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
