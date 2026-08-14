'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, MessageSquareCode } from 'lucide-react';
import { motion } from 'motion/react';

interface SolutionDetailProps {
  title: string;
  promise: string;
  description: string;
  features: string[];
  investmentRange: string;
  details: string;
}

export default function SolutionDetail({
  title,
  promise,
  description,
  features,
  investmentRange,
  details,
}: SolutionDetailProps) {
  return (
    <main className="min-h-screen flex flex-col bg-background-soft">
      <Navbar />

      {/* Hero header */}
      <section className="bg-navy-gradient text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] gradient-institutional opacity-10 blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-bright-blue hover:text-white transition-colors mb-8 text-sm font-semibold">
            <ArrowLeft size={16} />
            Voltar para a Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-digital-turquoise font-bold tracking-widest text-xs uppercase mb-3 block">
              {promise}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content body */}
      <section className="py-20 flex-grow">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
          
          {/* Main info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-brand-sm">
              <h2 className="text-2xl font-bold text-navy mb-6">Como ajudamos sua operação</h2>
              <p className="text-text-secondary leading-relaxed mb-8 text-sm md:text-base">
                {details}
              </p>
              
              <h3 className="text-lg font-bold text-navy mb-4">Entregáveis e Características:</h3>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-digital-turquoise/10 flex items-center justify-center text-digital-turquoise flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-text-primary text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & CTA Card */}
          <div className="md:col-span-1 space-y-6 md:sticky md:top-24">
            <div className="bg-navy text-white rounded-3xl p-8 border border-white/10 relative overflow-hidden shadow-brand-md">
              <div className="absolute top-0 right-0 w-24 h-24 gradient-institutional opacity-10 blur-2xl pointer-events-none" />
              
              <span className="text-xs text-white/50 uppercase font-bold tracking-wider mb-2 block">Investimento Estimado</span>
              <span className="text-2xl font-bold block mb-2 text-bright-blue">{investmentRange}</span>
              <span className="text-[10px] text-white/40 leading-relaxed block mb-8">
                O valor final depende dos requisitos técnicos mapeados.
              </span>
              
              <Link
                href="/diagnostico"
                className="w-full py-4 bg-white text-navy hover:bg-bright-blue hover:text-white rounded-xl font-bold transition-all text-center block text-sm"
              >
                Solicitar Viabilidade
              </Link>
            </div>
            
            <div className="bg-white rounded-3xl p-6 border border-border-subtle text-center">
              <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue mx-auto mb-4">
                <MessageSquareCode size={18} />
              </div>
              <h4 className="font-bold text-navy text-sm mb-1">Dúvida sobre o projeto?</h4>
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">Fale agora com nosso time técnico via WhatsApp.</p>
              <a
                href="https://wa.me/5519910019596"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-primary-blue hover:underline"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
