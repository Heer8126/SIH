import React from 'react';

export const TypeBadge = ({ type }) => {
  const getColors = () => {
    switch (type) {
      case 'Expedition Report':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Dataset':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Publication':
        return 'bg-slate-100 text-slate-700 border-slate-300';
      case 'Photo':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Video':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Institutional Activity':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getColors()}`}>
      {type}
    </span>
  );
};

export const RegionBadge = ({ region }) => {
  const getColors = () => {
    switch (region) {
      case 'Arctic':
        return 'bg-cyan-100 text-cyan-800 border-cyan-300';
      case 'Antarctic':
        return 'bg-sky-100 text-sky-800 border-sky-300';
      case 'Himalaya':
        return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${getColors()}`}>
      {region}
    </span>
  );
};
