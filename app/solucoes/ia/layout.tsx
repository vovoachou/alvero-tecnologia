import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  title: 'Agentes de IA',
  description: 'Funcionários digitais treinados para suporte, vendas e análise de dados, operando 24/7 com precisão e escala.',
  path: '/solucoes/ia',
});

export default function IaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
