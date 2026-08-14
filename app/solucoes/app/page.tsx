'use client';

import React from 'react';
import SolutionDetail from '@/components/SolutionDetail';

export default function AppPage() {
  return (
    <SolutionDetail
      title="Do Rascunho ao App"
      promise="Do conceito ao produto digital"
      description="Desenvolvimento ágil de MVPs e plataformas SaaS escaláveis, com foco em segurança, performance e experiência do usuário."
      investmentRange="R$ 12.000 a R$ 35.000"
      details="Ideal para fundadores de startups e empresas que desejam lançar um produto de base tecnológica no mercado. Cuidamos de todo o processo de engenharia: da prototipação da interface (UI/UX) ao desenvolvimento do código, modelagem de banco de dados e publicação em produção."
      features={[
        'Desenvolvimento Full Stack moderno e escalável',
        'Criação de MVP (Minimum Viable Product) focado em validação de mercado',
        'Modelagem visual e prototipagem de telas antes do código',
        'Integração com gateways de pagamento recorrente (Stripe, Asaas, etc.)',
        'Infraestrutura em nuvem configurada para receber milhares de acessos',
        'Código limpo, documentado e pronto para captação de investimento'
      ]}
    />
  );
}
