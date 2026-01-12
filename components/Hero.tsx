
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548705085-101177834f47?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div className="inline-block px-4 py-1 border border-gold/40 rounded-full mb-2 md:mb-4">
          <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">Excelência em Espiritualidade</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
          A Travessia Para o <span className="text-gold italic">Divino</span>
        </h1>
        <p className="text-base md:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed px-4">
          Bem-vindo ao Mar Vermelho. Uma rede exclusiva de catedrais onde a arquitetura majestosa 
          encontra o acolhimento espiritual mais refinado do mundo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-8 w-full max-w-md mx-auto sm:max-w-none">
          <a href="#cathedrals" className="w-full sm:w-auto px-10 py-4 bg-gold text-black rounded-full font-bold uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-xl shadow-gold/20 text-center">
            Descobrir
          </a>
          <a href="#about" className="w-full sm:w-auto px-10 py-4 glass text-white rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center">
            Nossa Visão
          </a>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small height devices */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
};
