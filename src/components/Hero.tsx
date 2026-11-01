import React, { useState } from 'react';
import { Mail, ArrowDown, Copy, Check, Briefcase, FileText, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onOpenResume: () => void;
  onHireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenResume, onHireClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative bg-stone-900 text-stone-100 pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-800 overflow-hidden">
      
      {/* Subtle architectural ambient gradient (no neon, subtle warm light) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-stone-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen Hero: Left Column Typography, Right Column Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Editorial Kicker (Unboxed metadata with typographic dot) */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>Executive Portfolio</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Available for Hire</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-300">Remote Worldwide</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Where Strategic Management Meets Visual Craft &amp; Operational Excellence.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              I am <span className="text-white font-medium">Salam Taiwo</span>—a versatile multi-disciplinary professional helping business leaders, founders, and growing enterprises drive agile projects to fruition, craft timeless visual brand identities, and run calm, high-leverage executive operations.
            </p>

            {/* Discipline Badges rendered cleanly with typographic separators */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-stone-400">
              <span className="text-stone-200">Agile Project Management</span>
              <span aria-hidden="true" className="text-stone-600">/</span>
              <span className="text-stone-200">Brand &amp; Graphic Design</span>
              <span aria-hidden="true" className="text-stone-600">/</span>
              <span className="text-stone-200">Executive Virtual Assistance</span>
            </div>

            {/* Action Buttons & Fast Email Copy */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onHireClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>Hire Me for Your Project</span>
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700/70 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <Briefcase className="w-4 h-4 text-stone-400" />
                <span>View Portfolio Projects</span>
                <ArrowDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              <a
                href={PROFILE.resumePdfUrl}
                download="Salam_Taiwo_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-amber-300 hover:text-white bg-stone-800/60 hover:bg-stone-800 border border-amber-500/30 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Download PDF Resume</span>
              </a>
            </div>

            {/* Direct Contact Channels Row */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span>Email:</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 font-mono text-stone-200 hover:text-amber-400 transition-colors bg-stone-800/60 hover:bg-stone-800 px-2.5 py-1 rounded-lg border border-stone-700/50"
                  title="Click to copy email address"
                >
                  <span>{PROFILE.email}</span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-emerald-400 font-sans text-xs">
                      <Check className="w-3 h-3" />
                      <span>Copied!</span>
                    </span>
                  ) : (
                    <Copy className="w-3 h-3 text-stone-400" />
                  )}
                </button>
              </div>

              <span aria-hidden="true" className="text-stone-700">·</span>

              <div className="flex items-center gap-1 font-mono text-stone-300">
                <span>Phone:</span>
                <a href={`tel:${PROFILE.phoneDisplay}`} className="hover:text-amber-400">
                  {PROFILE.phoneDisplay}
                </a>
              </div>

              <span aria-hidden="true" className="text-stone-700">·</span>

              <a
                href={PROFILE.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="text-stone-300 hover:text-amber-400 transition-colors"
              >
                LinkedIn Profile ↗
              </a>
            </div>

          </div>

          {/* Right Column: Visual Container with User Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Architectural Framing */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-stone-700/40 via-stone-800/20 to-stone-800/50 border border-stone-700/60 shadow-2xl backdrop-blur-sm">
                
                {/* Photo container */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-950">
                  <img
                    src={PROFILE.photo}
                    alt={PROFILE.name}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle lower vignette to anchor caption */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

                  {/* Clean unboxed lower caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-200">
                    <div className="flex flex-col">
                      <span className="font-semibold text-white tracking-wide text-sm">{PROFILE.name}</span>
                      <span className="text-stone-300 text-xs">Project &amp; Operations Specialist</span>
                    </div>
                    <div className="text-right">
                      <span className="text-amber-400 font-mono text-xs">Available Now</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-amber-500/30 rounded-br-2xl pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Full-Width Quantitative Metrics Strip below Hero Split */}
        <div className="mt-16 pt-10 border-t border-stone-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PROFILE.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums text-amber-400">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-stone-200 leading-snug">
                  {stat.label}
                </span>
                <span className="text-xs text-stone-400">
                  {stat.context}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
