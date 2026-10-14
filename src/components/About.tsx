import React from 'react';
import { Sparkles, CheckCircle2, Heart, Award, Compass } from 'lucide-react';
import { studioStats } from '../data/studioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Decorative subtle gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#FCE5E9]/30 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div
              id="about-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>What We Do</span>
            </div>

            <h2
              id="about-heading"
              className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-[1.15] mb-6"
            >
              Thoughtful design,{' '}
              <span className="font-serif italic font-normal text-[#D96B84]">
                built for real people.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#756B70] leading-[1.7]">
              <p>
                At Aveline Creative, we believe a great website is more than a digital business card—it is an evocative, memorable environment where your brand's unique ethos comes to life.
              </p>
              <p>
                We merge boundless artistic intuition with rigorous digital strategy, usability research, and modern frontend technology. Every layout rhythm, color palette, and micro-interaction is intentionally calibrated to resonate emotionally while driving clear business results.
              </p>
            </div>

            {/* Quality Pillars */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#F0DDE1] w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-[#292326]">Bespoke Craftsmanship</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-[#292326]">Mobile-First Usability</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-[#292326]">Clean, Scalable Code</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-[#292326]">Collaborative Process</span>
              </div>
            </div>
          </div>

          {/* Right Column: Statement Card & Statistics */}
          <div className="lg:col-span-6">
            <div
              id="about-card"
              className="relative bg-[#FFFFFF] rounded-[28px] border border-[#F0DDE1] p-8 sm:p-10 shadow-[0_12px_40px_rgba(217,107,132,0.08)] overflow-hidden"
            >
              {/* Corner decorative stamp */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F0DDE1]/80">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#FCE5E9] flex items-center justify-center text-[#D96B84]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#292326] uppercase tracking-wider block">
                      Studio Manifesto
                    </span>
                    <span className="text-[11px] text-[#756B70]">Intention over trend</span>
                  </div>
                </div>

                <span className="text-xs font-serif italic text-[#D96B84] bg-[#FCE5E9] px-3 py-1 rounded-full border border-[#F7C8D3]">
                  Est. 2024
                </span>
              </div>

              {/* Short Statement */}
              <blockquote className="font-serif text-xl sm:text-2xl text-[#292326] leading-snug mb-8">
                “We combine artistic elegance with modern usability to create digital products that feel effortless and look timeless.”
              </blockquote>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {studioStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFF9F8] rounded-2xl p-4 border border-[#F0DDE1] flex flex-col items-start transition-transform hover:-translate-y-1 duration-200"
                  >
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D96B84] leading-none mb-1.5">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-[#756B70] leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating Decorative Heart */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tl from-[#FCE5E9] to-transparent pointer-events-none -z-0 opacity-70"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
