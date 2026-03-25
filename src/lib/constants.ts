export const WHATSAPP_NUMBER = '5521979054157';
export const WHATSAPP_URL = 'https://wa.me/5521979054157';
export const INSTAGRAM_URL = 'https://www.instagram.com/_acucar.e.afeto/';

export const DEFAULT_WA_MESSAGE =
  'Olá! Vim pelo site Açúcar e Afeto 🍰 Quero um bolo personalizado para minha comemoração. Minha data é: ____ e tema: ____.';

export const getWhatsAppLink = (message?: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message || DEFAULT_WA_MESSAGE)}`;
