'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Who I Help', href: '#who-i-help' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Our Office', href: '#office' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-sage-50/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sage-600 text-white transition-transform group-hover:scale-110">
            <Heart className="w-4 h-4" strokeWidth={2} fill="currentColor" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn('font-serif text-lg font-semibold transition-colors', scrolled ? 'text-sage-800' : 'text-sage-800')}>
              Dr. Maya Reynolds
            </span>
            <span className={cn('text-[11px] tracking-widest uppercase transition-colors', scrolled ? 'text-sage-500' : 'text-sage-500')}>
              PsyD · Santa Monica
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-sage-500 after:transition-all hover:after:w-full',
                scrolled ? 'text-sage-700 hover:text-sage-900' : 'text-sage-700 hover:text-sage-900'
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-sage-600 text-white px-5 py-2.5 rounded-full hover:bg-sage-700 transition-colors shadow-sm"
          >
            Book an Appointment
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-sage-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-sage-50/98 backdrop-blur-md border-t border-sage-200/50 mt-3 animate-fade-in">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sage-700 hover:text-sage-900 py-3 px-4 rounded-lg hover:bg-sage-100 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-center text-sage-50 bg-sage-600 py-3 rounded-full mt-2 font-medium hover:bg-sage-700 transition-colors"
            >
              Book an Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
