import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Sistema Sob Medida',
  description: 'Sistemas web robustos projetados para a realidade da sua operação, integrando dados e eliminando gargalos manuais.',
  path: '/solucoes/sistema',
});

export default function SistemaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
