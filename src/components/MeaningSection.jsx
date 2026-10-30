import React from 'react';
import { Quote } from 'lucide-react'; // Removemos o Instagram daqui

export function MeaningSection({ contactInfo }) {
  const instagramUrl = contactInfo?.instagramUrl || "https://instagram.com";

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative">
      <div className="glass-card rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden transition-all duration-500 border border-white/10">
        
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8 text-white leading-tight">
          MAIS QUE UMA MARCA, <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
            UM PROPÓSITO.
          </span>
        </h2>

        <div className="space-y-6 text-neutral-300 leading-relaxed font-light text-base md:text-lg">
          <p>
            Há cerca de 2 anos, esse projeto existia apenas no papel. Um sonho que, por falta de motivação, parecia nunca sair do lugar.
          </p>

          <p>
            Meu nome é <strong className="text-white font-semibold">Matheus</strong>, e junto com meu amigo <strong className="text-white font-semibold">Guilherme</strong>, sou um dos fundadores do Agnus Club. O que eu não sabia era que o Guilherme também carregava dentro de si um projeto com o mesmo propósito. Dois sonhos que caminhavam separadamente, até que, no tempo certo, acabaram se encontrando.
          </p>

          <p className="text-white font-medium">
            E hoje entendemos que isso vai muito além de criar uma marca de roupas. Nosso propósito é espalhar a Palavra de Deus através daquilo que vestimos — levando a mensagem de Cristo para além das igrejas, alcançando pessoas nas ruas, nos encontros e no dia a dia.
          </p>

          <div className="my-8 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative">
            <Quote size={32} className="text-white/20 absolute top-4 right-4" />
            <p className="text-white font-normal leading-relaxed mb-4">
              <strong className="font-bold">Agnus significa cordeiro.</strong> E nós somos como cordeiros, que precisam de direção, cuidado e amor. Temos um Pastor que nos guia: Jesus Cristo. E cremos que, mesmo quando uma ovelha se perde, Ele não deixa de procurá-la. Porque há amor até mesmo por aquela que se afastou.
            </p>
            <div className="border-l-2 border-white/50 pl-4 py-1 text-neutral-200 italic font-medium text-sm md:text-base">
              “E, quando a encontra, coloca-a alegremente sobre os ombros.” 
              <span className="block not-italic font-bold text-xs text-neutral-400 mt-1 uppercase tracking-wider">— Lucas 15:5</span>
            </div>
          </div>

          <p>
            O Agnus Club nasce com esse propósito: vestir uma mensagem, transmitir uma verdade e lembrar ao mundo que existe um Pastor que nunca deixa de buscar suas ovelhas.
          </p>

          <p>
            Talvez tenha demorado 2 anos para esse sonho sair do papel, mas acreditamos que tudo tem seu tempo. E chegou a nossa hora de dar o primeiro passo.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-white/20 text-center shadow-lg">
            <p className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
              NESTE DOMINGO, 01/11!
            </p>
          </div>

          <p className="text-center text-sm md:text-base text-neutral-400 italic pt-4">
            Seja bem-vindo ao Agnus Club. Não estamos aqui apenas para vestir pessoas, mas para levar a Palavra dAquele que nos chamou. <br />
            <strong className="text-white uppercase tracking-widest font-bold not-italic block mt-2 mb-6">Vista o propósito.</strong>
          </p>

          {/* Botão Pulsando no final da História com SVG do Instagram */}
          <div className="flex justify-center pt-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-extrabold py-4 px-8 rounded-2xl uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(219,39,119,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
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
              CONHEÇA A AGNUS CLUB NO INSTAGRAM
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}