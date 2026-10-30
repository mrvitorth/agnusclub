import React from 'react';
import { Lock, MessageCircle } from 'lucide-react';

export function Navbar({ onOpenAdmin, contactInfo }) {
  // Mensagem padrão para o WhatsApp
  const defaultMessage = encodeURIComponent("Olá! Vim pela landing page da Agnus Club e quero garantir o meu Drop.");
  const whatsappUrl = `https://wa.me/${+5511988431330}?text=${defaultMessage}`;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl bg-[#181818]/80 backdrop-blur-xl z-40 border border-neutral-800/80 rounded-2xl shadow-2xl transition-all duration-300">
      <div className="px-6 py-3.5 flex justify-between items-center">
        {/* Logotipo e Nome */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="/logo.png" 
            alt="Agnus Club Logo" 
            className="w-10 h-10 object-contain rounded-xl border border-neutral-700/80 group-hover:border-white/40 transition-all duration-300 group-hover:scale-105" 
          />
          <div className="text-xl font-bold tracking-[0.2em] uppercase">
            Agnus <span className="text-neutral-400 font-light group-hover:text-white transition-colors">Club</span>
          </div>
        </div>

        {/* Links / Botões do Topo */}
        <div className="flex items-center gap-3">
          
          {/* Botão WhatsApp Pulsando no Topo */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.3)] animate-pulse"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Comprar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Link do Instagram */}
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-neutral-300 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 px-4 py-2.5 rounded-xl border border-neutral-700/50 transition-all duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
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
            <span className="font-medium">{contactInfo.instagramHandle}</span>
          </a>

          {/* Acesso Painel Admin */}
          <button
            onClick={onOpenAdmin}
            className="p-2.5 text-neutral-400 hover:text-white bg-neutral-800/40 hover:bg-neutral-800 rounded-xl border border-neutral-700/50 transition-all duration-300 hover:scale-105 active:scale-95"
            title="Área Administrativa"
          >
            <Lock size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}