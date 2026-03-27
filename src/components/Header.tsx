'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import Container from './Container';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  // Skeleton header while mounting — prevents layout shift
  if (!mounted) {
    return (
      <header className="glass-nav">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-teal-500">
              KERNA
            </Link>
            <div className="w-10 h-10" />
          </div>
        </Container>
      </header>
    );
  }

  return (
    <header className="glass-nav">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-teal-500 tracking-tight">
            KERNA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-teal-500 ${
                  isActive(link.href) ? 'text-teal-500' : 'text-charcoal-700 dark:text-warm-300'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-warm-200 dark:hover:bg-charcoal-800 transition-colors active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-warm-200 dark:hover:bg-charcoal-800 transition-colors active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block transition-all duration-200 ${mobileMenuOpen ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}
              >
                <Menu size={24} />
              </span>
              <span
                className={`block transition-all duration-200 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`}
              >
                <X size={24} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu — animated slide in */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-warm-200 dark:border-charcoal-800 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-2 py-3 rounded-lg text-sm font-medium transition-colors hover:text-teal-500 hover:bg-warm-100 dark:hover:bg-charcoal-800 ${
                  isActive(link.href) ? 'text-teal-500 bg-warm-100 dark:bg-charcoal-800' : 'text-charcoal-700 dark:text-warm-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
