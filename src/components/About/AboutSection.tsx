import React from 'react';
import { Sparkles, Eye, Compass, Flame, ShieldCheck, Zap } from 'lucide-react';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { LiquidGlassCard } from '../LiquidGlass/LiquidGlassCard';

export const AboutSection: React.FC = () => {
  const ethosPoints = [
    {
      icon: <Flame className="h-5 w-5 text-[#FF5722]" />,
      title: 'Creativity First',
      description: 'We believe genuine creative courage outshines safe mediocrity every single time.',
    },
    {
      icon: <Eye className="h-5 w-5 text-[#FF9B45]" />,
      title: 'Attention To Detail',
      description: 'The difference between good and iconic lies in the final two percent of microscopic craft.',
    },
    {
      icon: <Sparkles className="h-5 w-5 text-[#FF5722]" />,
      title: 'Visual Storytelling',
      description: 'Every frame, transition, and typographic scale must carry intentional emotional momentum.',
    },
    {
      icon: <Compass className="h-5 w-5 text-[#FF9B45]" />,
      title: 'Thoughtful Design',
      description: 'Form and function working in tandem: aesthetics engineered to achieve real-world purpose.',
    },
    {
      icon: <Zap className="h-5 w-5 text-[#FF5722]" />,
      title: 'Continuous Experimentation',
      description: 'Perpetual R&D with generative shaders, kinetic type algorithms, and emerging visual tools.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#FF9B45]" />,
      title: 'Quality Over Quantity',
      description: 'We deliberately limit our client roster to pour relentless devotion into every engagement.',
    },
  ];

  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 bg-[#0c0c0c] border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Editorial Top Tag */}
        <div className="mb-4 inline-block">
          <LiquidGlassPill variant="orange" icon={<Sparkles className="h-3 w-3" />}>
            THE FLARE ETHOS
          </LiquidGlassPill>
        </div>

        {/* Large Main Heading */}
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
            WE BELIEVE GREAT IDEAS <br />
            <span className="text-flare">DESERVE GREAT EXECUTION.</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl leading-relaxed text-white/70">
            FLARE STUDIOS is an independent creative studio engineered to bridge raw human imagination with bleeding-edge motion graphics, video editing, and digital design. We reject generic templates and formulaic solutions in pursuit of work that leaves a permanent cultural impression.
          </p>
        </div>

        {/* Studio Approach Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ethosPoints.map((point, index) => (
            <LiquidGlassCard
              key={index}
              className="p-8 transition-all duration-300 hover:border-[#FF5722]/30"
              glowColor="rgba(255, 87, 34, 0.15)"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                {point.icon}
              </div>
              <h3 className="font-display text-xl font-bold tracking-wide text-white">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {point.description}
              </p>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
