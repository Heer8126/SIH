import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  const milestones = [
    { year: '1981', title: 'Maiden Antarctic Expedition', detail: 'India launches its first scientific expedition to Antarctica under the leadership of Dr. S.Z. Qasim.' },
    { year: '1983', title: 'Dakshin Gangotri Established', detail: 'Commissioning of India\'s first permanent Antarctic base on the ice shelf.' },
    { year: '1989', title: 'Maitri Station Commissioned', detail: 'Maitri Station established in Schirmacher Oasis for permanent year-round atmospheric and geological research.' },
    { year: '1998', title: 'NCPOR Foundation', detail: 'Establishment of National Centre for Antarctic and Ocean Research (later renamed NCPOR) in Vasco da Gama, Goa.' },
    { year: '2008', title: 'Himadri Arctic Station', detail: 'India enters Arctic polar science with the inauguration of Himadri station in Ny-Ålesund, Svalbard.' },
    { year: '2012', title: 'Bharati Station Operating', detail: 'State-of-the-art modular Bharati Station commissioned in Larsemann Hills, East Antarctica.' },
    { year: '2014', title: 'IndARC Sub-Surface Observatory', detail: 'Deployment of India\'s first underwater moored observatory in Kongsfjorden, Arctic Norway.' },
    { year: '2016', title: 'Himansh High-Altitude Station', detail: 'Himansh established at 13,500 ft in Lahaul-Spiti for Himalayan cryosphere mass balance monitoring.' },
    { year: '2023', title: 'Year-Round Arctic Wintering', detail: 'Initiation of continuous year-round winter scientific operations at Himadri Station, Svalbard.' },
    { year: '2024', title: 'PolarConnect Launch', detail: 'Unveiling of Integrated Polar Outreach & Knowledge Dissemination Portal under MoES PACER scheme.' },
  ];

  const domains = [
    { title: 'Antarctic Cryosphere', desc: 'Investigating ice sheet dynamics, sub-glacial bedrock topography, space weather, and ozone hole dynamics at Maitri and Bharati.' },
    { title: 'Arctic Climate & Ecosystems', desc: 'Studying ocean-atmosphere interactions, fjord biogeochemistry, Atlantic water inflow, and year-round aerosol fluxes at Himadri & IndARC.' },
    { title: 'Himalayan Cryosphere (Third Pole)', desc: 'Quantifying high-altitude glacier mass balance, permafrost thermal degradation, and meltwater stream hydrology at Himansh.' },
    { title: 'Southern Ocean Biogeochemistry', desc: 'Measuring ocean carbon sequestration, nutrient stoichiometry, phytoplankton biomass, and microplastic fluxes.' },
    { title: 'Deep Ocean & Bathymetric Mapping', desc: 'Executing high-resolution multibeam bathymetry along the Central Indian Ridge under India\'s Deep Ocean Mission.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Institutional Hero Banner */}
      <div className="bg-ncpor-navy text-white rounded-2xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden shadow-xl">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-700/60 text-teal-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('about.badge')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t('about.title')}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t('about.sub')}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
            <span>Headquarters: Vasco da Gama, Goa</span>
            <span>•</span>
            <span>Established: 1998</span>
            <span>•</span>
            <span>Scheme: PACER (Polar Science & Cryosphere)</span>
          </div>
        </div>
      </div>

      {/* Core Mission & Mandate */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t('about.mandate_tag')}</span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            {t('about.mandate_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Polar Station Operations</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maintain and manage India's year-round polar research bases: Maitri and Bharati in Antarctica, Himadri in the Arctic, and Himansh in the Himalayas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Climate Change Research</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Quantify global sea-level contributions, ocean carbon sink dynamics, and teleconnections between polar ice retreat and the Indian Summer Monsoon.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Open Data Dissemination</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curate and publish open-access scientific datasets, expedition cruise logs, and public outreach media via the National Polar Data Centre.
            </p>
          </div>
        </div>
      </section>

      {/* Research Domains Grid */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t('about.domains_tag')}</span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            {t('about.domains_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((dom, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs hover:border-teal-600 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Domain 0{i + 1}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{dom.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{dom.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t('about.heritage_tag')}</span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            {t('about.heritage_title')}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 pl-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-8 top-0.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-white text-teal-400 group-hover:bg-teal-600 transition-colors" />
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-teal-900 text-teal-200 text-xs font-mono font-bold">
                      {m.year}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{m.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Engagement */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Public Outreach & Academia</span>
          <h3 className="text-xl font-bold text-white">{t('about.fellowships_title')}</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            NCPOR actively encourages university researchers and postgraduate students to participate in polar science through MoES PACER fellowships and summer training programs.
          </p>
        </div>
        <Link
          to="/media"
          className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs rounded-lg shrink-0 shadow-xs"
        >
          {t('about.explore_media')}
        </Link>
      </section>

    </div>
  );
};
