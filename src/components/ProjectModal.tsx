import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Calendar, User, Clock, Briefcase, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onHireForProject: (category: string, projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onHireForProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-stone-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Click outside backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl text-stone-100 overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header Bar with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-900/90 sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs font-medium text-stone-400">
            <span className="text-amber-400 font-semibold">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white bg-stone-800/80 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Visual Image Showcase with aspect-ratio adaptive framing */}
          <div className="relative w-full rounded-xl overflow-hidden bg-stone-950 border border-stone-800 shadow-lg flex flex-col items-center justify-center p-3 sm:p-4 group">
            <div className="w-full flex items-center justify-center min-h-[260px] sm:min-h-[380px] max-h-[65vh]">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-[62vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="w-full mt-3 pt-3 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-amber-400 font-semibold">{project.client}</span>
                <span className="text-stone-500" aria-hidden="true">·</span>
                <span className="text-stone-300">{project.subtitle}</span>
              </div>
              <a
                href={project.image}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 font-medium transition-colors shrink-0"
              >
                <span>Open Original Image</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Metadata Bar (Unboxed text with typographic separators) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-stone-800/50 border border-stone-800 text-xs">
            <div>
              <span className="block text-stone-400 mb-0.5">Role</span>
              <span className="font-semibold text-stone-100">{project.role}</span>
            </div>
            <div>
              <span className="block text-stone-400 mb-0.5">Timeline</span>
              <span className="font-semibold text-stone-100">{project.timeline}</span>
            </div>
            <div>
              <span className="block text-stone-400 mb-0.5">Discipline</span>
              <span className="font-semibold text-stone-100">{project.categoryLabel}</span>
            </div>
            <div>
              <span className="block text-stone-400 mb-0.5">Deliverable</span>
              <span className="font-semibold text-amber-400">Verified Case Study</span>
            </div>
          </div>

          {/* Key Impact Metrics */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-3">
              Key Project Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-xl bg-stone-800/40 border border-stone-800">
                  <span className="text-2xl font-bold font-mono text-white text-amber-400 block tabular-nums">
                    {metric.value}
                  </span>
                  <span className="text-xs text-stone-300 font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deep-Dive Narrative: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="p-5 rounded-xl bg-stone-800/30 border border-stone-800/80 space-y-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <span>The Challenge &amp; Scope</span>
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-800/30 border border-stone-800/80 space-y-3">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <span>The Solution &amp; Execution</span>
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Key Deliverables & Outcomes */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-3">
              Detailed Deliverables &amp; Verified Results
            </h3>
            <ul className="space-y-2.5">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Stack */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-2.5">
              Tools &amp; Methodologies Leveraged
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono text-stone-300 bg-stone-800 rounded-md border border-stone-700/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-stone-800 bg-stone-900/90 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs text-stone-400">
            Need similar results for your business or venture?
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onHireForProject(project.category, project.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <span>Hire Me For a Project Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
