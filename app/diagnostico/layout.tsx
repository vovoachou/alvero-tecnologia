import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Diagnóstico Gratuito',
  description: 'Mapeamos os gargalos operacionais da sua empresa e enviamos uma proposta fechada para o sistema que ela precisa, com escopo, prazo e valor definidos.',
  path: '/diagnostico',
});

export default function DiagnosticoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
