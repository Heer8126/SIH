import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Lock, User, ArrowRight, Compass, Key } from 'lucide-react';

export const AdminLogin = () => {
  const [username, setUsername] = useState('curator.ncpor@gov.in');
  const [password, setPassword] = useState('••••••••••••');
  const [deptCode, setDeptCode] = useState('NCPOR-DATA-DIV-01');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulated UI-only login
    navigate('/admin');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
        
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-ncpor-navy text-teal-300 rounded-xl flex items-center justify-center mx-auto shadow-md border border-slate-700">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              NCPOR Admin & Curator Portal
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Ministry of Earth Sciences, Govt. of India
            </p>
          </div>
          <div className="inline-block bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded">
            Authorized Personnel SSO Entry
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4 pt-2">
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block">
              Official Email / Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block">
              Security Token / Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block">
              Department Node Code
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={deptCode}
                onChange={(e) => setDeptCode(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-ncpor-navy hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Authenticate & Enter Console</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center pt-2">
            Demo Portal: Click "Authenticate & Enter Console" to bypass UI verification.
          </p>
        </form>

        <div className="border-t border-slate-100 pt-4 text-center">
          <Link to="/" className="text-xs text-teal-700 font-semibold hover:underline">
            ← Return to Public PolarConnect Portal
          </Link>
        </div>

      </div>
    </div>
  );
};
