import React, { useEffect } from 'react';
import { Project } from '../data/studioData';
import { X, Check, ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#292326]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-4xl bg-[#FFFFFF] rounded-[28px] border border-[#F0DDE1] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0DDE1] bg-[#FFF9F8]/80 backdrop-blur-xs sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-[#D96B84]">
              {project.number}
            </span>
            <span className="text-[#756B70]/40">•</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#756B70]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            id="close-project-modal"
            className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#F0DDE1] flex items-center justify-center text-[#756B70] hover:text-[#292326] hover:bg-[#FCE5E9] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Showcase Image */}
          <div className="rounded-2xl overflow-hidden border border-[#F0DDE1] shadow-sm bg-[#FFF9F8] aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Title & Tagline */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#FCE5E9] text-[#D96B84] text-xs font-medium border border-[#F7C8D3]"
                >
                  {tag}
                </span>
              ))}
              <span className="flex items-center gap-1 text-xs text-[#756B70] ml-auto">
                <Calendar className="w-3.5 h-3.5" /> {project.year} • {project.timeline}
              </span>
            </div>

            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#292326] mb-2">
              {project.title}
            </h3>
            <p className="text-lg text-[#D96B84] font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Case Study Story & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-[#F0DDE1]">
            <div className="md:col-span-7 space-y-4">
              <h4 className="font-serif font-bold text-xl text-[#292326]">
                The Challenge & Creative Direction
              </h4>
              <p className="text-[#756B70] leading-relaxed text-sm sm:text-base">
                {project.fullOverview}
              </p>

              {/* Key Impact Result */}
              <div className="bg-[#FFF9F8] border border-[#F7C8D3] rounded-2xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FCE5E9] text-[#D96B84] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-[#D96B84]">
                    Measurable Result
                  </p>
                  <p className="text-sm font-medium text-[#292326] mt-0.5">
                    {project.results}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              {/* Deliverables List */}
              <div className="bg-[#FFF9F8] rounded-2xl p-5 border border-[#F0DDE1]">
                <h5 className="font-sans font-bold text-sm text-[#292326] uppercase tracking-wider mb-3">
                  Scope & Deliverables
                </h5>
                <ul className="space-y-2">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#756B70]">
                      <Check className="w-4 h-4 text-[#D96B84] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Palette Swatch */}
              <div className="bg-[#FFF9F8] rounded-2xl p-5 border border-[#F0DDE1]">
                <h5 className="font-sans font-bold text-xs text-[#292326] uppercase tracking-wider mb-2.5">
                  Color Harmonies
                </h5>
                <div className="flex items-center gap-2">
                  {project.palette.map((hex, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-full border border-[#F0DDE1] shadow-xs"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                      <span className="text-[10px] text-[#756B70] font-mono mt-1">
                        {hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 sm:px-8 py-4 bg-[#FFF9F8] border-t border-[#F0DDE1] flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <p className="text-xs text-[#756B70]">
            Looking for an experience like this for your brand?
          </p>

          <button
            onClick={() => {
              onClose();
              onInquire(project.title);
            }}
            id="modal-inquire-cta"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D96B84] text-white text-sm font-medium hover:bg-[#B64761] shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Inquire About A Similar Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
