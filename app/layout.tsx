import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import MetaPixel from '@/components/MetaPixel';
import { COMPANY } from '@/lib/company';

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

const domainVerification = process.env.META_DOMAIN_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: 'Alvero Tecnologia | Sistemas Sob Medida, IA e Automação',
    template: '%s | Alvero Tecnologia',
  },
  description: 'Tecnologia que se adapta ao seu negócio. Sistemas, IA e automação com escopo, prazo e investimento claros.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: COMPANY.brandName,
    url: '/',
  },
  ...(domainVerification && { other: { 'facebook-domain-verification': domainVerification } }),
  icons: {
    icon: [
      { url: '/favicon.ico?v=2' },
      { url: '/icon.png?v=2', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico?v=2'],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased font-inter text-text-primary bg-background">
        {children}
        <CookieConsent />
        <MetaPixel />
      </body>
    </html>
  );
}
