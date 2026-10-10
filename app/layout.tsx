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
    default: 'Alvero Tecnologia | Desenvolvimento de sistemas sob medida',
    template: '%s | Alvero Tecnologia',
  },
  description: 'Desenvolvemos o sistema que a sua empresa precisa. Software sob medida com escopo, prazo e valor fechados em contrato.',
  alternates: { canonical: '/' },
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
