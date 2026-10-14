import React from 'react';
import { primaryTestimonial } from '../data/studioData';
import { Quote, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-[#FFF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div
            id="testimonial-eyebrow"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Words</span>
          </div>

          <h2
            id="testimonial-heading"
            className="font-sans font-bold text-3xl sm:text-4xl text-[#292326] tracking-tight"
          >
            Trusted by founders who{' '}
            <span className="font-serif italic font-normal text-[#D96B84]">
              cherish detail.
            </span>
          </h2>
        </div>

        {/* Primary Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div
            id="primary-testimonial-card"
            className="relative bg-[#FFFFFF] rounded-[32px] border border-[#F0DDE1] p-8 sm:p-12 lg:p-14 shadow-[0_16px_48px_rgba(217,107,132,0.08)] overflow-hidden"
          >
            {/* Soft decorative background glow */}
            <div
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#FCE5E9]/50 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Quotation Mark Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shadow-xs">
                <Quote className="w-6 h-6 fill-current" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 bg-[#FFF9F8] px-3 py-1.5 rounded-full border border-[#F0DDE1]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D96B84] text-[#D96B84]" />
                ))}
                <span className="text-xs font-semibold text-[#292326] ml-1">5.0 / 5.0</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote
              id="testimonial-quote-text"
              className="font-serif text-2xl sm:text-3xl md:text-[2.1rem] text-[#292326] leading-snug sm:leading-[1.3] mb-10"
            >
              “{primaryTestimonial.quote}”
            </blockquote>

            {/* Client Profile & Impact Metric */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#F0DDE1]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F7C8D3] shadow-xs shrink-0">
                  <img
                    src={primaryTestimonial.image}
                    alt={primaryTestimonial.author}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-[#292326]">
                    {primaryTestimonial.author}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#756B70]">
                    {primaryTestimonial.role} • <span className="text-[#D96B84] font-medium">{primaryTestimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Verified Result Badge */}
              <div className="flex items-center gap-2 bg-[#FFF9F8] px-4 py-2 rounded-full border border-[#F7C8D3] self-start sm:self-center">
                <CheckCircle2 className="w-4 h-4 text-[#D96B84]" />
                <span className="text-xs font-semibold text-[#292326]">
                  {primaryTestimonial.impact}
                </span>
              </div>
            </div>

          </div>

          <p className="text-center text-xs text-[#756B70]/70 mt-4">
            * Showcase testimonial representing an end-to-end client engagement with Aveline Creative Studio.
          </p>
        </div>

      </div>
    </section>
  );
};
