import { Star, MapPin, Cake } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Cake, value: '+200', label: 'Festas adoçadas', delay: 0 },
  { icon: Star, value: '5.0', label: 'Avaliação dos clientes', delay: 100 },
  { icon: MapPin, value: 'Barra', label: 'Entrega na Barra e região', delay: 200 },
];

const SocialProof = () => (
  <section className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <ScrollReveal key={stat.label} delay={stat.delay}>
            <div className="flex flex-col items-center text-center bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <stat.icon className="w-8 h-8 text-primary mb-4" />
              <span className="font-display text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="font-body text-sm text-muted-foreground mt-2">{stat.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={300}>
        <div className="text-center">
          <a
            href={getWhatsAppLink('Olá! Quero o meu bolo perfeito 🎂')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:scale-105 transition-transform shadow-lg"
          >
            Quero o meu bolo perfeito ✨
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SocialProof;
