import React, { useState } from 'react';
import { Mail, Download, Menu, X, KanbanSquare, Palette, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { DisciplineCategory } from './DisciplinePage';

interface NavbarProps {
  activeCategory: DisciplineCategory;
  onSelectCategory: (category: DisciplineCategory) => void;
  onOpenResume: () => void;
  onOpenCertifications: () => void;
  onHireMe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeCategory, 
  onSelectCategory, 
  onOpenResume, 
  onOpenCertifications, 
  onHireMe 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (cat: DisciplineCategory) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Brand Wordmark & Profile Avatar */}
          <div 
            onClick={() => handleCategoryClick('project-management')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 shadow-sm shrink-0">
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {PROFILE.name}
              </span>
              <span className="text-xs text-stone-400 font-normal">
                Portfolio · 3 Core Disciplines
              </span>
            </div>
          </div>

          {/* Center 3-Page Switcher (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-stone-950 rounded-xl border border-stone-800">
            <button
              onClick={() => handleCategoryClick('project-management')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'project-management'
                  ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900'
              }`}
            >
              <KanbanSquare className="w-3.5 h-3.5" />
              <span>1. Project Management</span>
            </button>

            <button
              onClick={() => handleCategoryClick('graphic-design')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'graphic-design'
                  ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>2. Graphic Design</span>
            </button>

            <button
              onClick={() => handleCategoryClick('virtual-assistant')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'virtual-assistant'
                  ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>3. Virtual Assistance</span>
            </button>
          </nav>

          {/* Action Hub (Right) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenCertifications}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer border border-amber-500/30"
              title="View all official certifications and credentials"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Certificates</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer border border-stone-700/60"
              title="View & Download official resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={onHireMe}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-stone-300 hover:text-white rounded-lg border border-stone-800 text-xs"
              title="View Resume"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-900 px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 px-2 pt-1">
            Select Expertise Page
          </div>
          <div className="flex flex-col space-y-1.5 text-sm">
            <button
              onClick={() => handleCategoryClick('project-management')}
              className={`flex items-center gap-2.5 px-3 py-2.5 text-left rounded-lg transition-colors ${
                activeCategory === 'project-management'
                  ? 'bg-amber-400 text-stone-950 font-bold'
                  : 'text-stone-200 hover:bg-stone-800'
              }`}
            >
              <KanbanSquare className="w-4 h-4" />
              <span>Page 1: Project Management</span>
            </button>

            <button
              onClick={() => handleCategoryClick('graphic-design')}
              className={`flex items-center gap-2.5 px-3 py-2.5 text-left rounded-lg transition-colors ${
                activeCategory === 'graphic-design'
                  ? 'bg-amber-400 text-stone-950 font-bold'
                  : 'text-stone-200 hover:bg-stone-800'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Page 2: Graphic Design</span>
            </button>

            <button
              onClick={() => handleCategoryClick('virtual-assistant')}
              className={`flex items-center gap-2.5 px-3 py-2.5 text-left rounded-lg transition-colors ${
                activeCategory === 'virtual-assistant'
                  ? 'bg-amber-400 text-stone-950 font-bold'
                  : 'text-stone-200 hover:bg-stone-800'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Page 3: Virtual Assistance</span>
            </button>
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenCertifications();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-amber-300 bg-stone-950 border border-amber-500/30 rounded-lg"
            >
              <Award className="w-4 h-4" />
              <span>Verified Certifications</span>
            </button>

            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-stone-200 bg-stone-800 rounded-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume</span>
            </button>

            <button
              onClick={() => {
                onHireMe();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-stone-950 bg-amber-400 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Mail Me for Hire</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
