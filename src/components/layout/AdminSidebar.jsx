import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, Upload, CheckSquare, ArrowLeft, Shield, FileText, Database } from 'lucide-react';

export const AdminSidebar = ({ mobileOpen, setMobileOpen }) => {
  const menuItems = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Upload Resource', path: '/admin/upload', icon: Upload },
    { label: 'Content Review', path: '/admin/review', icon: CheckSquare },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/80 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 text-slate-300 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="h-16 flex items-center gap-3 px-6 bg-slate-950 border-b border-slate-800">
            <div className="w-8 h-8 rounded bg-teal-700 flex items-center justify-center text-white">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white tracking-tight">Admin Console</span>
              <p className="text-[10px] text-teal-400 font-mono">NCPOR Control Center</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6 px-4 space-y-1">
            <div className="px-3 pb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              Management Workbench
            </div>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/admin'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-teal-900/80 text-teal-300 font-semibold border-l-4 border-teal-400'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/80'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Bottom Back to Public Site */}
          <div className="p-4 border-t border-slate-800 bg-slate-950">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-md text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Portal</span>
            </Link>
          </div>

        </div>
      </aside>
    </>
  );
};
