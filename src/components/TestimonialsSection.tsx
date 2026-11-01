import React from 'react';
import { Star, Quote, CheckCircle2, Building, User } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/portfolioData';

interface TestimonialsSectionProps {
  category: 'project-management' | 'graphic-design' | 'virtual-assistant';
  categoryTitle: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ category, categoryTitle }) => {
  const categoryTestimonials = TESTIMONIALS.filter((t) => t.category === category);

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-stone-900/60 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-800">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <Quote className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Client &amp; Stakeholder Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Testimonials for {categoryTitle}
            </h2>
            <p className="text-sm sm:text-base text-stone-300">
              Direct reviews from program directors, business owners, and ministry executives on projects and deliverables carried out.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-400 bg-stone-900 px-3 py-2 rounded-xl border border-stone-800 shrink-0 self-start md:self-end">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Authentic Works &amp; Real Deliverables</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-stone-950 border border-stone-800 hover:border-stone-700 transition-all shadow-lg space-y-6 group"
            >
              <div className="space-y-4">
                {/* Star rating & highlight tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-amber-400/90 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                    Verified Work
                  </span>
                </div>

                {/* Project Context Badge */}
                <div className="text-xs text-stone-400 border-l-2 border-amber-400/70 pl-2.5 py-0.5 font-medium">
                  Project: <span className="text-stone-200">{testimonial.projectWorkedOn}</span>
                </div>

                {/* Quote Body */}
                <p className="text-sm text-stone-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Organization Info */}
              <div className="pt-4 border-t border-stone-800/80 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {testimonial.clientName}
                    </h4>
                    <p className="text-xs text-amber-400 font-medium">
                      {testimonial.clientRole}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-400 pt-1">
                  <Building className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span className="truncate">{testimonial.organization}</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-mono pt-1">
                  ✓ {testimonial.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
