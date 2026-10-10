'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { COMPANY } from '@/lib/company';
import { openConsentPreferences } from '@/lib/consent';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          <Logo variant="light" />

          <div>
            <h2 className="text-lg font-bold mb-6">Contato</h2>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex flex-col">
                <span className="text-white/60 mb-1">E-mail</span>
                <a href="mailto:contato@alverotecnologia.com.br" className="text-white hover:text-bright-blue transition-colors font-medium">contato@alverotecnologia.com.br</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white/60 mb-1">WhatsApp</span>
                <a href="https://wa.me/5519910019596" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bright-blue transition-colors font-medium">+55 19 91001-9596</a>
              </li>
              <li className="pt-4 flex gap-4">
                <a href="https://www.instagram.com/alverotecnologia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer text-white">
                   {/* Instagram Placeholder */}
                  <span className="text-xs font-bold">ig</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60 text-xs text-center md:text-left space-y-1">
            <p>© {currentYear} {COMPANY.brandName}. Todos os direitos reservados.</p>
            {(COMPANY.legalName || COMPANY.cnpj) && (
              <p>
                {[COMPANY.legalName, COMPANY.cnpj && `CNPJ ${COMPANY.cnpj}`].filter(Boolean).join(' · ')}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/60 text-xs">
            <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <button type="button" onClick={openConsentPreferences} className="hover:text-white transition-colors cursor-pointer">
              Preferências de cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
