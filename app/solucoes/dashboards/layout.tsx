import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Painel de Indicadores',
  description: 'Dashboards avançados que consolidam KPIs vitais da sua empresa para decisões baseadas em dados, não em suposições.',
  path: '/solucoes/dashboards',
});

export default function DashboardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
