'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen flex flex-col bg-background-soft">
      <Navbar />
      
      <div className="flex-grow pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6 bg-white rounded-3xl p-8 md:p-12 border border-border-subtle shadow-brand-sm">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-blue hover:underline mb-8 text-sm font-semibold">
            <ArrowLeft size={16} />
            Voltar para a Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Política de Privacidade</h1>
          <p className="text-text-secondary text-xs mb-8">Última atualização: 13 de agosto de 2026</p>

          <div className="space-y-6 text-text-primary leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-lg font-bold text-navy mb-3">1. Coleta de Dados Pessoais</h2>
              <p className="text-text-secondary">
                Coletamos as informações que você nos fornece voluntariamente por meio do preenchimento do formulário em nossa página de Diagnóstico Gratuito. Os dados coletados incluem: seu nome completo, e-mail corporativo, número de WhatsApp/telefone, nome de sua empresa, solução de interesse e a descrição do principal gargalo operacional de seu negócio.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">2. Finalidade do Tratamento</h2>
              <p className="text-text-secondary">
                Esses dados são utilizados exclusivamente para entrarmos em contato para agendar o diagnóstico técnico solicitado, analisar preliminarmente as necessidades da sua operação e enviar comunicações comerciais diretamente ligadas ao seu interesse na Alvero Tecnologia. Nós não comercializamos nem compartilhamos seus dados com terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">3. Base Legal e Consentimento</h2>
              <p className="text-text-secondary">
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/18), tratamos seus dados sob a base legal de consentimento ou de procedimentos preliminares contratuais a seu pedido. Ao clicar em &quot;Solicitar diagnóstico gratuito&quot;, você concorda com o processamento dos dados inseridos conforme descrito nesta política.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">4. Armazenamento e Segurança</h2>
              <p className="text-text-secondary">
                Mantemos seus dados seguros usando conexões criptografadas (HTTPS) e infraestrutura de e-mail confiável (Resend). Seus dados permanecem armazenados pelo período estritamente necessário para cumprir o atendimento comercial ou até que você solicite formalmente a exclusão deles da nossa base de dados.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">5. Seus Direitos</h2>
              <p className="text-text-secondary">
                Você pode solicitar a qualquer momento a confirmação da existência do tratamento de dados, o acesso a eles, a correção de dados incompletos ou inexatos, ou a exclusão total de seus dados pessoais entrando em contato através do e-mail: <a href="mailto:contato@alverotecnologia.com.br" className="text-primary-blue hover:underline">contato@alverotecnologia.com.br</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
