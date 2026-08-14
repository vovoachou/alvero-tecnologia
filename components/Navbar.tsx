'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Soluções', href: '/#solucoes' },
  { name: 'Como funciona', href: '/#como-funciona' },
  { name: 'Diferenciais', href: '/#diferenciais' },
  { name: 'Cases', href: '/#cases' },
  { name: 'Sobre', href: '/#sobre' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-brand-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo variant={isScrolled ? 'dark' : 'light'} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-blue ${
                isScrolled ? 'text-text-primary' : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/diagnostico"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isScrolled
                ? 'bg-primary-blue text-white hover:bg-bright-blue shadow-brand-sm hover:shadow-brand-md'
                : 'bg-white text-navy hover:bg-background-soft'
            }`}
          >
            Agendar diagnóstico
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-brand-dark py-8 px-6 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-text-primary hover:text-primary-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/diagnostico"
              className="bg-primary-blue text-white text-center py-4 rounded-xl font-bold hover:bg-bright-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar diagnóstico gratuito
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
