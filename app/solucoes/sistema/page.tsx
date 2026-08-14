'use client';

import React from 'react';
import SolutionDetail from '@/components/SolutionDetail';

export default function SistemaPage() {
  return (
    <SolutionDetail
      title="Sistema Sob Medida"
      promise="Engenharia de software focada em processos"
      description="Sistemas web robustos projetados para a realidade da sua operação, integrando dados e eliminando gargalos manuais."
      investmentRange="R$ 8.000 a R$ 25.000"
      details="Desenvolvemos plataformas web corporativas e sistemas internos (ERPs customizados, portais de clientes, gerenciadores operacionais) que centralizam a informação e automatizam fluxos de trabalho que hoje rodam em planilhas ou sistemas desconectados."
      features={[
        'Desenvolvimento em React/Next.js e Node.js para alto desempenho',
        'Modelagem de banco de dados robusta e segura (PostgreSQL/MySQL)',
        'Design totalmente responsivo para desktop e dispositivos móveis',
        'Integrações via API com seus sistemas e softwares atuais',
        'Painel administrativo completo com permissões de usuário',
        'Propriedade intelectual de 100% do código desenvolvido'
      ]}
      targetAudience={[
        'Empresas que ainda controlam pedidos, clientes ou estoque em planilhas separadas',
        'Negócios que cresceram e hoje têm processos manuais gerando erro e retrabalho',
        'Times que dependem de uma pessoa específica saber "como o processo funciona"'
      ]}
      howItWorks={[
        'Mapeamos seu processo atual e os dados envolvidos',
        'Desenhamos a arquitetura e os fluxos do sistema',
        'Desenvolvemos em ciclos curtos, com validação a cada etapa',
        'Entregamos com treinamento da equipe e suporte pós-lançamento'
      ]}
      faqs={[
        {
          q: 'Meu negócio é pequeno, vale a pena um sistema sob medida?',
          a: 'Sim — o escopo é dimensionado pro seu tamanho atual. Não precisa ser uma operação grande pra sair da planilha.'
        },
        {
          q: 'Posso pedir alterações depois de pronto?',
          a: 'Sim, o sistema é seu — evoluções adicionais entram como um novo escopo, com preço definido antes de começar.'
        },
        {
          q: 'O sistema roda no celular também?',
          a: 'Sim, todo desenvolvimento é responsivo, funciona em desktop, tablet e celular.'
        }
      ]}
    />
  );
}
