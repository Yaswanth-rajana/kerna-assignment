import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="section-padding bg-section-bg dark:bg-dark-bg border-t border-gray-200 dark:border-white/5 pb-12 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 animate-fade-up">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6 tracking-tighter">KERNA</h3>
            <p className="max-w-sm">
              Where Strategy Meets Spark. <br />
              <span className="text-text-primary dark:text-white font-semibold">Helping small businesses punch above their weight.</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-teal-600">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-teal-600">
              Official Hub
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              <li>+91 75696 12318</li>
              <li>+91 99496 86160</li>
              <li className="italic">Visakhapatnam, Andhra Pradesh</li>
            </ul>
            <div className="flex gap-6 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors uppercase tracking-widest"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
          <span>© {new Date().getFullYear()} Kerna. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>PR & Marketing Agency</span>
            <span className="w-1 h-1 rounded-full bg-teal-500/40" />
            <span>Visakhapatnam</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
