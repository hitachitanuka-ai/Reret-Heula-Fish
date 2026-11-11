/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductCatalog } from './components/ProductCatalog';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [catalogIndex, setCatalogIndex] = useState<number | null>(null);

  const handleSelectProductFromFooter = (index: number) => {
    setCatalogIndex(index);
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#526477] font-sans flex flex-col selection:bg-[#D9F0FA] selection:text-[#102A43]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Product Catalog Section (receives externalIndex from footer) */}
        <ProductCatalog externalIndex={catalogIndex} />

        {/* 4. Our Process Section */}
        <ProcessTimeline />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Gallery Section */}
        <Gallery />

        {/* 7. Contact & WhatsApp Integration */}
        <Contact />
      </main>

      {/* 8. Footer (dispatches onProductClick to scroll up and activate chosen product) */}
      <Footer onProductClick={handleSelectProductFromFooter} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
