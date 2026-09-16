import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, RotateCcw, ArrowRight, Grid, List, Database, ShieldAlert } from 'lucide-react';
import { REPOSITORY_ITEMS } from '../data/repositoryData';
import { TypeBadge, RegionBadge } from '../components/common/Badge';

export const Repository = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  // State filters
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'All');
  const [selectedRegion, setSelectedRegion] = useState(searchParams.get('region') || 'All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const q = searchParams.get('search');
    const t = searchParams.get('type');
    const r = searchParams.get('region');
    if (q !== null) setSearchQuery(q);
    if (t !== null) setSelectedType(t);
    if (r !== null) setSelectedRegion(r);
  }, [searchParams]);

  const types = ['All', 'Expedition Report', 'Dataset', 'Publication', 'Photo', 'Video', 'Institutional Activity'];
  const regions = ['All', 'Arctic', 'Antarctic', 'Himalaya'];
  const years = ['All', '2024', '2023', '2022'];

  const filteredItems = useMemo(() => {
    return REPOSITORY_ITEMS.filter((item) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query));

      const matchesType = selectedType === 'All' || item.type === selectedType;
      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchesYear = selectedYear === 'All' || item.year.toString() === selectedYear;

      return matchesSearch && matchesType && matchesRegion && matchesYear;
    }).sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'downloads') return b.downloadsCount - a.downloadsCount;
      return 0;
    });
  }, [searchQuery, selectedType, selectedRegion, selectedYear, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setSelectedRegion('All');
    setSelectedYear('All');
    setSortBy('newest');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Title */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
          <Database className="w-4 h-4" />
          <span>{t('repository.tag')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          {t('repository.title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          {t('repository.sub')}
        </p>
      </div>

      {/* Control Panel */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-xs">
        
        {/* Search Row */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('repository.search_placeholder')}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="newest">{t('repository.sort_newest')}</option>
              <option value="oldest">{t('repository.sort_oldest')}</option>
              <option value="title">{t('repository.sort_title')}</option>
              <option value="downloads">{t('repository.sort_downloads')}</option>
            </select>

            <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white text-teal-700 shadow-xs font-bold' : 'text-slate-400 hover:text-slate-700'}`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white text-teal-700 shadow-xs font-bold' : 'text-slate-400 hover:text-slate-700'}`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-700">{t('repository.filter_type')}</span>
              <div className="flex flex-wrap gap-1">
                {types.map((tItem) => (
                  <button
                    key={tItem}
                    onClick={() => setSelectedType(tItem)}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
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

            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
              <span className="font-bold text-slate-700">{t('repository.filter_region')}</span>
              <div className="flex gap-1">
                {regions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRegion(r)}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
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

            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
              <span className="font-bold text-slate-700">{t('repository.filter_year')}</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-slate-700 font-medium"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {(searchQuery || selectedType !== 'All' || selectedRegion !== 'All' || selectedYear !== 'All') && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('repository.reset_filters')}</span>
            </button>
          )}
        </div>

      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <p>Showing <span className="font-bold text-slate-800">{filteredItems.length}</span> research records</p>
        <p>Open Access Government Repository</p>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">{t('repository.empty_title')}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {t('repository.empty_sub')}
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-teal-700 text-white rounded-md text-xs font-semibold hover:bg-teal-800 transition-colors"
          >
            {t('repository.clear_filters_btn')}
          </button>
        </div>
      ) : (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-slate-200 hover:border-teal-600 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden"
              >
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <TypeBadge type={item.type} />
                    <RegionBadge region={item.region} />
                  </div>

                  <Link to={`/repository/${item.id}`} className="block group">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-500 font-medium">
                    {item.author} • {item.institution}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <div className="flex items-center gap-3">
                    <span>{item.year}</span>
                    <span>•</span>
                    <span className="font-mono">{item.fileFormat}</span>
                    <span>({item.size})</span>
                  </div>
                  <Link
                    to={`/repository/${item.id}`}
                    className="font-semibold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    <span>{t('repository.view_record')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {filteredItems.map((item) => (
              <div key={item.id} className="p-5 hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <TypeBadge type={item.type} />
                    <RegionBadge region={item.region} />
                    <span className="text-xs text-slate-400 font-mono">DOI: {item.doi}</span>
                  </div>
                  <Link to={`/repository/${item.id}`}>
                    <h3 className="text-sm font-bold text-slate-900 hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 line-clamp-1">{item.description}</p>
                  <p className="text-[11px] text-slate-500">{item.author} • {item.date}</p>
                </div>

                <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0">
                  <div className="text-right text-xs text-slate-500 font-mono">
                    <p className="font-semibold text-slate-700">{item.fileFormat}</p>
                    <p>{item.size}</p>
                  </div>
                  <Link
                    to={`/repository/${item.id}`}
                    className="px-3 py-1.5 bg-teal-700 text-white rounded text-xs font-semibold hover:bg-teal-800 transition-colors"
                  >
                    {t('repository.view_details')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )
      )}

    </div>
  );
};
