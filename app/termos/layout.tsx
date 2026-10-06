import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Termos de Uso',
  description: 'Termos de uso do site da Alvero Tecnologia.',
  path: '/termos',
});

export default function TermosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
