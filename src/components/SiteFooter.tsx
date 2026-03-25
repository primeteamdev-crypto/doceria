import { MapPin } from 'lucide-react';
import { getWhatsAppLink, INSTAGRAM_URL } from '@/lib/constants';
import WhatsAppIcon from './WhatsAppIcon';

const SiteFooter = () => (
  <footer className="bg-accent text-accent-foreground py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">
            Açúcar <span className="text-primary">&</span> Afeto
          </h3>
          <p className="font-body text-sm text-accent-foreground/70 leading-relaxed">
            Bolos personalizados que viram a estrela da sua festa. Feitos com carinho na Barra da Tijuca.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-widest mb-4 text-accent-foreground/60">Links</h4>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2 text-accent-foreground/80">
              <MapPin className="w-4 h-4" /> Barra da Tijuca - RJ
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-start md:items-end justify-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Pedir meu bolo
          </a>
        </div>
      </div>

      <div className="border-t border-accent-foreground/10 pt-6">
        <p className="font-body text-xs text-accent-foreground/50 text-center">
          © {new Date().getFullYear()} Açúcar e Afeto. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
