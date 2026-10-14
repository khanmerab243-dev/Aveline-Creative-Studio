import React from 'react';
import { ArrowRight, Sparkles, Heart, Mail } from 'lucide-react';

interface CallToActionProps {
  onStartProject: () => void;
  onGetInTouch: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onStartProject, onGetInTouch }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded CTA Banner Card */}
        <div
          id="main-cta-card"
          className="relative bg-gradient-to-br from-[#FCE5E9] via-[#FFF9F8] to-[#F7C8D3]/70 rounded-[36px] border border-[#F7C8D3] p-10 sm:p-14 lg:p-20 text-center shadow-[0_20px_50px_rgba(217,107,132,0.12)] overflow-hidden"
        >
          {/* Subtle Decorative Floating Symbols */}
          <div
            className="absolute top-10 left-12 text-[#D96B84]/30 text-2xl font-serif select-none pointer-events-none animate-float-slow"
            aria-hidden="true"
          >
            ✦
          </div>
          <div
            className="absolute bottom-10 right-12 text-[#D96B84]/30 text-3xl font-serif select-none pointer-events-none animate-float-reverse"
            aria-hidden="true"
          >
            ✧
          </div>
          <div
            className="absolute top-1/2 left-8 text-[#D96B84]/20 text-lg font-serif select-none pointer-events-none"
            aria-hidden="true"
          >
            ♥
          </div>
          <div
            className="absolute top-12 right-20 text-[#D96B84]/20 text-base font-serif select-none pointer-events-none"
            aria-hidden="true"
          >
            ✦
          </div>

          {/* Content Container */}
          <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Together</span>
            </div>

            <h2
              id="cta-banner-heading"
              className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#292326] tracking-tight leading-[1.12] mb-6"
            >
              Have an idea{' '}
              <span className="font-serif italic font-normal text-[#D96B84]">
                worth building?
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg md:text-xl text-[#756B70] leading-[1.65] max-w-xl mb-10">
              Let's turn it into a digital experience that feels as good as it works. We are currently booking for Q2 and Q3 2026.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button
                onClick={onStartProject}
                id="cta-start-project-btn"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D96B84] text-white font-sans text-base font-medium shadow-[0_6px_22px_rgba(217,107,132,0.35)] hover:bg-[#B64761] hover:shadow-[0_8px_28px_rgba(217,107,132,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onGetInTouch}
                id="cta-get-in-touch-btn"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#FFFFFF] border border-[#F0DDE1] text-[#292326] font-sans text-base font-medium hover:border-[#D96B84] hover:bg-[#FCE5E9]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <Mail className="w-4 h-4 text-[#D96B84]" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Availability Indicator */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#756B70] bg-[#FFFFFF]/80 px-4 py-1.5 rounded-full border border-[#F0DDE1]">
              <span className="w-2 h-2 rounded-full bg-[#D96B84] animate-pulse" />
              <span>Available for 2 select bespoke brand projects this season</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
