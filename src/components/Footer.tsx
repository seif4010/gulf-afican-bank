import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary/10 bg-bgwarm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Pattern 7: Arc Browser Split */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-4">
            <AppLogo size={48} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-primary text-base tracking-tight">Gulf African Bank</span>
              </div>
              <p className="text-muted text-xs mt-0.5 text-primary/50 font-medium">Banking with Integrity</p>
            </div>
          </div>

          {/* Right: Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Calculator', href: '#calculator' },
              { label: 'Contact', href: '#contact' },
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-primary/50 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Twitter/X */}
            <a
              href="#"
              aria-label="Gulf African Bank on X"
              className="w-9 h-9 rounded-full border border-primary/15 flex items-center justify-center text-primary/40 hover:text-gold hover:border-gold transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="Gulf African Bank on LinkedIn"
              className="w-9 h-9 rounded-full border border-primary/15 flex items-center justify-center text-primary/40 hover:text-gold hover:border-gold transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Gulf African Bank on Facebook"
              className="w-9 h-9 rounded-full border border-primary/15 flex items-center justify-center text-primary/40 hover:text-gold hover:border-gold transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-primary/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] font-medium text-primary/35">
            © {new Date().getFullYear()} Gulf African Bank. All rights reserved.
          </p>
          <p className="text-[13px] font-medium text-primary/35">
            Licensed by the Central Bank of Kenya · Member of Kenya Deposit Insurance Corporation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;