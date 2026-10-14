import React from 'react';
import { navigationLinks } from '../data/studioData';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FFF4F6] border-t border-[#F0DDE1] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative vector */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#FCE5E9]/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#F0DDE1]">
          
          {/* Brand & Studio Bio */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] flex items-center justify-center text-[#D96B84] shadow-xs group-hover:bg-[#F7C8D3] transition-colors">
                <span className="text-xs font-serif font-bold">✦</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-[#292326]">
                  Aveline
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#756B70]">
                  Creative Studio
                </span>
              </div>
            </a>

            <p className="text-sm text-[#756B70] leading-[1.65] max-w-sm mb-6">
              A boutique digital studio creating thoughtful websites, elevated brand identities, and memorable digital experiences for visionary brands worldwide.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#D96B84] bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#F7C8D3] shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Crafted with intention & care</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-sm text-[#292326] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#756B70] hover:text-[#D96B84] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-sm text-[#292326] uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-[#756B70]">
              <li>Web Design</li>
              <li>UI/UX Interfaces</li>
              <li>Brand Identity</li>
              <li>Creative Development</li>
              <li>Design Systems</li>
            </ul>
          </div>

          {/* Connect & Socials Column */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-serif font-bold text-sm text-[#292326] uppercase tracking-wider mb-4">
                Connect
              </h4>
              <p className="text-sm text-[#756B70] mb-4">
                Follow our creative journey and recent case studies across channels.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {[
                  { name: 'Instagram', label: 'IG', href: 'https://instagram.com' },
                  { name: 'Dribbble', label: 'DR', href: 'https://dribbble.com' },
                  { name: 'LinkedIn', label: 'IN', href: 'https://linkedin.com' },
                  { name: 'Twitter', label: 'X', href: 'https://x.com' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#F0DDE1] text-xs font-semibold text-[#756B70] hover:text-[#D96B84] hover:border-[#F7C8D3] hover:bg-[#FCE5E9] flex items-center justify-center transition-all shadow-xs"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <span className="text-xs text-[#756B70]">Direct contact:</span>
              <a
                href="mailto:hello@avelinestudio.design"
                className="block text-sm font-semibold text-[#292326] hover:text-[#D96B84] transition-colors"
              >
                hello@avelinestudio.design
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#756B70]">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <p>© 2026 Aveline Creative Studio. All rights reserved.</p>
            <span className="hidden sm:inline text-[#E5D4D7]">•</span>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-preferences'))}
              id="open-cookie-settings-button"
              className="text-[#756B70] hover:text-[#D96B84] transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>

          <div className="flex items-center gap-6">
            <span>Paris • Worldwide</span>
            <button
              onClick={scrollToTop}
              id="back-to-top-button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D96B84] hover:text-[#B64761] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
