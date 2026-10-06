import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Política de Privacidade',
  description: 'Como a Alvero Tecnologia coleta, usa e protege dados pessoais e cookies, em conformidade com a LGPD.',
  path: '/privacidade',
});

export default function PrivacidadeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
