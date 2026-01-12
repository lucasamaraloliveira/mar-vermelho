
import React from 'react';
import { ShieldCheck, Star, Users, Crown } from 'lucide-react';

const values = [
  { icon: Crown, title: 'Exclusividade', text: 'Ambientes desenhados para uma experiência espiritual única.' },
  { icon: ShieldCheck, title: 'Tradição', text: 'Valores milenares preservados com a dignidade que sua fé merece.' },
  { icon: Star, title: 'Beleza', text: 'Arte sacra contemporânea e arquitetura que eleva o olhar ao céu.' },
  { icon: Users, title: 'Comunidade', text: 'Um círculo seleto de apoio mútuo e crescimento pessoal.' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-gold leading-tight">Onde a Fé encontra a Magnitude</h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              O Mar Vermelho não é apenas uma rede de igrejas. É um manifesto sobre como a espiritualidade pode e deve ser celebrada em sua forma mais gloriosa. 
              Inspirados na passagem bíblica da libertação, criamos santuários que servem de portal para uma vida nova.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6">
              {values.map((v, i) => (
                <div key={i} className="space-y-3 flex flex-col items-center lg:items-start">
                  <v.icon className="text-gold w-8 h-8" />
                  <h3 className="text-lg md:text-xl font-serif text-white">{v.title}</h3>
                  <p className="text-sm text-neutral-500">{v.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-all rounded-[2rem]"></div>
            <img 
              src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?auto=format&fit=crop&q=80&w=1200" 
              alt="Catedral de Luxo" 
              className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-video lg:aspect-auto"
            />
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 glass p-4 md:p-6 rounded-xl border-gold/20">
              <span className="text-gold font-serif text-3xl md:text-4xl block">12</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/70">Catedrais Globais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
