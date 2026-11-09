import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { PRINCIPLES } from '../../constants/principles';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { LiquidGlassCard } from '../LiquidGlass/LiquidGlassCard';

export const WhyUsSection: React.FC = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[#0c0c0c] border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-3 inline-block">
            <LiquidGlassPill variant="orange" icon={<Sparkles className="h-3 w-3" />}>
              OUR PRINCIPLES
            </LiquidGlassPill>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-none">
            DETAILS MAKE <br />
            <span className="text-flare">THE DIFFERENCE.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/60">
            Why visionary creators and brands partner with FLARE STUDIOS over mass-market agencies.
          </p>
        </div>

        {/* Editorial Typographic Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <LiquidGlassCard
              key={principle.number}
              className="group p-8 transition-all duration-300 hover:border-[#FF5722]/40"
              glowColor="rgba(255, 87, 34, 0.2)"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-black text-[#FF5722]">
                  {principle.number}
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF5722]" />
              </div>

              <div className="mt-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#FF9B45]">
                  {principle.subtitle}
                </span>
                <h3 className="mt-1 font-display text-2xl font-black tracking-tight text-white">
                  {principle.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {principle.description}
              </p>

              <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/40 leading-relaxed font-sans">
                {principle.detail}
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
