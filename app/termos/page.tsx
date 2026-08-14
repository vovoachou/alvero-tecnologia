'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background-soft">
      <Navbar />
      
      <div className="flex-grow pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6 bg-white rounded-3xl p-8 md:p-12 border border-border-subtle shadow-brand-sm">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-blue hover:underline mb-8 text-sm font-semibold">
            <ArrowLeft size={16} />
            Voltar para a Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Termos de Uso</h1>
          <p className="text-text-secondary text-xs mb-8">Última atualização: 13 de agosto de 2026</p>

          <div className="space-y-6 text-text-primary leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-lg font-bold text-navy mb-3">1. Aceitação dos Termos</h2>
              <p className="text-text-secondary">
                Ao acessar e utilizar o site da Alvero Tecnologia (alverotecnologia.com.br), você concorda expressamente em cumprir e estar vinculado a estes Termos de Uso. Caso não concorde com qualquer parte destes termos, você não deverá utilizar o site ou nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">2. Escopo dos Serviços</h2>
              <p className="text-text-secondary">
                A Alvero Tecnologia fornece informações sobre seus serviços de engenharia de software, automações, consultoria, dashboards e agentes de inteligência artificial. O site serve para apresentação institucional e captura de contatos para fins comerciais. Nossos serviços profissionais são regidos por contratos específicos firmados individualmente com cada cliente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">3. Propriedade Intelectual</h2>
              <p className="text-text-secondary">
                Todos os conteúdos disponíveis neste site, incluindo códigos, textos, imagens, designs, logos e animações são de propriedade exclusiva da Alvero Tecnologia ou de seus licenciadores, protegidos pelas leis brasileiras e internacionais de propriedade intelectual. É proibida a reprodução ou distribuição sem autorização formal por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">4. Limitação de Responsabilidade</h2>
              <p className="text-text-secondary">
                Embora façamos o máximo esforço para manter as informações no site precisas e atualizadas (incluindo as referências de investimento), não garantimos que todos os dados estejam livres de erros pontuais. As faixas de preço apresentadas no site são estimativas referenciais de mercado e não representam uma proposta de orçamento fechado vinculativo.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">5. Contato</h2>
              <p className="text-text-secondary">
                Caso tenha dúvidas sobre estes termos de uso, entre em contato pelo e-mail: <a href="mailto:contato@alverotecnologia.com.br" className="text-primary-blue hover:underline">contato@alverotecnologia.com.br</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
