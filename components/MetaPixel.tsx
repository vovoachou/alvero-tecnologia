'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useConsent } from '@/lib/consent';
import { META_PIXEL_ID, isMetaPixelLoaded, revokeMetaPixel, trackMetaEvent } from '@/lib/meta-pixel';

export default function MetaPixel() {
  const consent = useConsent();
  const pathname = usePathname();
  const granted = consent?.status === 'granted';
  const lastTrackedPath = useRef<string | null>(null);

  // Revogação: para o Pixel, apaga _fbp/_fbc e recarrega para descarregar o fbevents.js.
  useEffect(() => {
    if (consent?.status !== 'denied') return;
    const wasLoaded = isMetaPixelLoaded();
    revokeMetaPixel();
    if (wasLoaded) window.location.reload();
  }, [consent]);

  useEffect(() => {
    if (!META_PIXEL_ID || !granted) {
      lastTrackedPath.current = null;
      return;
    }
    // Evita PageView duplicado (StrictMode e re-renderizações na mesma rota).
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    trackMetaEvent('PageView');
  }, [granted, pathname]);

  return null;
}
