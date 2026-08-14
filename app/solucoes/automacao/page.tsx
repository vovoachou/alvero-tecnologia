'use client';

import React from 'react';
import SolutionDetail from '@/components/SolutionDetail';

export default function AutomacaoPage() {
  return (
    <SolutionDetail
      title="Automação de Processos"
      promise="Eficiência operacional autônoma"
      description="Conectamos seu ecossistema de ferramentas para que tarefas repetitivas sejam executadas de forma invisível e segura."
      investmentRange="R$ 2.500 a R$ 7.000"
      details="Elimine o trabalho repetitivo de copiar e colar informações entre sistemas. Desenvolvemos fluxos integrando planilhas, CRMs, ERPs, canais de chat (Slack, Discord, WhatsApp) e gateways de pagamento para que os dados fluam sozinhos e sem erros."
      features={[
        'Mapeamento detalhado dos processos operacionais atuais',
        'Integração via webhooks e APIs REST seguras',
        'Redução de falhas humanas na digitação e transferência de dados',
        'Notificações automáticas em tempo real para equipes operacionais',
        'Processamento automático de relatórios e faturamento',
        'Logs de execução e auditoria para garantir rastreabilidade'
      ]}
      targetAudience={[
        'Empresas que copiam dados manualmente entre planilha, CRM e sistema financeiro',
        'Times que gastam horas montando relatórios que poderiam ser automáticos',
        'Negócios com processos repetitivos que dependem de alguém lembrar de fazer'
      ]}
      howItWorks={[
        'Mapeamos o processo manual de ponta a ponta, identificando onde ele trava',
        'Desenhamos o fluxo de automação entre as ferramentas envolvidas',
        'Implementamos a integração via API, webhook ou planilha, com testes reais',
        'Monitoramos as primeiras execuções pra garantir que tudo roda sem erro'
      ]}
      faqs={[
        {
          q: 'Preciso trocar de ferramenta pra automatizar?',
          a: 'Não, na maioria dos casos conectamos as ferramentas que você já usa, sem precisar migrar de sistema.'
        },
        {
          q: 'E se algo der errado no meio do processo automático?',
          a: 'Configuramos alertas e pontos de verificação pra você ser avisado antes que um erro silencioso vire um problema maior.'
        },
        {
          q: 'Automação funciona pra qualquer processo?',
          a: 'Processos com regras claras e repetitivas são os candidatos ideais. No diagnóstico avaliamos se faz sentido pro seu caso.'
        }
      ]}
    />
  );
}
