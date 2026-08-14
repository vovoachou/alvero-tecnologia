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
      targetAudience={[
        'Gestores que tomam decisão com base em relatório atrasado ou "achismo"',
        'Empresas com dados espalhados entre planilhas, sistemas e ferramentas diferentes',
        'Times que gastam horas todo mês montando o mesmo relatório na mão'
      ]}
      howItWorks={[
        'Identificamos os indicadores que realmente importam pra sua operação',
        'Conectamos o painel direto nas fontes de dados (planilha, ERP, CRM, financeiro)',
        'Desenhamos visualizações claras, sem poluição de informação',
        'Entregamos com atualização automática, sem depender de trabalho manual'
      ]}
      faqs={[
        {
          q: 'Preciso ter os dados organizados antes de contratar?',
          a: 'Não, parte do nosso trabalho é mapear onde os dados estão hoje e organizar isso na estrutura do painel.'
        },
        {
          q: 'O painel atualiza sozinho?',
          a: 'Sim, conectamos direto nas fontes de dados, sem necessidade de atualização manual.'
        },
        {
          q: 'Consigo acessar de qualquer lugar?',
          a: 'Sim, o painel é acessível por navegador, de qualquer dispositivo com internet.'
        }
      ]}
    />
  );
}
