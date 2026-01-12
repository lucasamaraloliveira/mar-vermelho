
import React from 'react';
import { ArrowLeft, MessageCircle, Clock, ShieldCheck, User } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const WhatsAppView: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-8 md:pt-28 md:pb-12 bg-neutral-950 flex items-center justify-center overflow-x-hidden">
      <div className="w-[92%] max-w-xl text-center space-y-6 md:space-y-10">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors uppercase text-[10px] md:text-xs tracking-widest font-bold"
        >
          <ArrowLeft size={16} /> Retornar ao site
        </button>

        <div className="glass p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border-gold/20 space-y-6 md:space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4">
             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50"></div>
          </div>

          <div className="mx-auto w-20 h-20 md:w-24 md:h-24 bg-green-900/30 rounded-full flex items-center justify-center border border-green-500/30">
            <MessageCircle className="text-green-500 w-10 h-10 md:w-12 md:h-12" />
          </div>

          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-white">Canal Prioritário</h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              Você está sendo direcionado para o nosso Concierge Exclusivo via WhatsApp. 
              Nosso atendimento é humanizado, discreto e focado em suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 py-6 border-y border-white/5">
             <div className="flex items-center justify-center sm:justify-start gap-3">
                <Clock className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-[10px] text-neutral-300 uppercase tracking-tighter">Resposta em até 5min</span>
             </div>
             <div className="flex items-center justify-center sm:justify-start gap-3">
                <ShieldCheck className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-[10px] text-neutral-300 uppercase tracking-tighter">Sigilo Absoluto</span>
             </div>
          </div>

          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-500/20"
            >
              <MessageCircle size={24} /> Iniciar Atendimento
            </a>
            <p className="text-[9px] md:text-[10px] text-neutral-600 uppercase tracking-widest font-medium">
              Atendimento disponível 24h para membros Gold e Platinum
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-neutral-600 opacity-60">
           <div className="flex flex-col items-center">
              <User size={18} className="mb-1" />
              <span className="text-[9px] uppercase tracking-wider">Consultor</span>
           </div>
           <div className="flex flex-col items-center">
              <User size={18} className="mb-1" />
              <span className="text-[9px] uppercase tracking-wider">Secretaria</span>
           </div>
           <div className="flex flex-col items-center">
              <User size={18} className="mb-1" />
              <span className="text-[9px] uppercase tracking-wider">Suporte</span>
           </div>
        </div>
      </div>
    </div>
  );
};
