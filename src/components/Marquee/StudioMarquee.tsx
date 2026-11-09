import React from 'react';
import { Sparkles } from 'lucide-react';

export const StudioMarquee: React.FC = () => {
  const row1 = [
    'CREATIVITY WITHOUT LIMITS',
    '•',
    'DESIGN THAT MOVES',
    '•',
    'IDEAS THAT IGNITE',
    '•',
    'FLARE STUDIOS',
    '•',
  ];

  const row2 = [
    'CINEMATIC STORYTELLING',
    '•',
    'SURGICAL PACING',
    '•',
    'KINETIC TYPOGRAPHY',
    '•',
    'HIGH IMPACT THUMBNAILS',
    '•',
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0c0c0c] py-12 md:py-16">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-40 w-96 rounded-full bg-[#FF5722]/10 blur-[100px]" />

      <div className="space-y-4">
        {/* Row 1 - Marquee Left */}
        <div className="flex select-none overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-6 font-display text-3xl font-black uppercase tracking-wider sm:text-5xl md:text-6xl text-white/90">
            {Array.from({ length: 4 }).flatMap(() =>
              row1.map((item, index) => (
                <span
                  key={`r1-${index}`}
                  className={
                    item === '•'
                      ? 'text-[#FF5722] opacity-70'
                      : item === 'IDEAS THAT IGNITE'
                      ? 'text-flare'
                      : 'hover:text-[#FF5722] transition-colors duration-300'
                  }
                >
                  {item}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Row 2 - Marquee Right (Reverse) */}
        <div className="flex select-none overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-reverse flex items-center gap-6 font-display text-2xl font-bold uppercase tracking-wider sm:text-4xl md:text-5xl text-white/40">
            {Array.from({ length: 4 }).flatMap(() =>
              row2.map((item, index) => (
                <span
                  key={`r2-${index}`}
                  className={
                    item === '•'
                      ? 'text-[#FF9B45] opacity-50'
                      : 'hover:text-white transition-colors duration-300'
                  }
                >
                  {item === 'KINETIC TYPOGRAPHY' ? (
                    <span className="inline-flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-[#FF5722]" /> {item}
                    </span>
                  ) : (
                    item
                  )}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
