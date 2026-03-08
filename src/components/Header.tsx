'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary-dark/95 backdrop-blur-xl shadow-navy py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <AppLogo size={100} />
          <div className="flex flex-col leading-tight">
            <span className="text-blue-900 font-heading font-800 text-sm tracking-tight">Gulf African</span>
            <span className="text-yellow-900 text-xs font-semibold tracking-widest uppercase">Bank</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center pill-nav gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-black/70 hover:text-gold transition-colors duration-200 text-xs font-bold uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="text-black/70 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="#contact"
            className="gold-gradient text-primary-dark px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:shadow-gold transition-all duration-300 hover:scale-105"
          >
            Open Account
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-dark/98 backdrop-blur-xl border-t border-white/10 px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/70 hover:text-gold text-sm font-bold uppercase tracking-widest py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block gold-gradient text-primary-dark text-center px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest mt-4"
          >
            Open Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;