'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ServiceCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  highlight?: boolean;
  span?: string;
}

const services: ServiceCard[] = [
{
  id: 'personal',
  number: '01',
  title: 'Personal Banking',
  subtitle: 'Built for everyday life',
  description: 'Current and savings accounts, home financing, personal takaful, and mobile banking — designed for the modern Kenyan family.',
  features: ['Zero-fee current accounts', 'Murabaha home financing', 'Mobile & internet banking', 'Personal Takaful cover'],
  image: "/images/personal-banking.jpg",
  imageAlt: 'Smiling Kenyan woman using mobile banking app on smartphone',
  span: 'lg:col-span-4 lg:row-span-2'
},
{
  id: 'corporate',
  number: '02',
  title: 'Corporate Banking',
  subtitle: 'Fuel your growth',
  description: 'Trade finance, working capital solutions, and treasury services tailored for SMEs and large enterprises across East Africa.',
  features: ['Trade finance & LC', 'Wakala investment deposits', 'Payroll & cash management', 'Project finance'],
  image: "/images/corporate-banking.jpg",
  imageAlt: 'Business professionals reviewing financial documents in modern Nairobi office',
  span: 'lg:col-span-4',
  highlight: true
},
{
  id: 'islamic',
  number: '03',
  title: 'Islamic Banking',
  subtitle: 'Finance with faith',
  description: 'All our products are Sharia-compliant, reviewed by our independent Shariah Supervisory Board — giving you peace of mind.',
  features: ['Mudarabah savings', 'Ijarah asset financing', 'Sukuk investments', 'Zakat calculation tools'],
  image: "/images/islamic-banking.jpg",
  imageAlt: 'Islamic geometric architecture representing Sharia-compliant banking principles',
  span: 'lg:col-span-4'
}];


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-bgwarm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-1">
            <span className="section-num text-primary">01/</span>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}>
              
              <span className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Services</span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-primary">
                Financial<br />
                <span className="gold-text">Solutions</span><br />
                For All.
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6">
              
              <p className="text-primary/60 text-lg leading-relaxed max-w-md">
                Whether you&apos;re saving for your child&apos;s education, growing your business, or investing in your future — we have a Sharia-compliant solution for you.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="font-heading font-bold text-3xl text-primary">17+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Years serving</p>
                </div>
                <div className="w-px h-12 bg-primary/10" />
                <div>
                  <p className="font-heading font-bold text-3xl text-primary">35+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Branch network</p>
                </div>
                <div className="w-px h-12 bg-primary/10" />
                <div>
                  <p className="font-heading font-bold text-3xl text-primary">100%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Shariah compliant</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bento Services Grid */}
        <motion.div
          className="grid lg:grid-cols-12 gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}>
          
          {/* Personal Banking — large card, spans 2 rows */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-5 service-card bg-white rounded-5xl overflow-hidden shadow-card group cursor-pointer">
            
            <div className="h-72 overflow-hidden">
              <AppImage
                src={services[0].image}
                alt={services[0].imageAlt}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
            </div>
            <div className="p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gold text-[11px] font-black uppercase tracking-widest">{services[0].number}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">{services[0].subtitle}</span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary tracking-tight">{services[0].title}</h3>
              <p className="text-primary/55 leading-relaxed">{services[0].description}</p>
              <ul className="space-y-3">
                {services[0].features.map((f) =>
                <li key={f} className="flex items-center gap-3 text-sm text-primary/70">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    {f}
                  </li>
                )}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                
                Learn More <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right column: Corporate + Islamic stacked */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Corporate Banking */}
            <motion.div
              variants={cardVariants}
              className="service-card bg-primary-dark rounded-5xl overflow-hidden shadow-navy group cursor-pointer flex-1">
              
              <div className="grid md:grid-cols-2 h-full min-h-[280px]">
                <div className="p-10 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gold text-[11px] font-black uppercase tracking-widest">{services[1].number}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{services[1].subtitle}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white tracking-tight">{services[1].title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{services[1].description}</p>
                  </div>
                  <div className="space-y-2">
                    {services[1].features.slice(0, 3).map((f) =>
                    <div key={f} className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        {f}
                      </div>
                    )}
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all w-fit">
                    
                    Explore <Icon name="ArrowRightIcon" size={12} />
                  </Link>
                </div>
                <div className="overflow-hidden md:rounded-r-5xl">
                  <AppImage
                    src={services[1].image}
                    alt={services[1].imageAlt}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                </div>
              </div>
            </motion.div>

            {/* Islamic Banking */}
            <motion.div
              variants={cardVariants}
              className="service-card rounded-5xl overflow-hidden group cursor-pointer flex-1 relative"
              style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2A5298 50%, #1B3A6B 100%)' }}>
              
              {/* Islamic pattern overlay */}
              <div className="absolute inset-0 islamic-pattern opacity-40" />
              <div className="relative z-10 grid md:grid-cols-2 h-full min-h-[240px]">
                <div className="overflow-hidden hidden md:block">
                  <AppImage
                    src="https://images.unsplash.com/photo-1605581813270-8335e8f40dcd"
                    alt="Ornate Islamic geometric architecture with golden geometric patterns"
                    width={400}
                    height={280}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                  
                </div>
                <div className="p-10 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gold text-[11px] font-black uppercase tracking-widest">{services[2].number}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{services[2].subtitle}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white tracking-tight">{services[2].title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{services[2].description}</p>
                  </div>
                  <div className="space-y-2">
                    {services[2].features.slice(0, 3).map((f) =>
                    <div key={f} className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        {f}
                      </div>
                    )}
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all w-fit">
                    
                    Learn More <Icon name="ArrowRightIcon" size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default ServicesSection;