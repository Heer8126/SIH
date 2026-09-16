import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Newspaper, ThumbsUp, Share2, ArrowRight, Clock } from 'lucide-react';
import { MEDIA_POSTS } from '../data/mediaData';
import { RegionBadge } from '../components/common/Badge';

export const MediaFeed = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [likesState, setLikesState] = useState(() => {
    const initial = {};
    MEDIA_POSTS.forEach(p => initial[p.id] = p.likes);
    return initial;
  });

  const types = ['All', 'Field Article', 'Photo Essay', 'Social Post', 'Video Chronicle'];
  const regions = ['All', 'Arctic', 'Antarctic', 'Himalaya'];

  const filteredPosts = useMemo(() => {
    return MEDIA_POSTS.filter((post) => {
      const matchesType = selectedType === 'All' || post.contentType === selectedType;
      const matchesRegion = selectedRegion === 'All' || post.region === selectedRegion;
      return matchesType && matchesRegion;
    });
  }, [selectedType, selectedRegion]);

  const handleLike = (id) => {
    setLikesState(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
          <Newspaper className="w-4 h-4" />
          <span>{t('media.tag')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          {t('media.title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          {t('media.sub')}
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-xs text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">{t('media.filter_type')}</span>
            <div className="flex flex-wrap gap-1">
              {types.map((tItem) => (
                <button
                  key={tItem}
                  onClick={() => setSelectedType(tItem)}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                    selectedType === tItem
                      ? 'bg-ncpor-navy text-white font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tItem}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
            <span className="font-bold text-slate-700">{t('media.filter_region')}</span>
            <div className="flex gap-1">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                    selectedRegion === r
                      ? 'bg-teal-700 text-white font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        <span className="text-slate-500 font-medium">{filteredPosts.length} Media Stories Published</span>
      </div>

      {/* Main Feed Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all space-y-4"
            >
              <div className="p-5 pb-0 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{post.author}</h3>
                    <p className="text-[11px] text-slate-500">{post.authorRole} • {post.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-bold uppercase tracking-wider">
                    {post.contentType}
                  </span>
                  <RegionBadge region={post.region} />
                </div>
              </div>

              <div className="px-5 space-y-2">
                <h2 className="text-lg font-bold text-slate-900 leading-snug">
                  {post.title}
                </h2>
              </div>

              <div className="h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt={post.altText}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-5 space-y-3 text-xs text-slate-700 leading-relaxed">
                <p className="font-medium text-slate-800">{post.caption}</p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 whitespace-pre-line text-slate-600">
                  {post.fullContent}
                </div>
              </div>

              <div className="px-5 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-100 pt-3">
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-teal-700 font-medium hover:underline">
                      #{tag}
                    </span>
                  ))}
                </div>

                {post.relatedReportId && (
                  <Link
                    to={`/repository/${post.relatedReportId}`}
                    className="inline-flex items-center gap-1 font-bold text-teal-700 hover:text-teal-900"
                  >
                    <span>{t('media.view_dataset')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1.5 hover:text-teal-700 transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{likesState[post.id]} {t('media.likes')}</span>
                  </button>
                  <div className="flex items-center gap-1.5">
                    <Share2 className="w-4 h-4" />
                    <span>{post.shares} {t('media.shares')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-ncpor-navy text-white rounded-xl p-6 border border-slate-800 space-y-4 shadow-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-2">
              {t('media.national_engagement')}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              NCPOR conducts annual university outreach lectures, student polar essay contests, and public exhibitions on National Science Day and World Oceans Day.
            </p>
            <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-1">
              <p className="text-xs font-bold text-white">Student Polar Training 2024</p>
              <p className="text-[11px] text-slate-400">Applications open for university postgraduate students.</p>
              <Link to="/about" className="inline-block pt-1 text-[11px] font-bold text-teal-300 hover:underline">
                View Eligibility & Guidelines →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
              {t('media.trending_topics')}
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2 hover:bg-slate-50 rounded">
                <p className="font-bold text-slate-800">Year-round Wintering at Himadri</p>
                <p className="text-slate-500 text-[11px]">Svalbard Arctic Station • 2023-2024</p>
              </div>
              <div className="p-2 hover:bg-slate-50 rounded">
                <p className="font-bold text-slate-800">43rd Antarctic Expedition Arrival</p>
                <p className="text-slate-500 text-[11px]">Bharati & Maitri • MV Vasiliy Golovnin</p>
              </div>
              <div className="p-2 hover:bg-slate-50 rounded">
                <p className="font-bold text-slate-800">Himansh Glacier Velocity Logs</p>
                <p className="text-slate-500 text-[11px]">Lahaul-Spiti • Third Pole</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
