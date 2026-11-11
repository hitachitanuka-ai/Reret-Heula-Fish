export interface ProcessStep {
  stepNumber: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  icon: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Persiapan Kolam dan Media Bioflok',
    shortTitle: 'Persiapan Media',
    description:
      'Menyiapkan kolam budidaya serta media pemeliharaan dengan memperhatikan kondisi air dan lingkungan yang mendukung pertumbuhan ikan nila.',
    details: [
      'Sterilisasi kolam terpal bulat dan instalasi aerasi',
      'Pengkondisian air dengan mikroorganisme probiotik menguntungkan',
      'Pemantauan parameter air (pH, oksigen terlarut, suhu)',
    ],
    icon: 'Waves',
    image: '/src/assets/images/biofloc_aquaculture_tanks_1794378111238.jpg',
  },
  {
    stepNumber: '02',
    title: 'Pemilihan dan Penebaran Benih',
    shortTitle: 'Penebaran Benih',
    description:
      'Menggunakan benih ikan nila yang sesuai dengan kebutuhan budidaya dan melakukan penebaran secara terukur.',
    details: [
      'Seleksi bibit unggul berdaya tahan tinggi',
      'Aklimatisasi suhu sebelum penebaran ke kolam',
      'Penentuan kepadatan tebar yang proporsional',
    ],
    icon: 'Fish',
    image: '/src/assets/images/step02_tilapia_fingerlings_stocking_1794380182417.jpg',
  },
  {
    stepNumber: '03',
    title: 'Pemeliharaan dan Pengawasan',
    shortTitle: 'Pemeliharaan Berkala',
    description:
      'Melakukan pemberian pakan, pemantauan pertumbuhan, serta pengelolaan kualitas air secara berkala untuk mendukung pertumbuhan ikan.',
    details: [
      'Pemberian pakan berkualitas dengan jadwal disiplin',
      'Pemanfaatan flok sebagai sumber protein alami tambahan',
      'Pengawasan kebersihan dan sirkulasi air setiap hari',
    ],
    icon: 'Activity',
    image: '/src/assets/images/step03_biofloc_feeding_maintenance_1794380182898.jpg',
  },
  {
    stepNumber: '04',
    title: 'Panen dan Seleksi',
    shortTitle: 'Panen & Seleksi',
    description:
      'Melakukan pemanenan ikan nila sesuai ukuran dan kebutuhan pasar, kemudian menyeleksi hasil panen berdasarkan kualitas produk.',
    details: [
      'Pemanenan saat ikan mencapai bobot konsumsi ideal',
      'Seleksi fisik teliti (kesegaran, ketebalan, sisik utuh)',
      'Penanganan hati-hati untuk mencegah stres pada ikan',
    ],
    icon: 'CheckCircle2',
    image: '/src/assets/images/harvest_tilapia_selection_1794378111587.jpg',
  },
  {
    stepNumber: '05',
    title: 'Penanganan dan Pengolahan Produk',
    shortTitle: 'Pengolahan Produk',
    description:
      'Ikan nila ditangani untuk mempertahankan kesegarannya. Konsumen dapat memilih ikan nila dalam kondisi utuh, sudah dibersihkan, fillet, maupun berbumbu marinasi.',
    details: [
      'Penyiangan higienis di area khusus yang bersih',
      'Pemfilletan teliti tanpa tulang utama',
      'Pemberian bumbu marinasi rempah alami',
    ],
    icon: 'Sparkles',
    image: '/src/assets/images/step05_fish_fillet_preparation_1794380183495.jpg',
  },
  {
    stepNumber: '06',
    title: 'Pengemasan dan Distribusi',
    shortTitle: 'Kemas & Distribusi',
    description:
      'Produk dikemas sesuai jenisnya dan dipersiapkan untuk memenuhi pesanan pelanggan.',
    details: [
      'Pengemasan food-grade pack atau vacuum sealed',
      'Penyimpanan suhu dingin (cold storage)',
      'Pengiriman tepat waktu untuk pelanggan B2C dan B2B',
    ],
    icon: 'Truck',
    image: '/src/assets/images/step06_packaging_cold_chain_delivery_1794380183471.jpg',
  },
];
