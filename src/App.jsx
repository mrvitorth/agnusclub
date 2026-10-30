import React, { useState } from 'react';
import { initialStoreData } from './data/storeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MeaningSection } from './components/MeaningSection';
import { DropsSection } from './components/DropsSection';
import { SocialSection } from './components/SocialSection';
import { OfferSection } from './components/OfferSection';
import { InstagramCTA } from './components/InstagramCTA';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { ScrollReveal } from './components/ScrollReveal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [storeData, setStoreData] = useState(() => {
    const saved = localStorage.getItem('agnus_store_data');
    return saved ? JSON.parse(saved) : initialStoreData;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleSaveData = (newData) => {
    setStoreData(newData);
    localStorage.setItem('agnus_store_data', JSON.stringify(newData));
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between">
      <div>
        <Navbar 
          onOpenAdmin={() => setIsAdminOpen(true)} 
          contactInfo={storeData.contact} 
        />
        <main>
          <Hero contactInfo={storeData.contact} />
          
          <ScrollReveal>
            <MeaningSection contactInfo={storeData.contact} />
          </ScrollReveal>

          <ScrollReveal>
            <DropsSection products={storeData.products} />
          </ScrollReveal>

          <ScrollReveal>
            <SocialSection />
          </ScrollReveal>

          <ScrollReveal>
            <OfferSection contactInfo={storeData.contact} />
          </ScrollReveal>

          <ScrollReveal>
            <InstagramCTA contactInfo={storeData.contact} />
          </ScrollReveal>
        </main>
      </div>

      <Footer contactInfo={storeData.contact} />

      <WhatsAppFloat contactInfo={storeData.contact} />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        storeData={storeData}
        onSaveData={handleSaveData}
      />
    </div>
  );
}