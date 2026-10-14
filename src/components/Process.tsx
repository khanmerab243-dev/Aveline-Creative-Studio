import React from 'react';
import { processSteps, ProcessStep } from '../data/studioData';
import { Sparkles, CheckCircle, Clock } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 relative bg-[#FFF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div
            id="process-eyebrow"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Workflow</span>
          </div>

          <h2
            id="process-heading"
            className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-[1.15] mb-4"
          >
            From idea to{' '}
            <span className="font-serif italic font-normal text-[#D96B84]">
              launch.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#756B70] leading-[1.65]">
            A structured, collaborative roadmap designed to eliminate guesswork and keep our creative partnership calm and transparent.
          </p>
        </div>

        {/* Desktop Process Flow: 4 Horizontal Steps with Connecting Line */}
        <div className="hidden lg:block relative mb-12">
          {/* Subtle Connecting Horizontal Line */}
          <div
            className="absolute top-8 left-16 right-16 h-0.5 border-t-2 border-dashed border-[#F0DDE1] -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step: ProcessStep) => (
              <div
                key={step.number}
                id={`process-step-${step.number}`}
                className="group flex flex-col items-start bg-[#FFFFFF] rounded-[24px] border border-[#F0DDE1] p-6 shadow-[0_8px_24px_rgba(217,107,132,0.06)] hover:shadow-[0_16px_36px_rgba(217,107,132,0.12)] hover:border-[#F7C8D3] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step Top Node */}
                <div className="flex items-center justify-between w-full mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF9F8] border border-[#F0DDE1] group-hover:bg-[#D96B84] group-hover:border-[#D96B84] text-[#D96B84] group-hover:text-white flex items-center justify-center font-serif text-lg font-bold transition-all shadow-xs">
                    {step.number}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#756B70] bg-[#FFF9F8] px-2.5 py-1 rounded-full border border-[#F0DDE1]">
                    <Clock className="w-3 h-3 text-[#D96B84]" /> {step.timeline}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="font-sans font-bold text-xl text-[#292326] mb-1 group-hover:text-[#D96B84] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D96B84] mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#756B70] leading-[1.65]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Process Flow: Vertical Connected Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-dashed border-[#F7C8D3] space-y-8 max-w-lg mx-auto">
          {processSteps.map((step: ProcessStep) => (
            <div
              key={step.number}
              className="relative bg-[#FFFFFF] rounded-2xl border border-[#F0DDE1] p-6 shadow-xs"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-6 w-8 h-8 rounded-full bg-[#FFFFFF] border-2 border-[#D96B84] flex items-center justify-center text-xs font-bold text-[#D96B84] shadow-xs">
                {step.number}
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="font-sans font-bold text-lg text-[#292326]">
                  {step.title}
                </h3>
                <span className="text-xs font-medium text-[#756B70] bg-[#FFF9F8] px-2 py-0.5 rounded-md border border-[#F0DDE1]">
                  {step.timeline}
                </span>
              </div>

              <p className="text-xs font-semibold text-[#D96B84] uppercase tracking-wider mb-2">
                {step.subtitle}
              </p>

              <p className="text-sm text-[#756B70] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Guarantee Footnote */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#756B70] bg-[#FFFFFF] px-5 py-2.5 rounded-full border border-[#F0DDE1] shadow-xs">
            <CheckCircle className="w-4 h-4 text-[#D96B84]" />
            <span>Structured sprint cadence with weekly Figma prototypes & video walkthroughs.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
