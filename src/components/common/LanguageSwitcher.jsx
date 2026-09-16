import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { LANGUAGES } from '../../i18n';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const handleLanguageSelect = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-slate-800 text-teal-300 border border-teal-900/80 hover:bg-slate-700/80 hover:border-teal-700 transition-all focus:outline-none focus:ring-1 focus:ring-teal-500 shadow-xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-3.5 h-3.5 text-teal-400 shrink-0" />
        <span className="font-mono uppercase tracking-wider">{currentLang.code}</span>
        <span className="hidden sm:inline font-sans text-slate-200">({currentLang.label})</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Custom Navy & Ice-Blue Styled Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-lg bg-slate-900 border border-slate-800 shadow-xl z-50 overflow-hidden text-xs py-1 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 bg-slate-950/60">
            Regional Language (भारत की भाषाएं)
          </div>
          <div className="max-h-64 overflow-y-auto divide-y divide-slate-800/40">
            {LANGUAGES.map((lang) => {
              const isSelected = i18n.language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left font-medium transition-colors ${
                    isSelected
                      ? 'bg-teal-950/80 text-teal-300 font-bold border-l-2 border-teal-400'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="truncate">{lang.nativeName}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
