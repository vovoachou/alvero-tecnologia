import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Alvero Tecnologia | Sistemas Sob Medida, IA e Automação',
  description: 'Tecnologia que se adapta ao seu negócio. Sistemas, IA e automação com escopo, prazo e investimento claros.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased font-inter text-text-primary bg-background">
        {children}
      </body>
    </html>
  );
}
