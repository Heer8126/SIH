import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Download, Eye, MapPin, Calendar, User, Shield, Copy, Check } from 'lucide-react';
import { REPOSITORY_ITEMS } from '../data/repositoryData';
import { TypeBadge, RegionBadge } from '../components/common/Badge';
import { Toast } from '../components/common/Toast';

export const ItemDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const item = REPOSITORY_ITEMS.find((r) => r.id === id) || REPOSITORY_ITEMS[0];
  const relatedItems = REPOSITORY_ITEMS.filter((r) => r.id !== item.id && (r.region === item.region || r.type === item.type)).slice(0, 3);

  const handleSimulatedDownload = () => {
    setToastMessage(`Simulated File Request: Preparing download for "${item.title.substring(0, 35)}..." (${item.fileFormat}, ${item.size})`);
  };

  const handleSimulatedView = () => {
    setToastMessage(`Simulated Interactive Viewer initialized for record DOI: ${item.doi}`);
  };

  const handleCopyCitation = () => {
    const citationText = `${item.author} (${item.year}). ${item.title}. National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences. DOI: ${item.doi}`;
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />

      {/* Top Breadcrumb & Back Link */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('item_detail.back')}</span>
        </button>
        <span className="text-xs text-slate-400 font-mono">Record ID: {item.id}</span>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2 Cols): Details & Abstract */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Header Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex flex-wrap items-center gap-2">
              <TypeBadge type={item.type} />
              <RegionBadge region={item.region} />
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                DOI: {item.doi}
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {item.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 border-t border-b border-slate-100 py-3">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-semibold text-slate-800">{item.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-mono text-slate-700">{item.coordinates}</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleSimulatedDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>{t('item_detail.download_btn')} ({item.size})</span>
              </button>

              <button
                onClick={handleSimulatedView}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold border border-slate-300 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>{t('item_detail.view_preview')}</span>
              </button>

              <button
                onClick={handleCopyCitation}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs text-slate-600 hover:text-slate-900 font-medium ml-auto"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? t('item_detail.citation_copied') : t('item_detail.copy_citation')}</span>
              </button>
            </div>
          </div>

          {/* Description & Abstract */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
              {t('item_detail.summary_heading')}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              {item.fullAbstract || item.description}
            </p>
            
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t('item_detail.tags_heading')}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Related Resources */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {t('item_detail.related_heading')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedItems.map((rel) => (
                <div key={rel.id} className="bg-white p-4 rounded-lg border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div>
                    <TypeBadge type={rel.type} />
                    <Link to={`/repository/${rel.id}`} className="block mt-2 font-bold text-xs text-slate-900 hover:text-teal-700 line-clamp-2">
                      {rel.title}
                    </Link>
                  </div>
                  <div className="text-[10px] text-slate-500 flex justify-between pt-2 border-t border-slate-100">
                    <span>{rel.year}</span>
                    <span className="font-mono">{rel.fileFormat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (1 Col): Metadata Box */}
        <div className="space-y-6">
          
          <div className="bg-slate-900 text-white rounded-xl p-6 space-y-4 border border-slate-800 shadow-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-2">
              {t('item_detail.metadata_heading')}
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <p className="text-slate-400">{t('item_detail.authority')}</p>
                <p className="font-semibold text-slate-100">{item.institution}</p>
              </div>

              <div>
                <p className="text-slate-400">{t('item_detail.format_size')}</p>
                <p className="font-mono font-bold text-teal-300">{item.fileFormat} ({item.size})</p>
              </div>

              <div>
                <p className="text-slate-400">{t('item_detail.coordinates')}</p>
                <p className="font-mono text-slate-200">{item.coordinates}</p>
              </div>

              <div>
                <p className="text-slate-400">{t('item_detail.license')}</p>
                <p className="font-medium text-slate-300">{item.license}</p>
              </div>

              <div>
                <p className="text-slate-400">{t('item_detail.total_downloads')}</p>
                <p className="font-bold text-slate-100">{item.downloadsCount} requests</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1 text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>{t('item_detail.verified')}</span>
              </div>
              <p>Indexed in National Polar Data Centre (NPDC)</p>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider">
              {t('item_detail.guidance_title')}
            </h4>
            <p className="text-xs text-teal-800 leading-relaxed">
              {t('item_detail.guidance_text')}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
