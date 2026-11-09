import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Project } from '../../types';
import { LiquidGlassCard } from '../LiquidGlass/LiquidGlassCard';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { ProjectArtwork } from './ProjectArtwork';
import { sound } from '../../utils/sound';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    sound.playClick();
    onSelect(project);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => {
        setIsHovered(true);
        sound.playHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
      data-cursor="pointer"
    >
      <LiquidGlassCard
        className="h-full transition-all duration-500 hover:border-[#FF5722]/40"
        glowColor="rgba(255, 87, 34, 0.2)"
      >
        {/* Visual Artwork Showcase Area */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10">
          <ProjectArtwork id={project.id} isHovered={isHovered} />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
            <LiquidGlassPill variant="orange">
              {project.category}
            </LiquidGlassPill>

            <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-white/80 backdrop-blur-md border border-white/10">
              {project.number}
            </span>
          </div>

          {/* Hover Floating Action Button */}
          <div className="absolute bottom-4 right-4 z-20">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF5722] text-white shadow-[0_0_20px_rgba(255,87,34,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Content Meta */}
        <div className="p-6 md:p-8">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[#FF5722]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF9B45]">
              {project.clientType}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-wide text-white transition-colors duration-300 group-hover:text-[#FF5722]">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {project.shortDescription}
          </p>

          {/* Deliverables Tags */}
          <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.deliverables.slice(0, 3).map((item, idx) => (
              <span
                key={idx}
                className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-white/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
};
