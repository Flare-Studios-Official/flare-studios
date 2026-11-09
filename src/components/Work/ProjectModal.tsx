import React, { useEffect } from 'react';
import { X, Sparkles, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../types';
import { ProjectArtwork } from './ProjectArtwork';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { sound } from '../../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.playClick();
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => {
          sound.playClick();
          onClose();
        }}
        className="fixed inset-0 bg-[#080808]/85 backdrop-blur-2xl transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 my-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#121212]/95 shadow-[0_25px_80px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#161616]/70">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF5722] font-bold">
              PROJECT {project.number}
            </span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-xs uppercase tracking-wider text-white/60">
              {project.category}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Large Hero Artwork */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <ProjectArtwork id={project.id} isHovered={true} />
            <div className="absolute bottom-4 left-4 z-20">
              <LiquidGlassPill variant="amber" icon={<Sparkles className="h-3 w-3" />}>
                {project.clientType}
              </LiquidGlassPill>
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
              {project.title}
            </h2>
            <p className="mt-3 text-lg font-medium text-[#FF9B45]">
              {project.visualDirection}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {project.conceptDetail}
            </p>
          </div>

          {/* Technical Specs & Metrics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md"
              >
                <div className="font-mono text-xs uppercase text-white/40 tracking-wider">
                  {m.label}
                </div>
                <div className="mt-1 font-display text-xl font-black text-[#FF5722]">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Creative Process Walkthrough */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#FF5722]" />
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                Creative Process & Execution
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {project.creativeProcess.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-2"
                >
                  <span className="font-mono text-xs font-bold text-[#FF5722]">
                    PHASE {step.step}
                  </span>
                  <h4 className="font-display text-base font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Tools */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-4 border-t border-white/10">
            {/* Deliverables */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/70">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5722]" /> Key Deliverables
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Stack */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/70">
                <Cpu className="h-3.5 w-3.5 text-[#FF9B45]" /> Software & Production Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
