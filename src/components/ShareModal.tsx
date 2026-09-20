import React, { useState } from 'react';
import { X, Copy, Check, Mail } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <h3 className="font-semibold text-lg text-gray-900">Share this place</h3>
          <div className="w-8" />
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl">
          <p className="text-sm font-semibold text-gray-800">{title}</p>
        </div>

        {/* Share Channels */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 font-semibold transition"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 text-gray-700" />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
          <a
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(currentUrl)}`}
            className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 font-semibold transition"
          >
            <Mail className="w-5 h-5 text-gray-700" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};
