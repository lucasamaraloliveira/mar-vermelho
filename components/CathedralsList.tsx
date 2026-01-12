
import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Cathedral } from '../types';
import { LocationsModal } from './LocationsModal';

const cathedrals: Cathedral[] = [
  {
    id: '1',
    name: 'Catedral de Rubi',
    location: 'São Paulo, Brasil',
    image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=800',
    description: 'Um marco de vitrais vermelhos e mármore negro no coração da metrópole.'
  },
  {
    id: '2',
    name: 'Santuário do Mar de Bronze',
    location: 'Lisboa, Portugal',
    image: 'https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?auto=format&fit=crop&q=80&w=800',
    description: 'Arquitetura manuelina modernizada com toques de ouro e vista para o Tejo.'
  },
  {
    id: '3',
    name: 'Templo da Travessia',
    location: 'Dubai, EAU',
    image: 'https://images.unsplash.com/photo-1543165365-07232ed12fad?auto=format&fit=crop&q=80&w=800',
    description: 'Oásis de espiritualidade minimalista em meio à sofisticação futurista.'
  },
];

export const CathedralsList: React.FC = () => {
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  return (
    <section id="cathedrals" className="py-16 md:py-24 bg-neutral-950">
      <LocationsModal
        isOpen={isLocationsOpen}
        onClose={() => setIsLocationsOpen(false)}
        cathedrals={cathedrals}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-gold leading-tight">Nossas Sedes</h2>
            <p className="text-neutral-400 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
              Cada catedral do Mar Vermelho é uma obra-prima de design e engenharia,
              criada para ser o cenário de seus momentos mais sagrados.
            </p>
          </div>
          <button
            onClick={() => setIsLocationsOpen(true)}
            className="text-gold flex items-center justify-center gap-2 group border-b border-gold/0 hover:border-gold transition-all pb-1 text-sm uppercase tracking-widest font-semibold"
          >
            Localizações <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cathedrals.map((cathedral) => (
            <div key={cathedral.id} className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 hover:border-gold/30 transition-all flex flex-col">
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden relative">
                <img
                  src={cathedral.image}
                  alt={cathedral.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 space-y-3">
                  <div className="flex items-center gap-2 text-gold/80 text-[10px] md:text-xs uppercase tracking-widest">
                    <MapPin size={12} />
                    {cathedral.location}
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white">{cathedral.name}</h3>
                  <p className="text-neutral-400 text-xs md:text-sm line-clamp-2 sm:opacity-0 group-hover:opacity-100 transition-all duration-500 transform sm:translate-y-4 group-hover:translate-y-0">
                    {cathedral.description}
                  </p>
                  <button
                    onClick={() => window.location.hash = 'whatsapp'}
                    className="w-full mt-4 py-2.5 md:py-3 glass rounded-lg text-[10px] font-bold uppercase tracking-widest text-gold sm:opacity-0 group-hover:opacity-100 transition-all delay-100 active:scale-[0.98]"
                  >
                    Agendar Visita
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
