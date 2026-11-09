import React, { useState } from 'react';
import { Sparkles, Send, Mail, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ContactFormData } from '../../types';
import { LiquidGlassPill } from '../LiquidGlass/LiquidGlassPill';
import { LiquidGlassCard } from '../LiquidGlass/LiquidGlassCard';
import { LiquidGlassButton } from '../LiquidGlass/LiquidGlassButton';
import { sound } from '../../utils/sound';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Video Editing',
    budget: '₹1,500–₹3,000',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Video Editing',
    'Motion Graphics',
    'Thumbnail Design',
    'Graphic Design',
    'Website Development',
    'Other',
  ];

  const budgetOptions = [
    'Under ₹500',
    '₹500–₹1,500',
    '₹1,500–₹3,000',
    '₹3,000–₹5,000',
    '₹5,000+',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name or brand.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.description.trim() || formData.description.length < 10) {
      newErrors.description = 'Please describe your project (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      sound.playClick();
      return;
    }

    sound.playSuccess();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FF5722', '#FF9B45', '#FFFFFF'],
      });
    } catch {
      // Confetti fallback
    }

    setSubmitted(true);

    const subject = encodeURIComponent(`[FLARE STUDIOS Inquiry] ${formData.projectType} — ${formData.name}`);
    const bodyContent = `Hello FLARE STUDIOS Team,

I would like to initiate a new project with FLARE STUDIOS:

• Client / Brand: ${formData.name}
• Contact Email: ${formData.email}
• Project Category: ${formData.projectType}
• Approximate Budget: ${formData.budget}

Project Brief & Description:
${formData.description}

Looking forward to igniting this idea together!

Best regards,
${formData.name}`;

    const encodedBody = encodeURIComponent(bodyContent);

    // Primary: Open Gmail Web Composer directly in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=flarestudios.main@gmail.com&su=${subject}&body=${encodedBody}`;
    
    // Also prepare mailto fallback
    const mailtoUrl = `mailto:flarestudios.main@gmail.com?subject=${subject}&body=${encodedBody}`;

    // Try opening Gmail Web first, with mailto fallback
    const win = window.open(gmailUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText('flarestudios.main@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 bg-[#080808]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Heading & Studio Details */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <div className="mb-3 inline-block">
                <LiquidGlassPill variant="orange" icon={<Sparkles className="h-3 w-3" />}>
                  GET IN TOUCH
                </LiquidGlassPill>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                HAVE AN IDEA? <br />
                <span className="text-flare">LET’S MAKE IT IGNITE.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed font-sans">
                Have a project in mind? Let’s create something worth remembering. Fill out the brief and your email client will launch with everything pre-filled.
              </p>
            </div>

            {/* Direct Email Card (Apple Liquid Glass) */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-white/40">
                Direct Inquiries
              </span>
              <div className="mt-2 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5722]/20 text-[#FF5722] border border-[#FF5722]/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm sm:text-base font-bold text-white">
                      flarestudios.main@gmail.com
                    </div>
                    <div className="font-mono text-[11px] text-[#FF9B45]">
                      Typical response within 24 hours
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-green-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Studio Availability Notice */}
            <div className="flex items-center gap-3 rounded-2xl border border-[#FF5722]/30 bg-[#FF5722]/10 p-5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5722]"></span>
              </span>
              <span className="font-sans text-xs sm:text-sm font-medium text-white/90">
                Now accepting select commissions for 2026.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Liquid Glass Inquiry Form */}
          <div className="lg:col-span-7">
            <LiquidGlassCard className="p-8 sm:p-10 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5722]/20 text-[#FF5722] border border-[#FF5722]/40 shadow-[0_0_30px_rgba(255,87,34,0.4)]">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                    INQUIRY PREPARED!
                  </h3>
                  <p className="mx-auto max-w-md text-sm text-white/70 leading-relaxed">
                    Your Gmail / email provider window has been initiated with your project scope pre-formatted. Simply hit send in your email application to deliver it to <span className="text-[#FF5722] font-semibold">flarestudios.main@gmail.com</span>.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10"
                    >
                      EDIT DETAILS
                    </button>
                    <a
                      href="mailto:flarestudios.main@gmail.com"
                      className="inline-flex items-center gap-2 rounded-full bg-[#FF5722] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,87,34,0.4)]"
                    >
                      OPEN EMAIL CLIENT <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                        Your Name / Brand *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Vance"
                        className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-white/20 backdrop-blur-md outline-none transition-all ${
                          errors.name
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#FF5722]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 font-mono text-[11px] text-red-400">
                          <AlertCircle className="h-3 w-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-white/20 backdrop-blur-md outline-none transition-all ${
                          errors.email
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#FF5722]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 font-mono text-[11px] text-red-400">
                          <AlertCircle className="h-3 w-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                      Project Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => {
                              sound.playHover();
                              setFormData({ ...formData, projectType: type });
                            }}
                            className={`rounded-xl px-3.5 py-2 text-xs font-semibold tracking-wider transition-all ${
                              isSelected
                                ? 'bg-[#FF5722] text-white border border-[#FF5722] shadow-[0_0_15px_rgba(255,87,34,0.4)]'
                                : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/10 hover:border-white/20'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Approximate Budget Selector in INR */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                      Approximate Budget Scope
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((budget) => {
                        const isSelected = formData.budget === budget;
                        return (
                          <button
                            type="button"
                            key={budget}
                            onClick={() => {
                              sound.playHover();
                              setFormData({ ...formData, budget });
                            }}
                            className={`rounded-xl px-3.5 py-2 text-xs font-semibold tracking-wider transition-all ${
                              isSelected
                                ? 'bg-[#FF9B45] text-black font-bold border border-[#FF9B45] shadow-[0_0_15px_rgba(255,155,69,0.4)]'
                                : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/10 hover:border-white/20'
                            }`}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                      Project Brief & Vision *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about your project vision, timeline, deliverables, and goals..."
                      className={`w-full rounded-xl border bg-black/40 p-4 text-sm text-white placeholder-white/20 backdrop-blur-md outline-none transition-all ${
                        errors.description
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/10 focus:border-[#FF5722]'
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1 flex items-center gap-1 font-mono text-[11px] text-red-400">
                        <AlertCircle className="h-3 w-3" /> {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <LiquidGlassButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      icon={<Send className="h-4 w-4" />}
                    >
                      SEND REQUEST VIA EMAIL
                    </LiquidGlassButton>
                    <p className="mt-3 text-center font-mono text-[11px] text-white/40">
                      Instantly opens your mail composer addressed to flarestudios.main@gmail.com
                    </p>
                  </div>
                </form>
              )}
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
