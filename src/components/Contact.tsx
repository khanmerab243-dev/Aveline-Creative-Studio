import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Calendar, Clock, CheckCircle2, Send, Sparkles, Copy, Check } from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
  preselectedProject?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService, preselectedProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Design',
    budgetRange: '$5k - $10k',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    } else if (preselectedProject) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi Aveline team, I really admired your work on ${preselectedProject} and would love to discuss a project with a similar aesthetic and scope.`,
      }));
    }
  }, [preselectedService, preselectedProject]);

  const projectTypes = [
    'Web Design',
    'UI/UX Design',
    'Branding',
    'Creative Development',
    'Full Experience',
  ];

  const budgetRanges = [
    '$3k - $5k',
    '$5k - $10k',
    '$10k - $20k',
    '$20k+',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com)';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note about your project';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters so we can understand your goals';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate polite network transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@avelinestudio.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Web Design',
      budgetRange: '$5k - $10k',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              id="contact-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-4 self-start"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start A Project</span>
            </div>

            <h2
              id="contact-heading"
              className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-[1.15] mb-5"
            >
              Let's create something{' '}
              <span className="font-serif italic font-normal text-[#D96B84]">
                meaningful.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#756B70] leading-[1.65] mb-8">
              Whether you are ready to launch a new brand, completely elevate your web presence, or explore creative direction, we would love to hear about your vision.
            </p>

            {/* Direct Studio Details Cards */}
            <div className="space-y-4 mb-8">
              
              {/* Email with copy button */}
              <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#F0DDE1] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#756B70] uppercase tracking-wider block">
                      Direct Inquiries
                    </span>
                    <a
                      href="mailto:hello@avelinestudio.design"
                      className="text-sm sm:text-base font-semibold text-[#292326] hover:text-[#D96B84] transition-colors"
                    >
                      hello@avelinestudio.design
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-[#756B70] hover:text-[#292326] hover:bg-[#FCE5E9] transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Studio Location */}
              <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#F0DDE1] shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#756B70] uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#292326]">
                    Paris, France • Collaborating Globally
                  </span>
                </div>
              </div>

              {/* Availability & Turnaround */}
              <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#F0DDE1] shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#756B70] uppercase tracking-wider block">
                    Availability Status
                  </span>
                  <span className="text-sm font-medium text-[#292326]">
                    Booking Q2/Q3 2026 • Responses within 24h
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Polished Validated Contact Form */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-container"
              className="bg-[#FFFFFF] rounded-[28px] border border-[#F0DDE1] p-7 sm:p-10 shadow-[0_16px_40px_rgba(217,107,132,0.08)] relative"
            >
              {isSubmitted ? (
                /* Celebratory Success Message */
                <div
                  id="contact-success-state"
                  className="py-12 flex flex-col items-center text-center animate-fade-in"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] text-[#D96B84] flex items-center justify-center mb-6 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#292326] mb-3">
                    Thank you, {formData.name || 'there'}!
                  </h3>

                  <p className="text-base text-[#756B70] max-w-md mb-8 leading-relaxed">
                    We've received your project inquiry regarding <strong className="text-[#292326]">{formData.projectType}</strong>. Our studio will review your note and reach out at <strong className="text-[#292326]">{formData.email}</strong> within 24 business hours.
                  </p>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFF9F8] border border-[#F0DDE1] text-[#292326] font-medium text-sm hover:border-[#D96B84] hover:bg-[#FCE5E9]/50 transition-all cursor-pointer"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name-input"
                        className="block text-xs font-semibold text-[#292326] uppercase tracking-wider mb-2"
                      >
                        Your Name <span className="text-[#D96B84]">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        placeholder="e.g. Clara Dupont"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF9F8] border text-sm text-[#292326] placeholder-[#756B70]/50 transition-all outline-none focus:bg-white ${
                          errors.name
                            ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                            : 'border-[#F0DDE1] focus:border-[#D96B84] focus:ring-2 focus:ring-[#F7C8D3]/40'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email-input"
                        className="block text-xs font-semibold text-[#292326] uppercase tracking-wider mb-2"
                      >
                        Email Address <span className="text-[#D96B84]">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        placeholder="clara@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF9F8] border text-sm text-[#292326] placeholder-[#756B70]/50 transition-all outline-none focus:bg-white ${
                          errors.email
                            ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                            : 'border-[#F0DDE1] focus:border-[#D96B84] focus:ring-2 focus:ring-[#F7C8D3]/40'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Select Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292326] uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#D96B84] text-white shadow-xs'
                                : 'bg-[#FFF9F8] border border-[#F0DDE1] text-[#756B70] hover:text-[#292326] hover:border-[#F7C8D3]'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Range Select Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292326] uppercase tracking-wider mb-2">
                      Anticipated Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => {
                        const isSelected = formData.budgetRange === range;
                        return (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setFormData({ ...formData, budgetRange: range })}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#D96B84] text-white shadow-xs'
                                : 'bg-[#FFF9F8] border border-[#F0DDE1] text-[#756B70] hover:text-[#292326] hover:border-[#F7C8D3]'
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Overview / Message */}
                  <div>
                    <label
                      htmlFor="contact-message-input"
                      className="block text-xs font-semibold text-[#292326] uppercase tracking-wider mb-2"
                    >
                      Project Details & Timeline <span className="text-[#D96B84]">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      placeholder="Tell us about your brand, what you're hoping to build, and any target launch dates..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FFF9F8] border text-sm text-[#292326] placeholder-[#756B70]/50 transition-all outline-none focus:bg-white resize-none ${
                        errors.message
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-[#F0DDE1] focus:border-[#D96B84] focus:ring-2 focus:ring-[#F7C8D3]/40'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-button"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D96B84] text-white font-sans text-sm font-medium shadow-[0_4px_16px_rgba(217,107,132,0.3)] hover:bg-[#B64761] hover:shadow-[0_6px_22px_rgba(217,107,132,0.4)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 transition-all duration-200 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Note...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-[#756B70] text-center sm:text-right">
                      No spam, ever. Your privacy is respected.
                    </span>
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
