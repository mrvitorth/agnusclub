import React from 'react';

export function SocialSection() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-center">
      <div className="bg-gradient-to-b from-[#1c1c1c] to-[#141414] border border-neutral-800 rounded-3xl p-8 md:p-16 shadow-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-3 block">
          SEÇÃO 04 — PROVA SOCIAL / CONEXÃO
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
          VISTA O QUE VOCÊ VIVE.
        </h2>

        <p className="text-neutral-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-6">
          A Agnus Club é para quem vive a fé fora da igreja também. Na rua, na faculdade, no rolê, no dia a dia.
        </p>

        <div className="bg-neutral-900/90 border border-neutral-700/60 p-6 rounded-2xl max-w-2xl mx-auto text-neutral-200 font-medium italic">
          "Se você estava procurando uma marca cristã que não fosse básica, sem graça ou vergonhosa de usar, você acabou de achar."
        </div>
      </div>
    </section>
  );
}