import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HireMeSectionProps {
  initialService?: string;
  initialProjectTitle?: string;
}

export const HireMeSection: React.FC<HireMeSectionProps> = ({
  initialService = 'project-management',
  initialProjectTitle = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService,
    timeline: 'Within 2-4 weeks',
    budget: '$1,000 - $3,000',
    message: initialProjectTitle ? `Hi Salam, I saw your project "${initialProjectTitle}" and would love to discuss a similar project...` : '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a brief description of your inquiry.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const generateMailtoUrl = (subjectPrefix: string, customBody?: string) => {
    const subject = encodeURIComponent(`${subjectPrefix} - Salam Taiwo Portfolio Inquiry`);
    const body = encodeURIComponent(
      customBody ||
      `Hi Salam,\n\nI came across your portfolio and would like to discuss working together on:\n- Service: ${formData.service}\n- Timeline: ${formData.timeline}\n- Details: ${formData.message}\n\nBest regards,\n${formData.name || 'A prospective client'}\n${formData.email || ''}`
    );
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-stone-950 text-stone-100 py-20 lg:py-28 border-b border-stone-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div id="hire-me" className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
            <span>Get in Touch</span>
            <span aria-hidden="true" className="text-stone-700">·</span>
            <span>Direct Hiring &amp; Project Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mail Me For Hire &amp; Send Inquiries
          </h2>
          <p className="text-base text-stone-300 leading-relaxed">
            Have a project in mind, need operational leverage, or looking to hire a multi-disciplinary specialist? Use the direct mail links below or submit the inquiry form.
          </p>
        </div>

        {/* 2-Column Split: Left "Mail Me for Hire" + Right "Contact Form" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Instant "Mail Me For Hire" Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Direct Mail Channels
                </span>
                <h3 className="text-xl font-bold text-white">
                  One-Click Mail for Hire
                </h3>
                <p className="text-xs text-stone-300">
                  Click any service below to open a tailored draft directly in your preferred email client:
                </p>
              </div>

              {/* Service mailto triggers */}
              <div className="space-y-3">
                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Project Management Engagement Inquiry - Salam Taiwo")}&body=${encodeURIComponent("Hi Salam,\n\nI am looking to hire you for Project Management assistance.\n\nProject Scope:\nTimeline:\nEstimated Budget:\n\nLooking forward to hearing from you!")}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-400/50 transition-all text-xs"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                      Hire for Project Management
                    </span>
                    <span className="text-stone-400 text-[11px]">
                      Agile sprint leadership, roadmaps &amp; delivery
                    </span>
                  </div>
                  <Mail className="w-4 h-4 text-stone-400 group-hover:text-amber-400 shrink-0 ml-2" />
                </a>

                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Graphic & Brand Design Project - Salam Taiwo")}&body=${encodeURIComponent("Hi Salam,\n\nI would love to hire you for a Graphic Design project.\n\nDesign Needs (Branding / Packaging / Social):\nTarget Deadline:\nBudget:\n\nBest regards,")}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-400/50 transition-all text-xs"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                      Hire for Graphic Design
                    </span>
                    <span className="text-stone-400 text-[11px]">
                      Brand identity, stationery, packaging &amp; collateral
                    </span>
                  </div>
                  <Mail className="w-4 h-4 text-stone-400 group-hover:text-amber-400 shrink-0 ml-2" />
                </a>

                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Executive Virtual Assistance Inquiry - Salam Taiwo")}&body=${encodeURIComponent("Hi Salam,\n\nI am interested in executive virtual assistance support.\n\nExecutive Needs (Calendar, Travel, CRM, Operations):\nExpected Weekly Hours / Commitment:\nStart Date:\n\nBest regards,")}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-400/50 transition-all text-xs"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                      Hire for Virtual Assistance
                    </span>
                    <span className="text-stone-400 text-[11px]">
                      Inbox zero, travel logistics, CRM &amp; executive ops
                    </span>
                  </div>
                  <Mail className="w-4 h-4 text-stone-400 group-hover:text-amber-400 shrink-0 ml-2" />
                </a>

                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Multi-Disciplinary Retainer Partnership - Salam Taiwo")}&body=${encodeURIComponent("Hi Salam,\n\nI am looking for a combined multi-disciplinary partner across PM, Design, and Virtual Assistance.\n\nOverview of our company & needs:\n\nLet's set up a discovery call!")}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-400/50 transition-all text-xs"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                      Multi-Disciplinary Retainer
                    </span>
                    <span className="text-stone-400 text-[11px]">
                      Combined PM + Design + Operations package
                    </span>
                  </div>
                  <Mail className="w-4 h-4 text-stone-400 group-hover:text-amber-400 shrink-0 ml-2" />
                </a>
              </div>

              {/* Direct Email Address & Clipboard Button */}
              <div className="pt-4 border-t border-stone-800 space-y-2">
                <span className="text-xs text-stone-400 block font-mono">
                  Official Email Inbox:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex-1 font-mono text-sm text-amber-400 hover:underline truncate bg-stone-950 p-2.5 rounded-lg border border-stone-800"
                  >
                    {PROFILE.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg border border-stone-700/60 transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Response SLA Note */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-stone-950 border border-stone-800/80 text-xs text-stone-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Typical response time: <strong className="text-stone-200 font-semibold">&lt; 24 business hours</strong>.</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800">
              
              <div className="mb-6 space-y-1">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Inquiry Form
                </span>
                <h3 className="text-xl font-bold text-white">
                  Send a Detailed Project Inquiry
                </h3>
                <p className="text-xs text-stone-300">
                  Fill in your project requirements to receive a customized proposal and schedule an introductory alignment call.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-stone-950 border border-emerald-900/60 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">
                      Inquiry Ready to Dispatch!
                    </h4>
                    <p className="text-sm text-stone-300 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry for <strong className="text-amber-400">{formData.service}</strong> has been prepared.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailtoUrl(`Project Inquiry from ${formData.name}`)}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Launch In Your Email App</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 text-xs font-medium text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-xl transition-colors cursor-pointer"
                    >
                      Edit Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-300">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                      {errors.name && <span className="text-xs text-rose-400">{errors.name}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-300">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                      {errors.email && <span className="text-xs text-rose-400">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Company and Service needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-300">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Ltd / Stealth Venture"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-300">
                        Primary Expertise Needed <span className="text-amber-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                      >
                        <option value="Agile Project Management">Agile Project Management</option>
                        <option value="Brand & Graphic Design">Brand &amp; Graphic Design</option>
                        <option value="Executive Virtual Assistance">Executive Virtual Assistance</option>
                        <option value="Multi-Disciplinary Retainer">Multi-Disciplinary Package (All-in-one)</option>
                        <option value="Other Consultation">Other Advisory / Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-300">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                      >
                        <option value="Immediate (This Week)">Immediate (This Week)</option>
                        <option value="Within 2-4 weeks">Within 2–4 Weeks</option>
                        <option value="Next Quarter">Next Quarter</option>
                        <option value="Ongoing Long-term Retainer">Ongoing Long-term Retainer</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-medium text-stone-300">
                        Estimated Budget Bracket
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                        <option value="$3,000 - $6,000">$3,000 – $6,000</option>
                        <option value="$6,000+ / Monthly Retainer">$6,000+ / Ongoing Retainer</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Scope / Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-stone-300">
                      Project Details &amp; Objectives <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to achieve, your team structure, deliverables needed, or any specific deadlines..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                    {errors.message && <span className="text-xs text-rose-400">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>Strict confidentiality &amp; non-disclosure honored.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry &amp; Request Proposal</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
