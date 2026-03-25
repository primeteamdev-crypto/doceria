import { useState, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  { name: 'Mariana S.', text: 'O bolo ficou simplesmente perfeito! Todos os convidados elogiaram o sabor e a decoração impecável. Super recomendo!', rating: 5 },
  { name: 'Fernanda L.', text: 'Encomendei para o aniversário da minha filha e superou todas as expectativas. Acabamento de confeitaria fina de verdade.', rating: 5 },
  { name: 'Camila R.', text: 'Profissionalismo e carinho em cada detalhe. O bolo chegou no horário e era ainda mais bonito que na foto. Amei!', rating: 5 },
  { name: 'Patricia M.', text: 'Já é a terceira vez que encomendo e cada bolo vem mais incrível que o anterior. Sabor equilibrado e visual impecável.', rating: 5 },
  { name: 'Juliana A.', text: 'Atendimento premium do início ao fim. O bolo de casamento ficou um sonho. Obrigada por fazer parte do nosso dia!', rating: 5 },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const onTouchStart = (e: TouchEvent) => { touchStartX.current = e.targetTouches[0].clientX; };
  const onTouchMove = (e: TouchEvent) => { touchEndX.current = e.targetTouches[0].clientX; };
  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Clientes Satisfeitos
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Cada bolo carrega o carinho de quem confia no nosso trabalho.
          </p>
        </ScrollReveal>

        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm max-w-2xl mx-auto text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-body text-lg text-foreground/80 italic leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  <span className="font-display text-base font-semibold text-foreground">{t.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={prev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 shadow flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} aria-label="Próximo" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 shadow flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-border'}`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-10">
            <a
              href={getWhatsAppLink('Olá! Quero garantir minha encomenda de bolo 🎂')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:scale-105 transition-transform shadow-lg"
            >
              Garantir minha encomenda
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
