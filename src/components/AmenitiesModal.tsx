import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { ListingData } from '../data/listingData';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  amenities: ListingData['amenities'];
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({
  isOpen,
  onClose,
  amenities
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <header className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close amenities modal"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <h3 className="font-semibold text-lg text-gray-900">What this place offers</h3>
          <div className="w-8" />
        </header>

        <div className="p-6 overflow-y-auto space-y-8">
          {amenities.map((cat, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-bold text-lg text-gray-900 border-b border-gray-100 pb-2">
                {cat.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">{item.name}</p>
                      {item.description && (
                        <p className="text-xs text-gray-500">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
