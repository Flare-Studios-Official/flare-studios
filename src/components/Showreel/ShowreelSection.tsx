import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, X } from 'lucide-react';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { sound } from '../../utils/sound';

export const ShowreelSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);
  const [isTheaterOpen, setIsTheaterOpen] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas Motion Graphics Animation for the Showreel preview
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    let time = 0;

    const render = () => {
      time += isPlaying ? 0.04 : 0.01;

      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // 1. Kinetic Radial Speed Streaks
      const streakCount = 36;
      for (let i = 0; i < streakCount; i++) {
        const angle = (i / streakCount) * Math.PI * 2 + time * 0.2;
        const length = (Math.sin(time * 3 + i) * 0.5 + 0.5) * (width * 0.45);
        const x1 = cx + Math.cos(angle) * 40;
        const y1 = cy + Math.sin(angle) * 40;
        const x2 = cx + Math.cos(angle) * (40 + length);
        const y2 = cy + Math.sin(angle) * (40 + length);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(255, 87, 34, 0.45)' : 'rgba(255, 155, 69, 0.25)';
        ctx.lineWidth = i % 3 === 0 ? 2 : 1;
        ctx.stroke();
      }

      // 2. Central Kinetic Brand Hologram
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.3);

      ctx.strokeStyle = '#FF5722';
      ctx.lineWidth = 2;
      ctx.strokeRect(-40, -40, 80, 80);

      ctx.rotate(Math.PI / 4);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.strokeRect(-48, -48, 96, 96);

      ctx.restore();

      // 3. Central Core Flare
      const flare = ctx.createRadialGradient(cx, cy, 0, cx, cy, 140);
      flare.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      flare.addColorStop(0.2, 'rgba(255, 87, 34, 0.8)');
      flare.addColorStop(0.6, 'rgba(255, 155, 69, 0.15)');
      flare.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.fillStyle = flare;
      ctx.fill();

      // Audio Frequency Spectrum Visualizer at bottom
      const bars = 40;
      const barWidth = width / bars;
      for (let i = 0; i < bars; i++) {
        const barHeight = (Math.sin(time * 4 + i * 0.5) * 0.5 + 0.5) * (height * 0.25);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 87, 34, 0.6)' : 'rgba(255, 155, 69, 0.4)';
        ctx.fillRect(i * barWidth, height - barHeight, barWidth - 2, barHeight);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  // Progress simulation when playing
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    sound.playClick();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    sound.playHover();
    setIsMuted(!isMuted);
  };

  return (
    <section id="showreel" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 bg-[#080808]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-block">
            <LiquidGlassPill variant="orange" icon={<Sparkles className="h-3 w-3" />}>
              STUDIO REEL 2026
            </LiquidGlassPill>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white">
            NOT JUST VISUALS. <br />
            <span className="text-flare">AN EXPERIENCE.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/60">
            A montage of our kinetic design systems, commercial pacing, and visual storytelling.
          </p>
        </div>

        {/* Video Reel Container (Apple Liquid Glass Frame) */}
        <div className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_20px_70px_rgba(0,0,0,0.9)]">
          {/* Kinetic Canvas Graphic Showcase */}
          <canvas ref={canvasRef} className="h-full w-full object-cover" />

          {/* Central Play/Pause Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              onMouseEnter={() => sound.playHover()}
              className="group relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white shadow-[0_0_50px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-110 hover:bg-[#FF5722] hover:border-[#FF5722]"
              aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-white" />
              ) : (
                <Play className="ml-1 h-8 w-8 text-white fill-white" />
              )}
            </button>
          </div>

          {/* Bottom Custom Playback Controls Bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 backdrop-blur-sm">
            {/* Progress Scrubber */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pos * 100));
              }}
              className="relative h-1.5 w-full cursor-pointer rounded-full bg-white/20 transition-all hover:h-2"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF9B45] relative"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute right-0 top-1/2 -mt-1.5 -mr-1.5 h-3 w-3 rounded-full bg-white shadow-[0_0_8px_#FF5722]" />
              </div>
            </div>

            {/* Controls Bar Row */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>

                <span className="font-mono text-xs text-white/50">
                  {Math.floor((progress * 1.6) / 60)}:
                  {String(Math.floor((progress * 1.6) % 60)).padStart(2, '0')} / 02:40
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/60">
                  4K • 60 FPS
                </span>
                <button
                  onClick={() => {
                    sound.playClick();
                    setIsTheaterOpen(true);
                  }}
                  className="text-white/70 transition-colors hover:text-white"
                  title="Fullscreen Theater Mode"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Theater Modal */}
      {isTheaterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl">
          <button
            onClick={() => {
              sound.playClick();
              setIsTheaterOpen(false);
            }}
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-[#FF5722]"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="w-full max-w-6xl aspect-video overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl relative flex items-center justify-center">
            <div className="text-center p-8">
              <Sparkles className="mx-auto h-12 w-12 text-[#FF5722] animate-bounce" />
              <h3 className="mt-4 font-display text-3xl font-black text-white">
                FLARE STUDIOS 2026 THEATER
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Studio master reel asset ready for client integration.
              </p>
              <button
                onClick={() => setIsTheaterOpen(false)}
                className="mt-6 rounded-full bg-[#FF5722] px-6 py-2.5 text-xs font-bold tracking-widest text-white uppercase"
              >
                RETURN TO EXPERIENCE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
