import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { AdminHeader } from '../../components/layout/AdminHeader';
import { Toast } from '../../components/common/Toast';
import { INITIAL_PENDING_REVIEWS } from '../../data/adminData';
import { Check, X, ArrowLeft, CheckSquare, Sparkles, Filter, AlertCircle } from 'lucide-react';
import { RegionBadge } from '../../components/common/Badge';

export const AdminReview = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reviews, setReviews] = useState(INITIAL_PENDING_REVIEWS);
  const [statusFilter, setStatusFilter] = useState('All');
  const [toastMessage, setToastMessage] = useState('');

  const handleApprove = (id, title) => {
    setReviews(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'Approved' } : item)
    );
    setToastMessage(`Approved: "${title.substring(0, 35)}..." published to media feed.`);
  };

  const handleReject = (id, title) => {
    setReviews(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'Rejected' } : item)
    );
    setToastMessage(`Rejected: "${title.substring(0, 35)}..." returned to draft queue.`);
  };

  const filteredReviews = reviews.filter((r) => {
    if (statusFilter === 'All') return true;
    return r.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Toast message={toastMessage} type="info" onClose={() => setToastMessage('')} />
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex-1 md:pl-64 flex flex-col">
        <AdminHeader setMobileOpen={setMobileOpen} />

        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <Link to="/admin" className="text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Dashboard</span>
              </Link>
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                AI Content Review & Expert Approval Workbench
              </h1>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-slate-700">Filter Status:</span>
              <div className="flex bg-white border border-slate-200 rounded-lg p-1">
                {['All', 'Pending', 'Approved', 'Rejected'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                      statusFilter === st
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Workbench Table Card */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs space-y-4">
            
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">AI-Synthesized Outreach Drafts</h3>
                  <p className="text-[11px] text-slate-400">Human-in-the-loop expert validation queue</p>
                </div>
              </div>
              <span className="text-xs font-mono text-teal-300 font-bold">
                {filteredReviews.length} Records
              </span>
            </div>

            <div className="overflow-x-auto p-4 pt-0">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Draft Title & Snippet</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Region</th>
                    <th className="py-3 px-4">Generated</th>
                    <th className="py-3 px-4">AI Score</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredReviews.map((rev) => (
                    <tr key={rev.id} className="hover:bg-slate-50/80 transition-colors">
                      
                      <td className="py-4 px-4 space-y-1 max-w-md">
                        <p className="font-bold text-slate-900 leading-snug">{rev.title}</p>
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{rev.summarySnippet}</p>
                        <p className="text-[10px] text-teal-700 font-mono">Source: {rev.sourceReport}</p>
                      </td>

                      <td className="py-4 px-4">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-bold">
                          {rev.contentType}
                        </span>
                      </td>

                      <td className="py-4 px-4">
                        <RegionBadge region={rev.region} />
                      </td>

                      <td className="py-4 px-4 text-slate-500 font-mono">{rev.generatedDate}</td>

                      <td className="py-4 px-4">
                        <span className="font-bold text-emerald-700 font-mono">{rev.aiConfidence}</span>
                      </td>

                      <td className="py-4 px-4">
                        {rev.status === 'Approved' && (
                          <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded font-bold text-[10px] inline-flex items-center gap-1">
                            <Check className="w-3 h-3" /> Approved
                          </span>
                        )}
                        {rev.status === 'Rejected' && (
                          <span className="px-2.5 py-1 bg-rose-100 text-rose-800 border border-rose-300 rounded font-bold text-[10px] inline-flex items-center gap-1">
                            <X className="w-3 h-3" /> Rejected
                          </span>
                        )}
                        {rev.status === 'Pending' && (
                          <span className="px-2.5 py-1 bg-amber-100 text-amber-800 border border-amber-300 rounded font-bold text-[10px]">
                            Pending Review
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-4 text-right">
                        {rev.status === 'Pending' ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleApprove(rev.id, rev.title)}
                              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition-colors inline-flex items-center gap-1 shadow-xs"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Approve</span>
                            </button>

                            <button
                              onClick={() => handleReject(rev.id, rev.title)}
                              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded text-xs font-bold transition-colors inline-flex items-center gap-1 shadow-xs"
                            >
                              <X className="w-3.5 h-3.5" />
                              <span>Reject</span>
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11px] text-slate-400 font-mono">Decision Saved</span>
                        )}
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
