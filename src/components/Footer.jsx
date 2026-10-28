import React from 'react';

export function Footer({ contactInfo }) {
  return (
    <footer className="bg-black py-10 border-t border-neutral-900 text-center text-xs text-neutral-500">
      <div className="max-w-7xl mx-auto px-4 space-y-3">
        <p className="font-extrabold tracking-[0.2em] text-neutral-300 uppercase text-sm">
          AGNUS CLUB®
        </p>
        <p className="text-neutral-400 font-light">Fé que veste propósito.</p>
        
        <div>
          <a 
            href={contactInfo.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors underline"
          >
            agnus.club
          </a>
        </div>

        <div className="pt-6 border-t border-neutral-900/80 text-neutral-600">
          Desenvolvido por <span className="text-neutral-400 font-medium">Vitor Santos</span>
        </div>
      </div>
    </footer>
  );
}