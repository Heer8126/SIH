import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Shield, Search, Snowflake } from 'lucide-react';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Navbar = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.repository'), path: '/repository' },
    { label: t('nav.media'), path: '/media' },
    { label: t('nav.map'), path: '/map' },
    { label: t('nav.about'), path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-sm group-hover:bg-teal-500 transition-colors">
              <Snowflake className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-sans">PolarConnect</span>
                <span className="text-[10px] bg-teal-900/80 text-teal-300 border border-teal-700/50 px-1.5 py-0.2 rounded font-semibold uppercase tracking-wider">
                  NCPOR
                </span>
              </div>
              <p className="text-[10px] text-slate-400 leading-none">
                {t('nav.subtitle')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-900/60 text-teal-300 font-semibold border-b-2 border-teal-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            <Link
              to="/repository"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title={t('nav.repository')}
            >
              <Search className="w-4 h-4" />
            </Link>
            <div className="h-4 w-[1px] bg-slate-700" />
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-800 text-teal-300 border border-teal-900 hover:bg-teal-950 hover:border-teal-700 transition-all shadow-xs"
            >
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>{t('nav.admin')}</span>
            </Link>
          </div>

          {/* Mobile menu controls */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-teal-900/80 text-teal-300 font-bold border-l-4 border-teal-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
            <Link
              to="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-sm font-semibold bg-teal-900 text-teal-200 border border-teal-700"
            >
              <Shield className="w-4 h-4 text-teal-300" />
              <span>{t('nav.admin')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
