'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  decimals?: number;
}

const stats: Stat[] = [
  {
    prefix: 'KES',
    value: 48.2,
    suffix: 'B',
    label: 'Total Assets',
    sublabel: 'Under management as of Dec 2025',
    decimals: 1,
  },
  {
    value: 320,
    suffix: 'K+',
    label: 'Customers Served',
    sublabel: 'Active account holders across East Africa',
  },
  {
    value: 35,
    suffix: '+',
    label: 'Branch Network',
    sublabel: 'Across Kenya, Tanzania & Uganda',
  },
  {
    value: 99.8,
    suffix: '%',
    label: 'Customer Satisfaction',
    sublabel: '2025 annual customer survey',
    decimals: 1,
  },
];

const useCountUp = (target: number, duration: number = 2000, decimals: number = 0, active: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, decimals, active]);

  return count;
};

const StatItem: React.FC<{ stat: Stat; index: number; active: boolean }> = ({ stat, index, active }) => {
  const count = useCountUp(stat.value, 2200, stat.decimals ?? 0, active);
  const displayValue = stat.decimals ? count.toFixed(stat.decimals) : Math.floor(count);

  return (
    <motion.div
      className="stat-card relative p-10 space-y-4 group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative number */}
      <div className="absolute top-6 right-8 font-heading font-black text-8xl text-white/3 leading-none select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10">
        <p className="font-heading font-black text-5xl md:text-6xl text-white leading-none">
          {stat.prefix && <span className="text-gold text-2xl mr-1">{stat.prefix}</span>}
          <span className="tabular-nums">{displayValue}</span>
          <span className="text-gold">{stat.suffix}</span>
        </p>
        <h3 className="font-heading font-bold text-xl text-white mt-4">{stat.label}</h3>
        <p className="text-white/35 text-sm leading-relaxed mt-1">{stat.sublabel}</p>
      </div>

      {/* Bottom line animation */}
      <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden navy-gradient"
    >
      {/* Islamic pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20 pointer-events-none" />

      {/* Atmospheric orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-light/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-1">
            <span className="section-num text-white">02/</span>
          </div>
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Impact</span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
                Numbers That<br />
                <span className="gold-shimmer">Tell the Truth.</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <motion.p
              className="text-white/45 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              17 years of responsible banking, community investment, and Sharia-compliant growth — measured in lives changed, not just balance sheets.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-4xl overflow-hidden">
          {stats.map((stat, i) => (
            <div key={stat.label} className="bg-primary-dark/40 backdrop-blur-sm">
              <StatItem stat={stat} index={i} active={isActive} />
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {[
            'Central Bank of Kenya Licensed',
            'AAOIFI Shariah Standards',
            'Kenya Deposit Insurance Corporation',
            'ISO 27001 Certified',
          ].map((cert) => (
            <div key={cert} className="flex items-center gap-2 glass-card-dark px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{cert}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;