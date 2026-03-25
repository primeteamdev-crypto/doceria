import WhatsAppIcon from './WhatsAppIcon';
import { getWhatsAppLink, INSTAGRAM_URL } from '@/lib/constants';

const MobileBottomBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-3 font-body text-sm font-semibold text-primary-foreground"
      style={{ backgroundColor: 'hsl(142, 70%, 45%)' }}
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-4 h-4" />
      WhatsApp
    </a>
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-3 bg-gradient-to-r from-rose to-primary font-body text-sm font-semibold text-primary-foreground"
      aria-label="Instagram"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
      Instagram
    </a>
  </div>
);

export default MobileBottomBar;
