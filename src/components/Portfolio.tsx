import React, { useState } from 'react';
import { projectsData, Project } from '../data/studioData';
import { ProjectModal } from './ProjectModal';
import { Sparkles, ArrowUpRight, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onInquireProject: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projectsData[0]; // Bloom Studio
  const secondaryProjects = projectsData.slice(1); // Maison Digital & Nova Dashboard

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div
              id="work-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] text-[#D96B84] text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </div>

            <h2
              id="work-heading"
              className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-[1.15] mb-4"
            >
              Selected{' '}
              <span className="font-serif italic font-normal text-[#D96B84]">
                work.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#756B70] leading-[1.65]">
              A few examples of how thoughtful design can turn an idea into a digital experience.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#756B70]">
              Filter:
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FCE5E9] text-[#D96B84] text-xs font-medium border border-[#F7C8D3]">
              All Highlights (3)
            </span>
          </div>
        </div>

        {/* Editorial Project Showcase Layout */}
        <div className="space-y-8">
          
          {/* Card 1: Expansive Featured Hero Project (Bloom Studio) */}
          <div
            id={`project-card-${featuredProject.id}`}
            onClick={() => setSelectedProject(featuredProject)}
            className="group relative bg-[#FFFFFF] rounded-[28px] border border-[#F0DDE1] p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(217,107,132,0.08)] hover:shadow-[0_20px_48px_rgba(217,107,132,0.14)] hover:border-[#F7C8D3] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Image Container with Hover Zoom */}
              <div className="lg:col-span-7 overflow-hidden rounded-[20px] bg-[#FFF9F8] border border-[#F0DDE1] aspect-[16/10] relative">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#F0DDE1] text-xs font-semibold text-[#D96B84]">
                  Featured Project
                </div>
              </div>

              {/* Card Meta & Story */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-sm font-bold text-[#D96B84] tracking-widest">
                      PROJECT {featuredProject.number}
                    </span>
                    <span className="text-xs text-[#756B70]">{featuredProject.year}</span>
                  </div>

                  <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#292326] mb-2 group-hover:text-[#D96B84] transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm font-medium text-[#D96B84] mb-4">
                    {featuredProject.tagline}
                  </p>

                  <p className="text-[#756B70] text-sm sm:text-base leading-[1.65] mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#FFF9F8] border border-[#F0DDE1] text-xs font-medium text-[#756B70] group-hover:border-[#F7C8D3] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-[#F0DDE1]/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#292326] group-hover:text-[#D96B84] transition-colors">
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="w-9 h-9 rounded-full bg-[#FFF9F8] border border-[#F0DDE1] flex items-center justify-center text-[#756B70] group-hover:bg-[#D96B84] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Cards 2 & 3: 2-Column Balanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project: Project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#FFFFFF] rounded-[28px] border border-[#F0DDE1] p-6 sm:p-7 shadow-[0_12px_36px_rgba(217,107,132,0.08)] hover:shadow-[0_20px_48px_rgba(217,107,132,0.14)] hover:border-[#F7C8D3] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="overflow-hidden rounded-[20px] bg-[#FFF9F8] border border-[#F0DDE1] aspect-[16/10] relative mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md flex items-center justify-center text-[#756B70] group-hover:bg-[#D96B84] group-hover:text-white transition-all shadow-xs">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xs font-bold text-[#D96B84] tracking-widest">
                      PROJECT {project.number}
                    </span>
                    <span className="text-xs text-[#756B70]">{project.year}</span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#292326] mb-1.5 group-hover:text-[#D96B84] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-[#D96B84] mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-[#756B70] text-sm leading-[1.65] mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-[#FFF9F8] border border-[#F0DDE1] text-[11px] font-medium text-[#756B70] group-hover:border-[#F7C8D3] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#F0DDE1]/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#292326] group-hover:text-[#D96B84] transition-colors inline-flex items-center gap-1.5">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs text-[#756B70]">Read Overview →</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onInquireProject}
      />
    </section>
  );
};
