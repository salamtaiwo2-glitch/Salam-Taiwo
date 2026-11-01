import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative bg-stone-900 border border-stone-800 hover:border-stone-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer"
    >
      {/* Visual Image Showcase */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full ${
            project.category === 'graphic-design'
              ? 'object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out'
              : 'object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
          }`}
          referrerPolicy="no-referrer"
        />
        
        {/* Soft gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />
        
        {/* Authentic Original Work Marker for Graphic Design */}
        {project.category === 'graphic-design' && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/90 backdrop-blur-md border border-amber-500/40 text-[11px] font-medium text-amber-300 shadow-sm">
            Original Client Work
          </div>
        )}

        {/* Top-right open icon button */}
        <div className="absolute top-3 right-3 p-2 rounded-xl bg-stone-900/80 backdrop-blur-md text-stone-200 group-hover:text-amber-400 group-hover:bg-stone-900 transition-colors border border-stone-700/60 shadow-sm">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Bottom overlay metadata */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
          <span className="font-mono text-amber-300/90 truncate max-w-[65%]">{project.client}</span>
          <span className="text-stone-400 font-mono shrink-0">{project.year}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Unboxed discipline metadata with separator */}
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-400 font-normal">{project.role}</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-stone-300 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Highlight Metrics */}
        <div className="pt-2 border-t border-stone-800/80 grid grid-cols-2 gap-3">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-base font-bold font-mono text-amber-400 tabular-nums">
                {m.value}
              </span>
              <span className="text-[11px] text-stone-400 line-clamp-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Card Footer Tools & Action */}
        <div className="pt-2 flex items-center justify-between text-xs text-stone-400">
          <span className="line-clamp-1 text-stone-400 font-mono text-[11px]">
            {project.tools.slice(0, 3).join(' · ')}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-stone-200 group-hover:text-amber-400 shrink-0">
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </div>
    </article>
  );
};
