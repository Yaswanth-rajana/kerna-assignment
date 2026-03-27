import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kerna — Where Strategy Meets Spark',
  description:
    'PR and marketing agency helping small businesses grow with smart strategy, bold design, and practical execution.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-warm-50 dark:bg-charcoal-900 text-charcoal-900 dark:text-warm-50 antialiased`}
      >
        {/* Runs before React hydrates — sets dark class without flash */}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}