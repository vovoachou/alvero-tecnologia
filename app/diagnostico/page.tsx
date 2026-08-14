'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function DiagnosticoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    solution: 'Sistema Sob Medida',
    bottleneck: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Falha no envio');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError('Houve um erro técnico. Por favor, tente novamente ou nos chame no WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex flex-col bg-background-soft">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-6 pt-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl w-full bg-white rounded-[40px] p-12 text-center shadow-brand-md border border-border-subtle"
          >
            <div className="w-20 h-20 bg-digital-turquoise/10 text-digital-turquoise rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h1 className="text-3xl font-bold text-navy mb-4">Solicitação enviada!</h1>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Obrigado pelo seu interesse. Analisaremos as informações da sua empresa e entraremos em contato via WhatsApp em até 24 horas para agendar o seu diagnóstico.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-primary-blue font-bold hover:underline"
            >
              <ArrowLeft size={20} />
              Voltar para o site
            </Link>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-background-soft">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary-blue font-bold tracking-widest text-sm uppercase mb-4 block">Diagnóstico Gratuito</span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              Vamos mapear o próximo passo da sua tecnologia.
            </h1>
            <p className="text-xl text-text-secondary mb-10 leading-relaxed">
              Mapeamos os gargalos operacionais da sua empresa e projetamos a arquitetura tecnológica ideal para sua escala atual e futura.
            </p>

            <div className="space-y-6">
               {[
                 'Análise técnica de processos',
                 'Dimensionamento de arquitetura',
                 'Orientação sobre interoperabilidade',
                 'Planejamento de escalabilidade'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <div className="w-6 h-6 rounded-full bg-digital-turquoise/10 flex items-center justify-center text-digital-turquoise">
                      <CheckCircle2 size={16} />
                   </div>
                   <span className="text-text-primary font-medium">{item}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-brand-md border border-border-subtle"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy ml-1">Seu nome</label>
                  <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="Nome completo" className="w-full px-5 py-4 rounded-xl border border-border-subtle focus:border-primary-blue outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy ml-1">E-mail corporativo</label>
                  <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="exemplo@empresa.com" className="w-full px-5 py-4 rounded-xl border border-border-subtle focus:border-primary-blue outline-none transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy ml-1">WhatsApp</label>
                  <input required value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} type="tel" placeholder="(00) 00000-0000" className="w-full px-5 py-4 rounded-xl border border-border-subtle focus:border-primary-blue outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy ml-1">Empresa</label>
                  <input required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} type="text" placeholder="Nome da sua empresa" className="w-full px-5 py-4 rounded-xl border border-border-subtle focus:border-primary-blue outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy ml-1">Solução de interesse</label>
                <select value={formData.solution} onChange={(e) => setFormData({ ...formData, solution: e.target.value })} className="w-full px-5 py-4 rounded-xl border border-border-subtle focus:border-primary-blue outline-none transition-colors bg-white">
                  <option>Sistema Sob Medida</option>
                  <option>Agentes de IA</option>
                  <option>Automação de Processos</option>
                  <option>Painel de Indicadores</option>
                  <option>Do Rascunho ao App</option>
                  <option>Operação Digital Completa</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-navy ml-1">Qual seu principal gargalo hoje?</label>
                <textarea required value={formData.bottleneck} onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })} rows={4} placeholder="Ex: Perco muito tempo atualizando planilhas manuais..." className="w-full px-5 py-4 rounded-xl border border-border-subtle focus:border-primary-blue outline-none transition-colors resize-none" />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-5 bg-navy hover:bg-primary-blue disabled:bg-navy/40 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-brand-md mt-4 cursor-pointer disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Solicitar diagnóstico gratuito'}
                <Send size={20} />
              </button>
              
              <p className="text-[10px] text-text-secondary text-center">
                Ao enviar, você concorda com nossa Política de Privacidade. Seus dados estão seguros.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
