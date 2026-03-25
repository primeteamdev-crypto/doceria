import { ArrowDown } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import heroBg from '@/assets/hero-bg.jpg';
import WhatsAppIcon from './WhatsAppIcon';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="Início"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft/40 bg-background/10 backdrop-blur-sm px-5 py-2 mb-8">
          <span className="text-gold-soft font-body text-xs md:text-sm tracking-widest uppercase">
            Sob encomenda • Premium • Personalizado
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Bolos personalizados que viram a{' '}
          <span className="italic text-gold-soft">estrela</span> da sua festa.
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Feitos sob medida, acabamento impecável e sabor memorável — Barra da Tijuca.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir no WhatsApp"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground shadow-xl hover:scale-105 transition-transform"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Pedir no WhatsApp
          </a>
          <button
            onClick={scrollToPortfolio}
            className="inline-flex items-center gap-3 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            Ver bolos feitos
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToPortfolio}
          className="mt-16 animate-float text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
