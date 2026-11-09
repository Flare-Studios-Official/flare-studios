import React from 'react';

interface ServiceVisualizerProps {
  type: 'waveform' | 'kinetic' | 'grid' | 'geometry' | 'code';
}

export const ServiceVisualizer: React.FC<ServiceVisualizerProps> = ({ type }) => {
  switch (type) {
    case 'waveform':
      return (
        <div className="relative flex h-24 w-full items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-black/40 p-4 border border-white/5">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-[#FF5722] to-[#FF9B45] animate-pulse"
              style={{
                height: `${Math.sin(i * 0.5) * 40 + 50}%`,
                animationDelay: `${i * 0.08}s`,
                animationDuration: '1.2s',
              }}
            />
          ))}
          <span className="absolute bottom-1 right-2 font-mono text-[9px] text-white/30">
            TIMELINE SYNC
          </span>
        </div>
      );

    case 'kinetic':
      return (
        <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-black/40 p-4 border border-white/5">
          <div className="relative flex items-center gap-2 font-display text-xl font-black italic tracking-wider text-transparent" style={{ WebkitTextStroke: '1px #FF5722' }}>
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>M</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>O</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>T</span>
            <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>I</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>O</span>
            <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>N</span>
          </div>
          <span className="absolute bottom-1 right-2 font-mono text-[9px] text-[#FF9B45]/60">
            60 FPS CURVES
          </span>
        </div>
      );

    case 'grid':
      return (
        <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-black/40 p-4 border border-white/5">
          <div className="relative h-14 w-28 rounded-lg border border-[#FF5722]/50 bg-[#FF5722]/10 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full bg-[#FF5722] animate-ping opacity-75" />
            <div className="absolute font-mono text-[10px] font-bold text-white">CTR +84%</div>
          </div>
          <span className="absolute bottom-1 right-2 font-mono text-[9px] text-white/30">
            FOCAL MAPPING
          </span>
        </div>
      );

    case 'geometry':
      return (
        <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-black/40 p-4 border border-white/5">
          <div className="h-12 w-12 border-2 border-dashed border-[#FF9B45] animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute h-8 w-8 border border-white/60 rotate-45" />
          <span className="absolute bottom-1 right-2 font-mono text-[9px] text-white/30">
            SWISS GRID
          </span>
        </div>
      );

    case 'code':
      return (
        <div className="relative flex h-24 w-full flex-col justify-center overflow-hidden rounded-xl bg-black/40 p-3 font-mono text-[10px] text-[#FF9B45] border border-white/5">
          <div className="flex items-center gap-1 text-white/40">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <span className="h-2 w-2 rounded-full bg-green-500/80" />
            <span className="ml-1 text-[9px]">shader.glsl</span>
          </div>
          <div className="mt-1 text-white/70">vec4 color = texture2D(u_lens, uv);</div>
          <div className="text-[#FF5722]">gl_FragColor = mix(color, flare, 0.4);</div>
        </div>
      );

    default:
      return null;
  }
};
