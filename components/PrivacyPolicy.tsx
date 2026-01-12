
import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface Props {
    onBack: () => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
    return (
        <div className="min-h-screen pt-20 pb-12 bg-neutral-950 text-neutral-300">
            <div className="max-w-4xl mx-auto px-6">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors mb-8 uppercase text-xs tracking-widest font-bold"
                >
                    <ArrowLeft size={16} /> Voltar ao Início
                </button>

                <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                    <Shield className="text-gold w-10 h-10" />
                    <h1 className="text-4xl md:text-5xl font-serif text-white">Política de Privacidade</h1>
                </div>

                <div className="space-y-8 leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">1. Compromisso com a Privacidade</h2>
                        <p>
                            O Mar Vermelho está comprometido em proteger a sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nossos serviços exclusivos e o Concierge Espiritual.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">2. Coleta de Informações</h2>
                        <p>
                            Coletamos informações que você nos fornece diretamente, como nome, contato e preferências espirituais, apenas quando estritamente necessário para personalizar sua experiência em nossas catedrais ou através de nosso atendimento digital.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">3. Uso das Informações</h2>
                        <p>
                            Suas informações são utilizadas exclusivamente para:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2 marker:text-gold">
                            <li>Agendamento de visitas privadas e cerimônias.</li>
                            <li>Personalização do atendimento via Concierge.</li>
                            <li>Comunicações sobre eventos exclusivos e atualizações do santuário.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">4. Segurança de Dados</h2>
                        <p>
                            Empregamos medidas de segurança de ponta para proteger seus dados contra acesso não autorizado. Todas as comunicações com nosso Concierge Espiritual são criptografadas e tratadas com o mais alto sigilo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">5. Seus Direitos</h2>
                        <p>
                            Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento. Entre em contato conosco através dos canais oficiais para exercer seus direitos.
                        </p>
                    </section>

                    <div className="pt-10 border-t border-white/10 text-sm text-neutral-500">
                        <p>Última atualização: Janeiro 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
