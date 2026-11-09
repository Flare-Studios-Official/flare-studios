import React, { useState } from 'react';
import { Sparkles, Info } from 'lucide-react';
import { PROJECTS } from '../../constants/projects';
import type { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { sound } from '../../utils/sound';

export const FeaturedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Motion Graphics',
    'Brand Identity',
    'Video Editing',
    'Thumbnail Design',
    'Digital Experience',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 bg-[#080808]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="mb-3 inline-block">
              <LiquidGlassPill variant="orange" icon={<Sparkles className="h-3 w-3" />}>
                SELECTED WORK
              </LiquidGlassPill>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white">
              A LITTLE BIT OF <br />
              <span className="text-flare">WHAT WE DO.</span>
            </h2>
          </div>

          {/* Fictional Demonstration Notice */}
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md md:max-w-sm">
            <Info className="h-5 w-5 shrink-0 text-[#FF9B45]" />
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Curated demonstration prototypes showcasing our motion graphics, visual effects, and design systems.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#FF5722] text-white shadow-[0_0_20px_rgba(255,87,34,0.4)] scale-105'
                    : 'bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Project Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={index === 0 ? 'lg:col-span-2' : index === 3 ? 'lg:col-span-2' : ''}
            >
              <ProjectCard
                project={project}
                onSelect={(proj) => setActiveModalProject(proj)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
