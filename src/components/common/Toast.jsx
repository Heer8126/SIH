import React from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

export const Toast = ({ message, type = 'info', onClose }) => {
  if (!message) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-rose-600 shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-teal-600 shrink-0" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'border-emerald-200 bg-emerald-50 text-emerald-900';
      case 'error':
        return 'border-rose-200 bg-rose-50 text-rose-900';
      default:
        return 'border-teal-200 bg-teal-50 text-teal-900';
    }
  };

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg max-w-md transition-all animate-bounce-short ${getStyles()}`}>
      {getIcon()}
      <p className="text-sm font-medium leading-tight">{message}</p>
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-auto p-1 hover:bg-black/5 rounded transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4 text-slate-500" />
        </button>
      )}
    </div>
  );
};
