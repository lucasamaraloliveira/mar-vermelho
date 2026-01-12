
import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface Props {
    onBack: () => void;
}

export const TermsOfUse: React.FC<Props> = ({ onBack }) => {
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
                    <FileText className="text-gold w-10 h-10" />
                    <h1 className="text-4xl md:text-5xl font-serif text-white">Termos de Uso</h1>
                </div>

                <div className="space-y-8 leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e utilizar o site e serviços do Mar Vermelho, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">2. Uso dos Serviços</h2>
                        <p>
                            Nossos serviços são destinados a proporcionar uma experiência espiritual e arquitetônica premium. Você concorda em usar o site apenas para fins legítimos e de maneira que não infrinja os direitos de terceiros ou restrinja o uso e aproveitamento do site por qualquer outra pessoa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">3. Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, imagens e software, é propriedade exclusiva do Mar Vermelho ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">4. Concierge Espiritual</h2>
                        <p>
                            O serviço de Concierge Espiritual é uma ferramenta de auxílio baseada em inteligência artificial. Embora nos esforcemos para oferecer orientação precisa e reconfortante, este serviço não substitui aconselhamento profissional, médico ou legal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">5. Alterações nos Termos</h2>
                        <p>
                            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos termos.
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
