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
    />
  );
}
