'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Qual o investimento necessário para um sistema?',
    a: 'O investimento varia de acordo com o tipo de serviço e o escopo técnico. Nós publicamos nossas faixas de investimento estimadas na seção "Faixas de Investimento" logo acima nesta página para total transparência. O valor exato do projeto é definido no diagnóstico técnico gratuito, sem surpresas.',
  },
  {
    q: 'Quanto tempo leva para a entrega do projeto?',
    a: 'Trabalhamos com metodologias ágeis em ciclos iterativos. O cronograma é definido após o mapeamento de processos, garantindo entregas parciais para que a tecnologia gere valor o quanto antes.',
  },
  {
    q: 'A solução é compatível com dispositivos móveis?',
    a: 'Sim, todas as nossas arquiteturas são responsivas e otimizadas para alto desempenho em dispositivos móveis, tablets e desktops.',
  },
  {
    q: 'É possível integrar com os sistemas que já utilizamos?',
    a: 'Sim, somos especialistas em interoperabilidade. Integramos com os principais ERPs, CRMs e bancos de dados do mercado via APIs seguras e robustas.',
  },
  {
    q: 'Quem detém a propriedade do código e dos dados?',
    a: 'A propriedade intelectual do desenvolvimento sob medida e o controle absoluto dos dados pertencem exclusivamente ao cliente, conforme estabelecido em contrato.',
  },
  {
    q: 'Existe suporte técnico após o deployment?',
    a: 'Sim, oferecemos garantia de estabilidade e planos de evolução contínua para garantir que a tecnologia acompanhe o crescimento da sua empresa.',
  },
];

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
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Perguntas Frequentes</h2>
          <p className="text-text-secondary">Tire suas dúvidas sobre nosso método de trabalho e entregas.</p>
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
