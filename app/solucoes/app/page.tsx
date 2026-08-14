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
      targetAudience={[
        'Empreendedores com uma ideia validada que precisam de um produto funcional pra testar no mercado',
        'Negócios que querem lançar um MVP antes de investir pesado em uma plataforma completa',
        'Times que precisam transformar um protótipo ou rascunho em algo real e usável'
      ]}
      howItWorks={[
        'Entendemos a ideia, o público e o problema que o produto resolve',
        'Desenhamos a experiência do usuário e a arquitetura técnica do MVP',
        'Desenvolvemos em ciclos curtos, com versões testáveis desde as primeiras semanas',
        'Entregamos o produto publicado, pronto pra validar com usuários reais'
      ]}
      faqs={[
        {
          q: 'Preciso ter todas as funcionalidades definidas antes de começar?',
          a: 'Não, ajudamos a priorizar o essencial pro MVP e deixamos o resto pra próximas fases.'
        },
        {
          q: 'O MVP já nasce pronto pra escalar?',
          a: 'A arquitetura é pensada pra crescer, mas o foco inicial é validar a ideia com o menor investimento possível.'
        },
        {
          q: 'Depois do MVP, dá pra continuar evoluindo o produto?',
          a: 'Sim, é comum continuarmos com o cliente em ciclos de evolução após a validação inicial.'
        }
      ]}
    />
  );
}
