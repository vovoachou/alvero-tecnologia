import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Diagnóstico Gratuito',
  description: 'Mapeamos os gargalos operacionais da sua empresa e indicamos a solução tecnológica ideal, com escopo, prazo e investimento claros.',
  path: '/diagnostico',
});

export default function DiagnosticoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
