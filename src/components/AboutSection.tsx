import React from 'react';
import { Target, Lightbulb, ShieldCheck, Quote } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface AboutSectionProps {
  onHireClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onHireClick }) => {
  return (
    <section id="about" className="bg-stone-900 text-stone-100 py-20 lg:py-28 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
            <span>Background &amp; Philosophy</span>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <span>The Triple Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Multi-Disciplinary Edge
          </h2>
          <p className="text-base text-stone-300 leading-relaxed">
            Most businesses hire three separate contractors: a project manager to set up boards, a designer to build visuals, and a virtual assistant to handle executive chaos. I integrate all three into one coherent, high-velocity partnership.
          </p>
        </div>

        {/* 2-Column Split: Editorial Story + Portrait Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Spotlight */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-xl max-w-md mx-auto lg:max-w-none">
              <div className="aspect-[3/4] relative">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-400">
                    Salam Taiwo
                  </span>
                  <p className="text-sm font-semibold text-white">
                    "Great work isn't just finished—it's delivered with clarity, refined craft, and meticulous precision."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="text-sm sm:text-base text-stone-300 leading-relaxed">
              <p>
                From coordinating live sprint boards in Asana to designing high-impact commercial flyers and delivering DataCamp-certified spreadsheet analytics, I combine structured management with visual polish to eliminate operational friction for executives and growing organizations.
              </p>
            </div>

            {/* 3 Core Operating Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <Target className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Project Rigor</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Asana milestone tracking, structured agendas, and zero dropped tasks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Visual Excellence</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Original commercial flyers, 3D print assets, and high-impact event posters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Certified Admin</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  DataCamp Excel certified, Mercatura VA trained, and confidential record management.
                </p>
              </div>

            </div>

            {/* Testimonials */}
            <div className="pt-6 space-y-4 border-t border-stone-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
                <Quote className="w-3.5 h-3.5 text-amber-400" />
                <span>Professional Endorsements</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800/80 space-y-3">
                  <p className="text-xs text-stone-300 italic leading-relaxed">
                    "Salam’s ability to coordinate large volunteer teams, manage live event timelines, and simultaneously produce stunning visual flyers makes him an invaluable coordinator."
                  </p>
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Ministry Executive</span>
                    <span className="text-stone-400">The Tongues of Fire Ministry</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800/80 space-y-3">
                  <p className="text-xs text-stone-300 italic leading-relaxed">
                    "From coordinating environmental field reports to managing executive operations, Salam is thorough, punctual, and remarkably dependable in high-stakes environments."
                  </p>
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Program Supervisor</span>
                    <span className="text-stone-400">State Environmental Field Initiative</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
