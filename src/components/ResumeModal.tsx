import React, { useEffect } from 'react';
import { X, Download, Printer, FileText, CheckCircle2, Mail, MapPin, ExternalLink } from 'lucide-react';
import { RESUME_DATA, PROFILE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextResume = () => {
    const textContent = `
================================================================================
${RESUME_DATA.name.toUpperCase()} - RESUME
${RESUME_DATA.tagline}
Email: ${RESUME_DATA.email} | Location: ${RESUME_DATA.location}
================================================================================

PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

--------------------------------------------------------------------------------
CORE PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
${RESUME_DATA.experiences
  .map(
    (exp) => `
[${exp.period}] ${exp.role}
Organization: ${exp.company} (${exp.location})
Key Responsibilities & Deliverables:
${exp.points.map((pt) => `  * ${pt}`).join('\n')}
`
  )
  .join('\n')}

--------------------------------------------------------------------------------
KEY COMPETENCIES BY DISCIPLINE
--------------------------------------------------------------------------------
* Project Management: ${RESUME_DATA.competencies['Project Management'].join(', ')}
* Graphic Design: ${RESUME_DATA.competencies['Graphic Design'].join(', ')}
* Virtual Assistance: ${RESUME_DATA.competencies['Virtual Assistance'].join(', ')}

--------------------------------------------------------------------------------
CERTIFICATIONS & CREDENTIALS
--------------------------------------------------------------------------------
${RESUME_DATA.certifications.map((c) => `* ${c}`).join('\n')}

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
${RESUME_DATA.education.map((e) => `* ${e.degree} - ${e.institution} (${e.year})`).join('\n')}
================================================================================
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Salam_Taiwo_Resume_2026.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl text-stone-100 overflow-hidden my-8 z-10 max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-900 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Curriculum Vitae · {RESUME_DATA.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_DATA.resumePdfUrl}
              download="Salam_Taiwo_Akanji_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              title="Download original uploaded PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF via browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTextResume}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Text Format</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white bg-stone-800 rounded-lg transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Readable CV Paper Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-stone-950 text-stone-200 font-sans print:bg-white print:text-black">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-stone-800 print:border-black">
            <div className="space-y-1.5">
              <h1 className="text-3xl font-extrabold text-white tracking-tight print:text-black">
                {RESUME_DATA.name}
              </h1>
              <p className="text-sm font-semibold text-amber-400 print:text-stone-800">
                {RESUME_DATA.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 print:text-stone-700 pt-1">
                <span className="flex items-center gap-1 font-mono">
                  📞 {RESUME_DATA.phone} ({RESUME_DATA.phoneIntl})
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  {RESUME_DATA.email}
                </span>
                <span aria-hidden="true">·</span>
                <a
                  href={RESUME_DATA.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-amber-400 hover:underline"
                >
                  🔗 {RESUME_DATA.linkedInText}
                </a>
              </div>
            </div>

            <div className="w-20 h-20 rounded-xl overflow-hidden border border-stone-700 shrink-0 hidden sm:block">
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-widest font-bold text-amber-400 print:text-black">
              Executive Profile &amp; Summary
            </h2>
            <p className="text-sm text-stone-300 print:text-stone-800 leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-amber-400 print:text-black">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-white print:text-black">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-stone-400 print:text-stone-700">
                        {exp.company} · {exp.location}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-amber-400/90 print:text-stone-800">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-stone-300 print:text-stone-800 flex items-start gap-2.5">
                        <span className="text-amber-400 font-bold shrink-0 mt-0.5">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies by Pillar */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs uppercase tracking-widest font-bold text-amber-400 print:text-black">
              Discipline Breakdown &amp; Toolkits
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 print:border-black space-y-1.5">
                <h3 className="text-xs font-bold text-white print:text-black">Project Management</h3>
                <p className="text-xs text-stone-400 print:text-stone-700 leading-relaxed">
                  {RESUME_DATA.competencies['Project Management'].join(', ')}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 print:border-black space-y-1.5">
                <h3 className="text-xs font-bold text-white print:text-black">Graphic &amp; Brand Design</h3>
                <p className="text-xs text-stone-400 print:text-stone-700 leading-relaxed">
                  {RESUME_DATA.competencies['Graphic Design'].join(', ')}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 print:border-black space-y-1.5">
                <h3 className="text-xs font-bold text-white print:text-black">Executive Virtual Assistance</h3>
                <p className="text-xs text-stone-400 print:text-stone-700 leading-relaxed">
                  {RESUME_DATA.competencies['Virtual Assistance'].join(', ')}
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-widest font-bold text-amber-400 print:text-black">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-stone-300 print:text-stone-800">
                {RESUME_DATA.certifications.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-widest font-bold text-amber-400 print:text-black">
                Education
              </h2>
              {RESUME_DATA.education.map((edu, i) => (
                <div key={i} className="text-xs text-stone-300 print:text-stone-800 space-y-0.5">
                  <span className="font-semibold block text-white print:text-black">{edu.degree}</span>
                  <span className="text-stone-400 print:text-stone-700">{edu.institution} · {edu.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:p-5 border-t border-stone-800 bg-stone-900 flex items-center justify-between gap-4 sticky bottom-0 z-20">
          <span className="text-xs text-stone-400">
            Available for immediate verification and client references upon request.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTextResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
