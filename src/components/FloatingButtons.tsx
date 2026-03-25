import WhatsAppIcon from './WhatsAppIcon';
import { getWhatsAppLink, INSTAGRAM_URL } from '@/lib/constants';

const FloatingButtons = () => (
  <>
    {/* Instagram floating */}
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Siga no Instagram"
      className="hidden md:flex fixed bottom-28 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-tr from-rose to-primary items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform animate-float"
      style={{ animationDelay: '0.5s' }}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
    </a>

    {/* WhatsApp floating */}
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full items-center justify-center shadow-xl hover:scale-110 transition-transform animate-float animate-pulse-glow"
      style={{ backgroundColor: 'hsl(142, 70%, 45%)' }}
    >
      <WhatsAppIcon className="w-7 h-7 text-primary-foreground" />
    </a>
  </>
);

export default FloatingButtons;
