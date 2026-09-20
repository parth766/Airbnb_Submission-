import React, { useState } from 'react';
import { Share, Heart } from 'lucide-react';

interface ListingHeaderProps {
  title: string;
  onShareClick: () => void;
}

export const ListingHeader: React.FC<ListingHeaderProps> = ({ title, onShareClick }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="pt-6 pb-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        {/* Title */}
        <h1 className="text-[26px] md:text-[32px] font-semibold tracking-tight text-[#222222] leading-tight">
          {title}
        </h1>

        {/* Action buttons */}
        <div className="flex items-center gap-4 text-sm font-semibold text-[#222222] shrink-0">
          <button
            onClick={onShareClick}
            className="flex items-center gap-2 underline p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Share className="w-4 h-4 stroke-[2.2]" />
            <span>Share</span>
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 underline p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Heart
              className={`w-4 h-4 stroke-[2.2] transition-colors ${
                isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-[#222222]'
              }`}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
