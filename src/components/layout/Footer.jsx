import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-ncpor-navy text-slate-300 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Institutional Overview */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-teal-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">NCPOR</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('about.sub')}
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-400">
              <ShieldCheck className="w-4 h-4 text-teal-300" />
              <span>{t('header.pacer_scheme')}</span>
            </div>
          </div>

          {/* Col 2: Public Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2 mb-3">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/repository" className="hover:text-teal-300 transition-colors">
                  {t('nav.repository')}
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-teal-300 transition-colors">
                  {t('nav.media')}
                </Link>
              </li>
              <li>
                <Link to="/map" className="hover:text-teal-300 transition-colors">
                  {t('nav.map')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-300 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="hover:text-teal-300 transition-colors">
                  {t('nav.admin')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Domains */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2 mb-3">
              {t('footer.frontiers')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Antarctic Cryosphere & Climate</li>
              <li>Arctic Ocean & Svalbard Ecosystems</li>
              <li>Himalayan Glaciology (Himansh)</li>
              <li>Southern Ocean Biogeochemistry</li>
              <li>Deep Ocean Hydrothermal Mapping</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2 mb-3">
              {t('footer.contact_hq')}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+91 832 2525600</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>outreach@ncpor.res.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t('footer.rights')}</p>
          <div className="flex items-center gap-4">
            <span>{t('header.moes')}</span>
            <span>•</span>
            <span>Open Data Policy</span>
            <span>•</span>
            <span>Privacy Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
