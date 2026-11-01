import React, { useState } from 'react';
import { Award, FileText, CheckCircle2, Download, ExternalLink, ShieldCheck, Eye, X } from 'lucide-react';
import { CERTIFICATIONS, CertificationItem, PROFILE } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="bg-stone-900 text-stone-100 py-20 lg:py-28 border-b border-stone-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-800">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Proof of Authenticity</span>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span>Professional Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Certifications &amp; Training
            </h2>
            <p className="text-base text-stone-300 leading-relaxed">
              Every credential below represents verified, completed coursework and standardized assessments across Microsoft Excel, Data Analysis, Virtual Assistance, and Agile Project Management.
            </p>
          </div>

          {/* Quick PDF resume & credentials download hub */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={PROFILE.resumePdfUrl}
              download="Salam_Taiwo_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Resume</span>
            </a>

            <a
              href="/assets/aistudio/Viruall_Assitant_Cert_dbe6cfc1.pdf"
              download="Salam_Taiwo_Virtual_Assistant_Certificate.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 border border-stone-700/60 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Download VA Certificate</span>
            </a>
          </div>
        </div>

        {/* Highlighted Top Cards: DataCamp Excel Certificate & Mercatura VA Certificate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. DataCamp Excel Statement of Accomplishment */}
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  DataCamp Verified Accomplishment
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Cert #42,525,349
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Introduction to Excel
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Issued by DataCamp (Signed by Jonathan Cornelissen, CEO) · Completed Aug 23, 2025
                </p>
              </div>

              {/* Certificate Image Frame */}
              <div
                onClick={() => setSelectedCert(CERTIFICATIONS[0])}
                className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-900 border border-stone-800 cursor-pointer group/img"
              >
                <img
                  src="/assets/aistudio/Screenshot_20260423-122111_1_3643eb96.png"
                  alt="DataCamp Introduction to Excel Statement of Accomplishment"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-[2px]">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Click to Inspect Full Certificate</span>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                Official statement certifying completion of spreadsheet architecture, advanced calculation formulas, tabular datasets, and business data manipulation in Microsoft Excel.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-300">
                  Excel Formulas
                </span>
                <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-300">
                  Data Cleanup
                </span>
                <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-300">
                  Reporting
                </span>
              </div>

              <button
                onClick={() => setSelectedCert(CERTIFICATIONS[0])}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors shrink-0 cursor-pointer"
              >
                <span>View Certificate</span>
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Mercatura School of Technology Certified Virtual Assistant */}
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  Accredited Technology Course
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Dated Oct 5, 2025
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Certified Virtual Assistant
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Mercatura School of Technology (Director of Studies) · Achieved Above Credit Level
                </p>
              </div>

              {/* Certificate preview banner */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/20 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
                      VA
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Official Course Completion</span>
                      <span className="text-[11px] text-stone-400">Awarded to Salam Taiwo</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                    Verified PDF
                  </span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  "This is to certify that the above named student participated and completed an intensive virtual assistant course with Mercatura School of Technology having achieved above credit level and hereby certified a virtual assistant."
                </p>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                Covers executive time &amp; calendar management across timezones, inbox zero workflows, Google Workspace suite management, and confidential communication handling.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-300">
                  Executive Calendar
                </span>
                <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-300">
                  Google Workspace
                </span>
                <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[11px] font-mono text-stone-300">
                  Administration
                </span>
              </div>

              <a
                href="/assets/aistudio/Viruall_Assitant_Cert_dbe6cfc1.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
              >
                <span>Open PDF Certificate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Secondary Row: Additional Credentials & Training */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.slice(2).map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl bg-stone-950 border border-stone-800 hover:border-stone-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span className="font-mono text-amber-400">{cert.issuer}</span>
                  <span className="text-[11px]">{cert.date}</span>
                </div>

                <h4 className="text-base font-bold text-white leading-snug">
                  {cert.title}
                </h4>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-800/80 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {cert.skillsCovered.slice(0, 2).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-stone-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for inspecting full certificate image */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setSelectedCert(null)} />

          <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 overflow-hidden z-10 space-y-4 max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{selectedCert.title} · {selectedCert.issuer}</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex items-center justify-center py-2 flex-1">
              {selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
              ) : selectedCert.pdfUrl ? (
                <iframe
                  src={selectedCert.pdfUrl}
                  title={selectedCert.title}
                  className="w-full h-[65vh] rounded-xl border border-stone-800"
                />
              ) : (
                <div className="p-8 text-center text-stone-400">
                  <p>{selectedCert.description}</p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>Verified Credential for Salam Taiwo</span>
              {selectedCert.image && (
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open Full Image in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
