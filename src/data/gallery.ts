export interface GalleryItem {
  id: string;
  title: string;
  category: 'Budidaya' | 'Kolam Bioflok' | 'Proses Panen' | 'Produk' | 'Pengolahan dan Pengemasan';
  description: string;
  image: string;
  altText: string;
}

export const galleryCategories = [
  'Semua',
  'Budidaya',
  'Kolam Bioflok',
  'Proses Panen',
  'Produk',
  'Pengolahan dan Pengemasan',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Fasilitas Kolam Bioflok Modern',
    category: 'Kolam Bioflok',
    description: 'Instalasi kolam bulat budidaya dengan aerasi mikro berkelanjutan untuk menjaga kemurnian air.',
    image: '/src/assets/images/biofloc_aquaculture_tanks_1794378111238.jpg',
    altText: 'Fasilitas kolam bioflok Reret Heula Fish',
  },
  {
    id: 'gal-2',
    title: 'Ikan Nila Segar di Atas Es Kristal',
    category: 'Produk',
    description: 'Kondisi fisik ikan nila segar utuh dengan sisik mengkilap, mata bening, dan kesegaran prima.',
    image: '/src/assets/images/hero_tilapia_fresh_ice_1794378108795.jpg',
    altText: 'Ikan nila segar utuh di atas es batu',
  },
  {
    id: 'gal-3',
    title: 'Seleksi Hasil Panen Ikan Nila',
    category: 'Proses Panen',
    description: 'Penyortiran fisik teliti untuk memastikan bobot dan kesehatan ikan sesuai standar konsumsi.',
    image: '/src/assets/images/harvest_tilapia_selection_1794378111587.jpg',
    altText: 'Pekerja menyeleksi hasil panen ikan nila',
  },
  {
    id: 'gal-4',
    title: 'Fillet Ikan Nila Bersih Tanpa Tulang',
    category: 'Pengolahan dan Pengemasan',
    description: 'Daging fillet ikan nila dipotong presisi di atas kertas food-grade higienis.',
    image: '/src/assets/images/product_tilapia_fillet_1794378109507.jpg',
    altText: 'Fillet ikan nila tanpa tulang siap masak',
  },
  {
    id: 'gal-5',
    title: 'Ikan Nila Bumbu Marinasi Rempah',
    category: 'Produk',
    description: 'Ikan nila yang telah dilumuri racikan bumbu rempah kuning gurih alami.',
    image: '/src/assets/images/product_tilapia_marinated_1794378110836.jpg',
    altText: 'Ikan nila bumbu marinasi rempah kuning',
  },
  {
    id: 'gal-6',
    title: 'Pemeliharaan Air & Ekosistem Budidaya',
    category: 'Budidaya',
    description: 'Siklus air bioflok yang kaya mikroba probiotik membantu menekan limbah pakan dan menjaga kesehatan ikan.',
    image: '/src/assets/images/biofloc_aquaculture_tanks_1794378111238.jpg',
    altText: 'Ekosistem air bioflok yang sehat',
  },
];
