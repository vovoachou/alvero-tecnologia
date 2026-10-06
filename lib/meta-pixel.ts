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

function newEventId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

// Equivalente ao snippet oficial do Meta, sem o PageView automático
// (o PageView é disparado pelo componente MetaPixel a cada navegação).
export function loadMetaPixel() {
  if (initialized || !META_PIXEL_ID) return;
  initialized = true;

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
// O eventID permite deduplicar com a Conversions API no futuro.
export function trackMetaEvent(event: 'PageView' | 'Lead' | 'Contact', params: Record<string, string> = {}) {
  if (!META_PIXEL_ID || !hasMarketingConsent()) return;
  loadMetaPixel();
  window.fbq?.('track', event, params, { eventID: newEventId() });
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
