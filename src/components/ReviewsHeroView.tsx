import React from 'react';
import {
  CheckCircle,
  Key,
  MessageSquare,
  Compass,
  Tag,
  Sparkles
} from 'lucide-react';
import { ListingData } from '../data/listingData';

interface ReviewsHeroViewProps {
  data: ListingData;
}

export const ReviewsHeroView: React.FC<ReviewsHeroViewProps> = ({ data }) => {
  return (
    <div id="reviews-hero" className="py-12 border-b border-gray-200 space-y-10">
      {/* Big Guest Favourite Rating Hero Header */}
      <div className="flex flex-col items-center text-center space-y-2">
        {/* Laurel Wreath 4.95 Hero Display */}
        <div className="flex items-center justify-center gap-3">
          <div className="text-4xl sm:text-5xl opacity-80 select-none">🌿</div>
          <span className="text-6xl sm:text-7xl font-extrabold text-[#222222] tracking-tight">
            {data.rating}
          </span>
          <div className="text-4xl sm:text-5xl opacity-80 select-none transform scale-x-[-1]">🌿</div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-2">Guest favourite</h3>
        <p className="text-sm text-gray-600 max-w-md font-normal leading-relaxed">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className="text-xs font-semibold underline text-gray-900 hover:text-black pt-1">
          How reviews work
        </button>
      </div>

      {/* Ratings Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 text-sm py-4 border-y border-gray-100">
        {/* Overall rating bar column */}
        <div className="space-y-1 col-span-1">
          <p className="font-semibold text-xs text-gray-900 mb-2">Overall rating</p>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-2">{star}</span>
              <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-black ${
                    star === 5 ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Cleanliness */}
        <div className="space-y-2 flex flex-col justify-between border-l border-gray-100 pl-4">
          <div>
            <p className="font-semibold text-xs text-gray-900">Cleanliness</p>
            <p className="text-base font-bold text-gray-900 mt-1">5.0</p>
          </div>
          <Sparkles className="w-6 h-6 text-gray-700" />
        </div>

        {/* Accuracy */}
        <div className="space-y-2 flex flex-col justify-between border-l border-gray-100 pl-4">
          <div>
            <p className="font-semibold text-xs text-gray-900">Accuracy</p>
            <p className="text-base font-bold text-gray-900 mt-1">5.0</p>
          </div>
          <CheckCircle className="w-6 h-6 text-gray-700" />
        </div>

        {/* Check-in */}
        <div className="space-y-2 flex flex-col justify-between border-l border-gray-100 pl-4">
          <div>
            <p className="font-semibold text-xs text-gray-900">Check-in</p>
            <p className="text-base font-bold text-gray-900 mt-1">5.0</p>
          </div>
          <Key className="w-6 h-6 text-gray-700" />
        </div>

        {/* Communication */}
        <div className="space-y-2 flex flex-col justify-between border-l border-gray-100 pl-4">
          <div>
            <p className="font-semibold text-xs text-gray-900">Communication</p>
            <p className="text-base font-bold text-gray-900 mt-1">5.0</p>
          </div>
          <MessageSquare className="w-6 h-6 text-gray-700" />
        </div>

        {/* Location */}
        <div className="space-y-2 flex flex-col justify-between border-l border-gray-100 pl-4">
          <div>
            <p className="font-semibold text-xs text-gray-900">Location</p>
            <p className="text-base font-bold text-gray-900 mt-1">4.8</p>
          </div>
          <Compass className="w-6 h-6 text-gray-700" />
        </div>

        {/* Value */}
        <div className="space-y-2 flex flex-col justify-between border-l border-gray-100 pl-4">
          <div>
            <p className="font-semibold text-xs text-gray-900">Value</p>
            <p className="text-base font-bold text-gray-900 mt-1">4.8</p>
          </div>
          <Tag className="w-6 h-6 text-gray-700" />
        </div>
      </div>

      {/* Review Filter Tag Pills Row */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold text-gray-800">
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-black transition shrink-0 bg-white shadow-2xs">
          <span>🛋️</span> Comfort <span className="text-gray-500 font-normal">6</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-black transition shrink-0 bg-white shadow-2xs">
          <span>✅</span> Accuracy <span className="text-gray-500 font-normal">5</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-black transition shrink-0 bg-white shadow-2xs">
          <span>♨️</span> Hot tub <span className="text-gray-500 font-normal">5</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-black transition shrink-0 bg-white shadow-2xs">
          <span>🧼</span> Condition <span className="text-gray-500 font-normal">4</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-black transition shrink-0 bg-white shadow-2xs">
          <span>🎁</span> Hospitality <span className="text-gray-500 font-normal">8</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-black transition shrink-0 bg-white shadow-2xs">
          <span>🧹</span> Cleanliness <span className="text-gray-500 font-normal">4</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-black transition shrink-0 bg-white shadow-2xs">
          <span>🔌</span> Amenities <span className="text-gray-500 font-normal">2</span>
        </button>
      </div>
    </div>
  );
};
