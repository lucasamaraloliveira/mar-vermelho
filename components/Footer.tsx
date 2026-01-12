
import React from 'react';
import { Anchor, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Anchor className="text-gold w-8 h-8" />
              <span className="text-3xl font-serif text-white tracking-widest uppercase">Mar Vermelho</span>
            </div>
            <p className="text-neutral-500 max-w-sm leading-relaxed">
              O Mar Vermelho redefine a experiência da fé, unindo o sublime arquitetônico ao cuidado espiritual mais exclusivo do mundo.
              Presente nas principais capitais, iluminando caminhos com sofisticação e reverência.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-neutral-500 hover:text-gold hover:border-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-serif text-xl">Links Rápidos</h4>
            <ul className="space-y-4 text-neutral-500 text-sm uppercase tracking-wider">
              <li><a href="#about" className="hover:text-gold transition-colors">Nossa História</a></li>
              <li><a href="#cathedrals" className="hover:text-gold transition-colors">Unidades</a></li>
              <li><a href="#whatsapp" className="hover:text-gold transition-colors">Atendimento Privado</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-serif text-xl">Contato Global</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li>contato@marvermelho.com</li>
              <li>+55 11 9999-9999</li>
              <li>Av. Paulista, 2000 - Penthouse<br />São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-600 text-[10px] uppercase tracking-widest">
          <p>© 2024 Mar Vermelho - Catedrais de Luxo. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#privacy" className="hover:text-neutral-400">Política de Privacidade</a>
            <a href="#terms" className="hover:text-neutral-400">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
