
import React from 'react';
import { X, MapPin, ExternalLink } from 'lucide-react';
import { Cathedral } from '../types';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    cathedrals: Cathedral[];
}

export const LocationsModal: React.FC<Props> = ({ isOpen, onClose, cathedrals }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl bg-neutral-900 border border-gold/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">

                {/* Map Placeholder Side (Desktop) */}
                <div className="hidden md:block w-1/2 relative bg-neutral-800">
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                        alt="Mapa Global"
                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                        <h3 className="text-2xl font-serif text-white mb-2">Presença Global</h3>
                        <p className="text-neutral-400 text-sm max-w-xs">
                            Santuários estrategicamente posicionados nos centros de influência mundial.
                        </p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-serif text-gold">Nossas Coordenadas</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/5 rounded-full text-neutral-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {cathedrals.map((cathedral) => (
                            <div
                                key={cathedral.id}
                                className="group border border-white/5 rounded-xl p-4 hover:border-gold/30 hover:bg-white/[0.02] transition-all"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="text-lg font-serif text-white group-hover:text-gold transition-colors">{cathedral.name}</h4>
                                    <MapPin size={16} className="text-gold/50 group-hover:text-gold" />
                                </div>
                                <p className="text-neutral-400 text-sm mb-4">{cathedral.location}</p>
                                <div className="flex gap-3">
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cathedral.name + ' ' + cathedral.location)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gold/10 hover:bg-gold text-gold hover:text-black rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
                                    >
                                        <ExternalLink size={12} />
                                        Ver no Mapa
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <p className="text-neutral-500 text-xs">
                            Visitas requerem agendamento prévio através do nosso Concierge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
