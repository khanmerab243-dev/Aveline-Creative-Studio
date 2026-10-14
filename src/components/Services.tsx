import React, { useState } from 'react';
import { servicesData, Service } from '../data/studioData';
import { Layout, Sparkles, Palette, Code, ArrowUpRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#D96B84]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D96B84]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#D96B84]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#D96B84]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D96B84]" />;
    }
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#FFF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div
            id="services-eyebrow"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>

          <h2
            id="services-heading"
            className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-[1.15] mb-5"
          >
            Everything you need to build a{' '}
            <span className="font-serif italic font-normal text-[#D96B84]">
              stronger digital presence.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#756B70] leading-[1.65]">
            Comprehensive design and creative engineering services structured to transform your digital touchpoints into high-converting, memorable brand assets.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service: Service) => {
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-[#FFFFFF] rounded-[24px] border border-[#F0DDE1] p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(217,107,132,0.12)] hover:border-[#F7C8D3] flex flex-col justify-between cursor-pointer"
                onClick={() => onSelectService(service.title)}
              >
                <div>
                  {/* Top Bar: Number & Custom Icon & Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#FFF9F8] border border-[#F0DDE1] flex items-center justify-center group-hover:bg-[#FCE5E9] group-hover:border-[#F7C8D3] transition-colors duration-200">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="font-serif text-sm font-semibold text-[#756B70]/70 group-hover:text-[#D96B84] transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#FFF9F8] border border-[#F0DDE1] flex items-center justify-center text-[#756B70] group-hover:bg-[#D96B84] group-hover:border-[#D96B84] group-hover:text-white transition-all duration-200 shadow-xs">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="font-sans font-bold text-2xl text-[#292326] mb-3 group-hover:text-[#D96B84] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#756B70] text-sm sm:text-base leading-[1.65] mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F8] border border-[#F0DDE1] text-xs font-medium text-[#756B70] group-hover:border-[#F7C8D3] group-hover:text-[#292326] transition-colors"
                      >
                        <Check className="w-3 h-3 text-[#D96B84]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                  {/* Expandable Extended Scope Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#F0DDE1] text-sm text-[#756B70] leading-relaxed animate-fade-in">
                      <p className="mb-3">{service.fullDesc}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.title);
                        }}
                        className="text-xs font-semibold text-[#D96B84] hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        Request a quote for {service.title} →
                      </button>
                    </div>
                  )}
                </div>

                {/* Bottom Row Action */}
                <div className="pt-4 mt-2 flex items-center justify-between border-t border-[#F0DDE1]/60">
                  <span className="text-xs font-semibold text-[#D96B84] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Select this service
                  </span>

                  <button
                    onClick={(e) => toggleExpand(service.id, e)}
                    className="text-xs text-[#756B70] hover:text-[#292326] flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-[#FCE5E9]/50 transition-colors"
                    aria-label="Toggle details"
                  >
                    <span>{isExpanded ? 'Less info' : 'Learn more'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
