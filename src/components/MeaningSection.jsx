import React from 'react';

export function MeaningSection() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative">
      {/* Luz Lateral */}
      <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="glass-card rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden transition-all duration-500">
        
        {/* Detalhe de linha no topo do card */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-3 block">
          SEÇÃO 02 — O SIGNIFICADO
        </span>
        
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-8 text-white">
          POR QUE AGNUS?
        </h2>

        <div className="space-y-6 text-neutral-300 leading-relaxed font-light text-base md:text-lg">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-white font-medium italic text-lg md:text-xl">
              <strong className="text-white font-bold not-italic">Agnus</strong> vem de <em>Agnus Dei</em> — Cordeiro de Deus.
            </p>
            <p className="text-sm text-neutral-400 mt-2 font-normal">
              "Eis o Cordeiro de Deus, que tira o pecado do mundo." — João 1:29
            </p>
          </div>

          <p>
            A gente acredita que estilo e propósito andam juntos. Por isso criamos um streetwear autêntico, oversized, confortável e com uma mensagem que importa. 
          </p>
          
          <p className="text-white font-normal">
            Para usar no dia a dia e lembrar quem você é e em quem você crê.
          </p>
        </div>
      </div>
    </section>
  );
}