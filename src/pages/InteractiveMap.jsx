import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass, ArrowRight, Navigation, Info } from 'lucide-react';
import { POLAR_STATIONS } from '../data/expeditions';
import { RegionBadge } from '../components/common/Badge';

export const InteractiveMap = () => {
  const { t } = useTranslation();
  const [selectedStation, setSelectedStation] = useState(POLAR_STATIONS[0]);
  const [regionFilter, setRegionFilter] = useState('All');

  const filteredStations = POLAR_STATIONS.filter(
    (s) => regionFilter === 'All' || s.region === regionFilter
  );

  const getMapCoordinates = (lat, lng) => {
    const x = ((lng + 120) / 240) * 800;
    const y = ((85 - lat) / 170) * 480;
    return { x: Math.max(30, Math.min(770, x)), y: Math.max(30, Math.min(450, y)) };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>{t('map.tag')}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          {t('map.title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          {t('map.sub')}
        </p>
      </div>

      {/* Map Control Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-700">{t('map.filter_region')}</span>
          <div className="flex gap-1">
            {['All', 'Antarctic', 'Arctic', 'Himalaya'].map((r) => (
              <button
                key={r}
                onClick={() => setRegionFilter(r)}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  regionFilter === r
                    ? 'bg-ncpor-navy text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-500 font-mono text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span>{t('map.active_permanent')}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
            <span>{t('map.subsurface_obs')}</span>
          </span>
        </div>
      </div>

      {/* Main Map + Station Drawer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Map Canvas */}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-4 relative overflow-hidden shadow-xl">
          <div className="absolute top-6 left-6 z-10 bg-slate-950/90 border border-slate-800 backdrop-blur-md px-3 py-2 rounded-lg text-white space-y-0.5">
            <div className="flex items-center gap-2">
              <Navigation className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-xs font-bold tracking-wide uppercase font-mono">NCPOR Global Grid</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono">WGS-84 Polar Mercator Projection</p>
          </div>

          <div className="relative w-full aspect-16/9 bg-slate-950 rounded-xl overflow-hidden border border-slate-800/80">
            <svg
              viewBox="0 0 800 480"
              className="w-full h-full select-none"
            >
              {/* Latitude Grid Lines */}
              <line x1="0" y1="80" x2="800" y2="80" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <text x="10" y="75" fill="#475569" fontSize="10" fontFamily="monospace">60°N (Arctic Circle)</text>

              <line x1="0" y1="240" x2="800" y2="240" stroke="#1e293b" strokeDasharray="2 2" strokeWidth="1" />
              <text x="10" y="235" fill="#475569" fontSize="10" fontFamily="monospace">0° (Equator)</text>

              <line x1="0" y1="400" x2="800" y2="400" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <text x="10" y="395" fill="#475569" fontSize="10" fontFamily="monospace">60°S (Antarctic Treaty)</text>

              {/* Vector Continents */}
              <path d="M 280,60 L 320,50 L 350,90 L 310,130 L 270,100 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              <text x="290" y="90" fill="#64748b" fontSize="10" fontWeight="bold">GREENLAND</text>

              <path d="M 430,40 L 450,35 L 460,55 L 435,58 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="440" y="30" fill="#0ea5e9" fontSize="10" fontWeight="bold">SVALBARD</text>

              <path d="M 400,100 L 580,90 L 620,180 L 530,220 L 510,170 L 440,150 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              <path d="M 525,175 L 555,180 L 545,215 L 525,195 Z" fill="#134e4a" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="530" y="195" fill="#2dd4bf" fontSize="11" fontWeight="extrabold">INDIA (NCPOR HQ)</text>

              <path d="M 100,410 C 250,390 450,380 700,410 C 750,450 650,470 400,475 C 200,470 50,450 100,410 Z" fill="#0369a1" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
              <text x="360" y="445" fill="#BAE6FD" fontSize="14" fontWeight="extrabold" letterSpacing="3">ANTARCTICA</text>

              {/* Station Markers */}
              {filteredStations.map((station) => {
                const pos = getMapCoordinates(station.lat, station.lng);
                const isSelected = selectedStation?.id === station.id;

                return (
                  <g
                    key={station.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    onClick={() => setSelectedStation(station)}
                    className="cursor-pointer group"
                  >
                    {isSelected && (
                      <circle r="16" fill="none" stroke="#2dd4bf" strokeWidth="2" className="animate-ping" />
                    )}

                    <circle
                      r={isSelected ? "10" : "8"}
                      fill={station.region === 'Antarctic' ? '#38bdf8' : station.region === 'Arctic' ? '#2dd4bf' : '#f43f5e'}
                      stroke="#0f172a"
                      strokeWidth="2"
                      className="transition-all duration-200 group-hover:scale-125"
                    />

                    <circle r="3" fill="#ffffff" />

                    <text
                      x="14"
                      y="4"
                      fill={isSelected ? "#2dd4bf" : "#f8fafc"}
                      fontSize={isSelected ? "12" : "10"}
                      fontWeight={isSelected ? "bold" : "medium"}
                      className="pointer-events-none drop-shadow-md"
                    >
                      {station.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-teal-400" />
              <span>Click any marker on the map to inspect station specifications.</span>
            </span>
            <span className="font-mono text-[11px] text-teal-300">{t('map.selected_station')} {selectedStation.name}</span>
          </div>
        </div>

        {/* Station Detail Drawer */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm sticky top-24">
          <div className="h-44 rounded-xl overflow-hidden relative bg-slate-900 border border-slate-200">
            <img
              src={selectedStation.stationPhoto}
              alt={selectedStation.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <RegionBadge region={selectedStation.region} />
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-xs p-2 rounded text-white text-xs font-mono">
              {selectedStation.coordinates}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  {selectedStation.name}
                </h3>
                <p className="text-xs text-teal-700 font-semibold">{selectedStation.type}</p>
              </div>
              <span className="px-2 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[10px] font-bold">
                {selectedStation.status}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedStation.description}
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-200 text-xs">
            <div className="flex justify-between pb-1.5 border-b border-slate-200">
              <span className="text-slate-500">{t('map.established')}</span>
              <span className="font-bold text-slate-800">{selectedStation.yearEstablished}</span>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-slate-200">
              <span className="text-slate-500">Authority</span>
              <span className="font-semibold text-slate-800">{selectedStation.leader}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">{t('map.key_frontiers')}</span>
              <p className="font-medium text-slate-700 leading-normal">{selectedStation.keyResearch}</p>
            </div>
          </div>

          {selectedStation.relatedReportId && (
            <Link
              to={`/repository/${selectedStation.relatedReportId}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-ncpor-navy hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
            >
              <span>{t('map.view_station_dataset')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>

    </div>
  );
};
