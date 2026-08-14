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
    />
  );
}
