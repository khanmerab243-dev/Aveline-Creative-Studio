import React from 'react';
import { studioImages } from '../data/studioData';
import { Sparkles, ArrowRight, Heart, Lightbulb, Eye } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Subtle Background Radial Gradients */}
      <div
        className="absolute top-1/4 right-5 w-[420px] h-[420px] md:w-[580px] md:h-[580px] rounded-full bg-gradient-to-br from-[#FCE5E9]/70 via-[#F7C8D3]/30 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-[#FCE5E9]/40 to-transparent blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle Decorative Star & Heart Vectors */}
      <div
        className="absolute top-28 left-[8%] text-[#D96B84]/40 text-xl font-serif select-none pointer-events-none animate-pulse-subtle"
        aria-hidden="true"
      >
        ✦
      </div>
      <div
        className="absolute top-36 right-[14%] text-[#D96B84]/30 text-2xl font-serif select-none pointer-events-none animate-float-slow"
        aria-hidden="true"
      >
        ✧
      </div>
      <div
        className="absolute bottom-16 left-[22%] text-[#D96B84]/30 text-base font-serif select-none pointer-events-none"
        aria-hidden="true"
      >
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Eyebrow Label */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-6 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative Digital Studio</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-main-heading"
              className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] leading-[1.08] tracking-[-0.03em] text-[#292326] mb-6"
            >
              We turn{' '}
              <span className="font-serif italic font-normal text-[#D96B84] relative inline-block">
                bold ideas
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2 text-[#F7C8D3]/80"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 8.5C28 2.5 72 2.5 99 8.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              into beautiful digital experiences.
            </h1>

            {/* Supporting Paragraph */}
            <p
              id="hero-subtext"
              className="font-sans text-base sm:text-lg md:text-xl text-[#756B70] leading-[1.65] max-w-2xl mb-8"
            >
              We create thoughtful websites, bespoke digital experiences, brand identities,
              and strategic creative solutions for ambitious businesses and visionary creators who value craft.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onStartProject}
                id="hero-cta-primary"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D96B84] text-white font-sans text-base font-medium shadow-[0_6px_20px_rgba(217,107,132,0.3)] hover:bg-[#B64761] hover:shadow-[0_8px_25px_rgba(217,107,132,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewWork}
                id="hero-cta-secondary"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] border border-[#F0DDE1] text-[#292326] font-sans text-base font-medium hover:border-[#D96B84] hover:bg-[#FCE5E9]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <Eye className="w-4 h-4 text-[#D96B84]" />
                <span>View Our Work</span>
              </button>
            </div>

            {/* Trust / Detail Row */}
            <div
              id="hero-trust-row"
              className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#756B70] bg-[#FFFFFF]/70 px-4 py-2 rounded-full border border-[#F0DDE1] shadow-xs"
            >
              <span>Web Design</span>
              <span className="text-[#D96B84] text-xs">✦</span>
              <span>Branding</span>
              <span className="text-[#D96B84] text-xs">✦</span>
              <span>Digital Experiences</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Main Rounded Image Frame */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-none">
              
              {/* Soft decorative background backdrop shadow/glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#FCE5E9] via-[#F7C8D3]/40 to-white rounded-[32px] -rotate-1 scale-[1.02] -z-10 blur-xs" />
              
              <div className="relative rounded-[28px] overflow-hidden border-2 border-[#FFFFFF] shadow-[0_12px_40px_rgba(217,107,132,0.12)] bg-[#FFFFFF] aspect-[4/3] sm:aspect-[4/3.2]">
                <img
                  src={studioImages.hero}
                  alt="Aveline Creative Designer in a bright modern studio at desk"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292326]/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: Creative Ideas (Top Left) */}
              <div
                id="hero-badge-creative-ideas"
                className="absolute -top-4 -left-3 sm:-left-6 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#F0DDE1] shadow-[0_8px_24px_rgba(217,107,132,0.12)] flex items-center gap-2.5 animate-float-slow"
              >
                <div className="w-8 h-8 rounded-full bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#292326] leading-none">Creative Ideas</p>
                  <p className="text-[9px] text-[#756B70] mt-0.5">Crafted with intention</p>
                </div>
              </div>

              {/* Floating Card 2: Design with Purpose (Bottom Right) */}
              <div
                id="hero-badge-design-purpose"
                className="absolute -bottom-5 -right-2 sm:-right-5 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#F0DDE1] shadow-[0_8px_24px_rgba(217,107,132,0.12)] flex items-center gap-2.5 animate-float-reverse"
              >
                <div className="w-8 h-8 rounded-full bg-[#F7C8D3] text-[#D96B84] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#292326] leading-none">Design with Purpose</p>
                  <p className="text-[9px] text-[#756B70] mt-0.5">Human-centered UI</p>
                </div>
              </div>

              {/* Decorative Mini Badge: Live Status */}
              <div
                className="absolute bottom-6 left-5 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#F0DDE1] shadow-xs flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
                <span className="text-[10px] font-medium text-[#292326]">Booking Q2/Q3</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
