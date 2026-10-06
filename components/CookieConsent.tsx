'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { ConsentStatus, onConsentPreferencesOpen, saveConsent, useConsent } from '@/lib/consent';

const buttonClass =
  'flex-1 py-2.5 rounded-xl bg-navy hover:bg-primary-blue text-white font-semibold text-sm transition-colors cursor-pointer';

export default function CookieConsent() {
  const consent = useConsent();
  const [isReopened, setIsReopened] = useState(false);
  const [height, setHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // Aparece enquanto não houver escolha válida, ou quando reaberto pelo link do rodapé.
  const isOpen = consent === null || isReopened;

  useEffect(() => onConsentPreferencesOpen(() => setIsReopened(true)), []);

  // Mede o banner para reservar o mesmo espaço no fim da página (nada fica escondido atrás dele).
  useEffect(() => {
    const panel = panelRef.current;
    if (!isOpen || !panel) return;
    const observer = new ResizeObserver(() => setHeight(panel.offsetHeight));
    observer.observe(panel);
    return () => observer.disconnect();
  }, [isOpen, consent]);

  if (!isOpen || consent === undefined) return null;

  const choose = (status: ConsentStatus) => {
    saveConsent(status);
    setIsReopened(false);
  };

  return (
    <>
      <div aria-hidden="true" className="sm:hidden" style={{ height }} />
      <div
        ref={panelRef}
        role="region"
        aria-label="Preferências de cookies"
        className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:p-0 sm:max-w-sm"
      >
        <div className="relative bg-white text-navy rounded-2xl border border-border-subtle shadow-2xl p-4 sm:p-5">
          {consent && (
            <button
              type="button"
              onClick={() => setIsReopened(false)}
              aria-label="Fechar sem alterar"
              className="absolute top-3 right-3 p-1 text-text-secondary hover:text-navy transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          )}

          <p className="font-poppins font-semibold text-sm mb-2">Cookies e privacidade</p>
          <p className="text-xs text-text-secondary leading-relaxed">
            Com a sua permissão, usamos cookies do Meta (Facebook e Instagram) para medir nossas campanhas e melhorar os
            anúncios que você vê. Nada é ativado antes da sua escolha.{' '}
            <Link href="/privacidade" className="text-primary-blue underline hover:text-navy">
              Política de Privacidade
            </Link>
          </p>

          {consent && (
            <p className="text-[11px] text-text-secondary mt-2">
              Escolha atual: {consent.status === 'granted' ? 'aceito' : 'recusado'} em{' '}
              {new Date(consent.date).toLocaleDateString('pt-BR')}.
            </p>
          )}

          <div className="mt-3 sm:mt-4 flex gap-3">
            <button type="button" onClick={() => choose('denied')} className={buttonClass}>
              Recusar
            </button>
            <button type="button" onClick={() => choose('granted')} className={buttonClass}>
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
