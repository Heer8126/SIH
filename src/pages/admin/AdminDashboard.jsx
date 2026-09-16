import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { AdminHeader } from '../../components/layout/AdminHeader';
import { ADMIN_STATS, RECENT_UPLOADS, INITIAL_PENDING_REVIEWS } from '../../data/adminData';
import { Upload, CheckSquare, HardDrive, FileCheck, AlertCircle, ArrowUpRight, BarChart2, PieChart } from 'lucide-react';

export const AdminDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="flex-1 md:pl-64 flex flex-col">
        <AdminHeader setMobileOpen={setMobileOpen} />

        <main className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl w-full mx-auto">
          
          {/* Welcome Banner */}
          <div className="bg-ncpor-navy text-white rounded-xl p-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
            <div>
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider font-mono">
                NCPOR Control Center • Node #01
              </span>
              <h2 className="text-xl font-bold text-white tracking-tight mt-1">
                Data Repository & Dissemination Management
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Overview of current ingestion queues, storage allocations, and pending AI summary approvals.
              </p>
            </div>

            <div className="flex gap-2 shrink-0">
              <Link
                to="/admin/upload"
                className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload New Resource</span>
              </Link>
              <Link
                to="/admin/review"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5"
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Review Drafts ({INITIAL_PENDING_REVIEWS.length})</span>
              </Link>
            </div>
          </div>

          {/* Key Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Uploads This Month</span>
                <Upload className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-slate-900">{ADMIN_STATS.uploadsThisMonth}</span>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center">
                  +14% <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <p className="text-[11px] text-slate-500">NetCDF & PDF ingestions</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Storage Allocation</span>
                <HardDrive className="w-4 h-4 text-cyan-600" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-slate-900">{ADMIN_STATS.storageUsedTB} TB</span>
                <span className="text-[11px] text-slate-400 font-mono">/ {ADMIN_STATS.storageLimitTB} TB</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-teal-600 h-full w-[28.4%]" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Pending Approvals</span>
                <AlertCircle className="w-4 h-4 text-amber-600" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-slate-900">{INITIAL_PENDING_REVIEWS.length}</span>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Action Required
                </span>
              </div>
              <p className="text-[11px] text-slate-500">AI Outreach Summaries</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Published Content</span>
                <FileCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-slate-900">{ADMIN_STATS.publishedContent}</span>
                <span className="text-[11px] font-bold text-slate-500">Active</span>
              </div>
              <p className="text-[11px] text-slate-500">Open Access Catalog</p>
            </div>

          </div>

          {/* Visually Clean SVG Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Chart 1: Monthly Upload Trend Bar Chart */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <BarChart2 className="w-4 h-4 text-teal-600" />
                  <span>Monthly Data Ingestion Volume (2024)</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Count / Month</span>
              </div>

              {/* Bar SVG */}
              <div className="h-44 w-full flex items-end justify-between gap-3 pt-6 px-2">
                {ADMIN_STATS.monthlyTrend.map((item) => (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="w-full bg-slate-100 rounded-t h-32 flex items-end relative">
                      <div
                        style={{ height: `${(item.uploads / 65) * 100}%` }}
                        className="w-full bg-teal-700 group-hover:bg-teal-600 transition-all rounded-t relative"
                      >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.uploads}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-600">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart 2: Storage Breakdown */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <PieChart className="w-4 h-4 text-cyan-600" />
                  <span>Storage Allocation by Media Format</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">1.42 TB Used</span>
              </div>

              <div className="space-y-3 pt-2">
                {ADMIN_STATS.storageBreakdown.map((st) => (
                  <div key={st.type} className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-700 font-medium">
                      <span>{st.type}</span>
                      <span className="font-mono text-slate-900 font-bold">{st.size} ({st.percentage}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${st.percentage}%` }}
                        className="bg-ncpor-navy h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Pending Approval Highlight Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-amber-900">
                  {INITIAL_PENDING_REVIEWS.length} AI Draft Summaries Awaiting Expert Human Review
                </h4>
                <p className="text-xs text-amber-800 leading-normal">
                  Automated scientific summaries generated from recent expedition logbooks require administrative approval before being pushed to the public media feed.
                </p>
              </div>
            </div>
            <Link
              to="/admin/review"
              className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-bold shrink-0 transition-colors shadow-xs"
            >
              Open Review Workbench
            </Link>
          </div>

          {/* Recent Uploads Table */}
          <div className="bg-white rounded-xl border border-slate-200 space-y-4 p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Recent Data File Ingestions
              </h3>
              <Link to="/admin/upload" className="text-xs font-semibold text-teal-700 hover:underline">
                + Upload New File
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">File Name</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Uploader</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Size</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {RECENT_UPLOADS.map((up) => (
                    <tr key={up.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">{up.fileName}</td>
                      <td className="py-3 px-4">{up.type}</td>
                      <td className="py-3 px-4 text-slate-600">{up.uploader}</td>
                      <td className="py-3 px-4 text-slate-500">{up.date}</td>
                      <td className="py-3 px-4 font-mono">{up.size}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] font-bold">
                          {up.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};
