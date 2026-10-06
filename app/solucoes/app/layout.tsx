import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Do Rascunho ao App',
  description: 'Desenvolvimento ágil de MVPs e plataformas SaaS escaláveis, com foco em segurança, performance e experiência do usuário.',
  path: '/solucoes/app',
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
