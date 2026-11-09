import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { LiquidGlassButton } from '../LiquidGlass/LiquidGlassButton';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#080808] px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      {/* Interactive 3D Glowing Orb & Particle Canvas */}
      <HeroCanvas />

      {/* Hero Content Layer */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Intro Editorial Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <LiquidGlassPill variant="orange" icon={<Sparkles className="h-3 w-3" />}>
            INDEPENDENT CREATIVE STUDIO
          </LiquidGlassPill>
        </motion.div>

        {/* Massive Main Display Heading: "WE MAKE IDEAS IGNITE." */}
        <div className="overflow-hidden font-display leading-[0.88] tracking-tight">
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-[#F5F3EF]"
          >
            WE MAKE
          </motion.div>

          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="my-1 sm:my-2 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-silver"
          >
            IDEAS
          </motion.div>

          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-flare drop-shadow-[0_0_35px_rgba(255,87,34,0.4)]"
          >
            IGNITE.
          </motion.div>
        </div>

        {/* Supporting Editorial Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl font-normal text-white/70 leading-relaxed font-sans"
        >
          Turning ambitious ideas into powerful visual experiences through design, motion, and creativity.
        </motion.p>

        {/* Action CTAs with Magnetic Hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <LiquidGlassButton
            variant="primary"
            size="lg"
            onClick={onExploreClick}
            icon={<ArrowDownRight className="h-4 w-4" />}
          >
            EXPLORE OUR WORK
          </LiquidGlassButton>

          <LiquidGlassButton
            variant="secondary"
            size="lg"
            onClick={onContactClick}
          >
            LET’S TALK
          </LiquidGlassButton>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
          Scroll To Explore
        </span>
        <div className="relative h-10 w-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              y: [0, 40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-4 w-full rounded-full bg-gradient-to-b from-[#FF5722] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};
