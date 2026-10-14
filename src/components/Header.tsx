import React, { useState, useEffect } from 'react';
import { navigationLinks } from '../data/studioData';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section tracking
      const sections = ['home', 'about', 'services', 'work', 'process', 'why-us', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 px-4 sm:px-6 md:px-8 ${
          isScrolled
            ? 'bg-[#FFF9F8]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(217,107,132,0.06)] border-b border-[#F0DDE1]/70'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
            id="brand-logo-link"
          >
            <div className="w-8 h-8 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] flex items-center justify-center text-[#D96B84] shadow-xs group-hover:bg-[#F7C8D3] transition-colors">
              <span className="text-xs font-serif font-bold">✦</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-[#292326] leading-none">
                Aveline
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#756B70] mt-0.5">
                Creative Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            className="hidden md:flex items-center gap-1 bg-[#FFFFFF]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#F0DDE1] shadow-[0_2px_12px_rgba(217,107,132,0.04)]"
          >
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                    isActive
                      ? 'text-[#D96B84] font-semibold'
                      : 'text-[#756B70] hover:text-[#292326] hover:bg-[#FCE5E9]/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D96B84]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              id="header-cta-button"
              className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D96B84] text-white font-sans text-sm font-medium shadow-[0_4px_16px_rgba(217,107,132,0.25)] hover:bg-[#B64761] hover:shadow-[0_6px_20px_rgba(217,107,132,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="md:hidden w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#F0DDE1] flex items-center justify-center text-[#292326] hover:bg-[#FCE5E9] transition-colors shadow-xs"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          className="fixed inset-0 z-30 bg-[#292326]/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-menu"
            className="absolute top-16 left-4 right-4 bg-[#FFFFFF] rounded-2xl border border-[#F0DDE1] shadow-2xl p-6 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F0DDE1]">
              <span className="font-serif font-semibold text-[#292326]">Navigation</span>
              <span className="text-xs text-[#D96B84] font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Studio Menu
              </span>
            </div>

            <nav className="flex flex-col gap-1 py-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-xl text-base font-medium text-[#292326] hover:bg-[#FCE5E9] hover:text-[#D96B84] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#756B70]/40" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#F0DDE1] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#D96B84] text-white font-medium text-center shadow-md hover:bg-[#B64761] transition-colors"
              >
                Let's Talk
              </button>
              <p className="text-center text-xs text-[#756B70] mt-1">
                Available for projects • Q2/Q3 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
