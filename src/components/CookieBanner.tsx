import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'aveline_cookie_consent';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent has already been given
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (!savedConsent) {
      // Small delay so the page loads cleanly first without jarring the user
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom event to open preferences from Footer
  useEffect(() => {
    const handleOpenCookies = () => {
      setIsVisible(true);
      setShowDetails(true);
    };

    window.addEventListener('open-cookie-preferences', handleOpenCookies);
    return () => {
      window.removeEventListener('open-cookie-preferences', handleOpenCookies);
    };
  }, []);

  const saveConsent = (type: 'all' | 'necessary' | 'custom', customPrefs?: CookiePreferences) => {
    const finalPrefs: CookiePreferences =
      type === 'all'
        ? { necessary: true, analytics: true, marketing: true }
        : type === 'necessary'
        ? { necessary: true, analytics: false, marketing: false }
        : (customPrefs || preferences);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        status: type,
        preferences: finalPrefs,
        timestamp: new Date().toISOString(),
      })
    );

    setIsVisible(false);
    setShowDetails(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot disable essential cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cookie-consent-banner"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md w-auto z-50 pointer-events-auto"
        >
          <div className="bg-[#FFFFFF]/95 backdrop-blur-md border border-[#F0DDE1] rounded-2xl p-5 shadow-xl shadow-[#292326]/5 text-[#292326] relative overflow-hidden">
            {/* Subtle decorative rose glow */}
            <div
              className="absolute -top-12 -right-12 w-28 h-28 bg-[#FCE5E9] rounded-full blur-2xl pointer-events-none opacity-60"
              aria-hidden="true"
            />

            {/* Header row */}
            <div className="flex items-start justify-between gap-3 mb-2 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FCE5E9] border border-[#F7C8D3] flex items-center justify-center text-[#D96B84] shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-serif font-bold text-[#292326] tracking-tight">
                    Cookie Preferences
                  </h3>
                  <p className="text-[11px] text-[#756B70]">Respecting your privacy</p>
                </div>
              </div>

              {/* Close / Dismiss */}
              <button
                onClick={() => saveConsent('necessary')}
                className="text-[#756B70] hover:text-[#292326] p-1 rounded-lg hover:bg-[#FFF4F6] transition-colors cursor-pointer"
                title="Decline optional cookies and close"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Banner description */}
            <div className="relative z-10">
              <p className="text-xs text-[#756B70] leading-[1.6] mb-3">
                We use cookies to ensure the website functions reliably and to understand how our audience interacts with our portfolio and case studies.
              </p>

              {/* Detailed preferences toggle view */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-[#F0DDE1] pt-3 pb-1 mb-3 space-y-2.5"
                  >
                    {/* Essential */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#FFF9F8] border border-[#F0DDE1]/60">
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#D96B84] mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-[#292326]">Essential Cookies</p>
                          <p className="text-[10px] text-[#756B70]">Required for site navigation and core security.</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-[#756B70] bg-[#FFFFFF] px-2 py-0.5 rounded-full border border-[#F0DDE1]">
                        Always Active
                      </span>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#FFF9F8] border border-[#F0DDE1]/60">
                      <div>
                        <p className="text-xs font-semibold text-[#292326]">Analytics Cookies</p>
                        <p className="text-[10px] text-[#756B70]">Helps us analyze project view patterns.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => togglePreference('analytics')}
                        className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                          preferences.analytics ? 'bg-[#D96B84]' : 'bg-[#E5D4D7]'
                        }`}
                        aria-label="Toggle analytics cookies"
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-xs transform transition-transform ${
                            preferences.analytics ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Experience & Functional */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#FFF9F8] border border-[#F0DDE1]/60">
                      <div>
                        <p className="text-xs font-semibold text-[#292326]">Experience & Aesthetics</p>
                        <p className="text-[10px] text-[#756B70]">Remembers custom project view preferences.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => togglePreference('marketing')}
                        className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                          preferences.marketing ? 'bg-[#D96B84]' : 'bg-[#E5D4D7]'
                        }`}
                        aria-label="Toggle experience cookies"
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-xs transform transition-transform ${
                            preferences.marketing ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex items-center flex-wrap gap-2 pt-1">
                {showDetails ? (
                  <>
                    <button
                      onClick={() => saveConsent('custom')}
                      className="flex-1 min-w-[120px] bg-[#D96B84] hover:bg-[#B64761] text-white text-xs font-medium py-2 px-3.5 rounded-full transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save Preferences</span>
                    </button>
                    <button
                      onClick={() => saveConsent('all')}
                      className="bg-[#FFF4F6] hover:bg-[#FCE5E9] text-[#292326] border border-[#F0DDE1] text-xs font-medium py-2 px-3.5 rounded-full transition-colors cursor-pointer"
                    >
                      Accept All
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      id="cookie-accept-all"
                      onClick={() => saveConsent('all')}
                      className="flex-1 bg-[#D96B84] hover:bg-[#B64761] text-white text-xs font-medium py-2 px-3.5 rounded-full transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Accept All</span>
                    </button>

                    <button
                      id="cookie-necessary-only"
                      onClick={() => saveConsent('necessary')}
                      className="bg-[#FFF4F6] hover:bg-[#FCE5E9] text-[#292326] border border-[#F0DDE1] text-xs font-medium py-2 px-3 rounded-full transition-colors cursor-pointer"
                    >
                      Necessary Only
                    </button>

                    <button
                      id="cookie-customize-toggle"
                      onClick={() => setShowDetails(true)}
                      className="text-[#756B70] hover:text-[#292326] text-xs font-medium py-2 px-2.5 rounded-full hover:bg-[#FFF4F6] transition-colors flex items-center gap-1 cursor-pointer"
                      title="Manage individual cookie settings"
                    >
                      <SlidersHorizontal className="w-3 h-3" />
                      <span>Customize</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
