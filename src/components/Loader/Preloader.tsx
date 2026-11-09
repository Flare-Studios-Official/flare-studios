import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'dot' | 'ring' | 'text' | 'exit'>('dot');

  useEffect(() => {
    // Phase 1: Dot appears
    const t1 = setTimeout(() => setPhase('ring'), 300);
    // Phase 2: Ring expands & text reveals
    const t2 = setTimeout(() => setPhase('text'), 700);

    // Progress counter (0 to 100%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 10;
        return Math.min(100, prev + increment);
      });
    }, 90);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setPhase('exit');
        setTimeout(() => {
          onComplete();
        }, 700);
      }, 350);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-[#F5F3EF]"
        >
          {/* Central Animation Composition */}
          <div className="relative flex flex-col items-center">
            {/* Luminous Expanding Ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: phase === 'dot' ? 0.2 : phase === 'ring' ? 1 : 1.4,
                opacity: phase === 'dot' ? 0.8 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-12 h-32 w-32 rounded-full border border-[#FF5722]/40 bg-radial from-[#FF5722]/30 via-[#FF9B45]/10 to-transparent shadow-[0_0_50px_rgba(255,87,34,0.5)] blur-[1px]"
            />

            {/* Glowing Center Point */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 h-3 w-3 rounded-full bg-[#FF5722] shadow-[0_0_20px_#FF5722]"
            />

            {/* FLARE STUDIOS Masked Wordmark */}
            <div className="mt-8 overflow-hidden">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: phase === 'text' ? 0 : 60,
                  opacity: phase === 'text' ? 1 : 0,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 font-display text-2xl font-black tracking-[0.25em] md:text-3xl"
              >
                <span className="text-white">FLARE</span>
                <span className="text-flare">STUDIOS</span>
              </motion.div>
            </div>

            {/* Editorial Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'text' ? 0.6 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 font-mono text-[10px] tracking-[0.3em] uppercase text-white/50"
            >
              Independent Creative Studio
            </motion.p>

            {/* Minimal High-Tech Progress Counter */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-[2px] w-24 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF5722] to-[#FF9B45]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#FF9B45]">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
