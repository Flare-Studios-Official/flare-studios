import React from 'react';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'work', label: 'WORK' },
    { id: 'services', label: 'SERVICES' },
    { id: 'showreel', label: 'SHOWREEL' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060606] px-4 pt-20 pb-12 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-[#FF5722]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-16 border-b border-white/10">
          {/* Left Column: Brand & Tagline */}
          <div className="space-y-4 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF5722] to-[#FF9B45] text-white shadow-[0_0_20px_rgba(255,87,34,0.5)]">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-2xl font-black tracking-widest text-white">
                FLARE <span className="text-flare">STUDIOS</span>
              </span>
            </div>

            <p className="max-w-md text-base sm:text-lg text-white/70 font-sans">
              “Turning ideas into something extraordinary.”
            </p>

            <div className="pt-2">
              <a
                href="mailto:flarestudios.main@gmail.com"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/80 transition-all hover:border-[#FF5722] hover:text-[#FF5722]"
              >
                <Mail className="h-3.5 w-3.5 text-[#FF5722]" />
                flarestudios.main@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Navigation Links & Back To Top */}
          <div className="flex flex-col justify-between lg:col-span-6 sm:flex-row gap-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5722]">
                Explore Experience
              </span>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        sound.playClick();
                        onNavigate(link.id);
                      }}
                      onMouseEnter={() => sound.playHover()}
                      className="font-mono text-xs tracking-wider text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to top button */}
            <div className="flex flex-col sm:items-end justify-end">
              <button
                onClick={scrollToTop}
                onMouseEnter={() => sound.playHover()}
                className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md transition-all hover:border-[#FF5722] hover:bg-[#FF5722] hover:shadow-[0_0_25px_rgba(255,87,34,0.4)]"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Oversized Cinematic Brand Wordmark */}
        <div className="pt-12 text-center select-none overflow-hidden">
          <div className="font-display text-5xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-tighter text-white/[0.04] leading-none transition-colors duration-700 hover:text-white/[0.08]">
            FLARE STUDIOS.
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/40">
          <div>© 2026 FLARE STUDIOS. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span>PREMIUM CREATIVE DIGITAL EXPERIENCE</span>
            <span className="h-1 w-1 rounded-full bg-[#FF5722]" />
            <span className="text-[#FF9B45]">WE MAKE IDEAS IGNITE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
