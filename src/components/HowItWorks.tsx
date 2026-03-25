import { CalendarDays, Palette, Truck } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';
import WhatsAppIcon from './WhatsAppIcon';

const steps = [
  { icon: WhatsAppIcon, title: 'Chame no WhatsApp', desc: 'Nos conte sobre o seu evento e a sua ideia de bolo.' },
  { icon: CalendarDays, title: 'Defina data e detalhes', desc: 'Data, tema, tamanho e recheio — tudo personalizado.' },
  { icon: Palette, title: 'Receba o orçamento', desc: 'Aprovamos juntos e começamos a produção artesanal.' },
  { icon: Truck, title: 'Entrega ou retirada', desc: 'Seu bolo pronto, perfeito e no horário combinado.' },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Como Funciona
        </h2>
        <p className="font-body text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          De conversa a comemoração em quatro passos simples.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="text-center">
              <div className="relative mx-auto mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground font-body text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400}>
        <div className="text-center">
          <a
            href={getWhatsAppLink('Olá! Quero começar minha encomenda de bolo 🎂')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:scale-105 transition-transform shadow-lg"
          >
            Começar agora ✨
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HowItWorks;
