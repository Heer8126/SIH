import React, { useState } from 'react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { AdminHeader } from '../../components/layout/AdminHeader';
import { Toast } from '../../components/common/Toast';
import { Upload, FileText, CheckCircle2, ArrowLeft, Shield, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminUpload = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Expedition Report',
    region: 'Antarctic',
    year: '2024',
    tags: '',
    author: 'Dr. S. K. Roy / NCPOR Team',
    institution: 'National Centre for Polar and Ocean Research',
    doi: '10.6084/m9.figshare.ncpor.2024.' + Math.floor(100 + Math.random() * 900),
    fileName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileDrop = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, fileName: file.name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    setIsSubmitting(true);
    setUploadProgress(10);

    // Simulate progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSubmitting(false);
          setToastMessage(`Simulated Upload Success! Resource "${formData.title.substring(0, 30)}..." successfully staged.`);
          setFormData({
            title: '',
            description: '',
            type: 'Expedition Report',
            region: 'Antarctic',
            year: '2024',
            tags: '',
            author: 'Dr. S. K. Roy / NCPOR Team',
            institution: 'National Centre for Polar and Ocean Research',
            doi: '10.6084/m9.figshare.ncpor.2024.' + Math.floor(100 + Math.random() * 900),
            fileName: ''
          });
          return 0;
        }
        return prev + 30;
      });
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Toast message={toastMessage} type="success" onClose={() => setToastMessage('')} />
      <AdminSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div className="flex-1 md:pl-64 flex flex-col">
        <AdminHeader setMobileOpen={setMobileOpen} />

        <main className="p-4 sm:p-6 lg:p-8 max-w-4xl w-full mx-auto space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <Link to="/admin" className="text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Dashboard</span>
              </Link>
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Resource Upload & Ingestion Form
              </h1>
            </div>
            <span className="text-xs font-mono bg-slate-200 text-slate-700 px-2.5 py-1 rounded">
              NPDC Metadata Standard v2.4
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
                1. Resource Identification
              </h2>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">
                  Resource Title <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. 44th IAE Southern Ocean Biological Cruise Report"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Resource Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800"
                  >
                    <option value="Expedition Report">Expedition Report</option>
                    <option value="Dataset">Dataset (NetCDF/CSV)</option>
                    <option value="Publication">Publication</option>
                    <option value="Photo">Photo Archive</option>
                    <option value="Video">Video Chronicle</option>
                    <option value="Institutional Activity">Institutional Activity</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Polar Region</label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800"
                  >
                    <option value="Antarctic">Antarctic</option>
                    <option value="Arctic">Arctic</option>
                    <option value="Himalaya">Himalaya</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Publication Year</label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
                2. Abstract & Scientific Keywords
              </h2>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Abstract / Description</label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide a scientific abstract detailing sampling methodology, instrumentation, and geographic bounds..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Author / Principal Investigator</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Keywords (Comma Separated)</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Maitri, Ozone, Aerosols, Glaciology"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* File Dropzone */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
                3. File Dropzone (Simulated Ingestion)
              </h2>

              <div className="border-2 border-dashed border-slate-300 hover:border-teal-600 rounded-xl p-6 text-center bg-slate-50 space-y-2 transition-colors">
                <Upload className="w-8 h-8 text-teal-600 mx-auto" />
                <p className="text-xs font-bold text-slate-800">
                  {formData.fileName ? `Selected: ${formData.fileName}` : 'Drag & drop scientific data file here, or click to browse'}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">Supports PDF, NetCDF (.nc), HDF5, CSV, ZIP up to 5 GB</p>
                <input
                  type="file"
                  onChange={handleFileDrop}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block mt-2 px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded cursor-pointer"
                >
                  Choose File
                </label>
              </div>
            </div>

            {/* Progress Bar */}
            {isSubmitting && (
              <div className="space-y-1 pt-2">
                <div className="flex justify-between text-xs text-teal-700 font-bold">
                  <span>Uploading to Staging Node...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${uploadProgress}%` }}
                    className="bg-teal-600 h-full transition-all duration-300"
                  />
                </div>
              </div>
            )}

            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <p className="text-[11px] text-slate-400">
                UI-Only Demo: Submitting simulates ingestion without storing files on disk.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
              >
                {isSubmitting ? 'Ingesting Resource...' : 'Submit Resource'}
              </button>
            </div>

          </form>

        </main>
      </div>
    </div>
  );
};
