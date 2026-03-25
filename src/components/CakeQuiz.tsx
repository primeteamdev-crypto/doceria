import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';
import WhatsAppIcon from './WhatsAppIcon';

const questions = [
  {
    key: 'ocasiao',
    title: 'Qual a ocasião?',
    emoji: '🎉',
    options: ['Aniversário', 'Casamento', 'Infantil', 'Outro'],
  },
  {
    key: 'pessoas',
    title: 'Quantas pessoas?',
    emoji: '👥',
    options: ['10–15', '20–30', '40–60', '70+'],
  },
  {
    key: 'estilo',
    title: 'Qual estilo?',
    emoji: '🎨',
    options: ['Bolo Temático', 'Colorido', 'Tema Infantil', 'Bolo em Família', 'Outro'],
  },
  {
    key: 'recheio',
    title: 'Recheio preferido?',
    emoji: '🍫',
    options: ['Brigadeiro', 'Ninho', 'Frutas', 'Doce de leite', 'Surpresa'],
  },
];

const CakeQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const isFinished = step >= questions.length;
  const currentQ = questions[step];

  const selectOption = (option: string) => {
    const key = currentQ.key;
    setAnswers((prev) => ({ ...prev, [key]: option }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
  };

  const whatsappMessage = `Olá! Fiz o quiz no site Açúcar e Afeto 🍰

📋 Resultado:
🎉 Ocasião: ${answers.ocasiao || ''}
👥 Pessoas: ${answers.pessoas || ''}
🎨 Estilo: ${answers.estilo || ''}
🍫 Recheio: ${answers.recheio || ''}

Quero um orçamento para esse bolo!`;

  return (
    <section id="quiz" className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Descubra o Bolo Ideal 🎂
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Responda 4 perguntas rápidas e receba uma sugestão personalizada.
          </p>
        </ScrollReveal>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm min-h-[320px] flex flex-col items-center justify-center">
          {!isFinished ? (
            <div className="w-full animate-fade-in" key={step}>
              {/* Progress */}
              <div className="flex gap-2 mb-8 justify-center">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'bg-primary w-10' : 'bg-border w-6'
                      }`}
                  />
                ))}
              </div>

              <p className="text-center text-3xl mb-2">{currentQ.emoji}</p>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-center text-foreground mb-8">
                {currentQ.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                {currentQ.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className="flex items-center justify-between rounded-xl border-2 border-border bg-background px-5 py-4 font-body text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    {option}
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center animate-scale-in w-full">
              <p className="text-5xl mb-4">🎉</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Sua combinação perfeita!
              </h3>
              <div className="bg-cream rounded-xl p-6 mb-8 max-w-md mx-auto text-left">
                <p className="font-body text-sm text-foreground/80 space-y-1">
                  <span className="block">🎉 <strong>Ocasião:</strong> {answers.ocasiao}</span>
                  <span className="block mt-1">👥 <strong>Pessoas:</strong> {answers.pessoas}</span>
                  <span className="block mt-1">🎨 <strong>Estilo:</strong> {answers.estilo}</span>
                  <span className="block mt-1">🍫 <strong>Recheio:</strong> {answers.recheio}</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground hover:scale-105 transition-transform shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Enviar no WhatsApp
                </a>
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-border px-6 py-3 font-body text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Refazer quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CakeQuiz;
