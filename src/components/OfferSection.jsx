import React from 'react';
import { Truck, AlertCircle, ArrowRight } from 'lucide-react';

export function OfferSection({ contactInfo }) {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto text-center relative">
      {/* Luz central do container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="glass-card border-2 border-white/20 rounded-3xl p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
        
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-3 block">
          SEÇÃO 05 — OFERTA E URGÊNCIA
        </span>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 text-white drop-shadow-md">
          DROP 01 — DISPONÍVEL AGORA
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-200 text-sm md:text-base font-light mb-10">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <Truck size={20} className="text-white" />
            <span>Enviamos para todo o Brasil.</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20">
            <AlertCircle size={20} className="text-amber-400" />
            <span className="text-amber-300 font-medium">Estoque limitado do primeiro lançamento.</span>
          </div>
        </div>

        <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-sm font-light">
          Não deixe para depois. Quem entende o propósito, garante na hora.
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