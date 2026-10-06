'use client';

import { useSyncExternalStore } from 'react';

// Incrementar quando a finalidade dos cookies mudar: força o banner a reaparecer.
export const CONSENT_VERSION = 1;
// Após esse prazo a escolha expira e o banner é exibido novamente.
const CONSENT_MAX_AGE_DAYS = 365;

const STORAGE_KEY = 'alvero_consent';
const COOKIE_NAME = 'alvero_consent';
const CHANGE_EVENT = 'alvero:consent-change';
const OPEN_EVENT = 'alvero:consent-open';

export type ConsentStatus = 'granted' | 'denied';

export interface ConsentRecord {
  status: ConsentStatus;
  version: number;
  date: string;
}

function isValid(record: unknown): record is ConsentRecord {
  if (!record || typeof record !== 'object') return false;
  const r = record as ConsentRecord;
  if (r.status !== 'granted' && r.status !== 'denied') return false;
  if (r.version !== CONSENT_VERSION) return false;
  const time = Date.parse(r.date);
  if (Number.isNaN(time)) return false;
  return Date.now() - time < CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
}

function readCookie(): ConsentRecord | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

export function readConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  let record: unknown = null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) record = JSON.parse(raw);
  } catch {
    // localStorage indisponível (aba privada, bloqueio): usa o cookie.
  }
  if (!isValid(record)) record = readCookie();
  return isValid(record) ? record : null;
}

// Cache da escolha atual para o useSyncExternalStore (precisa devolver sempre o mesmo objeto).
let snapshot: ConsentRecord | null | undefined;

function getSnapshot() {
  if (snapshot === undefined) snapshot = readConsent();
  return snapshot;
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(CHANGE_EVENT, onStoreChange);
}

export function saveConsent(status: ConsentStatus) {
  const record: ConsentRecord = { status, version: CONSENT_VERSION, date: new Date().toISOString() };
  snapshot = record;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Segue apenas com o cookie.
  }
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(record))}; Max-Age=${
    CONSENT_MAX_AGE_DAYS * 24 * 60 * 60
  }; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function openConsentPreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentPreferencesOpen(listener: () => void) {
  window.addEventListener(OPEN_EVENT, listener);
  return () => window.removeEventListener(OPEN_EVENT, listener);
}

// Retorna `undefined` até o componente montar no navegador (evita divergência de hidratação).
export function useConsent(): ConsentRecord | null | undefined {
  return useSyncExternalStore(subscribe, getSnapshot, () => undefined);
}

export function hasMarketingConsent() {
  return getSnapshot()?.status === 'granted';
}
