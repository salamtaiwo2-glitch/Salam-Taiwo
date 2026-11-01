import React, { useEffect } from 'react';
import { X, Award, ShieldCheck, Download, FileText, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS, PROFILE } from '../data/portfolioData';

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificationsModal: React.FC<CertificationsModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl text-stone-100 overflow-hidden my-8 z-10 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-900 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Official Verified Certifications &amp; Credentials
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumePdfUrl}
              download="Salam_Taiwo_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white bg-stone-800 rounded-lg transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-stone-950 text-stone-200">
          
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white tracking-tight">
              Credentials &amp; Coursework Records
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Verified credentials issued by accredited institutions and industry training providers.
            </p>
          </div>

          {/* Top 2 Primary Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* DataCamp Excel Certificate */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  DataCamp #42,525,349
                </span>
                <span className="text-xs text-stone-400">Aug 23, 2025</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Introduction to Excel – Statement of Accomplishment
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Awarded by DataCamp CEO Jonathan Cornelissen for mastering foundational and analytical spreadsheet workflows in Microsoft Excel.
              </p>
              <div className="rounded-xl overflow-hidden border border-stone-800 aspect-[16/9] bg-stone-950">
                <img
                  src="/assets/aistudio/Screenshot_20260423-122111_1_3643eb96.png"
                  alt="DataCamp Introduction to Excel Statement of Accomplishment"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Mercatura VA Certificate */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Mercatura School of Tech
                </span>
                <span className="text-xs text-stone-400">Oct 5, 2025</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Certified Virtual Assistant Certificate
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Certified completion of intensive Virtual Assistant training achieving above credit level across scheduling, executive support, and digital archive management.
              </p>
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-mono">Viruall_Assitant_Cert.pdf</span>
                </div>
                <a
                  href="/assets/aistudio/Viruall_Assitant_Cert_dbe6cfc1.pdf"
                  download="Salam_Taiwo_Virtual_Assistant_Certificate.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Official Certificate PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Other Ongoing & Completed Credentials */}
          <div className="space-y-4 pt-4 border-t border-stone-800">
            <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400">
              Additional Accredited Programs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.filter(c => c.id !== 'datacamp-excel' && c.id !== 'mercatura-va').map(cert => (
                <div key={cert.id} className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{cert.title}</span>
                    <span className="text-[11px] text-amber-400 font-mono">{cert.issuer}</span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skillsCovered.map((s, i) => (
                      <span key={i} className="text-[10px] font-mono text-stone-300 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
