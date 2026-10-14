import React from 'react';
import { whyUsPoints, studioImages } from '../data/studioData';
import { Compass, Feather, Smartphone, Eye, Sparkles, Heart } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#D96B84]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#D96B84]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#D96B84]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#D96B84]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D96B84]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Pink Outer Container with generous padding & rounded corners */}
        <div
          id="why-us-container"
          className="relative bg-gradient-to-br from-[#FCE5E9]/80 via-[#FFF9F8] to-[#F7C8D3]/50 rounded-[32px] border border-[#F0DDE1] p-8 sm:p-12 lg:p-16 shadow-[0_16px_40px_rgba(217,107,132,0.08)] overflow-hidden"
        >
          {/* Subtle Decorative Background Shapes */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#F7C8D3]/40 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-6 left-12 text-3xl font-serif text-[#D96B84]/20 select-none pointer-events-none"
            aria-hidden="true"
          >
            ✦
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Heading & 4 Benefits */}
            <div className="lg:col-span-7">
              <div
                id="why-us-eyebrow"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-4 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Why Partner With Us</span>
              </div>

              <h2
                id="why-us-heading"
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-[1.15] mb-6"
              >
                Design that{' '}
                <span className="font-serif italic font-normal text-[#D96B84]">
                  looks good
                </span>{' '}
                and works hard.
              </h2>

              <p className="text-base sm:text-lg text-[#756B70] leading-[1.65] mb-10">
                We believe you shouldn't have to choose between editorial beauty and commercial results. Here is why founders and creative leaders choose Aveline:
              </p>

              {/* 4 Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyUsPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF]/90 backdrop-blur-xs rounded-2xl border border-[#F0DDE1] p-5 transition-transform hover:-translate-y-1 duration-200 shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FCE5E9] border border-[#F7C8D3] flex items-center justify-center mb-3.5 shadow-2xs">
                      {getIcon(point.iconName)}
                    </div>
                    <h3 className="font-sans font-bold text-base text-[#292326] mb-1.5">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#756B70] leading-[1.6]">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Studio Composition Visual & Editorial Quote */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              
              {/* Studio Aesthetic Still Life Image */}
              <div className="relative w-full max-w-sm rounded-[24px] overflow-hidden border-2 border-[#FFFFFF] shadow-[0_12px_32px_rgba(217,107,132,0.15)] aspect-[4/3]">
                <img
                  src={studioImages.studioSwatch}
                  alt="Aveline studio tactile swatch materials and typography"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="mt-6 bg-[#FFFFFF] rounded-2xl border border-[#F0DDE1] p-6 shadow-md w-full max-w-sm">
                <div className="flex items-center gap-2 text-xs font-serif italic text-[#D96B84] mb-2">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>The Studio Promise</span>
                </div>
                <p className="font-serif text-base text-[#292326] italic leading-snug">
                  “No bloated decks, no generic cookie-cutter templates. Just honest creative partnership and elevated craft.”
                </p>
                <p className="text-[11px] uppercase tracking-wider text-[#756B70] mt-3 font-semibold">
                  Aveline Studio Standard
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
