import React, { useState, useEffect } from 'react';
import { initialStoreData } from './data/storeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MeaningSection } from './components/MeaningSection';
import { DropsSection } from './components/DropsSection';
import { SocialSection } from './components/SocialSection';
import { OfferSection } from './components/OfferSection';
import { InstagramCTA } from './components/InstagramCTA';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { AdminPage } from './components/AdminPage';

export default function App() {
  // 1. Se acessar /admin na URL, abre a página exclusiva de gerenciamento
  if (window.location.pathname === '/admin') {
    return <AdminPage />;
  }

  const [storeData, setStoreData] = useState(initialStoreData);

  // 2. Busca os produtos e configurações salvos no banco da Vercel ao carregar a loja
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((cloudProducts) => {
        if (Array.isArray(cloudProducts) && cloudProducts.length > 0) {
          setStoreData((prev) => ({
            ...prev,
            products: cloudProducts
          }));
        }
      })
      .catch((err) => console.error('Usando catálogo local:', err));

    fetch('/api/settings')
      .then((res) => res.json())
      .then((cloudSettings) => {
        if (cloudSettings && cloudSettings.id) {
          setStoreData((prev) => ({
            ...prev,
            contact: {
              ...prev.contact,
              whatsapp: cloudSettings.whatsapp || prev.contact?.whatsapp,
              phone: cloudSettings.whatsapp || prev.contact?.phone,
              instagram: cloudSettings.instagram || prev.contact?.instagram,
              launchDate: cloudSettings.launch_date || prev.contact?.launchDate,
              launchBanner: cloudSettings.launch_banner || prev.contact?.launchBanner,
            }
          }));
        }
      })
      .catch((err) => console.error('Usando configurações locais:', err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between">
      <div>
        <Navbar 
          onOpenAdmin={() => { window.location.href = '/admin'; }} 
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
    </div>
  );
}