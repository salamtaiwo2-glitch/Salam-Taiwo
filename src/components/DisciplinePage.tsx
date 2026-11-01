import React from 'react';
import { 
  KanbanSquare, 
  Palette, 
  Briefcase, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Award, 
  Layers,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { 
  PROFILE, 
  PROJECTS, 
  SKILL_CATEGORIES, 
  CERTIFICATIONS, 
  Project, 
  SkillCategory 
} from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { TestimonialsSection } from './TestimonialsSection';
import { HireMeSection } from './HireMeSection';
import { AgileOperationsCarousel } from './AgileOperationsCarousel';
import { MotionSocialIcons } from './MotionSocialIcons';

export type DisciplineCategory = 'project-management' | 'graphic-design' | 'virtual-assistant';

interface DisciplinePageProps {
  category: DisciplineCategory;
  onSelectProject: (project: Project) => void;
  onOpenResume: () => void;
  onSwitchPage: (category: DisciplineCategory) => void;
}

export const DisciplinePage: React.FC<DisciplinePageProps> = ({
  category,
  onSelectProject,
  onOpenResume,
  onSwitchPage,
}) => {
  // Find current skill category info
  const skillCategory = SKILL_CATEGORIES.find((c) => c.id === category) || SKILL_CATEGORIES[0];
  const categoryProjects = PROJECTS.filter((p) => p.category === category);

  // Page index metadata
  const pageConfig: Record<DisciplineCategory, { 
    pageNumber: string; 
    pageTitle: string; 
    badge: string; 
    hirePrefill: string;
    nextCategory: DisciplineCategory;
    nextTitle: string;
    prevCategory: DisciplineCategory;
    prevTitle: string;
    disciplineStats: { value: string; label: string; context: string }[];
  }> = {
    'project-management': {
      pageNumber: '01',
      pageTitle: 'Project Management & Coordination',
      badge: 'Page 1 of 3 · Agile & Operations',
      hirePrefill: 'Agile Project Management & Sprint Coordination',
      nextCategory: 'graphic-design',
      nextTitle: 'Graphic & Brand Design',
      prevCategory: 'virtual-assistant',
      prevTitle: 'Administrative & Virtual Assistance',
      disciplineStats: [
        { value: '76%+', label: 'Asana Milestone Delivery', context: 'Community Outreach Sprints' },
        { value: '25 Tasks', label: 'Concurrent Sprint Tracking', context: 'Status & dependency flows' },
        { value: '100%', label: 'On-Time Task Execution', context: 'Zero dropped dependencies' },
        { value: '1 Year', label: 'Field Supervision', context: 'Ministry of Environment' },
      ],
    },
    'graphic-design': {
      pageNumber: '02',
      pageTitle: 'Graphic & Brand Design',
      badge: 'Page 2 of 3 · Visual Communication',
      hirePrefill: 'Commercial Graphic Design & Brand Identity',
      nextCategory: 'virtual-assistant',
      nextTitle: 'Administrative & Virtual Assistance',
      prevCategory: 'project-management',
      prevTitle: 'Project Management & Coordination',
      disciplineStats: [
        { value: '7 Works', label: 'Original Client Campaigns', context: 'Verified print & digital proofs' },
        { value: '+85%', label: 'WhatsApp Inquiry Surge', context: 'Olumz Laundry campaign' },
        { value: '+140%', label: 'Live Premiere Attendance', context: 'Intimacy Room broadcast' },
        { value: '300 DPI', label: 'Print Pre-Press Standard', context: 'Auditorium banners & posters' },
      ],
    },
    'virtual-assistant': {
      pageNumber: '03',
      pageTitle: 'Administrative & Virtual Assistance',
      badge: 'Page 3 of 3 · Executive Support',
      hirePrefill: 'Executive Virtual Assistance & Excel Modeling',
      nextCategory: 'project-management',
      nextTitle: 'Project Management & Coordination',
      prevCategory: 'graphic-design',
      prevTitle: 'Graphic & Brand Design',
      disciplineStats: [
        { value: 'DataCamp', label: 'Certified in Excel', context: 'Statement of Accomplishment #42,525,349' },
        { value: '200+', label: 'Virtual Meetings Hosted', context: 'Google Meet executive sessions' },
        { value: 'Mercatura', label: 'Certified Virtual Assistant', context: 'School of Technology Accredited' },
        { value: '100%', label: 'Ledger Reconciliation', context: 'Zero discrepancy sales records' },
      ],
    },
  };

  const currentConfig = pageConfig[category];

  const getDisciplineIcon = () => {
    switch (category) {
      case 'project-management':
        return <KanbanSquare className="w-6 h-6 text-amber-400" />;
      case 'graphic-design':
        return <Palette className="w-6 h-6 text-amber-400" />;
      case 'virtual-assistant':
        return <Briefcase className="w-6 h-6 text-amber-400" />;
    }
  };

  // Filter certifications relevant to this discipline
  const relevantCertifications = CERTIFICATIONS.filter((cert) => {
    if (category === 'project-management') {
      return cert.id === 'google-project-management' || cert.id === 'ef-set-english';
    }
    if (category === 'virtual-assistant') {
      return cert.id === 'datacamp-excel' || cert.id === 'mercatura-va' || cert.id === 'great-learning-excel' || cert.id === 'datacamp-data-analysis';
    }
    return false;
  });

  const scrollToContact = () => {
    const el = document.getElementById('hire-me');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWorks = () => {
    const el = document.getElementById('works-carried-out');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonials = () => {
    const el = document.getElementById('testimonials');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      
      {/* 3-Page Navigation Switcher Banner */}
      <div className="sticky top-20 z-30 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 py-3 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Active page indicator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
              <span className="text-amber-400 font-mono">PAGE {currentConfig.pageNumber}</span>
              <span aria-hidden="true">·</span>
              <span className="text-white">{currentConfig.pageTitle}</span>
            </div>

            {/* 3 Interactive Page Switch Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-950 rounded-xl border border-stone-800 overflow-x-auto">
              <button
                onClick={() => onSwitchPage('project-management')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  category === 'project-management'
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <KanbanSquare className="w-3.5 h-3.5" />
                <span>01. Project Management</span>
              </button>

              <button
                onClick={() => onSwitchPage('graphic-design')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  category === 'graphic-design'
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>02. Graphic Design</span>
              </button>

              <button
                onClick={() => onSwitchPage('virtual-assistant')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  category === 'virtual-assistant'
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>03. Virtual Assistance</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Discipline Hero Spotlight Header */}
      <section className="relative bg-stone-950 text-stone-100 py-16 sm:py-24 border-b border-stone-800 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-amber-500/30 text-xs font-medium text-amber-300">
                {getDisciplineIcon()}
                <span>{currentConfig.badge}</span>
              </div>

              {/* Object 1: Title & Introduction */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  {skillCategory.title}
                </h1>
                <p className="text-lg sm:text-xl text-amber-300/90 font-medium leading-relaxed">
                  {skillCategory.lead}
                </p>
                <p className="text-base text-stone-300 leading-relaxed max-w-3xl">
                  {skillCategory.description}
                </p>
              </div>

              {/* Object 2: Agile Operations 3-Images Carousel (Landscape 16:9, interchanges every 6s) */}
              {category === 'project-management' && (
                <div className="pt-2 pb-2">
                  <AgileOperationsCarousel />
                </div>
              )}

              {/* Object 3: Action Buttons & Interactive Motion Social Icons */}
              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Hire Me for {skillCategory.shortTitle}</span>
                  </button>

                  <button
                    onClick={scrollToWorks}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-stone-200 hover:text-white bg-stone-900 hover:bg-stone-800 rounded-xl border border-stone-700 transition-all cursor-pointer"
                  >
                    <span>Explore Works Carried Out ({categoryProjects.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={scrollToTestimonials}
                    className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-stone-300 hover:text-white bg-stone-900/60 hover:bg-stone-800 rounded-xl border border-stone-800 transition-all cursor-pointer"
                  >
                    <span>View Testimonials</span>
                  </button>
                </div>

                {/* Gmail, LinkedIn & WhatsApp with Interactive Motion Effect */}
                <div className="pt-2">
                  <MotionSocialIcons variant="inline" />
                </div>
              </div>

            </div>

            {/* Right Profile Spotlight Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/40 shrink-0 bg-stone-950">
                    <img
                      src={PROFILE.photo}
                      alt={PROFILE.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-base font-extrabold text-white">
                      {PROFILE.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium">
                      {PROFILE.role}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Hire
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800/80 text-xs text-stone-300 space-y-1.5">
                  <span className="font-semibold text-white block">Email: {PROFILE.email}</span>
                  <span className="text-stone-400 block font-mono">Phone: {PROFILE.phoneDisplay}</span>
                  <span className="text-stone-400 block font-mono">Location: {PROFILE.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenResume}
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Full Resume</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Key Metrics Strip for this Discipline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-stone-800">
            {currentConfig.disciplineStats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-stone-900/70 border border-stone-800/90 space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-white">
                  {stat.label}
                </div>
                <div className="text-[11px] text-stone-400">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Works Carried Out / Projects Showcase Section */}
      <section id="works-carried-out" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-800">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
                <span>Authentic Deliverables</span>
                <span aria-hidden="true" className="text-stone-700">·</span>
                <span>Case Studies</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Works Carried Out in {skillCategory.shortTitle}
              </h2>
              <p className="text-base text-stone-300">
                Click any case study to view detailed project challenges, solutions, tools used, and verified performance outcomes.
              </p>
            </div>

            <div className="text-xs text-stone-400 font-mono">
              Displaying <span className="text-amber-400 font-bold">{categoryProjects.length}</span> verified projects
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials for this Specific Discipline */}
      <TestimonialsSection
        category={category}
        categoryTitle={skillCategory.title}
      />

      {/* Capabilities, Tools & Deliverables Breakdown */}
      <section className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Tooling &amp; Technical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tools, Workflows &amp; Deliverables
            </h2>
            <p className="text-sm sm:text-base text-stone-300">
              Tested workflows and professional software applied on every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Core Competencies */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <span>Specialized Competencies</span>
              </div>
              <ul className="space-y-2.5">
                {skillCategory.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-300">
                    <span className="text-amber-400 font-bold shrink-0">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Tools */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <Layers className="w-5 h-5 text-amber-400" />
                <span>Software &amp; Platforms</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {skillCategory.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-700/80 text-xs font-mono text-stone-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-xs text-stone-400 pt-2 leading-relaxed">
                Full proficiency with both cloud collaboration tools and desktop productivity suites.
              </p>
            </div>

            {/* Concrete Deliverables */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <FileText className="w-5 h-5 text-amber-400" />
                <span>Standard Deliverables</span>
              </div>
              <ul className="space-y-2.5">
                {skillCategory.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-300">
                    <span className="text-emerald-400 font-bold shrink-0">➔</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Credentials specific to this discipline if available */}
          {relevantCertifications.length > 0 && (
            <div className="pt-8 border-t border-stone-800 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-400">
                  Accreditation &amp; Certifications
                </span>
                <h3 className="text-xl font-bold text-white">
                  Verified Credentials in {skillCategory.shortTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relevantCertifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs text-amber-400 font-mono">
                          {cert.issuer} · {cert.date}
                        </div>
                        <h4 className="text-base font-bold text-white pt-1">
                          {cert.title}
                        </h4>
                      </div>
                      <Award className="w-5 h-5 text-amber-400 shrink-0" />
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {cert.description}
                    </p>

                    {cert.image && (
                      <div className="rounded-xl overflow-hidden border border-stone-800 aspect-[16/9] bg-stone-950">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium pt-1"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Official PDF Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Direct Contact & Mail Me for Hire Section */}
      <HireMeSection
        initialService={currentConfig.hirePrefill}
        initialProjectTitle=""
      />

      {/* Page Switcher Navigation Footer Banner */}
      <section className="py-12 bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400">
                Explore The Next Expertise
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready to review {currentConfig.nextTitle}?
              </h3>
              <p className="text-xs sm:text-sm text-stone-400">
                Browse through verified works carried out, original case study proofs, and client testimonials.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onSwitchPage(currentConfig.prevCategory);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-300 hover:text-white bg-stone-900 hover:bg-stone-800 border border-stone-700/80 rounded-xl transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Prev: {currentConfig.prevTitle.split('&')[0]}</span>
              </button>

              <button
                onClick={() => {
                  onSwitchPage(currentConfig.nextCategory);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer shadow-md"
              >
                <span>Next: {currentConfig.nextTitle.split('&')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
