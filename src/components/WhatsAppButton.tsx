import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Users, Utensils, Send } from 'lucide-react';
import { siteConfig, createWhatsAppUrl, defaultMessages } from '../data/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const b2cUrl = createWhatsAppUrl(defaultMessages.b2c);
  const b2bUrl = createWhatsAppUrl(defaultMessages.b2b);
  const generalUrl = createWhatsAppUrl(defaultMessages.general);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Inquiry Popup Menu */}
      {popupOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-[#DCE7EF] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#102A43] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#087EAC] flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold block">{siteConfig.brandName}</span>
                <span className="text-[10px] text-[#69BCE0]">Layanan Chat WhatsApp</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg"
              aria-label="Tutup jendela chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Options */}
          <div className="p-3 space-y-2 text-xs">
            <p className="text-[11px] text-[#526477] px-1">
              Pilih keperluan Anda untuk terhubung langsung dengan admin kami:
            </p>

            <a
              href={b2cUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setPopupOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#F4FAFD] hover:bg-[#EAF6FB] border border-[#DCE7EF] text-[#102A43] transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#087EAC]" />
                <div>
                  <span className="font-semibold block">Konsumsi Keluarga (B2C)</span>
                  <span className="text-[10px] text-[#526477]">Pemesanan rumah tangga</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8495A5] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={b2bUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setPopupOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#F4FAFD] hover:bg-[#EAF6FB] border border-[#DCE7EF] text-[#102A43] transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#087EAC]" />
                <div>
                  <span className="font-semibold block">Kemitraan Usaha (B2B)</span>
                  <span className="text-[10px] text-[#526477]">Restoran, katering & distributor</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8495A5] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={generalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setPopupOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F4FAFD] text-[#526477] hover:text-[#102A43] transition-colors group"
            >
              <span className="font-medium">Pertanyaan Umum Lainnya</span>
              <ChevronRight className="w-4 h-4 text-[#8495A5] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPopupOpen(!popupOpen)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#087EAC] hover:bg-[#06658b] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#087EAC]"
          aria-label="Buka bantuan WhatsApp Reret Heula Fish"
          aria-expanded={popupOpen}
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-current" />
          </div>
          <span className="text-xs font-bold tracking-wide hidden sm:inline whitespace-nowrap">
            Chat WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};
