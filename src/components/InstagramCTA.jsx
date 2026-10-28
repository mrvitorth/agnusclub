import React from 'react';
import { ArrowRight } from 'lucide-react';

export function InstagramCTA({ contactInfo }) {
  return (
    <section className="py-20 px-4 my-12 max-w-5xl mx-auto">
      <div className="bg-gradient-to-b from-[#1c1c1c] to-[#141414] border border-neutral-800 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden group">
        
        {/* Glow de Fundo */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none group-hover:bg-white/10 transition-all duration-700"></div>

        <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
          <div className="p-4 bg-neutral-800/60 border border-neutral-700/60 rounded-2xl mb-6 text-white shadow-inner group-hover:scale-110 transition-transform duration-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4 text-white">
            Próximos Drops em Breve
          </h2>
          <p className="text-neutral-400 mb-8 text-sm md:text-base font-light leading-relaxed max-w-lg">
            Siga o nosso perfil para acompanhar os bastidores da marca, lançamentos futuros e garantir pré-vendas exclusivas.
          </p>
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-2xl uppercase tracking-wider text-xs hover:bg-neutral-200 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Acompanhar {contactInfo.instagramHandle}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}