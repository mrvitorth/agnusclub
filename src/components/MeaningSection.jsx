import React from 'react';
import { Quote } from 'lucide-react';

export function MeaningSection() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative">
      {/* Luz de fundo suave */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="glass-card rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden transition-all duration-500 border border-white/10">
        
        {/* Detalhe de linha no topo */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

        <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-3 block">
          NOSSA HISTÓRIA & PROPÓSITO
        </span>
        
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

          {/* Destaque do Significado de Agnus e o Versículo */}
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

          {/* Banner do Primeiro Lançamento */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-white/20 text-center shadow-lg">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-1">
              PRIMEIRO LANÇAMENTO
            </span>
            <p className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
              NESTE DOMINGO, 01/11!
            </p>
          </div>

          <p className="text-center text-sm md:text-base text-neutral-400 italic pt-4">
            Seja bem-vindo ao Agnus Club. Não estamos aqui apenas para vestir pessoas, mas para levar a Palavra dAquele que nos chamou. <br />
            <strong className="text-white uppercase tracking-widest font-bold not-italic block mt-2">Vista o propósito.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}