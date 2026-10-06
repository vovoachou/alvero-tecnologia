'use client';

import { hasMarketingConsent } from './consent';

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || '';

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let initialized = false;

// fbclid do link do anúncio, guardado só em memória até o visitante aceitar os cookies.
const landingFbclid = (() => {
  if (typeof window === 'undefined') return null;
  const value = new URLSearchParams(window.location.search).get('fbclid');
  return value && /^[\w-]{1,500}$/.test(value) ? value : null;
})();
const FBC_MAX_AGE = 90 * 24 * 60 * 60;

function readCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

// Cria o _fbc a partir do fbclid mesmo que o fbevents.js seja bloqueado,
// para a Conversions API conseguir atribuir o Lead ao anúncio.
function ensureFbcCookie() {
  if (!landingFbclid || readCookie('_fbc')) return;
  document.cookie = `_fbc=fb.1.${Date.now()}.${landingFbclid}; Max-Age=${FBC_MAX_AGE}; Path=/; SameSite=Lax`;
}

export function newEventId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

// Equivalente ao snippet oficial do Meta, sem o PageView automático
// (o PageView é disparado pelo componente MetaPixel a cada navegação).
export function loadMetaPixel() {
  if (initialized || !META_PIXEL_ID) return;
  initialized = true;
  ensureFbcCookie();

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }

  window.fbq('consent', 'grant');
  window.fbq('init', META_PIXEL_ID);
}

export function isMetaPixelLoaded() {
  return initialized;
}

// Dispara um evento padrão do Meta somente com consentimento e Pixel configurado.
// O eventID é o mesmo enviado pela Conversions API, para o Meta deduplicar.
export function trackMetaEvent(
  event: 'PageView' | 'Lead' | 'Contact',
  params: Record<string, string> = {},
  eventId: string = newEventId(),
) {
  if (!META_PIXEL_ID || !hasMarketingConsent()) return;
  loadMetaPixel();
  window.fbq?.('track', event, params, { eventID: eventId });
}

// Dados que acompanham o formulário para a Conversions API. Sem consentimento, retorna undefined.
export function getMetaServerEventData(eventId: string) {
  if (!META_PIXEL_ID || !hasMarketingConsent()) return undefined;
  ensureFbcCookie();
  return {
    eventId,
    eventSourceUrl: window.location.href,
    fbp: readCookie('_fbp'),
    fbc: readCookie('_fbc'),
  };
}

function deleteCookie(name: string) {
  const host = window.location.hostname;
  const parts = host.split('.');
  const domains = [''];
  for (let i = 0; i < parts.length - 1; i++) {
    const domain = parts.slice(i).join('.');
    domains.push(`; Domain=${domain}`, `; Domain=.${domain}`);
  }
  for (const domain of domains) {
    document.cookie = `${name}=; Max-Age=0; Path=/${domain}`;
  }
}

export function revokeMetaPixel() {
  window.fbq?.('consent', 'revoke');
  deleteCookie('_fbp');
  deleteCookie('_fbc');
}
