import React from 'react';
import { Download, Mail, ArrowUpRight, FileText, CheckCircle2, Award, KanbanSquare, Palette, Briefcase } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { DisciplineCategory } from './DisciplinePage';

interface FooterProps {
  activeCategory: DisciplineCategory;
  onSelectCategory: (category: DisciplineCategory) => void;
  onOpenResume: () => void;
  onOpenCertifications: () => void;
  onHireMe: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  activeCategory,
  onSelectCategory,
  onOpenResume,
  onOpenCertifications,
  onHireMe
}) => {
  const handlePageSelect = (category: DisciplineCategory) => {
    onSelectCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Monograph Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 shrink-0">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">
                  {PROFILE.name}
                </span>
                <span className="text-xs text-stone-400">
                  PM · Graphic Design · Executive VA
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Divided across 3 major disciplines: Agile Project Management, Creative Brand &amp; Commercial Design, and Executive Virtual Assistance.
            </p>

            {/* Direct Official Email Link */}
            <div className="pt-1">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PROFILE.email}</span>
              </a>
            </div>
          </div>

          {/* 3 Pages Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              The 3 Expertise Pages
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handlePageSelect('project-management')}
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer text-left ${
                    activeCategory === 'project-management' ? 'text-amber-400 font-bold' : 'hover:text-white'
                  }`}
                >
                  <KanbanSquare className="w-3.5 h-3.5" />
                  <span>Page 1: Project Management</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('graphic-design')}
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer text-left ${
                    activeCategory === 'graphic-design' ? 'text-amber-400 font-bold' : 'hover:text-white'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Page 2: Graphic Design</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageSelect('virtual-assistant')}
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer text-left ${
                    activeCategory === 'virtual-assistant' ? 'text-amber-400 font-bold' : 'hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Page 3: Virtual Assistance</span>
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenCertifications}
                  className="hover:text-amber-400 text-amber-300 font-semibold transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Certifications</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onHireMe}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mail Me for Hire</span>
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div>Phone: <a href={`tel:${PROFILE.phoneDisplay}`} className="text-stone-300 hover:text-amber-400 font-mono">{PROFILE.phoneDisplay}</a></div>
              <div><a href={PROFILE.linkedIn} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">LinkedIn: {PROFILE.linkedInHandle}</a></div>
            </div>
          </div>

          {/* Downloadable Resume Callout */}
          <div className="md:col-span-4 space-y-4 p-5 rounded-2xl bg-stone-900 border border-stone-800">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Downloadable Resumes</span>
            </div>

            <h4 className="text-sm font-bold text-white">
              Download Verified CV / Resume
            </h4>

            <p className="text-xs text-stone-400 leading-relaxed">
              Download Salam Taiwo Akanji's complete professional resume directly in PDF format or inspect online credentials.
            </p>

            <div className="pt-1 flex flex-col gap-2">
              <a
                href={PROFILE.resumePdfUrl}
                download="Salam_Taiwo_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PDF Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-xl border border-stone-700/60 transition-colors cursor-pointer"
              >
                <span>Inspect Interactive Digital Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved. Available globally for remote hire.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-stone-400">3-Page Portfolio</span>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <span className="text-amber-400">Project Management</span>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <span className="text-amber-400">Graphic Design</span>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <span className="text-amber-400">Virtual Assistance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
