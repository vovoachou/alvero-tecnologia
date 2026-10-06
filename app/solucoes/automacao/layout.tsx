import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Automação de Processos',
  description: 'Conectamos seu ecossistema de ferramentas para que tarefas repetitivas sejam executadas de forma invisível e segura.',
  path: '/solucoes/automacao',
});

export default function AutomacaoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
