import React from 'react';
import { Mail, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface MotionSocialIconsProps {
  variant?: 'inline' | 'floating' | 'hero';
}

export const MotionSocialIcons: React.FC<MotionSocialIconsProps> = ({ variant = 'inline' }) => {
  const socialLinks = [
    {
      id: 'gmail',
      name: 'Gmail',
      handle: PROFILE.email,
      href: `mailto:${PROFILE.email}?subject=Project%20Inquiry%20for%20Salam%20Taiwo`,
      color: 'from-red-500 to-rose-600',
      badgeBg: 'bg-red-500/10 text-red-400 border-red-500/30',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
      description: 'salamtaiwo2@gmail.com',
      actionLabel: 'Send Gmail',
      animationDelay: '0s',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'linkedin.com/in/salamtaiwo-',
      href: PROFILE.linkedIn,
      color: 'from-blue-500 to-cyan-600',
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
      description: 'Connect on LinkedIn',
      actionLabel: 'View Profile',
      animationDelay: '0.2s',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '+234 906 839 2897',
      href: `https://wa.me/2349068392897?text=${encodeURIComponent('Hello Salam Taiwo, I am contacting you regarding your project management, design, and virtual assistant services.')}`,
      color: 'from-emerald-500 to-green-600',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.56 0 8.27 3.71 8.27 8.27 0 2.21-.86 4.29-2.42 5.85-1.56 1.56-3.64 2.42-5.85 2.42-1.44 0-2.86-.38-4.11-1.1l-.29-.17-3.12.82.83-3.04-.19-.31c-.8-1.28-1.22-2.77-1.22-4.3 0-4.56 3.71-8.27 8.27-8.27m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/>
        </svg>
      ),
      description: '09068392897',
      actionLabel: 'Chat on WhatsApp',
      animationDelay: '0.4s',
    },
  ];

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
        <div className="flex flex-col gap-2 p-1.5 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-800 shadow-2xl">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              title={`${item.name}: ${item.description}`}
              className={`relative group p-2.5 rounded-xl bg-stone-950 text-stone-300 hover:text-white border border-stone-800 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-110 active:scale-95 ${item.glowColor}`}
              style={{
                animation: 'gentleFloat 3s ease-in-out infinite',
                animationDelay: item.animationDelay,
              }}
            >
              {item.icon}

              {/* Floating Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-xs text-white whitespace-nowrap shadow-xl pointer-events-none">
                <span className="font-semibold">{item.name}</span>
                <span className="text-stone-400 text-[11px]">· {item.actionLabel}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Status indicator badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-950/90 backdrop-blur-md border border-stone-800 text-[10px] text-stone-400 font-mono shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Direct Channels Active</span>
        </div>

        <style>{`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }
        `}</style>
      </div>
    );
  }

  // Hero / Inline presentation
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Direct Reach Channels · Interactive Motion</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`group relative p-3.5 sm:p-4 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-400/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${item.glowColor} flex items-center justify-between gap-3`}
            style={{
              animation: 'hoverGlow 4s ease-in-out infinite',
              animationDelay: item.animationDelay,
            }}
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Motion Animated Icon Container */}
              <div 
                className={`p-2.5 rounded-xl bg-stone-950 text-white border border-stone-800 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm shrink-0`}
              >
                {item.icon}
              </div>

              <div className="min-w-0">
                <span className="block text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.name}
                </span>
                <span className="block text-[11px] text-stone-400 truncate font-mono">
                  {item.description}
                </span>
              </div>
            </div>

            <div className="shrink-0 p-1.5 rounded-lg bg-stone-950 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all">
              <ExternalLink className="w-3.5 h-3.5" />
            </div>

            {/* Subtle motion aura line */}
            <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-amber-400/0 group-hover:via-amber-400/80 to-transparent transition-all duration-500" />
          </a>
        ))}
      </div>

      <style>{`
        @keyframes hoverGlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
      `}</style>
    </div>
  );
};
