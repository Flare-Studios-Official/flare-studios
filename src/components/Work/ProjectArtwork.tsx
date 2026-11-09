import React from 'react';

interface ProjectArtworkProps {
  id: string;
  className?: string;
  isHovered?: boolean;
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({ id, className, isHovered }) => {
  switch (id) {
    case 'velocity':
      return (
        <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#1c0b05] via-[#0d0d0d] to-[#080808] p-8 ${className}`}>
          {/* Kinetic Speed Lines */}
          <div className="absolute inset-0 opacity-40">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FF5722] to-transparent"
                style={{
                  top: `${12 + i * 11}%`,
                  left: 0,
                  right: 0,
                  transform: `skewX(-35deg) scaleX(${isHovered ? 1.2 : 0.9})`,
                  transition: 'transform 0.6s ease-out',
                }}
              />
            ))}
          </div>

          {/* Central Typographic Composition */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="font-display text-5xl sm:text-7xl font-black italic tracking-tighter text-transparent"
              style={{
                WebkitTextStroke: '2px #FF5722',
                transform: isHovered ? 'scale(1.08) skewX(-8deg)' : 'scale(1)',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              VELOCITY
            </span>
            <div className="mt-2 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-[#FF9B45]">
              <span>60 FPS</span>
              <span className="h-1 w-1 rounded-full bg-[#FF5722]" />
              <span>4K KINETIC</span>
              <span className="h-1 w-1 rounded-full bg-[#FF5722]" />
              <span>RAW MOTION</span>
            </div>
          </div>
        </div>
      );

    case 'nexus':
      return (
        <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-tr from-[#111111] via-[#1a1412] to-[#080808] p-8 ${className}`}>
          {/* Isometric Monolith Graphic System */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className="relative flex h-36 w-36 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.04] backdrop-blur-md transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? 'rotate(45deg) scale(1.1)' : 'rotate(12deg) scale(1)',
              }}
            >
              <div className="h-20 w-20 rounded-xl border border-[#FF5722]/60 bg-[#FF5722]/15 shadow-[0_0_30px_rgba(255,87,34,0.3)]" />
              <div className="absolute font-mono text-[10px] text-white/50">N-02</div>
            </div>

            <div className="mt-6 text-center">
              <span className="font-display text-4xl font-black tracking-widest text-[#F5F3EF]">
                NEXUS
              </span>
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#FF9B45] uppercase">
                Modular Brand System
              </p>
            </div>
          </div>
        </div>
      );

    case 'afterglow':
      return (
        <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[#09080b] p-8 ${className}`}>
          {/* 2.39:1 Anamorphic Cinematic Bars */}
          <div className="absolute top-4 left-4 right-4 h-3 bg-black" />
          <div className="absolute bottom-4 left-4 right-4 h-3 bg-black" />

          {/* Anamorphic Horizontal Flare */}
          <div
            className="absolute h-[3px] w-full bg-gradient-to-r from-transparent via-[#FF5722] to-transparent shadow-[0_0_30px_#FF5722]"
            style={{
              transform: isHovered ? 'scaleY(2.5)' : 'scaleY(1)',
              transition: 'transform 0.4s ease',
            }}
          />

          <div className="relative z-10 text-center">
            <span className="font-display text-5xl font-black tracking-widest text-silver">
              AFTERGLOW
            </span>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 font-mono text-[10px] tracking-widest text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#FF5722] animate-ping" />
              <span>CINEMATIC GRADE • ACEScc</span>
            </div>
          </div>
        </div>
      );

    case 'pixel-rush':
      return (
        <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#1f0a00] via-[#0d0908] to-[#080808] p-8 ${className}`}>
          {/* Dynamic Thumbnail Visual Grid */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className="flex items-center gap-3 rounded-2xl border border-[#FF5722]/40 bg-[#FF5722]/15 px-6 py-4 backdrop-blur-xl shadow-[0_0_40px_rgba(255,87,34,0.35)] transition-transform duration-500"
              style={{
                transform: isHovered ? 'scale(1.06) rotate(-2deg)' : 'scale(1)',
              }}
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-[#FF5722] to-[#FF9B45] flex items-center justify-center text-xl font-black text-white">
                ⚡
              </div>
              <div>
                <div className="font-display text-2xl font-black text-white">PIXEL RUSH</div>
                <div className="font-mono text-[10px] text-[#FF9B45] uppercase tracking-wider">High CTR Architecture</div>
              </div>
            </div>

            <div className="mt-5 flex gap-2 font-mono text-[10px] text-white/50">
              <span className="rounded bg-black/60 px-2.5 py-1">3-POINT LIGHTING</span>
              <span className="rounded bg-black/60 px-2.5 py-1">DEPTH MAP</span>
            </div>
          </div>
        </div>
      );

    case 'orbit':
      return (
        <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0a0a0f] p-8 ${className}`}>
          {/* Concentric Orbital Rings */}
          <div
            className="absolute h-48 w-48 rounded-full border border-[#FF5722]/30 transition-transform duration-1000"
            style={{
              transform: isHovered ? 'rotate(90deg) scale(1.15)' : 'rotate(0deg) scale(1)',
            }}
          />
          <div
            className="absolute h-64 w-64 rounded-full border border-dashed border-white/15 transition-transform duration-1000"
            style={{
              transform: isHovered ? 'rotate(-60deg)' : 'rotate(0deg)',
            }}
          />

          <div className="relative z-10 text-center">
            <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF9B45] shadow-[0_0_35px_rgba(255,87,34,0.6)] flex items-center justify-center text-white font-mono text-xs font-bold">
              3D
            </div>
            <span className="font-display text-4xl font-black tracking-widest text-white">
              ORBIT
            </span>
            <p className="mt-1 font-mono text-[10px] text-[#FF9B45] tracking-[0.2em] uppercase">
              Interactive WebGL Universe
            </p>
          </div>
        </div>
      );

    case 'frequency':
      return (
        <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#140808] to-[#080808] p-8 ${className}`}>
          {/* Audio Wave Spectrum Bars */}
          <div className="absolute inset-x-8 bottom-6 flex items-end justify-between gap-1 opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-full rounded-t bg-[#FF5722] transition-all duration-300"
                style={{
                  height: `${Math.sin(i * 0.4) * 35 + 40}%`,
                  opacity: (i % 3 === 0 ? 0.9 : 0.5),
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <span className="font-display text-5xl font-black tracking-widest text-[#F5F3EF]">
              FREQUENCY
            </span>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#FF5722]">
              Dynamic Campaign Package
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
};
