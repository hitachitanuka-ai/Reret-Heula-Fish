/**
 * Konfigurasi terpusat Reret Heula Fish
 * Memudahkan pemilik website untuk memperbarui nomor kontak, alamat, tautan sosial media, dsb.
 */

export interface SiteConfig {
  brandName: string;
  subBrand: string;
  tagline: string;
  taglineSub: string;
  establishedYear: number;
  whatsAppNumber: string; // Format internasional tanpa +, spasi, atau strip. Contoh: 6281234567890
  whatsAppDisplay: string;
  email: string;
  address: string;
  city: string;
  province: string;
  country: string;
  googleMapsUrl: string;
  socialMedia: {
    instagram: string;
    tiktok: string;
  };
  operatingHours: string;
  motto: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'RERET HEULA FISH',
  subBrand: 'Fish Farm & Fresh Tilapia',
  tagline: 'Fresh from Our Farm, Quality on Your Table.',
  taglineSub: 'Premium Modern Aquaculture & Fresh Seafood',
  establishedYear: 2016,
  // Nomor kontak WhatsApp terpusat (dapat diganti kapan saja)
  whatsAppNumber: '6283819888657', 
  whatsAppDisplay: '+62 838-1988-8657',
  email: 'info@reretheula.com',
  address: 'Fasilitas Budidaya Bioflok Reret Heula Fish, Jawa Barat',
  city: 'Bandung / Priangan Timur',
  province: 'Jawa Barat',
  country: 'Indonesia',
  googleMapsUrl: 'https://maps.google.com',
  socialMedia: {
    instagram: 'https://instagram.com/reretheulafish',
    tiktok: 'https://tiktok.com/@reretheulafish',
  },
  operatingHours: 'Senin - Sabtu: 07.00 - 17.00 WIB',
  motto: 'Daging Tebal, Gurih dan Tidak Bau Tanah',
};

/**
 * Helper untuk men-generate URL WhatsApp yang aman & encoded
 */
export function createWhatsAppUrl(customMessage: string, phoneNumber: string = siteConfig.whatsAppNumber): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(customMessage)}`;
}

export const defaultMessages = {
  general: 'Halo Reret Heula Fish, saya ingin menanyakan informasi seputar produk dan budidaya ikan nila.',
  b2c: 'Halo Reret Heula Fish, saya ingin mendapatkan informasi mengenai produk ikan nila yang tersedia untuk kebutuhan rumah tangga. Mohon informasi produk, harga, dan ketersediaannya. Terima kasih.',
  b2b: 'Halo Reret Heula Fish, saya tertarik untuk mendapatkan informasi kerja sama atau pemesanan produk ikan nila untuk kebutuhan usaha. Mohon informasi katalog produk, harga, dan ketentuan pemesanan. Terima kasih.',
  productInquiry: (productName: string) =>
    `Halo Reret Heula Fish, saya tertarik dengan produk ${productName}. Mohon informasi mengenai varian, harga, ukuran, dan ketersediaannya. Terima kasih.`,
};
