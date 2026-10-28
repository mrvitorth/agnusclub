import React from 'react';
import { Truck, Calendar, ArrowRight } from 'lucide-react';

export function OfferSection({ contactInfo }) {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto text-center relative">
      <div className="glass-card border-2 border-white/20 rounded-3xl p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
        
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-3 block">
          DROP 01 — PRÉ-LANÇAMENTO
        </span>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 text-white drop-shadow-md">
          LANÇAMENTO NESTE DOMINGO (01/11)
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-200 text-sm md:text-base font-light mb-10">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <Calendar size={20} className="text-white" />
            <span>Garanta no VIP via WhatsApp</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <Truck size={20} className="text-white" />
            <span>Enviamos para todo o Brasil</span>
          </div>
        </div>

        <p className="text-neutral-300 max-w-xl mx-auto mb-10 text-sm md:text-base font-light leading-relaxed">
          O primeiro drop é estritamente limitado. Entre na lista ou fale conosco no WhatsApp para garantir sua peça antes que esgote.
        </p>

        <a
          href={contactInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-shimmer inline-flex items-center justify-center gap-3 bg-white text-black font-extrabold py-5 px-10 rounded-2xl uppercase tracking-wider text-xs hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_35px_rgba(255,255,255,0.3)]"
        >
          GARANTIR MINHA AGNUS CLUB AGORA
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}