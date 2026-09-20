import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { NearbyStay } from '../data/listingData';

interface NearbyStaysProps {
  stays: NearbyStay[];
}

export const NearbyStays: React.FC<NearbyStaysProps> = ({ stays }) => {
  return (
    <div id="nearby-stays" className="py-12 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#222222]">More stays nearby</h3>
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
          <span>1 / 2</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition active:scale-95">
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition active:scale-95">
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* 5 Nearby Stay Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {stays.map((stay) => (
          <div key={stay.id} className="space-y-2 group cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 leading-tight">
              {stay.title}
            </h4>
            <div className="flex items-center justify-between text-sm pt-0.5">
              <span className="font-semibold text-gray-900">{stay.price}</span>
              <span className="flex items-center gap-1 text-xs font-semibold text-gray-800">
                <Star className="w-3 h-3 fill-black text-black" />
                <span>{stay.rating}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
