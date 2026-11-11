import React, { useState } from 'react';
import { Target, Compass, CheckCircle2, ChevronRight, Waves, Droplets } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profil' | 'visimisi'>('profil');

  const missions = [
    'Menghasilkan ikan nila berkualitas melalui penerapan teknologi budidaya bioflok dan pengelolaan pemeliharaan yang baik.',
    'Menjaga kualitas dan kesegaran produk melalui penanganan pascapanen yang tepat.',
    'Mengembangkan berbagai produk olahan ikan nila yang praktis, higienis, dan sesuai dengan kebutuhan konsumen.',
    'Memberikan pelayanan terbaik dengan mengutamakan kepuasan dan kepercayaan pelanggan.',
    'Mengembangkan usaha perikanan yang berkelanjutan serta memberikan nilai tambah bagi sektor perikanan lokal.',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-ocean-waves bg-water-texture relative overflow-hidden">
      {/* Decorative Floating Fluid Gradients */}
      <div className="absolute top-10 right-5 w-72 h-72 rounded-full bg-[#D9F0FA]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-96 h-96 rounded-full bg-[#69BCE0]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#087EAC] mb-3">
            <Waves className="w-4 h-4" />
            <span>Tentang Reret Heula Fish</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A43] tracking-tight text-balance">
            Berawal dari Budidaya, Berkomitmen pada Kualitas.
          </h2>
          <p className="mt-3 text-base text-[#526477]">
            Dedikasi kami sejak 2016 dalam menghadirkan protein ikan nila unggulan dengan inovasi budidaya ramah lingkungan.
          </p>
        </div>

        {/* 2-Column Main Content: Photo Left with Gradient Border & Soft Edge, Narrative & Tabs Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Soft Organic Image with Gradient Border (Not Rigid Box) */}
          <div className="lg:col-span-5 relative">
            {/* Gradient Border Wrap with Ambient Tinted Shadow */}
            <div className="gradient-border-ocean transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative rounded-[1.4rem] overflow-hidden bg-gradient-to-b from-[#F4FAFD] to-white">
                <img
                  src="/src/assets/images/biofloc_aquaculture_tanks_1794378111238.jpg"
                  alt="Fasilitas Budidaya Kolam Bioflok Reret Heula Fish"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover hover:scale-104 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft Radial Vignette Overlay to Eliminate Boxiness */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/15 to-transparent flex flex-col justify-end p-6 text-white pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <Droplets className="w-4 h-4 text-[#69BCE0]" />
                    <span className="text-xs uppercase tracking-widest text-[#69BCE0] font-semibold">
                      Teknologi Budidaya Bioflok
                    </span>
                  </div>
                  <p className="font-serif text-lg font-bold text-white">
                    Sistem Sirkulasi Air Terkontrol
                  </p>
                  <p className="text-xs text-slate-200 mt-1">
                    Air terkelola stabil, ramah lingkungan, dan menghasilkan daging tebal bebas aroma tanah.
                  </p>
                </div>
              </div>
            </div>

            {/* Established Badge Callout with Soft Gradient Border */}
            <div className="gradient-border-subtle mt-4">
              <div className="p-4 bg-white/95 backdrop-blur-sm rounded-[1.15rem] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#526477] font-medium">Tahun Berdiri</div>
                  <div className="text-base font-bold text-[#102A43]">
                    Sejak Tahun {siteConfig.establishedYear}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#526477] font-medium">Pendekatan</div>
                  <div className="text-sm font-semibold text-[#087EAC]">Modern Aquaculture</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Interactive Tab (Profil vs Visi Misi), & Details */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Interactive Tab Switcher with Soft Rounded Border */}
            <div className="gradient-border-subtle max-w-sm mb-6">
              <div className="flex items-center gap-1.5 p-1 bg-white/90 backdrop-blur-xs rounded-[1.15rem]">
                <button
                  type="button"
                  onClick={() => setActiveTab('profil')}
                  className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-xl transition-all ${
                    activeTab === 'profil'
                      ? 'bg-[#102A43] text-white shadow-sm'
                      : 'text-[#526477] hover:text-[#102A43]'
                  }`}
                >
                  Kisah & Komitmen
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('visimisi')}
                  className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-xl transition-all ${
                    activeTab === 'visimisi'
                      ? 'bg-[#102A43] text-white shadow-sm'
                      : 'text-[#526477] hover:text-[#102A43]'
                  }`}
                >
                  Visi & Misi Usaha
                </button>
              </div>
            </div>

            {/* Tab 1: Profil Narrative */}
            {activeTab === 'profil' && (
              <div className="space-y-4 text-base text-[#526477] leading-relaxed animate-in fade-in duration-300">
                <p>
                  <strong className="text-[#102A43] font-semibold">Reret Heula Fish</strong> merupakan usaha budidaya ikan nila yang berdiri sejak tahun 2016. Berawal dari komitmen untuk menghadirkan produk perikanan berkualitas, kami terus mengembangkan usaha melalui penerapan teknologi bioflok dalam proses budidaya ikan nila.
                </p>
                <p>
                  Teknologi bioflok menjadi salah satu pendekatan budidaya yang kami gunakan untuk mendukung pengelolaan kualitas air dan lingkungan pemeliharaan ikan secara lebih terkontrol.
                </p>
                <p>
                  Tidak hanya berfokus pada kegiatan budidaya, Reret Heula Fish juga mengembangkan produk olahan ikan nila untuk memberikan pilihan yang lebih praktis bagi konsumen.
                </p>
                <div className="gradient-border-subtle my-2">
                  <blockquote className="p-4 bg-white/95 rounded-[1.15rem] text-sm font-medium text-[#102A43] italic">
                    &ldquo;Kami percaya bahwa produk perikanan yang berkualitas berawal dari proses yang baik.&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#087EAC] hover:text-[#06658b] group"
                  >
                    <span>Pelajari Proses Budidaya Kami</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[#8495A5]" aria-hidden="true">·</span>
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#102A43] hover:text-[#087EAC] group"
                  >
                    <span>Lihat Pilihan Produk</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )}

            {/* Tab 2: Visi & Misi */}
            {activeTab === 'visimisi' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Visi Card with Gradient Border */}
                <div className="gradient-border-subtle">
                  <div className="p-5 bg-white/95 rounded-[1.15rem]">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087EAC] mb-2">
                      <Compass className="w-4 h-4" />
                      <span>Visi Usaha</span>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-[#102A43] leading-relaxed">
                      &ldquo;Menjadi usaha budidaya dan penyedia produk ikan nila yang terpercaya, berkualitas, dan berdaya saing melalui penerapan teknologi budidaya yang inovatif serta pengembangan produk perikanan yang bernilai tambah.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Misi List */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087EAC] mb-3">
                    <Target className="w-4 h-4" />
                    <span>Misi Usaha</span>
                  </div>
                  <ul className="space-y-2.5">
                    {missions.map((mission, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#DCE7EF] hover:border-[#69BCE0] transition-colors shadow-2xs"
                      >
                        <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#087EAC] to-[#69BCE0] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm text-[#526477] leading-relaxed">
                          {mission}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
