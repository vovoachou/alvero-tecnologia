'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { COMPANY } from '@/lib/company';
import { openConsentPreferences } from '@/lib/consent';

const linkClass = 'text-primary-blue hover:underline';

export default function PrivacidadePage() {
  const controller = [
    COMPANY.legalName ? `${COMPANY.brandName}, marca de ${COMPANY.legalName}` : COMPANY.brandName,
    COMPANY.cnpj && `inscrita no CNPJ sob o nº ${COMPANY.cnpj}`,
  ]
    .filter(Boolean)
    .join(', ');

  const emailLink = (
    <a href={`mailto:${COMPANY.contactEmail}`} className={linkClass}>
      {COMPANY.contactEmail}
    </a>
  );

  const preferencesLink = (
    <button type="button" onClick={openConsentPreferences} className={`${linkClass} cursor-pointer`}>
      Preferências de cookies
    </button>
  );

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
          <p className="text-text-secondary text-xs mb-8">Última atualização: 6 de outubro de 2026</p>

          <div className="space-y-6 text-text-primary leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-lg font-bold text-navy mb-3">1. Quem é o Controlador</h2>
              <p className="text-text-secondary">
                O controlador dos dados pessoais tratados neste site é a {controller}. Para qualquer assunto relacionado a esta política ou aos seus dados, fale conosco pelo e-mail {emailLink}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">2. Coleta de Dados Pessoais</h2>
              <p className="text-text-secondary">
                Coletamos as informações que você nos fornece voluntariamente por meio do preenchimento do formulário em nossa página de Diagnóstico Gratuito. Os dados coletados incluem: seu nome completo, e-mail corporativo, número de WhatsApp/telefone, nome de sua empresa, solução de interesse e a descrição do principal gargalo operacional de seu negócio.
              </p>
              <p className="text-text-secondary mt-3">
                Se você autorizar os cookies de medição e publicidade, também são coletadas informações de navegação, conforme descrito na seção 5.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">3. Finalidade do Tratamento</h2>
              <p className="text-text-secondary">
                Os dados do formulário são utilizados exclusivamente para entrarmos em contato para agendar o diagnóstico técnico solicitado, analisar preliminarmente as necessidades da sua operação e enviar comunicações comerciais diretamente ligadas ao seu interesse na {COMPANY.brandName}. Nós não vendemos seus dados. Eles são compartilhados apenas com os prestadores de serviço listados na seção 6, na medida necessária para operar o site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">4. Base Legal e Consentimento</h2>
              <p className="text-text-secondary">
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/18), tratamos os dados do formulário sob a base legal de consentimento ou de procedimentos preliminares contratuais a seu pedido. Ao clicar em &quot;Solicitar diagnóstico gratuito&quot;, você concorda com o processamento dos dados inseridos conforme descrito nesta política. Os cookies de medição e publicidade são utilizados somente com o seu consentimento, que pode ser revogado a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">5. Cookies e Tecnologias de Terceiros</h2>
              <p className="text-text-secondary">
                Cookies são pequenos arquivos armazenados no seu navegador. Utilizamos duas categorias:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-3 text-text-secondary">
                <li>
                  <strong className="text-navy">Essenciais:</strong> necessários para o funcionamento do site. Incluem o registro da sua escolha sobre cookies (<code>alvero_consent</code>, guardado por até 12 meses), que evita perguntar novamente a cada visita. Não podem ser desativados, pois não são usados para publicidade.
                </li>
                <li>
                  <strong className="text-navy">Medição e publicidade (opcionais):</strong> utilizamos o Pixel do Meta (empresa responsável pelo Facebook e pelo Instagram) para medir os resultados das nossas campanhas, como quantas pessoas visitaram o site ou solicitaram um diagnóstico após ver um anúncio, e para melhorar os anúncios exibidos. O Pixel só é carregado depois que você clica em &quot;Aceitar&quot;. Ele utiliza os cookies <code>_fbp</code> (até 90 dias) e <code>_fbc</code> (até 90 dias, quando você chega por um anúncio).
                </li>
              </ul>
              <p className="text-text-secondary mt-3">
                Quando o Pixel está ativo, o Meta pode coletar ou receber informações do seu navegador e dispositivo, como endereço IP, tipo de navegador, páginas visitadas, data e hora do acesso e ações realizadas no site (por exemplo, o envio do formulário de diagnóstico ou o clique para falar conosco pelo WhatsApp). Não enviamos ao Meta seu nome, e-mail, telefone ou o conteúdo do formulário.
              </p>
              <p className="text-text-secondary mt-3">
                Também com o seu consentimento, quando você envia o formulário de diagnóstico, nosso servidor informa ao Meta que uma solicitação foi realizada, por meio da API de Conversões do Meta. Essa comunicação inclui apenas o identificador do evento, a página de origem, o endereço IP, o tipo de navegador e os identificadores dos cookies <code>_fbp</code> e <code>_fbc</code>, e serve para que a conversão seja medida mesmo quando o navegador bloqueia o Pixel. O mesmo identificador de evento evita que a solicitação seja contada em duplicidade. Se você recusar os cookies opcionais, essa comunicação não é feita.
              </p>
              <p className="text-text-secondary mt-3">
                O Meta trata essas informações também de acordo com a sua própria{' '}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Política de Privacidade
                </a>
                .
              </p>
              <p className="text-text-secondary mt-3">
                <strong className="text-navy">Como recusar ou revogar:</strong> você pode recusar os cookies opcionais no aviso exibido na primeira visita e mudar de ideia a qualquer momento pelo link {preferencesLink}, disponível no rodapé de todas as páginas. Ao revogar, o Pixel é desativado e os cookies <code>_fbp</code> e <code>_fbc</code> são apagados. Você também pode bloquear cookies nas configurações do seu navegador e ajustar suas preferências de anúncios diretamente na sua conta do Facebook ou do Instagram.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">6. Operadores e Transferência Internacional</h2>
              <p className="text-text-secondary">
                Para operar o site, contamos com os seguintes prestadores de serviço:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-text-secondary">
                <li><strong className="text-navy">Vercel</strong> — hospedagem do site;</li>
                <li><strong className="text-navy">Resend</strong> — envio dos e-mails com as solicitações de diagnóstico;</li>
                <li><strong className="text-navy">Google (Gmail)</strong> — caixa de e-mail onde recebemos as solicitações;</li>
                <li><strong className="text-navy">Meta</strong> — medição e publicidade, somente se você aceitar os cookies opcionais.</li>
              </ul>
              <p className="text-text-secondary mt-3">
                Esses fornecedores podem tratar dados em servidores localizados fora do Brasil, como nos Estados Unidos. Essas transferências internacionais ocorrem nas hipóteses previstas no art. 33 da LGPD, incluindo as garantias contratuais oferecidas por esses fornecedores.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">7. Armazenamento, Segurança e Retenção</h2>
              <p className="text-text-secondary">
                Mantemos seus dados seguros usando conexões criptografadas (HTTPS) e infraestrutura de e-mail confiável (Resend). Os dados enviados pelo formulário são mantidos por até 2 (dois) anos após o último contato, ou até que você solicite a exclusão, o que ocorrer primeiro, salvo quando a lei exigir sua conservação por mais tempo. O registro da sua escolha sobre cookies é mantido por 12 meses; após esse prazo, perguntaremos novamente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">8. Seus Direitos</h2>
              <p className="text-text-secondary">
                Você pode solicitar a qualquer momento a confirmação da existência do tratamento de dados, o acesso a eles, a correção de dados incompletos ou inexatos, a exclusão total de seus dados pessoais e informações sobre com quem eles são compartilhados, bem como revogar o seu consentimento, entrando em contato através do e-mail: {emailLink}. Respondemos às solicitações em até 15 (quinze) dias. Você também tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-navy mb-3">9. Alterações desta Política</h2>
              <p className="text-text-secondary">
                Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última atualização está indicada no topo desta página. Se a finalidade dos cookies mudar, pediremos o seu consentimento novamente.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
