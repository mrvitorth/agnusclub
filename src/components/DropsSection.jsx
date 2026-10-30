import React, { useState } from 'react';
import { ShoppingBag, RefreshCw } from 'lucide-react';

export function DropsSection({ products }) {
  // Estado para controlar qual imagem está sendo exibida em cada produto (front ou back)
  const [showBack, setShowBack] = useState({});

  const toggleView = (id) => {
    setShowBack(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="produtos" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
          NOSSO PRIMEIRO LANÇAMENTO
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto font-light">
          Peças exclusivas produzidas com algodão de alta gramatura e modelagem oversized streetwear.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => {
          const isShowingBack = showBack[product.id];
          const currentImage = isShowingBack ? product.backImage : product.frontImage;
          // Usa product.title se existir, senão usa product.name como segurança
          const productName = product.title || product.name;

          return (
            <div key={product.id} className="glass-card rounded-3xl overflow-hidden group border border-white/10">
              
              {/* Área da Imagem com efeito Flip / Hover */}
              <div 
                className="relative aspect-square overflow-hidden bg-neutral-900 cursor-pointer"
                onMouseEnter={() => setShowBack(prev => ({ ...prev, [product.id]: true }))}
                onMouseLeave={() => setShowBack(prev => ({ ...prev, [product.id]: false }))}
                onClick={() => toggleView(product.id)}
              >
                <img 
                  src={currentImage} 
                  alt={productName} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Badge flutuante indicando qual lado está sendo exibido */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <RefreshCw size={12} className="animate-spin" />
                  {isShowingBack ? "Verso (Costas)" : "Frente"}
                </div>

                {/* Dica visual no rodapé da imagem */}
                <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-sm text-neutral-300 text-[11px] px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                    Passe o mouse ou clique para ver o verso
                  </span>
                </div>
              </div>

              {/* Informações do Produto */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                  {productName}
                </h3>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed font-light">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-0.5">
                      Preço de Lançamento
                    </span>
                    <div className="flex items-baseline gap-2">
                      {/* Preço original riscado */}
                      {product.originalPrice && (
                        <span className="text-sm text-neutral-500 line-through font-medium">
                          R$ {product.originalPrice}
                        </span>
                      )}
                      {/* Preço de oferta destacado */}
                      <span className="text-2xl font-black text-white">
                        R$ {product.price}
                      </span>
                    </div>
                  </div>

                  <a
                    href={product.buyLink || `https://wa.me/+5511988431330?text=${encodeURIComponent(`Olá! Quero garantir a peça: ${productName} por R$ ${product.price}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-extrabold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-200 hover:scale-105 active:scale-95 transition shadow-lg"
                  >
                    <ShoppingBag size={16} />
                    Garantir
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}