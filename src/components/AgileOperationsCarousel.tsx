import React, { useState, useEffect } from 'react';
import { KanbanSquare, ChevronLeft, ChevronRight, Play, Pause, Sparkles, CheckCircle2 } from 'lucide-react';

export interface AgileSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  metrics: { label: string; value: string };
}

export const AGILE_SLIDES: AgileSlide[] = [
  {
    id: 'sprint-board',
    image: '/assets/images/agile_sprint_board_1793258696845.jpg',
    title: 'Agile Sprint Board & Burndown Metrics',
    subtitle: 'Real-time visibility across sprint backlog, in-progress tasks, code reviews, and milestone velocity.',
    tag: 'Sprint Operations 01',
    metrics: { label: 'Velocity Tracking', value: '76%+ Delivery' },
  },
  {
    id: 'team-planning',
    image: '/assets/images/team_agile_planning_1793258696725.jpg',
    title: 'Collaborative Sprint Planning & Standups',
    subtitle: 'Cross-functional alignment, daily standup coordination, workload balancing, and dependency mitigation.',
    tag: 'Sprint Operations 02',
    metrics: { label: 'Cross-Team Sync', value: 'Daily Standups' },
  },
  {
    id: 'digital-scrum-workflow',
    image: '/assets/images/digital_scrum_workflow_1793258726883.jpg',
    title: 'Digital Scrum Operations & Roadmap Execution',
    subtitle: 'Multi-screen project command center managing Asana sprint roadmaps, Gantt timelines, and critical path milestones.',
    tag: 'Sprint Operations 03',
    metrics: { label: 'Dependency Flow', value: '100% On-Time' },
  },
];

export const AgileOperationsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 6-second automatic interchange interval as requested
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AGILE_SLIDES.length);
    }, 6000); // 6 seconds

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % AGILE_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + AGILE_SLIDES.length) % AGILE_SLIDES.length);
  };

  return (
    <div className="w-full space-y-4">
      {/* Header bar of the agile viewer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-stone-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <KanbanSquare className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
              Live Agile Operations Showcase
            </span>
            <h3 className="text-sm font-bold text-white">
              Landscape Sprint Workflow Hub (Auto-interchanges every 6s)
            </h3>
          </div>
        </div>

        {/* Play/Pause & Slide counter */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
            title={isPlaying ? 'Pause 6s slideshow' : 'Resume 6s slideshow'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-amber-400" />
                <span className="text-[11px]">6s Auto-Play</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-amber-400" />
                <span className="text-[11px]">Paused</span>
              </>
            )}
          </button>

          <span className="text-stone-400 px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
            0{currentIndex + 1} / 0{AGILE_SLIDES.length}
          </span>
        </div>
      </div>

      {/* Landscape 16:9 Aspect Ratio Frame */}
      <div 
        className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl group"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Slides with smooth crossfade */}
        {AGILE_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 scale-100"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim for readable overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/40" />

              {/* Top-left active tag */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-stone-900/90 backdrop-blur-md border border-amber-400/40 text-[11px] font-mono text-amber-300 shadow-md">
                  {slide.tag}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active Sprint
                </span>
              </div>

              {/* Top-right Metric Badge */}
              <div className="absolute top-4 right-4 z-20 hidden sm:block">
                <div className="px-3 py-1.5 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-700 text-right">
                  <span className="block text-[10px] text-stone-400 font-mono">{slide.metrics.label}</span>
                  <span className="block text-sm font-bold text-amber-400 font-mono">{slide.metrics.value}</span>
                </div>
              </div>

              {/* Bottom Caption & Information */}
              <div className="absolute bottom-5 left-5 right-5 z-20 space-y-1.5 max-w-2xl">
                <h4 className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight drop-shadow-md">
                  {slide.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 leading-relaxed drop-shadow">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          );
        })}

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-xl bg-stone-900/80 hover:bg-stone-900 backdrop-blur-md text-stone-300 hover:text-white border border-stone-700/60 transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer shadow-lg"
          aria-label="Previous agile slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-xl bg-stone-900/80 hover:bg-stone-900 backdrop-blur-md text-stone-300 hover:text-white border border-stone-700/60 transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer shadow-lg"
          aria-label="Next agile slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* 6-Second Active Progress Bar at the very bottom edge of the image */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-800/80 z-30">
          <div
            key={currentIndex}
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
            style={{
              animation: isPlaying ? 'progressFill 6s linear forwards' : 'none',
              width: isPlaying ? undefined : `${((currentIndex + 1) / AGILE_SLIDES.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Segmented Bottom Slide Indicators */}
      <div className="grid grid-cols-3 gap-2">
        {AGILE_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              idx === currentIndex
                ? 'bg-stone-900 border-amber-400/60 text-white shadow-sm'
                : 'bg-stone-950/60 border-stone-800/80 text-stone-400 hover:text-stone-300 hover:bg-stone-900/40'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className={idx === currentIndex ? 'text-amber-400 font-bold' : 'text-stone-500'}>
                0{idx + 1}
              </span>
              <span className="text-[10px] text-stone-400 hidden sm:inline">6s</span>
            </div>
            <span className="block text-xs font-semibold truncate pt-0.5">
              {slide.title.split('&')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Inline styles for 6-second keyframe animation */}
      <style>{`
        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};
