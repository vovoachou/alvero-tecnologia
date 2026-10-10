import type { Metadata } from 'next';
import { COMPANY } from './company';

// Metadados por página. A imagem é gerada por app/opengraph-image.tsx; ela é referenciada
// explicitamente porque rotas aninhadas (ex.: /diagnostico) não a herdam.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: COMPANY.brandName,
      url: path,
      title: `${title} | ${COMPANY.brandName}`,
      description,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: COMPANY.brandName }],
    },
  };
}
