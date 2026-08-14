'use client';

import React from 'react';
import SolutionDetail from '@/components/SolutionDetail';

export default function IAPage() {
  return (
    <SolutionDetail
      title="Agentes de IA"
      promise="Inteligência cognitiva aplicada ao negócio"
      description="Funcionários digitais treinados para suporte, vendas e análise de dados, operando 24/7 com precisão e escala."
      investmentRange="R$ 3.500 a R$ 10.000"
      details="Utilizamos Large Language Models (LLMs) ajustados e integrados com a base de conhecimento interna da sua empresa. Os agentes podem responder dúvidas de clientes de forma humanizada, pré-qualificar leads no WhatsApp ou triar e processar e-mails de forma autônoma."
      features={[
        'Agentes integrados diretamente à API do WhatsApp Business',
        'Treinamento com arquivos, manuais e PDFs da própria empresa',
        'Fallback inteligente para atendimento humano quando necessário',
        'Envio automatizado de leads para o seu CRM corporativo',
        'Dashboards para análise de conversas e satisfação do cliente',
        'Processamento seguro em total conformidade com a LGPD'
      ]}
    />
  );
}
