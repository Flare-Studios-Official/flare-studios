import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../../constants/process';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { LiquidGlassCard } from '../LiquidGlass/LiquidGlassCard';
import { sound } from '../../utils/sound';

export const ProcessSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="process" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 bg-[#080808]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-3 inline-block">
            <LiquidGlassPill variant="orange" icon={<Sparkles className="h-3 w-3" />}>
              METHODOLOGY
            </LiquidGlassPill>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white">
            FROM IDEA <span className="text-flare">TO IMPACT.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/60">
            A battle-tested 4-stage pipeline that guarantees predictable creative brilliance without chaos.
          </p>
        </div>

        {/* Interactive Progress Tabs */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={step.number}
                onClick={() => {
                  sound.playClick();
                  setActiveStage(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`flex flex-col items-start rounded-2xl p-4 sm:p-5 text-left transition-all duration-300 border ${
                  isActive
                    ? 'border-[#FF5722] bg-[#FF5722]/15 shadow-[0_0_25px_rgba(255,87,34,0.3)]'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                <span className="font-mono text-xs font-black text-[#FF5722]">
                  STAGE {step.number}
                </span>
                <span className="mt-1 font-display text-base sm:text-lg font-bold text-white">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Showcase Card */}
        <LiquidGlassCard className="p-8 sm:p-12 border-[#FF5722]/30">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#FF5722] px-3 py-1 font-mono text-xs font-bold text-white">
                  PHASE {PROCESS_STEPS[activeStage].number}
                </span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {PROCESS_STEPS[activeStage].title}
                </span>
              </div>

              <p className="font-mono text-sm text-[#FF9B45] tracking-wide">
                {PROCESS_STEPS[activeStage].tagline}
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-white/70">
                {PROCESS_STEPS[activeStage].description}
              </p>

              <div className="pt-4 space-y-2.5">
                <span className="block font-mono text-xs uppercase tracking-wider text-white/40">
                  Key Milestones & Protocols:
                </span>
                {PROCESS_STEPS[activeStage].points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF5722]" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-8 text-center">
              <div className="h-32 w-32 rounded-full border border-[#FF5722]/40 bg-radial from-[#FF5722]/20 via-[#FF9B45]/10 to-transparent flex items-center justify-center shadow-[0_0_40px_rgba(255,87,34,0.3)] animate-pulse">
                <span className="font-display text-4xl font-black text-white">
                  0{activeStage + 1}
                </span>
              </div>
              <span className="mt-4 font-mono text-xs uppercase tracking-widest text-white/50">
                Phase Velocity: Locked
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveStage((prev) => (prev + 1) % 4);
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs text-white transition-colors hover:border-[#FF5722] hover:text-[#FF5722]"
              >
                NEXT STAGE <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
};
