'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Logo variant="light" className="mb-6" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A Alvero Tecnologia desenvolve sistemas sob medida, agentes de IA, automações e dashboards para pequenas e médias empresas que precisam crescer com controle.
            </p>
            <p className="text-white/80 font-semibold text-sm italic">
              &quot;Tecnologia que se adapta ao seu negócio.&quot;
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Soluções</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/solucoes/sistema" className="hover:text-bright-blue transition-colors">Sistema Sob Medida</Link></li>
              <li><Link href="/solucoes/ia" className="hover:text-bright-blue transition-colors">Agentes de IA</Link></li>
              <li><Link href="/solucoes/automacao" className="hover:text-bright-blue transition-colors">Automação de Processos</Link></li>
              <li><Link href="/solucoes/dashboards" className="hover:text-bright-blue transition-colors">Painel de Indicadores</Link></li>
              <li><Link href="/solucoes/app" className="hover:text-bright-blue transition-colors">Do Rascunho ao App</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/#sobre" className="hover:text-bright-blue transition-colors">Sobre nós</Link></li>
              <li><Link href="/#como-funciona" className="hover:text-bright-blue transition-colors">Como funciona</Link></li>
              <li><Link href="/#diferenciais" className="hover:text-bright-blue transition-colors">Diferenciais</Link></li>
              <li><Link href="/#cases" className="hover:text-bright-blue transition-colors">Cases de sucesso</Link></li>
              <li><Link href="/privacidade" className="hover:text-bright-blue transition-colors">Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex flex-col">
                <span className="text-white/40 mb-1">E-mail</span>
                <a href="mailto:contato@alverotecnologia.com.br" className="text-white hover:text-bright-blue transition-colors font-medium">contato@alverotecnologia.com.br</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 mb-1">WhatsApp</span>
                <a href="https://wa.me/5519910019596" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bright-blue transition-colors font-medium">+55 19 91001-9596</a>
              </li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white">
                  {/* LinkedIn Placeholder */}
                  <span className="text-xs font-bold">in</span>
                </a>
                <a href="https://www.instagram.com/alverotecnologia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white">
                   {/* Instagram Placeholder */}
                  <span className="text-xs font-bold">ig</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © {currentYear} Alvero Tecnologia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs">
            <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
