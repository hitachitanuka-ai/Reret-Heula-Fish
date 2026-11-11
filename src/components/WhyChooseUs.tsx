import React from 'react';
import { Calendar, Cpu, Layers, ChefHat, Sparkles, ShieldCheck, CheckCircle2, Droplets, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#0B1F33] text-white relative overflow-hidden">
      {/* Decorative Fluid Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#087EAC]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#69BCE0]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Micro-Grid Maritime Texture */}
      <div className="absolute inset-0 bg-water-texture opacity-30 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Minimalist & Editorial */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#69BCE0] mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#69BCE0]" />
            <span>Keunggulan Utama</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Mengapa Memilih Reret Heula Fish?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Standar budidaya bioflok modern yang menjamin ikan nila segar bernutrisi tinggi, bertekstur tebal, dan bebas aroma tanah.
          </p>
        </div>

        {/* MODERN BENTO GRID (Asymmetric, Clean, Eye-Catching) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Tile 1: Marquee Anchor (lg:col-span-7) — Teknologi Bioflok */}
          <div className="lg:col-span-7 p-[1.5px] rounded-3xl bg-gradient-to-br from-[#087EAC]/60 via-white/10 to-transparent group hover:from-[#69BCE0] hover:to-[#087EAC]/40 transition-all duration-500 shadow-xl">
            <div className="relative rounded-[1.4rem] overflow-hidden bg-[#102A43]/90 backdrop-blur-md p-8 sm:p-10 h-full flex flex-col justify-between min-h-[340px]">
              {/* Subtle background image snippet with deep scrim */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                <img
                  src="/src/assets/images/biofloc_aquaculture_tanks_1794378111238.jpg"
                  alt="Biofloc tanks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-[#102A43]/80 to-transparent" />
              </div>

              {/* Content Header */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#087EAC]/20 border border-[#69BCE0]/30 flex items-center justify-center text-[#69BCE0] group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white/20 group-hover:text-[#69BCE0]/40 transition-colors tabular-nums">
                  01
                </span>
              </div>

              {/* Content Body */}
              <div className="relative z-10 mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#69BCE0] block mb-2">
                  Teknologi Budidaya Terdepan
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#69BCE0] transition-colors">
                  Menggunakan Teknologi Bioflok
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mb-6">
                  Penerapan sistem bioflok menjaga ekosistem air tetap bersih, kaya mikroorganisme menguntungkan, dan meminimalkan ketergantungan pada pergantian air berlebih.
                </p>

                {/* Clean Feature Tags */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-[#69BCE0]" />
                    Sirkulasi Terkontrol
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#69BCE0]" />
                    Bebas Bau Tanah
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#69BCE0]" />
                    Ramah Lingkungan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 2 (lg:col-span-5) — Pengalaman Sejak 2016 */}
          <div className="lg:col-span-5 p-[1.5px] rounded-3xl bg-gradient-to-br from-[#69BCE0]/40 via-white/10 to-transparent group hover:from-[#69BCE0] hover:to-[#087EAC]/40 transition-all duration-500 shadow-xl">
            <div className="relative rounded-[1.4rem] overflow-hidden bg-[#102A43]/90 backdrop-blur-md p-8 sm:p-10 h-full flex flex-col justify-between min-h-[340px]">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#087EAC]/20 border border-[#69BCE0]/30 flex items-center justify-center text-[#69BCE0] group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white/20 group-hover:text-[#69BCE0]/40 transition-colors tabular-nums">
                  02
                </span>
              </div>

              <div className="mt-6">
                {/* Large Stat Lockup */}
                <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#69BCE0] tracking-tight mb-2">
                  2016
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#69BCE0] transition-colors">
                  Pengalaman Sejak 2016
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Telah lebih dari satu dekade mengelola budidaya ikan nila secara konsisten dengan dedikasi tinggi pada mutu produk dan kepuasan pelanggan.
                </p>
                <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#69BCE0]" />
                  <span>Kestabilan Mutu & Pasokan Berkelanjutan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 3 (lg:col-span-4) — Berorientasi pada Kualitas */}
          <div className="lg:col-span-4 p-[1.5px] rounded-3xl bg-gradient-to-br from-[#087EAC]/40 via-white/10 to-transparent group hover:from-[#69BCE0] hover:to-[#087EAC]/40 transition-all duration-500 shadow-xl">
            <div className="rounded-[1.4rem] bg-[#102A43]/90 backdrop-blur-md p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#087EAC]/20 border border-[#69BCE0]/30 flex items-center justify-center text-[#69BCE0] group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-white/20 group-hover:text-[#69BCE0]/40 transition-colors tabular-nums">
                    03
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#69BCE0] block mb-1">
                  Karakter Produk
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#69BCE0] transition-colors">
                  Berorientasi pada Kualitas
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Menghasilkan daging ikan nila bertekstur tebal, padat, gurih alami, dan tidak berbau lumpur/tanah karena lingkungan pemeliharaan yang bersih.
                </p>
              </div>

              {/* Motto Micro Badge */}
              <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#69BCE0] italic">
                &ldquo;Daging Tebal, Gurih & Bebas Bau Tanah&rdquo;
              </div>
            </div>
          </div>

          {/* Tile 4 (lg:col-span-4) — Pilihan Produk Beragam */}
          <div className="lg:col-span-4 p-[1.5px] rounded-3xl bg-gradient-to-br from-[#087EAC]/40 via-white/10 to-transparent group hover:from-[#69BCE0] hover:to-[#087EAC]/40 transition-all duration-500 shadow-xl">
            <div className="rounded-[1.4rem] bg-[#102A43]/90 backdrop-blur-md p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#087EAC]/20 border border-[#69BCE0]/30 flex items-center justify-center text-[#69BCE0] group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-white/20 group-hover:text-[#69BCE0]/40 transition-colors tabular-nums">
                    04
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#69BCE0] block mb-1">
                  Variasi Kebutuhan
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#69BCE0] transition-colors">
                  Pilihan Produk Beragam
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Menyediakan varian lengkap mulai dari ikan nila segar utuh, ikan sudah dibersihkan, fillet murni tanpa duri, hingga racikan bumbu marinasi.
                </p>
              </div>

              {/* Product Pills */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Utuh Segar</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Sudah Bersih</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Fillet</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Marinasi</span>
              </div>
            </div>
          </div>

          {/* Tile 5 (lg:col-span-4) — Lebih Praktis untuk Konsumen */}
          <div className="lg:col-span-4 p-[1.5px] rounded-3xl bg-gradient-to-br from-[#087EAC]/40 via-white/10 to-transparent group hover:from-[#69BCE0] hover:to-[#087EAC]/40 transition-all duration-500 shadow-xl">
            <div className="rounded-[1.4rem] bg-[#102A43]/90 backdrop-blur-md p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#087EAC]/20 border border-[#69BCE0]/30 flex items-center justify-center text-[#69BCE0] group-hover:scale-110 transition-transform">
                    <ChefHat className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-white/20 group-hover:text-[#69BCE0]/40 transition-colors tabular-nums">
                    05
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#69BCE0] block mb-1">
                  Kemudahan Kuliner
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#69BCE0] transition-colors">
                  Lebih Praktis untuk Konsumen
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Menyederhanakan waktu memasak bagi keluarga maupun operasional usaha kuliner dengan produk yang siap langsung diolah secara higienis.
                </p>
              </div>

              {/* Benefit Footer */}
              <div className="pt-4 border-t border-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#69BCE0]" />
                <span>Siap Olah · Higienis · Hemat Waktu Dapur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Promise Callout Strip */}
        <div className="mt-14 p-[1.5px] rounded-3xl bg-gradient-to-r from-[#087EAC]/40 via-[#69BCE0]/50 to-[#087EAC]/40 max-w-4xl mx-auto shadow-2xl">
          <div className="p-7 sm:p-8 rounded-[1.4rem] bg-[#102A43]/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#69BCE0] block mb-1">
                Komitmen Mutu Sejak 2016
              </span>
              <p className="font-serif text-xl sm:text-2xl font-bold text-white">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Solusi protein ikan nila terpercaya untuk konsumsi keluarga dan kebutuhan bisnis kuliner Anda.
              </p>
            </div>

            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#102A43] bg-white hover:bg-[#69BCE0] transition-colors rounded-xl shadow-lg whitespace-nowrap shrink-0 active:scale-98"
            >
              <span>Jelajahi Produk Kami</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
