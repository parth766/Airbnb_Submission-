import React, { useState } from 'react';
import { Search, Plus, Minus, Home } from 'lucide-react';

interface MapViewProps {
  location: string;
}

export const MapView: React.FC<MapViewProps> = ({ location }) => {
  const [zoom, setZoom] = useState(1);

  return (
    <div id="location-map" className="space-y-4 py-8 border-b border-gray-200">
      <div>
        <h3 className="text-2xl font-bold text-[#222222]">Where you'll be</h3>
        <p className="text-base text-gray-700 font-normal mt-1">{location}</p>
      </div>

      {/* Styled Interactive Map Canvas Container */}
      <div className="relative w-full h-[420px] rounded-3xl overflow-hidden border border-gray-200 shadow-xs bg-[#e8f0f8] select-none">
        {/* Vector Styled Map Representation */}
        <div
          className="absolute inset-0 transition-transform duration-300 origin-center"
          style={{ transform: `scale(${zoom})` }}
        >
          {/* Water Area (Coastline) */}
          <div className="absolute top-0 bottom-0 left-0 w-[35%] bg-[#a3c9e2] -skew-x-12 transform -translate-x-10" />

          {/* Land Area Grid Lines */}
          <div className="absolute top-0 bottom-0 right-0 left-[30%] bg-[#eaf2e5] grid grid-cols-6 grid-rows-6 opacity-80">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="border-r border-b border-emerald-900/5" />
            ))}
          </div>

          {/* Area Radius Shading Circles */}
          <div className="absolute top-[25%] left-[32%] w-24 h-24 rounded-full bg-[#82ba8d]/30 pointer-events-none" />
          <div className="absolute bottom-[20%] right-[25%] w-32 h-32 rounded-full bg-[#82ba8d]/30 pointer-events-none" />

          {/* Center Location Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="w-12 h-12 bg-[#222222] text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white cursor-pointer hover:scale-110 transition">
              <Home className="w-5 h-5 fill-white" />
            </div>
          </div>
        </div>

        {/* Top-Left Search Glass Button */}
        <button className="absolute top-5 left-5 w-10 h-10 bg-white text-gray-800 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition">
          <Search className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Top-Right Zoom In/Out Controls Stack */}
        <div className="absolute top-5 right-5 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col divide-y divide-gray-200 overflow-hidden">
          <button
            onClick={() => setZoom(Math.min(zoom + 0.15, 1.4))}
            className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition"
            aria-label="Zoom in"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={() => setZoom(Math.max(zoom - 0.15, 0.85))}
            className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition"
            aria-label="Zoom out"
          >
            <Minus className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Subtext */}
      <p className="text-sm text-gray-600 font-normal">
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood highlights section (Screenshot 4) */}
      <div className="pt-6 space-y-2">
        <h4 className="text-lg font-bold text-gray-900">Neighbourhood highlights</h4>
        <p className="text-sm text-gray-700 font-normal max-w-2xl leading-relaxed">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className="text-sm font-semibold underline text-gray-900 hover:text-black pt-1 block">
          Show more &gt;
        </button>
      </div>
    </div>
  );
};

