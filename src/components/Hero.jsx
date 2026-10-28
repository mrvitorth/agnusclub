import React from 'react';

export function Hero({ contactInfo }) {
  return (
    <section className="relative pt-48 pb-28 px-4 text-center flex flex-col items-center justify-center min-h-[92vh] overflow-hidden bg-grid-pattern watermark-bg">
      
      {/* Esferas de Luz de Fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-neutral-400/10 to-white/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Logotipo em Destaque 3D */}
      <div className="mb-8 relative z-10 group cursor-pointer">
        <div className="absolute -inset-2 bg-gradient-to-r from-neutral-500 via-white/40 to-neutral-700 rounded-3xl blur-md opacity-30 group-hover:opacity-80 transition duration-700"></div>
        <div className="relative bg-[#141414]/90 border border-neutral-700/80 p-5 rounded-3xl backdrop-blur-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <img 
            src="/logo.png" 
            alt="Agnus Club Cordeiro" 
            className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>

      <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-300 mb-6 border border-white/15 bg-white/5 px-5 py-2 rounded-full backdrop-blur-xl shadow-inner">
        Faith Beyond Fashion
      </span>
      
      <h1 className="relative z-10 text-4xl md:text-7xl font-black uppercase tracking-tight mb-6 max-w-4xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
        FÉ QUE VESTE PROPÓSITO.
      </h1>
      
      <p className="relative z-10 text-neutral-300 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-light">
        A Agnus Club nasceu para quem carrega a fé no peito e não tem medo de mostrá-la. 
        Nosso primeiro drop é limitado. Uma camiseta oversized preta com uma verdade eterna nas costas: <strong className="text-white font-semibold">JESUS IS KING</strong>. 
        <br className="hidden md:inline" /> Não é só roupa. É declaração.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center relative z-10">
        <a
          href="#produtos"
          className="animate-shimmer bg-white text-black font-extrabold py-4 px-8 rounded-2xl uppercase tracking-wider text-xs shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 text-center active:scale-95"
        >
          QUERO MEU DROP LIMITADO
        </a>
        <a
          href={contactInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-900/80 border border-neutral-700/80 text-white font-bold py-4 px-8 rounded-2xl uppercase tracking-wider text-xs hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-300 hover:-translate-y-1 text-center active:scale-95 backdrop-blur-xl"
        >
          Seguir no Instagram
        </a>
      </div>
    </section>
  );
}