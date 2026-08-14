'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Clock, Target, Headset } from 'lucide-react';

import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-gradient text-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-primary-blue/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[5%] w-[40%] h-[40%] bg-digital-turquoise/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-bright-blue text-xs font-bold tracking-wider uppercase mb-6">
            Sistemas sob medida, IA e automação
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Tecnologia sob medida para sua empresa <span className="text-gradient">funcionar melhor.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
            Projetamos sistemas, agentes de IA, automações e dashboards integrados à sua operação — com escopo técnico e viabilidade de execução definidos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/diagnostico"
              className="px-8 py-4 bg-primary-blue hover:bg-bright-blue text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-brand-md hover:scale-[1.02]"
            >
              Agendar diagnóstico técnico
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#solucoes"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg transition-all text-center"
            >
              Consultar soluções
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {[
              { icon: Target, label: 'Escopo fechado' },
              { icon: Clock, label: 'Entrega ágil' },
              { icon: Shield, label: 'Viabilidade técnica' },
              { icon: Headset, label: 'Suporte especializado' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <item.icon size={20} className="text-digital-turquoise" />
                <span className="text-sm font-medium text-white/60">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Abstract Tech Visual */}
          <div className="relative aspect-square w-full max-w-[500px] mx-auto">
             <div className="absolute inset-0 gradient-institutional opacity-20 blur-3xl rounded-full" />
             <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Simulated Dashboard UI bits */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-48 h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl"
                >
                  <div className="w-1/2 h-2 bg-bright-blue/50 rounded-full mb-4" />
                  <div className="flex gap-2">
                    <div className="flex-1 h-12 bg-white/5 rounded-lg" />
                    <div className="flex-1 h-12 bg-white/5 rounded-lg" />
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 left-0 w-56 h-40 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-digital-turquoise/50" />
                    <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-1 bg-white/10 rounded-full" />
                    <div className="w-4/5 h-1 bg-white/10 rounded-full" />
                    <div className="w-2/3 h-1 bg-white/10 rounded-full" />
                  </div>
                </motion.div>

                <div className="w-64 h-64 border-2 border-white/10 rounded-[40px] rotate-12 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full gradient-institutional opacity-10" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Logo variant="light" className="scale-150" />
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
