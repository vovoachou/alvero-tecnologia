'use client';

import React from 'react';
import SolutionDetail from '@/components/SolutionDetail';

export default function DashboardsPage() {
  return (
    <SolutionDetail
      title="Painel de Indicadores"
      promise="Visibilidade estratégica em tempo real"
      description="Dashboards avançados que consolidam KPIs vitais da sua empresa para decisões baseadas em dados, não em suposições."
      investmentRange="R$ 4.000 a R$ 12.000"
      details="Reunimos dados financeiros, operacionais e de vendas que hoje estão espalhados e os transformamos em gráficos dinâmicos e fáceis de interpretar. Você terá clareza absoluta sobre faturamento, CAC, LTV, churn e gargalos operacionais."
      features={[
        'Consolidação de múltiplas fontes de dados (banco de dados, planilhas, APIs)',
        'Atualização automática de KPIs operacionais e financeiros',
        'Filtros avançados por período, canal de venda e categoria',
        'Exportação rápida de relatórios em PDF e planilhas Excel',
        'Acesso seguro e restrito por usuário com criptografia',
        'Design limpo e otimizado para tomada de decisão ágil'
      ]}
    />
  );
}
