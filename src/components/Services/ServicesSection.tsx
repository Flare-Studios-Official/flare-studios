import React, { useState } from 'react';
import { ChevronDown, Sparkles, Check, Wrench } from 'lucide-react';
import { SERVICES } from '../../constants/services';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { LiquidGlassCard } from '../LiquidGlass/LiquidGlassCard';
import { ServiceVisualizer } from './ServiceVisualizer';
import { sound } from '../../utils/sound';

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('video-editing');

  const toggleExpand = (id: string) => {
    sound.playClick();
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="services" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 bg-[#0c0c0c] border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-3 inline-block">
            <LiquidGlassPill variant="orange" icon={<Sparkles className="h-3 w-3" />}>
              OUR CREATIVE SERVICES
            </LiquidGlassPill>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white">
            MADE TO <span className="text-flare">STAND OUT.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/60">
            A surgical convergence of motion graphics, video editing, thumbnail psychology, and modern digital development.
          </p>
        </div>

        {/* Interactive Services List */}
        <div className="space-y-4">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <LiquidGlassCard
                key={service.id}
                enableTilt={false}
                className={`transition-all duration-500 ${
                  isExpanded ? 'border-[#FF5722]/50 bg-[#141414]/90' : 'hover:border-white/20'
                }`}
              >
                {/* Header Row (Always visible) */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  onMouseEnter={() => sound.playHover()}
                  className="flex cursor-pointer items-center justify-between p-6 sm:p-8"
                  data-cursor="pointer"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-mono text-lg sm:text-2xl font-black text-[#FF5722]">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-3xl font-extrabold tracking-wide text-white transition-colors duration-300 hover:text-[#FF5722]">
                        {service.title}
                      </h3>
                      <p className="mt-1 font-sans text-xs sm:text-sm text-white/50">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden font-mono text-xs text-white/40 md:inline-block">
                      {isExpanded ? 'CLOSE' : 'EXPAND'}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-transform duration-500 ${
                        isExpanded ? 'rotate-180 bg-[#FF5722] text-white border-[#FF5722]' : ''
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Expandable Deep Dive Body */}
                {isExpanded && (
                  <div className="animate-in fade-in slide-in-from-top-4 duration-300 border-t border-white/10 p-6 sm:p-8 pt-6">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                      {/* Left: Deep Narrative & Visualizer */}
                      <div className="space-y-6 lg:col-span-7">
                        <p className="text-base leading-relaxed text-white/80">
                          {service.extendedDescription}
                        </p>

                        {/* Interactive Procedural Service Visualizer */}
                        <div>
                          <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/40">
                            Service Visualization
                          </span>
                          <ServiceVisualizer type={service.visualizerType} />
                        </div>
                      </div>

                      {/* Right: Deliverables & Tech Stack */}
                      <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:col-span-5">
                        {/* Deliverables */}
                        <div>
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF5722]">
                            Standard Deliverables
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                                <Check className="h-4 w-4 shrink-0 text-[#FF9B45] mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Software */}
                        <div className="pt-4 border-t border-white/5">
                          <h4 className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white/60">
                            <Wrench className="h-3.5 w-3.5 text-[#FF9B45]" /> Software Environment
                          </h4>
                          <div className="mt-2.5 flex flex-wrap gap-2">
                            {service.software.map((sw, idx) => (
                              <span
                                key={idx}
                                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-white/70"
                              >
                                {sw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </LiquidGlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
