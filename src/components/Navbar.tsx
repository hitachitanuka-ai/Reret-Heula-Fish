import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig, createWhatsAppUrl, defaultMessages } from '../data/siteConfig';

interface NavbarProps {
  onOrderClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'products', 'process', 'why-us', 'gallery', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Produk', href: '#products' },
    { label: 'Proses Budidaya', href: '#process' },
    { label: 'Kenapa Kami', href: '#why-us' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Kontak', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppUrl = createWhatsAppUrl(defaultMessages.general);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DCE7EF] py-3'
          : 'bg-white/50 backdrop-blur-md border-b border-[#DCE7EF]/40 py-4.5'
      }`}
    >
      {/* Scroll Progress Bar at the top */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#087EAC] via-[#69BCE0] to-[#102A43] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
            aria-label="Reret Heula Fish Beranda"
          >
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#087EAC] to-[#69BCE0] shadow-xs">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-11_at_12.34.57_8b6c0d96.jpeg"
                alt="Logo Reret Heula Fish"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full bg-white"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#102A43] group-hover:text-[#087EAC] transition-colors whitespace-nowrap">
                RERET HEULA FISH
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#526477] font-medium hidden sm:block">
                Modern Aquaculture Since 2016
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#526477]">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-all whitespace-nowrap shrink-0 py-1 border-b-2 font-medium ${
                    isActive
                      ? 'text-[#087EAC] border-[#087EAC] font-semibold'
                      : 'text-[#526477] border-transparent hover:text-[#087EAC] hover:border-[#69BCE0]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#087EAC] hover:bg-[#06658b] active:scale-98 transition-all rounded-lg shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#087EAC]"
            >
              <span>Pesan Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#102A43] hover:text-[#087EAC] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE7EF] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#102A43] hover:text-[#087EAC] hover:bg-[#EAF6FB] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#DCE7EF]">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#087EAC] hover:bg-[#06658b] rounded-lg transition-colors shadow-sm"
              >
                <span>Pesan Sekarang via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
