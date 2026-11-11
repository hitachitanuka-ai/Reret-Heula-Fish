import React, { useState } from 'react';
import { MessageSquare, Users, Utensils, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { siteConfig, createWhatsAppUrl, defaultMessages } from '../data/siteConfig';

export const Contact: React.FC = () => {
  const [customMsg, setCustomMsg] = useState('');
  const [inquirerName, setInquirerName] = useState('');

  const b2cUrl = createWhatsAppUrl(defaultMessages.b2c);
  const b2bUrl = createWhatsAppUrl(defaultMessages.b2b);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = inquirerName ? `Halo Reret Heula Fish, perkenalkan saya ${inquirerName}. ` : 'Halo Reret Heula Fish. ';
    const body = customMsg.trim() || 'Saya ingin menanyakan informasi pemesanan produk ikan nila.';
    const fullMessage = `${greeting}${body} Terima kasih.`;
    window.open(createWhatsAppUrl(fullMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4FAFD] bg-water-texture border-t border-[#DCE7EF] relative overflow-hidden">
      {/* Decorative Fluid Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#69BCE0]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#D9F0FA]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#087EAC] mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A43] tracking-tight text-balance">
            Siap Menghadirkan Ikan Nila Berkualitas untuk Anda?
          </h2>
          <p className="mt-3 text-base text-[#526477]">
            Reret Heula Fish siap menjadi pilihan untuk memenuhi kebutuhan ikan nila segar dan produk olahan, baik untuk konsumsi keluarga maupun kebutuhan usaha kuliner.
          </p>
        </div>

        {/* 2 Primary CTA Cards with Gradient Borders: B2C and B2B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* B2C Card with Soft Gradient Border */}
          <div className="gradient-border-subtle group">
            <div className="bg-white rounded-[1.2rem] p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF6FB] text-[#087EAC] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#087EAC]">
                  B2C — Kebutuhan Rumah Tangga
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#102A43] mt-1 mb-3">
                  Konsumsi Keluarga Sehat
                </h3>
                <p className="text-sm text-[#526477] leading-relaxed mb-6">
                  Pesan produk ikan nila untuk kebutuhan konsumsi keluarga Anda. Nikmati daging tebal, rasa gurih alami, dan praktis tanpa bau tanah.
                </p>
                <div className="bg-[#F4FAFD] p-3.5 rounded-xl border border-[#DCE7EF] mb-6 text-xs text-[#526477]">
                  <strong className="text-[#102A43] block mb-1">Format Pesan WhatsApp Cepat:</strong>
                  <p className="italic">
                    &ldquo;{defaultMessages.b2c}&rdquo;
                  </p>
                </div>
              </div>

              <a
                href={b2cUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#087EAC] hover:bg-[#06658b] rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi via WhatsApp (B2C)</span>
              </a>
            </div>
          </div>

          {/* B2B Card with Ocean Gradient Border */}
          <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#087EAC] via-[#102A43] to-[#69BCE0]/50 shadow-xl group">
            <div className="bg-[#102A43] text-white rounded-[1.35rem] p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#087EAC]/25 text-[#69BCE0] flex items-center justify-center mb-6 border border-[#69BCE0]/30 shadow-2xs group-hover:scale-105 transition-transform">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#69BCE0]">
                  B2B — Kemitraan & Kebutuhan Usaha
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-3">
                  Restoran, Katering & Usaha Kuliner
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Hubungi kami untuk kebutuhan restoran, katering, distributor, maupun pembelian dalam jumlah besar dengan kepastian mutu dan jadwal pasokan.
                </p>
                <div className="bg-[#0B1F33] p-3.5 rounded-xl border border-slate-700 mb-6 text-xs text-slate-300">
                  <strong className="text-white block mb-1">Format Pesan WhatsApp Kerja Sama:</strong>
                  <p className="italic">
                    &ldquo;{defaultMessages.b2b}&rdquo;
                  </p>
                </div>
              </div>

              <a
                href={b2bUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#087EAC] hover:bg-[#69BCE0] hover:text-[#102A43] rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAC]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Pasokan B2B via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Custom Inquiry Form & Contact Info Strip with Gradient Border */}
        <div className="gradient-border-subtle">
          <div className="bg-white/95 backdrop-blur-sm rounded-[1.2rem] p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Form: Custom Direct Message Builder */}
              <div className="lg:col-span-7">
                <h4 className="font-serif text-xl font-bold text-[#102A43] mb-2">
                  Kirim Pertanyaan Spesifik
                </h4>
                <p className="text-xs text-[#526477] mb-6">
                  Tuliskan kebutuhan khusus Anda, pesan akan langsung tersambung ke WhatsApp Reret Heula Fish secara otomatis.
                </p>

                <form onSubmit={handleCustomSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="inquirer-name" className="block text-xs font-semibold text-[#102A43] mb-1">
                      Nama Lengkap / Nama Usaha
                    </label>
                    <input
                      id="inquirer-name"
                      type="text"
                      value={inquirerName}
                      onChange={(e) => setInquirerName(e.target.value)}
                      placeholder="Contoh: Bapak Hendra / Resto Ikan Bakar"
                      className="w-full px-4 py-2.5 text-sm border border-[#DCE7EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087EAC] bg-white text-[#102A43]"
                    />
                  </div>

                  <div>
                    <label htmlFor="custom-msg" className="block text-xs font-semibold text-[#102A43] mb-1">
                      Pesan atau Pertanyaan Anda
                    </label>
                    <textarea
                      id="custom-msg"
                      rows={3}
                      value={customMsg}
                      onChange={(e) => setCustomMsg(e.target.value)}
                      placeholder="Contoh: Saya membutuhkan fillet ikan nila untuk katering 50 kg minggu depan..."
                      className="w-full px-4 py-2.5 text-sm border border-[#DCE7EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087EAC] bg-white text-[#102A43]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#087EAC] hover:bg-[#06658b] rounded-xl transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirimkan ke WhatsApp</span>
                  </button>
                </form>
              </div>

              {/* Right Info: Official Contact Data with Subtle Glass */}
              <div className="lg:col-span-5 bg-[#F4FAFD]/90 rounded-2xl p-6 border border-[#DCE7EF] flex flex-col justify-between">
                <div>
                  <h5 className="font-serif text-base font-bold text-[#102A43] mb-4">
                    Informasi Kontak Resmi
                  </h5>
                  <div className="space-y-3.5 text-xs text-[#526477]">
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#087EAC] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#102A43] block">WhatsApp Terpusat:</span>
                        <a
                          href={createWhatsAppUrl(defaultMessages.general)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#087EAC] hover:underline transition-colors font-medium text-[#102A43]"
                        >
                          {siteConfig.whatsAppDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#087EAC] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#102A43] block">Email Resmi:</span>
                        <span>{siteConfig.email}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#087EAC] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#102A43] block">Jam Layanan:</span>
                        <span>{siteConfig.operatingHours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#087EAC] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#102A43] block">Lokasi Budidaya:</span>
                        <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.province}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE7EF]">
                  <span className="text-[11px] text-[#8495A5] block">
                    Nomor kontak dapat diperbarui kapan saja melalui konfigurasi terpusat <code className="text-[#087EAC]">siteConfig.ts</code>.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
