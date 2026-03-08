'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const services = [
  'Personal Banking',
  'Corporate Banking',
  'Islamic Banking',
  'Home Financing',
  'Business Loan',
  'Investment Account',
  'Other',
];

const contactInfo = [
  {
    icon: 'MapPinIcon',
    label: 'Head Office',
    value: 'Rehani House, Koinange Street, Nairobi, Kenya',
  },
  {
    icon: 'PhoneIcon',
    label: 'Customer Care',
    value: '+254 709 882 000',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'info@gulfafricanbank.com',
  },
  {
    icon: 'ClockIcon',
    label: 'Banking Hours',
    value: 'Mon–Fri: 8:30 AM – 4:30 PM EAT',
  },
];

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.message.trim()) newErrors.message = 'Please enter your message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Backend integration point: POST form data to your API endpoint
    // e.g., await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-bgwarm relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-1">
            <span className="section-num text-primary">04/</span>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
              <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-primary">
                Start Your<br />
                <span className="gold-text">Banking Journey.</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <motion.p
              className="text-primary/55 text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Speak with one of our banking specialists today. We&apos;ll help you choose the right product for your financial goals.
            </motion.p>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Info Card */}
            <div className="navy-gradient rounded-5xl p-10 space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 islamic-pattern opacity-20 pointer-events-none" />
              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="font-heading text-white font-bold text-xl mb-2">Gulf African Bank</h3>
                  <p className="text-white/45 text-sm">Your trusted Sharia-compliant banking partner</p>
                </div>
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      {/* <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-gold" /> */}
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-white/80 text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-4xl p-8 space-y-4 shadow-card">
              <p className="text-primary text-xs font-black uppercase tracking-widest">Quick Actions</p>
              {[
                { label: 'Find a Branch', icon: 'MapPinIcon' },
                { label: 'Book an Appointment', icon: 'CalendarIcon' },
                { label: 'Download Mobile App', icon: 'DevicePhoneMobileIcon' },
              ].map((action) => (
                <button
                  key={action.label}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-primary/10 hover:border-gold hover:bg-gold/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    {/* <Icon name={action.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary/50 group-hover:text-gold transition-colors" /> */}
                    <span className="text-sm font-semibold text-primary/70 group-hover:text-primary transition-colors">{action.label}</span>
                  </div>
                  {/* <Icon name="ArrowRightIcon" size={14} className="text-primary/30 group-hover:text-gold group-hover:translate-x-1 transition-all" /> */}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-white rounded-5xl p-10 md:p-14 shadow-card-hover">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                    {/* <Icon name="CheckCircleIcon" size={48} className="text-green-500" variant="solid" /> */}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl font-bold text-primary">Inquiry Received!</h3>
                    <p className="text-primary/55 max-w-sm leading-relaxed">
                      Thank you for reaching out. A Gulf African Bank specialist will contact you within 1 business day.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ fullName: '', email: '', phone: '', service: '', message: '' }); }}
                    className="gold-gradient text-primary-dark px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:shadow-gold transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-7">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2">Send Us an Inquiry</h3>
                    <p className="text-primary/45 text-sm">All fields marked are required for a faster response.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-primary/60" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Amira Hassan"
                        className={`form-input ${errors.fullName ? 'border-red-400 focus:border-red-400' : ''}`}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="text-red-500 text-xs">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-primary/60" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="amira@example.com"
                        className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-primary/60" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className={`form-input ${errors.phone ? 'border-red-400' : ''}`}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-500 text-xs">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-primary/60" htmlFor="service">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="form-input"
                        aria-label="Select banking service"
                      >
                        <option value="">Select a service...</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-primary/60" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your banking needs, how we can help you, or any questions you have..."
                      className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>

                  {/* Disclaimer */}
                  <p className="text-primary/35 text-xs leading-relaxed">
                    By submitting this form, you consent to Gulf African Bank contacting you regarding your inquiry. We never share your information with third parties.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="gold-gradient text-primary-dark w-full py-4 rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-gold transition-all duration-300 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-dark/30 border-t-primary-dark rounded-full animate-spin" />
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        {/* <Icon name="PaperAirplaneIcon" size={16} /> */}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;