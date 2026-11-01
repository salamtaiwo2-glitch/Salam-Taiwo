import React, { useState } from 'react';
import { KanbanSquare, Palette, Briefcase, Check, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES, PROJECTS, Project, SkillCategory } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ExpertiseSectionProps {
  onSelectProject: (project: Project) => void;
  onHireForCategory: (category: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  onSelectProject,
  onHireForCategory,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'project-management' | 'graphic-design' | 'virtual-assistant'>('all');

  const filteredCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === activeTab);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'KanbanSquare':
        return <KanbanSquare className="w-5 h-5 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="expertise" className="bg-stone-950 text-stone-100 py-20 lg:py-28 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-800">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>Core Disciplines</span>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span>Proven Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight">
              Expertise &amp; Previous Projects
            </h2>
            <p className="text-base text-stone-300 leading-relaxed">
              Explore how I apply rigorous methodologies, modern creative tools, and meticulous operational execution to solve real-world business challenges.
            </p>
          </div>

          {/* Interactive Filter Control (functional tabs with clean segmented styling) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-900 border border-stone-800 rounded-xl overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              All Expertise
            </button>
            <button
              onClick={() => setActiveTab('project-management')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'project-management'
                  ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              Project Management
            </button>
            <button
              onClick={() => setActiveTab('graphic-design')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'graphic-design'
                  ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              Graphic Design
            </button>
            <button
              onClick={() => setActiveTab('virtual-assistant')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'virtual-assistant'
                  ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              Virtual Assistance
            </button>
          </div>
        </div>

        {/* Render each Expertise Pillar and its worked projects */}
        <div className="space-y-24">
          {filteredCategories.map((cat, index) => {
            const categoryProjects = PROJECTS.filter(p => p.category === cat.id);

            return (
              <div
                key={cat.id}
                id={cat.id}
                className="pt-4 scroll-mt-24 space-y-10"
              >
                
                {/* Pillar Overview Container */}
                <div className="p-8 sm:p-10 rounded-2xl bg-stone-900 border border-stone-800 space-y-8">
                  
                  {/* Top Bar of the Discipline Card */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-800">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-stone-800 border border-stone-700/60">
                          {getCategoryIcon(cat.iconName)}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                            Pillar 0{index + 1}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            {cat.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-base text-stone-300 pt-1 font-medium">
                        {cat.lead}
                      </p>
                    </div>

                    <button
                      onClick={() => onHireForCategory(cat.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer whitespace-nowrap self-start lg:self-center shadow-sm"
                    >
                      <span>Hire Me for {cat.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Narrative & Skills Breakdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left narrative description */}
                    <div className="lg:col-span-5 space-y-4">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                        Operational Philosophy
                      </h4>
                      <p className="text-sm text-stone-300 leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-xs text-stone-400 block mb-2 font-mono">
                          Core Tools &amp; Ecosystem:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.tools.map((tool, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-xs font-mono text-stone-300 bg-stone-800/80 rounded border border-stone-700/50"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle Core Competencies */}
                    <div className="lg:col-span-4 space-y-4">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                        Key Competencies
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-300">
                        {cat.skills.map((skill, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-amber-400 font-bold shrink-0">·</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Key Deliverables */}
                    <div className="lg:col-span-3 space-y-4">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                        What I Deliver
                      </h4>
                      <ul className="space-y-2 text-xs text-stone-300">
                        {cat.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-stone-800/50 border border-stone-800">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

                {/* Projects Section for this Pillar */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        Featured {cat.shortTitle} Projects
                      </h4>
                      <p className="text-xs text-stone-400 mt-0.5">
                        Earlier projects and deliverables executed for clients &amp; organizations
                      </p>
                    </div>
                    <span className="text-xs font-mono text-stone-400">
                      {categoryProjects.length} Verified Projects
                    </span>
                  </div>

                  {/* 3-Column Project Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onSelect={onSelectProject}
                      />
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
