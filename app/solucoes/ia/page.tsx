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
      targetAudience={[
        'Empresas que perdem leads porque demoram pra responder no WhatsApp ou redes sociais',
        'Times de suporte sobrecarregados com perguntas repetitivas',
        'Negócios que querem qualificar contatos antes de passar pro time de vendas'
      ]}
      howItWorks={[
        'Mapeamos os fluxos de atendimento e as perguntas mais frequentes do seu negócio',
        'Treinamos o agente com a base de conhecimento e o tom de voz da sua empresa',
        'Integramos ao WhatsApp, e-mail ou sistema interno que você já usa',
        'Ajustamos o comportamento do agente com base nas primeiras conversas reais'
      ]}
      faqs={[
        {
          q: 'O agente substitui minha equipe de atendimento?',
          a: 'Não necessariamente — ele resolve o volume repetitivo e passa pro time humano quando o assunto exige, liberando sua equipe pro que realmente importa.'
        },
        {
          q: 'Ele consegue errar ou "inventar" resposta?',
          a: 'Configuramos o agente pra responder só com base no que você autorizou, com limites claros pra evitar respostas fora do escopo.'
        },
        {
          q: 'Preciso ter uma equipe técnica pra manter o agente funcionando?',
          a: 'Não. A manutenção e os ajustes ficam por nossa conta, dentro do suporte pós-entrega.'
        }
      ]}
    />
  );
}
