import { getWhatsAppLink } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';
import WhatsAppIcon from './WhatsAppIcon';

const AboutSection = () => (
  <section id="sobre" className="py-20 bg-background">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <ScrollReveal>
        <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">Sobre</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          Açúcar <span className="text-primary">&</span> Afeto
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="font-body text-lg text-foreground/75 leading-relaxed mb-6">
          Transformo comemorações em memórias doces. Cada bolo é pensado com carinho artesanal,
          ingredientes selecionados e acabamento de confeitaria fina — porque o seu momento
          especial merece uma estrela à altura.
        </p>
        <p className="font-body text-lg text-foreground/75 leading-relaxed mb-8">
          Da Barra da Tijuca para a sua festa: personalização real, sabor memorável e
          pontualidade em cada entrega.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="font-display text-base italic text-muted-foreground mb-8">
          — @phabllolucas
        </p>
        <a
          href={getWhatsAppLink('Olá! Quero falar com a Açúcar e Afeto 🍰')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:scale-105 transition-transform shadow-lg"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Falar comigo
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
