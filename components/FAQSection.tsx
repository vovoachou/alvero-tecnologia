'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Quanto custa?',
    a: 'Depende do escopo. No diagnóstico gratuito entendemos a necessidade e enviamos uma proposta fechada.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'Depende do escopo. O prazo exato vai na proposta e fica definido em contrato.',
  },
  {
    q: 'Funciona com o que já usamos?',
    a: 'Na maioria dos casos, sim. Integramos o sistema às ferramentas que a sua empresa já utiliza.',
  },
  {
    q: 'Tem suporte depois?',
    a: 'Sim. Acompanhamos o sistema depois da entrega, em horário comercial, de segunda a sábado.',
  },
]

function FAQItem({ q, a, i }: { q: string, a: string, i: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="border-b border-border-subtle"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-navy group-hover:text-primary-blue transition-colors">{q}</span>
        <ChevronDown 
          size={20} 
          className={`text-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-blue' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Perguntas frequentes</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
