import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function DropsSection({ products }) {
  return (
    <section id="produtos" className="py-24 px-4 max-w-6xl mx-auto relative bg-grid-pattern">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-2 block">
          SEÇÃO 03 — O PRODUTO
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
          O PRIMEIRO DROP.
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto font-light">
          Pensamos em cada detalhe para entregar presença e verdade em forma de veste.
        </p>
      </div>

      {/* Destaques de Qualidade com Efeito Vidro */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 text-left">
        {[
          { label: 'Cor', desc: 'Preto essencial, que combina com tudo.' },
          { label: 'Modelagem', desc: 'Oversized de verdade. Conforto e presença.' },
          { label: 'Mensagem', desc: 'JESUS IS KING. Direto, forte e eterno.' },
          { label: 'Qualidade', desc: 'Streetwear feito para durar e usar.' }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl transition-all duration-300">
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-1">{item.label}</h4>
            <p className="text-neutral-400 text-xs font-light">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:-translate-y-3 relative"
          >
            {/* Brilho de topo no hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div>
              <div className="relative aspect-square overflow-hidden bg-black/60 p-4">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-7 left-7 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-xl border border-white/20 shadow-xl">
                  {product.tag}
                </span>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-widest font-semibold text-neutral-400 mb-2">{product.color}</p>
                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight text-white">{product.title}</h3>
                <p className="text-sm text-neutral-300 italic font-light leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="p-8 pt-0">
              <a
                href={product.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-shimmer w-full flex items-center justify-center gap-2.5 bg-white text-black py-4 rounded-2xl font-extrabold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95"
              >
                <ShoppingBag size={18} />
                GARANTIR MINHA AGNUS CLUB AGORA
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-sm text-neutral-400 font-light">
        ⚠️ É edição limitada. Quando acabar, acabou. Não é sobre ter mais uma camiseta. É sobre vestir algo que te representa.
      </div>
    </section>
  );
}