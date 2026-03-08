'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

type CalcMode = 'savings' | 'finance';

interface CalcResult {
  totalValue: number;
  totalProfit: number;
  monthlyReturn: number;
}

const formatKES = (value: number): string => {
  if (value >= 1_000_000) return `KES ${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `KES ${(value / 1_000).toFixed(1)}K`;
  return `KES ${value.toFixed(0)}`;
};

const CalculatorSection: React.FC = () => {
  const [mode, setMode] = useState<CalcMode>('savings');

  // Savings (Mudarabah) state
  const [savingsAmount, setSavingsAmount] = useState(100000);
  const [savingsMonths, setSavingsMonths] = useState(12);
  const [savingsRate] = useState(8.5); // Annual profit rate for Mudarabah

  // Finance (Murabaha) state
  const [financeAmount, setFinanceAmount] = useState(500000);
  const [financeMonths, setFinanceMonths] = useState(24);
  const [financeRate] = useState(14); // Annual cost rate for Murabaha

  const calcSavings = useCallback((): CalcResult => {
    const monthlyRate = savingsRate / 100 / 12;
    const totalValue = savingsAmount * Math.pow(1 + monthlyRate, savingsMonths);
    const totalProfit = totalValue - savingsAmount;
    const monthlyReturn = totalProfit / savingsMonths;
    return { totalValue, totalProfit, monthlyReturn };
  }, [savingsAmount, savingsMonths, savingsRate]);

  const calcFinance = useCallback((): CalcResult => {
    const monthlyRate = financeRate / 100 / 12;
    const monthlyPayment = financeAmount * (monthlyRate * Math.pow(1 + monthlyRate, financeMonths)) / (Math.pow(1 + monthlyRate, financeMonths) - 1);
    const totalValue = monthlyPayment * financeMonths;
    const totalProfit = totalValue - financeAmount;
    return { totalValue, totalProfit, monthlyReturn: monthlyPayment };
  }, [financeAmount, financeMonths, financeRate]);

  const result = mode === 'savings' ? calcSavings() : calcFinance();

  return (
    <section id="calculator" className="py-32 bg-bgmuted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-1">
            <span className="section-num text-primary">03/</span>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4 block">Financial Tools</span>
              <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-primary">
                Calculate<br />
                <span className="gold-text">Your Returns.</span>
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
              Use our Sharia-compliant estimator to see how your savings grow with Mudarabah, or calculate your Murabaha financing installments.
            </motion.p>
          </div>
        </div>

        {/* Calculator Card */}
        <motion.div
          className="bg-white rounded-5xl shadow-card-hover overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Inputs */}
            <div className="p-10 md:p-14 space-y-10">
              {/* Mode Toggle */}
              <div className="flex bg-bgwarm rounded-2xl p-1.5 gap-1.5">
                {(['savings', 'finance'] as CalcMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                      mode === m
                        ? 'bg-primary text-white shadow-md'
                        : 'text-primary/50 hover:text-primary'
                    }`}
                  >
                    {m === 'savings' ? '📈 Mudarabah Savings' : '🏠 Murabaha Finance'}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {mode === 'savings' ? (
                    <>
                      {/* Savings Amount */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-bold text-primary uppercase tracking-wider">
                            Initial Deposit
                          </label>
                          <span className="text-gold font-black text-lg font-heading">
                            {formatKES(savingsAmount)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={10000}
                          max={5000000}
                          step={10000}
                          value={savingsAmount}
                          onChange={(e) => setSavingsAmount(Number(e.target.value))}
                          className="w-full accent-gold"
                          aria-label="Initial deposit amount"
                        />
                        <div className="flex justify-between text-xs text-primary/30 font-medium">
                          <span>KES 10K</span><span>KES 5M</span>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-bold text-primary uppercase tracking-wider">
                            Investment Period
                          </label>
                          <span className="text-gold font-black text-lg font-heading">
                            {savingsMonths} months
                          </span>
                        </div>
                        <input
                          type="range"
                          min={3}
                          max={60}
                          step={3}
                          value={savingsMonths}
                          onChange={(e) => setSavingsMonths(Number(e.target.value))}
                          className="w-full accent-gold"
                          aria-label="Investment period in months"
                        />
                        <div className="flex justify-between text-xs text-primary/30 font-medium">
                          <span>3 months</span><span>5 years</span>
                        </div>
                      </div>

                      {/* Rate Info */}
                      <div className="flex items-center gap-3 bg-gold/8 rounded-2xl px-5 py-4">
                        <Icon name="InformationCircleIcon" size={18} className="text-gold flex-shrink-0" />
                        <p className="text-primary/60 text-sm">
                          Current Mudarabah profit rate: <span className="font-bold text-primary">{savingsRate}% p.a.</span> (indicative, subject to actual performance)
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Finance Amount */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-bold text-primary uppercase tracking-wider">
                            Finance Amount
                          </label>
                          <span className="text-gold font-black text-lg font-heading">
                            {formatKES(financeAmount)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={50000}
                          max={10000000}
                          step={50000}
                          value={financeAmount}
                          onChange={(e) => setFinanceAmount(Number(e.target.value))}
                          className="w-full accent-gold"
                          aria-label="Finance amount"
                        />
                        <div className="flex justify-between text-xs text-primary/30 font-medium">
                          <span>KES 50K</span><span>KES 10M</span>
                        </div>
                      </div>

                      {/* Tenure */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-sm font-bold text-primary uppercase tracking-wider">
                            Repayment Period
                          </label>
                          <span className="text-gold font-black text-lg font-heading">
                            {financeMonths} months
                          </span>
                        </div>
                        <input
                          type="range"
                          min={6}
                          max={84}
                          step={6}
                          value={financeMonths}
                          onChange={(e) => setFinanceMonths(Number(e.target.value))}
                          className="w-full accent-gold"
                          aria-label="Repayment period in months"
                        />
                        <div className="flex justify-between text-xs text-primary/30 font-medium">
                          <span>6 months</span><span>7 years</span>
                        </div>
                      </div>

                      {/* Rate Info */}
                      <div className="flex items-center gap-3 bg-gold/8 rounded-2xl px-5 py-4">
                        <Icon name="InformationCircleIcon" size={18} className="text-gold flex-shrink-0" />
                        <p className="text-primary/60 text-sm">
                          Murabaha profit rate: <span className="font-bold text-primary">{financeRate}% p.a.</span> (indicative only, final rate subject to approval)
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Results */}
            <div className="navy-gradient p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 islamic-pattern opacity-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-10">
                <div>
                  <p className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-2">
                    {mode === 'savings' ? 'Estimated Returns' : 'Payment Summary'}
                  </p>
                  <h3 className="font-heading text-white font-bold text-2xl">
                    {mode === 'savings' ? 'Your Savings Projection' : 'Your Finance Plan'}
                  </h3>
                </div>

                {/* Main Result */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${mode}-${mode === 'savings' ? savingsAmount + savingsMonths : financeAmount + financeMonths}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="bg-white/8 rounded-3xl p-8 space-y-1 border border-white/10">
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                        {mode === 'savings' ? 'Total Maturity Value' : 'Total Repayment'}
                      </p>
                      <p className="font-heading font-black text-4xl md:text-5xl text-white">
                        {formatKES(result.totalValue)}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/6 rounded-2xl p-6 border border-white/8">
                        <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">
                          {mode === 'savings' ? 'Total Profit' : 'Total Cost'}
                        </p>
                        <p className="font-heading font-bold text-2xl text-gold">
                          {formatKES(result.totalProfit)}
                        </p>
                      </div>
                      <div className="bg-white/6 rounded-2xl p-6 border border-white/8">
                        <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">
                          {mode === 'savings' ? 'Monthly Profit' : 'Monthly Installment'}
                        </p>
                        <p className="font-heading font-bold text-2xl text-gold">
                          {formatKES(result.monthlyReturn)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="space-y-4">
                  <p className="text-white/30 text-xs leading-relaxed">
                    * This is an indicative estimate only. Actual returns/costs may vary. Please visit a branch or contact us for a personalized quote.
                  </p>
                  <a
                    href="#contact"
                    className="gold-gradient text-primary-dark w-full py-4 rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-gold transition-all duration-300 hover:scale-[1.02]"
                  >
                    Get a Detailed Quote
                    <Icon name="ArrowRightIcon" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;