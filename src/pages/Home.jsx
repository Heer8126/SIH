import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, FileText, Database, Compass, Radio, BookOpen, Layers, Award, ChevronRight } from 'lucide-react';
import { REPOSITORY_ITEMS } from '../data/repositoryData';
import { MEDIA_POSTS } from '../data/mediaData';
import { POLAR_STATIONS } from '../data/expeditions';
import { TypeBadge, RegionBadge } from '../components/common/Badge';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/repository?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/repository');
    }
  };

  const featuredItems = REPOSITORY_ITEMS.slice(0, 4);
  const featuredMedia = MEDIA_POSTS.slice(0, 3);
  const activeStations = POLAR_STATIONS.slice(0, 4);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-ncpor-navy text-white overflow-hidden border-b border-slate-800">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-700/60 text-teal-300 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-teal-400" />
              <span>Ministry of Earth Sciences, Govt. of India</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              PolarConnect: India's Polar & Ocean Science Knowledge Hub
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Integrated scientific research repository, expedition logbooks, satellite datasets, and public science outreach curated by the National Centre for Polar and Ocean Research (NCPOR).
            </p>

            {/* Main Search Bar */}
            <form onSubmit={handleSearchSubmit} className="pt-2">
              <div className="flex flex-col sm:flex-row gap-2 bg-white/10 p-2 rounded-xl backdrop-blur-xs border border-slate-700 shadow-xl">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 150+ expedition reports, datasets, publications & media..."
                    className="w-full pl-11 pr-4 py-3 bg-white text-slate-900 placeholder-slate-500 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shrink-0"
                >
                  <span>Search Archive</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Popular Queries:</span>
                <button type="button" onClick={() => navigate('/repository?search=43rd')} className="hover:text-teal-300 underline">43rd IAE</button>
                <span>•</span>
                <button type="button" onClick={() => navigate('/repository?region=Arctic')} className="hover:text-teal-300 underline">Himadri Svalbard</button>
                <span>•</span>
                <button type="button" onClick={() => navigate('/repository?search=Himansh')} className="hover:text-teal-300 underline">Himansh Glaciology</button>
                <span>•</span>
                <button type="button" onClick={() => navigate('/repository?type=Dataset')} className="hover:text-teal-300 underline">NetCDF Datasets</button>
              </div>
            </form>

          </div>
        </div>

        {/* Stats Strip */}
        <div className="bg-slate-950/90 border-t border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight">150+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Expedition Reports</p>
            </div>

            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">500+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Curated Datasets</p>
            </div>

            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-sky-400 tracking-tight">2000+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Media Files & Archives</p>
            </div>

            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">40+ Years</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Polar Research Heritage</p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Repository Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
              <Database className="w-4 h-4" />
              <span>National Knowledge Base</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Featured Research Resources
            </h2>
          </div>
          <Link
            to="/repository"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
          >
            <span>Browse Full Repository (15+ Items)</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
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
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>{item.year}</span>
                <Link
                  to={`/repository/${item.id}`}
                  className="font-semibold text-teal-700 hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Stations & Expedition Map Teaser */}
      <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Field Logistics & Research Stations
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                India's Polar Presence Across 3 Continents
              </h2>
            </div>
            <Link
              to="/map"
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-md text-xs font-semibold transition-colors shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>Open Interactive Expedition Map</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeStations.map((stn) => (
              <div
                key={stn.id}
                className="bg-slate-800/90 rounded-lg border border-slate-700 overflow-hidden flex flex-col justify-between"
              >
                <div className="h-36 overflow-hidden relative">
                  <img
                    src={stn.stationPhoto}
                    alt={stn.name}
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <RegionBadge region={stn.region} />
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-white">{stn.name}</h3>
                  <p className="text-[11px] text-teal-300 font-mono">{stn.coordinates}</p>
                  <p className="text-xs text-slate-300 line-clamp-2">{stn.description}</p>
                </div>

                <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Est. {stn.yearEstablished}</span>
                  <Link to="/map" className="text-teal-400 hover:underline">Explore Pin</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Science Outreach Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Dissemination & Media
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Latest Polar Science Stories
            </h2>
          </div>
          <Link
            to="/media"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-900"
          >
            <span>View All Stories</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMedia.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg border border-slate-200 hover:border-teal-600 transition-all overflow-hidden flex flex-col justify-between shadow-xs"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded bg-slate-900/90 text-teal-300 text-[10px] font-bold uppercase tracking-wider">
                    {post.contentType}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>{post.date}</span>
                    <RegionBadge region={post.region} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{post.readTime}</span>
                  <Link
                    to="/media"
                    className="font-bold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ncpor-navy text-white rounded-xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg">
          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Open Government Data Policy</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Access 500+ Polar Datasets for Research & Academia
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore CTD profiles, ice core temperature series, atmospheric radiation fluxes, and GIS bathymetric grids published under India's National Polar Data Policy.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <Link
              to="/repository"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm rounded-lg text-center transition-colors shadow-xs"
            >
              Explore Data Archive
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm rounded-lg border border-slate-700 text-center transition-colors"
            >
              About NCPOR
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
