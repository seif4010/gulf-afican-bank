'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const HeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY * 0.4;
        parallaxRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden noise-overlay">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0" ref={parallaxRef} style={{ height: '120%', top: '-10%' }}>
        <AppImage
          src="/images/Mordern-City.jpg"
          alt="Modern city skyline with tall glass buildings representing financial growth and stability"
          fill
          priority
          className="object-cover object-center"
          unoptimized />
        
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 via-transparent to-transparent" />
      </div>

      {/* Atmospheric depth orbs */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="orb-2 absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-light/10 blur-[100px]" />
        <div className="orb-3 absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-gold/8 blur-[80px]" />
      </div>

      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 z-1 islamic-pattern opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              
              <span className="inline-flex items-center gap-2 glass-card text-gold text-[11px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                Sharia-Compliant Banking Since 2008
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="overflow-hidden">
              <motion.h1
                className="hero-title text-white uppercase"
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                
                <span className="block">Banking</span>
                <span className="block gold-shimmer">With</span>
                <span className="block">Purpose.</span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              className="hero-subtitle text-white/65 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              
              Gulf African Bank delivers ethical, Sharia-compliant financial solutions for individuals, families, and businesses across East Africa — built on trust, transparency, and community.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              
              <Link
                href="#contact"
                className="gold-gradient text-primary-dark px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:shadow-gold hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                
                Open an Account
                {/* <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" /> */}
              </Link>
              <Link
                href="#services"
                className="glass-card text-white px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all duration-300 flex items-center gap-3 group">
                
                Explore Services
                {/* <Icon name="ChevronDownIcon" size={16} className="group-hover:translate-y-1 transition-transform" /> */}
              </Link>
            </motion.div>
          </div>

          {/* Right: Floating Stats Cards */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 pb-8">
            <motion.div
              className="glass-card-dark rounded-3xl p-6 space-y-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ y: -4 }}>
              
              <p className="text-gold text-xs font-black uppercase tracking-widest">Total Assets</p>
              <p className="text-white font-heading font-bold text-3xl">KES 48.2B</p>
              <p className="text-white/40 text-xs">As of December 2025</p>
            </motion.div>

            <motion.div
              className="glass-card-dark rounded-3xl p-6 space-y-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              whileHover={{ y: -4 }}>
              
              <p className="text-gold text-xs font-black uppercase tracking-widest">Customers Served</p>
              <p className="text-white font-heading font-bold text-3xl">320,000+</p>
              <p className="text-white/40 text-xs">Across 6 countries</p>
            </motion.div>

            <motion.div
              className="glass-card-dark rounded-3xl p-6 space-y-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              whileHover={{ y: -4 }}>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Shariah Certified</p>
              </div>
              <p className="text-white font-heading font-bold text-lg leading-tight">100% Compliant Products</p>
              <p className="text-white/40 text-xs">Reviewed by AAOIFI Board</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}>
        
        <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Scroll</span>
        <div className="scroll-indicator">
          <Icon name="ChevronDownIcon" size={20} className="text-gold" />
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;