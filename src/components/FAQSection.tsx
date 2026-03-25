import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';
import WhatsAppIcon from './WhatsAppIcon';

const faqs = [
  { q: 'Com quanta antecedência devo pedir?', a: 'Recomendamos pelo menos 5 a 7 dias de antecedência para bolos decorados. Para épocas festivas (Natal, Dia das Mães, etc.), o ideal é 15 dias.' },
  { q: 'Vocês entregam na Barra da Tijuca?', a: 'Sim! Entregamos na Barra da Tijuca e regiões próximas do Rio de Janeiro. O valor da entrega é informado no orçamento.' },
  { q: 'Fazem topo e decoração personalizada?', a: 'Sim! Trabalhamos com topos personalizados, flores de açúcar, apliques em pasta americana e diversas técnicas de confeitaria artística.' },
  { q: 'Quais tamanhos de bolo estão disponíveis?', a: 'Trabalhamos com bolos a partir de 1kg (10-15 fatias) até grandes produções para 70+ convidados. O tamanho ideal é definido no orçamento.' },
  { q: 'Quais são as formas de pagamento?', a: 'Aceitamos Pix, transferência bancária e cartão. O pagamento é combinado diretamente pelo WhatsApp.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Tudo o que você precisa saber antes de encomendar.
          </p>
        </ScrollReveal>

        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="bg-card rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-body text-base font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-5' : 'max-h-0'
                    }`}
                >
                  <p className="px-6 font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center">
            <a
              href={getWhatsAppLink('Olá! Tenho uma dúvida sobre encomenda de bolo 🎂')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:scale-105 transition-transform shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Tirar dúvida no WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
