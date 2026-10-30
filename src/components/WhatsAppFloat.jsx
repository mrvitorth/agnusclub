import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat({ contactInfo }) {
  // Cria a mensagem automática padrão para o WhatsApp
  const defaultMessage = encodeURIComponent("Olá! Vim pela landing page da Agnus Club e tenho interesse no Drop.");
  const whatsappUrl = `https://wa.me/${+5511988431330}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="drop-shadow-md" />
      
      {/* Tooltip flutuante ao passar o mouse */}
      <span className="absolute right-full mr-3 bg-neutral-900 border border-neutral-700 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Fale com a gente no WhatsApp
      </span>
    </a>
  );
}