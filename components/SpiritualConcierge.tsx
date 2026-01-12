
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, Sparkles, Loader2 } from 'lucide-react';
import { geminiService } from '../services/geminiService';

interface Props {
  onBack: () => void;
}

export const SpiritualConcierge: React.FC<Props> = ({ onBack }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: 'Bem-vindo ao Santuário Digital do Mar Vermelho. Em que posso iluminar seus pensamentos hoje?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await geminiService.getSpiritualGuidance(userMessage);
      setMessages(prev => [...prev, { role: 'ai', content: response || "O silêncio é por vezes a resposta mais sábia. Como posso lhe ajudar mais?" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "Houve uma interferência no sinal divino. Por favor, tente novamente." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-6 md:pt-28 md:pb-12 bg-neutral-950 flex flex-col items-center overflow-hidden">
      <div className="w-full px-4 md:w-[95%] max-w-3xl flex-grow flex flex-col h-[calc(100dvh-5rem)] md:h-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors mb-4 md:mb-6 self-start uppercase text-[10px] md:text-xs tracking-widest font-bold"
        >
          <ArrowLeft size={16} /> Voltar ao Início
        </button>

        <div className="glass rounded-2xl md:rounded-3xl p-4 md:p-8 flex-grow flex flex-col overflow-hidden shadow-2xl border-gold/10">
          <div className="flex items-center gap-4 border-b border-gold/10 pb-4 md:pb-6 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="text-gold w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="overflow-hidden">
              <h2 className="text-xl md:text-2xl font-serif text-white truncate">Concierge Espiritual</h2>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest truncate">Inteligência a serviço da Fé</p>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto space-y-4 md:space-y-6 pr-2 mb-4 md:mb-6 scroll-smooth scrollbar-thin scrollbar-thumb-gold/20"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] md:max-w-[85%] p-4 md:p-5 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-gold text-black rounded-tr-none font-medium' 
                  : 'bg-neutral-800 text-neutral-200 rounded-tl-none border border-white/5 shadow-inner'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-gold animate-spin" />
                  <span className="text-[10px] text-neutral-500 uppercase tracking-tighter">Buscando sabedoria...</span>
                </div>
              </div>
            )}
          </div>

          <div className="relative mt-auto">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sua dúvida ou pensamento..."
              className="w-full bg-neutral-900 border border-gold/20 rounded-full py-3 md:py-4 px-5 md:px-6 pr-14 md:pr-16 text-white text-sm focus:outline-none focus:border-gold transition-all placeholder:text-neutral-600"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 bg-gold text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all disabled:opacity-50 disabled:grayscale"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
