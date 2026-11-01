import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DisciplinePage, DisciplineCategory } from './components/DisciplinePage';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CertificationsModal } from './components/CertificationsModal';
import { MotionSocialIcons } from './components/MotionSocialIcons';
import { Project } from './data/portfolioData';

export default function App() {
  const getCategoryFromHash = (): DisciplineCategory => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'graphic-design') return 'graphic-design';
    if (hash === 'virtual-assistant') return 'virtual-assistant';
    return 'project-management';
  };

  const [activeCategory, setActiveCategory] = useState<DisciplineCategory>(getCategoryFromHash());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);

  // Sync hash changes with state
  useEffect(() => {
    const handleHashChange = () => {
      const cat = getCategoryFromHash();
      setActiveCategory(cat);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSwitchCategory = (category: DisciplineCategory) => {
    setActiveCategory(category);
    window.location.hash = `#/${category}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHireMeClick = () => {
    const el = document.getElementById('hire-me');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireForProject = (category: string, projectTitle: string) => {
    setSelectedProject(null);
    handleHireMeClick();
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-400 selection:text-stone-950 font-sans antialiased">
      
      {/* 3-Page Top Navigation Bar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={handleSwitchCategory}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCertifications={() => setIsCertificationsOpen(true)}
        onHireMe={handleHireMeClick}
      />

      {/* Main Discipline Page: Page 1, Page 2, or Page 3 */}
      <main className="flex-1">
        <DisciplinePage
          category={activeCategory}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenResume={() => setIsResumeOpen(true)}
          onSwitchPage={handleSwitchCategory}
        />
      </main>

      {/* Comprehensive Footer with 3-page directory and downloadable resume */}
      <Footer
        activeCategory={activeCategory}
        onSelectCategory={handleSwitchCategory}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCertifications={() => setIsCertificationsOpen(true)}
        onHireMe={handleHireMeClick}
      />

      {/* Interactive Project Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onHireForProject={handleHireForProject}
      />

      {/* Interactive Downloadable Resume Modal with official PDF links */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Official Verified Certifications & Credentials Modal */}
      <CertificationsModal
        isOpen={isCertificationsOpen}
        onClose={() => setIsCertificationsOpen(false)}
      />

      {/* Floating Animated Motion Channels for Gmail, LinkedIn, and WhatsApp */}
      <MotionSocialIcons variant="floating" />

    </div>
  );
}
