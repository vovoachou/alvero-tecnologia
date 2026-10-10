import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy text-white">
      {/* Fundo: brilho, grade técnica e feixes de luz percorrendo as linhas da grade (múltiplos de 64px) */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 55% at 85% 0%, rgba(37, 99, 235, 0.35), transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 45% 45% at 0% 100%, rgba(0, 194, 168, 0.12), transparent 70%)' }} />
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0 overflow-hidden">
          {[192, 448, 704].map((top, i) => (
            <span key={top} className="hero-beam-x" style={{ top, animationDelay: `${i * 2.3}s` }} />
          ))}
          {[640, 1024, 1280].map((left, i) => (
            <span key={left} className="hero-beam-y" style={{ left, animationDelay: `${i * 3.1 + 1}s` }} />
          ))}
          {[
            [640, 192], [1024, 128], [1280, 448], [768, 576], [384, 320], [1152, 704],
          ].map(([left, top]) => (
            <span key={`${left}-${top}`} className="hero-node" style={{ left, top, animationDelay: `${(left + top) % 7 * 0.5}s` }} />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bright-blue/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-bright-blue text-xs font-bold tracking-wider uppercase mb-6">
            Desenvolvimento de sistemas
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Desenvolvemos o sistema que a sua empresa <span className="text-gradient">precisa.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
            Software sob medida para pequenas e médias empresas, com escopo, prazo e valor fechados em contrato.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/diagnostico"
              className="px-8 py-4 bg-primary-blue hover:bg-bright-blue text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-brand-md hover:scale-[1.02]"
            >
              Agendar diagnóstico gratuito
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/5519910019596"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg transition-all text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block hero-fade-in">
          {/* Janela de sistema estilizada (sem dados reais) */}
          <div className="relative w-full max-w-[540px] mx-auto">
            <div className="absolute -inset-10 gradient-institutional opacity-20 blur-3xl rounded-full" />

            <div className="relative rounded-2xl border border-white/15 bg-navy-secondary/80 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Barra da janela */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="ml-4 h-5 flex-1 max-w-[220px] rounded-md bg-white/5 border border-white/10" />
              </div>

              <div className="flex">
                {/* Menu lateral */}
                <div className="w-14 border-r border-white/10 py-4 flex flex-col items-center gap-4">
                  <div className="w-7 h-7 rounded-lg gradient-institutional opacity-90" />
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-1.5 rounded-full bg-white/15" />
                  ))}
                </div>

                <div className="flex-1 p-5 space-y-4">
                  {/* Cartões de indicador (só formas) */}
                  <div className="grid grid-cols-3 gap-3">
                    {['bg-bright-blue', 'bg-digital-turquoise', 'bg-primary-blue'].map((color) => (
                      <div key={color} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <div className={`w-6 h-1.5 rounded-full ${color} mb-3`} />
                        <div className="w-full h-2 rounded-full bg-white/15 mb-1.5" />
                        <div className="w-2/3 h-2 rounded-full bg-white/10" />
                      </div>
                    ))}
                  </div>

                  {/* Gráfico */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <svg viewBox="0 0 300 100" className="w-full h-24" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#149BFF" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#149BFF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0%" stopColor="#2563EB" />
                          <stop offset="60%" stopColor="#149BFF" />
                          <stop offset="100%" stopColor="#00C2A8" />
                        </linearGradient>
                      </defs>
                      {[25, 50, 75].map((y) => (
                        <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
                      ))}
                      <path d="M0,80 C30,75 50,60 80,62 S130,40 160,45 S210,25 240,28 S280,12 300,10 L300,100 L0,100 Z" fill="url(#hero-area)" />
                      <path
                        d="M0,80 C30,75 50,60 80,62 S130,40 160,45 S210,25 240,28 S280,12 300,10"
                        fill="none"
                        stroke="url(#hero-line)"
                        strokeWidth="2.5"
                        pathLength={1}
                        className="hero-draw"
                      />
                    </svg>
                  </div>

                  {/* Linhas de tabela */}
                  <div className="space-y-2">
                    {[45, 37, 29].map((width) => (
                      <div key={width} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2.5">
                        <div className="w-5 h-5 rounded-md bg-white/10" />
                        <div className="h-1.5 rounded-full bg-white/15" style={{ width: `${width}%` }} />
                        <div className="ml-auto w-12 h-4 rounded-full bg-digital-turquoise/20 border border-digital-turquoise/30" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cartão flutuante: fluxo de automação */}
            <div
              className="hero-float absolute -left-10 bottom-10 rounded-2xl border border-white/15 bg-navy/90 backdrop-blur-xl px-4 py-3 shadow-2xl flex items-center gap-2"
            >
              {['bg-primary-blue', 'bg-bright-blue', 'bg-digital-turquoise'].map((color, i) => (
                <React.Fragment key={color}>
                  {i > 0 && <div className="w-6 h-px bg-gradient-to-r from-white/30 to-white/10" />}
                  <div className={`w-8 h-8 rounded-lg ${color} opacity-90 flex items-center justify-center`}>
                    <div className="w-3 h-3 rounded-sm border-2 border-white/80" />
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Cartão flutuante: marca */}
            <div
              className="hero-float hero-float-delay absolute -right-6 -top-8 rounded-2xl border border-white/15 bg-navy/90 backdrop-blur-xl px-5 py-4 shadow-2xl"
            >
              <Logo variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
