export interface ProductItem {
  id: string;
  code: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  altText: string;
  highlights: string[];
  specs: {
    label: string;
    value: string;
  }[];
  packagingInfo: string;
  storageInfo: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'ikan-nila-segar',
    code: 'PRODUCT 01',
    name: 'Ikan Nila Segar',
    category: 'Fresh Aquaculture',
    tagline: 'Segar Langsung dari Kolam Bioflok',
    shortDescription:
      'Ikan nila hasil budidaya yang disiapkan untuk memenuhi kebutuhan konsumsi sehari-hari. Tersedia dalam pilihan kondisi utuh maupun sudah dibersihkan sehingga lebih praktis untuk diolah.',
    fullDescription:
      'Ikan nila hasil budidaya teknologi bioflok Reret Heula Fish yang dirawat dalam kualitas air terkontrol sehingga menghasilkan tekstur daging tebal, rasa gurih alami, dan tidak berbau lumpur/tanah. Dipanen secara selektif saat ukuran konsumsi ideal untuk menjaga kesegaran optimal saat sampai di tangan pelanggan.',
    image: '/src/assets/images/hero_tilapia_fresh_ice_1794378108795.jpg',
    altText: 'Ikan nila segar utuh di atas es batu kristal',
    highlights: [
      'Ikan nila utuh segar',
      'Pilihan sudah dibersihkan (insang & isi perut dibuang)',
      'Ukuran dan berat menyesuaikan ketersediaan',
      'Daging tebal dan bebas aroma lumpur/tanah',
    ],
    specs: [
      { label: 'Kondisi', value: 'Segar (Fresh Chilled / Hidup saat panen)' },
      { label: 'Opsi Penyiapan', value: 'Utuh atau Sudah Dibersihkan' },
      { label: 'Ukuran & Berat', value: 'Menyesuaikan ketersediaan hasil panen' },
      { label: 'Asal Budidaya', value: 'Kolam Bioflok Reret Heula Fish' },
    ],
    packagingInfo:
      'Dikemas higienis dengan food-grade pack dan cold-chain packaging untuk menjaga kesegaran selama pengiriman.',
    storageInfo:
      'Simpan dalam chiller pada suhu 0–4°C untuk konsumsi segera (1–2 hari), atau simpan dalam freezer pada suhu -18°C untuk penyimpanan lebih lama.',
  },
  {
    id: 'ikan-nila-fillet',
    code: 'PRODUCT 02',
    name: 'Ikan Nila Fillet',
    category: 'Boneless Cut',
    tagline: 'Daging Tanpa Tulang, Praktis Siap Olah',
    shortDescription:
      'Potongan daging ikan nila tanpa tulang utama yang praktis untuk berbagai kebutuhan masakan. Cocok untuk digoreng, dipanggang, maupun diolah menjadi berbagai hidangan.',
    fullDescription:
      'Potongan daging murni ikan nila tanpa duri utama yang diproses secara higienis dari ikan nila segar hasil panen bioflok. Sangat disukai oleh keluarga, anak-anak, maupun dapur kuliner dan restoran karena menghemat waktu persiapan memasak dan memberikan konsistensi rasa yang prima.',
    image: '/src/assets/images/product_tilapia_fillet_1794378109507.jpg',
    altText: 'Potongan fillet ikan nila segar tanpa tulang di atas es',
    highlights: [
      'Produk fillet bersih tanpa tulang utama',
      'Berat bersih mengikuti varian yang tersedia',
      'Praktis untuk berbagai olahan makanan (crispy, grill, soup, steam)',
      'Tekstur daging padat dan lembut',
    ],
    specs: [
      { label: 'Kondisi', value: 'Fillet Segar / Chilled' },
      { label: 'Bagian', value: 'Daging Murni (Skinless/Skin-on sesuai batch)' },
      { label: 'Berat Bersih', value: 'Mengikuti varian kemasan yang tersedia' },
      { label: 'Kesesuaian Masakan', value: 'Fish & chips, sup ikan, tumis, panggang' },
    ],
    packagingInfo:
      'Dikemas vacuum sealed higienis untuk menjaga tekstur serat daging dan higienitas maksimal.',
    storageInfo:
      'Dapat langsung diolah saat diterima. Simpan di freezer suhu -18°C jika belum langsung dimasak.',
  },
  {
    id: 'ikan-nila-bumbu-marinasi',
    code: 'PRODUCT 03',
    name: 'Ikan Nila Bumbu Marinasi',
    category: 'Ready to Cook',
    tagline: 'Praktis Berbumbu, Siap Goreng atau Bakar',
    shortDescription:
      'Produk ikan nila yang telah dipersiapkan dengan bumbu marinasi sehingga lebih praktis untuk dimasak. Menjadi pilihan bagi konsumen yang menginginkan hidangan ikan lezat tanpa perlu repot menyiapkan bumbu dari awal.',
    fullDescription:
      'Kombinasi ikan nila segar berkualitas dengan racikan bumbu rempah tradisional pilihan yang meresap sempurna ke dalam serat daging. Siap langsung digoreng atau dibakar kapan saja tanpa perlu repot mengulek bumbu dan membersihkan ikan.',
    image: '/src/assets/images/product_tilapia_marinated_1794378110836.jpg',
    altText: 'Ikan nila bumbu marinasi rempah kuning siap masak',
    highlights: [
      'Ikan nila berbumbu rempah alami',
      'Varian racikan bumbu mengikuti ketersediaan',
      'Siap diolah langsung (goreng, bakar, kukus)',
      'Solusi praktis santapan lezat bergizi keluarga',
    ],
    specs: [
      { label: 'Kondisi', value: 'Sudah dimarinasi bumbu siap olah' },
      { label: 'Varian Bumbu', value: 'Kuning rempah / menyesuaikan ketersediaan' },
      { label: 'Isi Kemasan', value: 'Menyesuaikan varian pack' },
      { label: 'Bahan Tambahan', value: 'Rempah alami Nusantara' },
    ],
    packagingInfo:
      'Kemasan kedap udara higienis untuk memastikan bumbu tetap meresap segar dan tidak bocor.',
    storageInfo:
      'Simpan dalam kondisi beku di freezer. Sebelum dimasak, cairkan perlahan di suhu ruang lalu langsung olah.',
  },
];
