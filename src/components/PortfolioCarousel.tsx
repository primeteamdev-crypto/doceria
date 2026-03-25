import { useState, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';
import WhatsAppIcon from './WhatsAppIcon';
import cake1 from '@/assets/cake-1.png';
import cake2 from '@/assets/cake-2.png';
import cake3 from '@/assets/cake-3.png';
import cake4 from '@/assets/cake-4.png';

const cakes = [
  { img: cake2, title: 'Paixão Temática', desc: 'Aniversário • Bolo Temático • Personalizado', theme: 'bolo temático de time de futebol' },
  { img: cake3, title: 'Festa da Lara', desc: 'Infantil • Tema Infantil • Colorido', theme: 'bolo infantil temático colorido carnaval' },
  { img: cake1, title: 'Elegância Rosé', desc: 'Aniversário • Bolo em Família • Delicado', theme: 'bolo floral delicado tons de rosa' },
  { img: cake4, title: 'Clássico em Azul', desc: 'Casamento • Bolo em Família • Sofisticado', theme: 'bolo de casamento clássico azul e branco' },
];

const PortfolioCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => setCurrent((c) => (c === 0 ? cakes.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === cakes.length - 1 ? 0 : c + 1));

  const onTouchStart = (e: TouchEvent) => { touchStartX.current = e.targetTouches[0].clientX; };
  const onTouchMove = (e: TouchEvent) => { touchEndX.current = e.targetTouches[0].clientX; };
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section id="portfolio" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Bolos Feitos com Afeto
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Cada criação é única — feita sob medida para o seu momento especial.
          </p>
        </ScrollReveal>

        <div
          className="relative overflow-hidden rounded-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {cakes.map((cake, i) => (
              <div key={i} className="min-w-full px-2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={cake.img}
                    alt={cake.title}
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">{cake.title}</h3>
                    <p className="font-body text-sm text-primary-foreground/80 mb-4">{cake.desc}</p>
                    <a
                      href={getWhatsAppLink(`Olá! Vi o bolo "${cake.title}" no site e quero um parecido 🎂 Tema: ${cake.theme}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Quero um parecido
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={prev} aria-label="Anterior" className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 shadow flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} aria-label="Próximo" className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 shadow flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {cakes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-primary-foreground/50'}`}
                aria-label={`Bolo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
