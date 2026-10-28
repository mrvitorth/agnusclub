import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function DropsSection({ products }) {
  return (
    <section id="produtos" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        {/* Mantém apenas o título do produto/coleção */}
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
          NOSSO PRIMEIRO LANÇAMENTO
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto font-light">
          Peças exclusivas produzidas com algodão de alta gramatura e modelagem oversized streetwear.
        </p>
      </div>

      {/* Renderização dos cards de produtos continua igual */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="glass-card rounded-3xl overflow-hidden group">
            <div className="relative aspect-square overflow-hidden bg-neutral-900">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                {product.name}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-white">
                  R$ {product.price}
                </span>
                <a
                  href={`https://wa.me/+5511958955673?text=${encodeURIComponent(`Olá! Quero garantir a peça: ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-extrabold py-3 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-200 transition"
                >
                  <ShoppingBag size={16} />
                  Garantir
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}