import { Sparkles, Palette, Heart, Clock } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';
import heroBg from '@/assets/hero-bg.jpg';

const differentials = [
  { icon: Sparkles, title: 'Acabamento de Confeitaria Fina', desc: 'Cada detalhe é pensado para impressionar visualmente e surpreender no sabor.' },
  { icon: Palette, title: 'Personalização Real', desc: 'Tema, cores, topo decorativo — tudo feito sob medida para o seu evento.' },
  { icon: Heart, title: 'Sabor Equilibrado', desc: 'Doce na medida certa, com ingredientes selecionados e combinações exclusivas.' },
  { icon: Clock, title: 'Pontualidade Garantida', desc: 'Seu bolo chega no horário, pronto para ser a estrela da festa.' },
];

const Differentials = () => (
  <section
    className="py-20 relative parallax-bg"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="absolute inset-0 bg-foreground/80" />
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-4">
          Por que Açúcar & Afeto?
        </h2>
        <p className="font-body text-primary-foreground/70 text-center mb-16 max-w-lg mx-auto">
          Excelência em cada camada, carinho em cada detalhe.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {differentials.map((d, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="flex gap-5 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <d.icon className="w-6 h-6 text-gold-soft" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">{d.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400}>
        <div className="text-center">
          <a
            href={getWhatsAppLink('Olá! Quero um orçamento para meu bolo 🎂')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:scale-105 transition-transform shadow-lg"
          >
            Quero orçamento ✨
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Differentials;
