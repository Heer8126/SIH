import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, User, Plus } from 'lucide-react';

export const AdminHeader = ({ setMobileOpen }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-slate-600 hover:text-slate-900 md:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          NCPOR Knowledge Management & Dissemination Console
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/admin/upload"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-teal-700 text-white hover:bg-teal-800 transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Upload Resource</span>
        </Link>

        <div className="h-4 w-[1px] bg-slate-200" />

        {/* User Info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-800 text-teal-300 font-bold text-xs flex items-center justify-center border border-slate-700">
            SR
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-xs font-semibold text-slate-800 leading-tight">Dr. S. K. Roy</p>
            <p className="text-[10px] text-slate-500">Chief Data Curator</p>
          </div>
        </div>
      </div>
    </header>
  );
};
