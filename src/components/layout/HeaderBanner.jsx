import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compass } from 'lucide-react';

export const HeaderBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-ncpor-navy text-slate-200 border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Emblem & Institutional Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wide uppercase text-amber-400 border-r border-slate-700 pr-3">
              {t('header.govt_india')}
            </span>
            <span className="text-slate-300 font-medium hidden sm:inline">
              {t('header.moes')}
            </span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-teal-300 font-semibold">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>{t('header.ncpor_fullname')}</span>
          </div>
        </div>

        {/* Portal Badges & Quick Portal switch */}
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <span className="hidden md:inline hover:text-slate-200 transition-colors">
            {t('header.npdc')}
          </span>
          <span className="hidden md:inline">|</span>
          <span className="bg-teal-950/80 text-teal-300 border border-teal-800/60 px-2 py-0.5 rounded font-mono">
            {t('header.pacer_scheme')}
          </span>
        </div>
      </div>
    </div>
  );
};
