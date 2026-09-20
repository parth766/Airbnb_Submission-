import React, { useState } from 'react';
import {
  Star,
  ChevronRight,
  Tv,
  Wind,
  DoorClosed,
  Utensils,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  PawPrint,
  Video,
  ShieldOff,
  Keyboard,
  ChevronLeft
} from 'lucide-react';
import { ListingData } from '../data/listingData';

interface ListingContentProps {
  data: ListingData;
  onOpenAmenitiesModal: () => void;
}

export const ListingContent: React.FC<ListingContentProps> = ({
  data,
  onOpenAmenitiesModal
}) => {
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  return (
    <div className="space-y-8 pr-0 lg:pr-6">
      {/* Property Subtitle & Details */}
      <div>
        <h2 className="text-2xl font-semibold text-[#222222]">
          {data.subtitle}
        </h2>
        <p className="text-base text-gray-600 mt-1 font-normal">
          {data.details.guests} guests · {data.details.bedrooms} bedroom · {data.details.beds} bed · {data.details.bathrooms} bathroom
        </p>
      </div>

      {/* Guest Favourite Badge Box */}
      <div className="border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white shadow-xs">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="text-3xl">🌿</div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 leading-tight">Guest favourite</h3>
            <p className="text-xs text-gray-500 max-w-xs mt-0.5 font-normal">
              One of the most loved homes on Airbnb, according to guests
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-center border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-6">
          <div>
            <div className="text-xl font-bold text-gray-900">{data.rating}</div>
            <div className="flex items-center gap-0.5 justify-center text-xs mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-black text-black" />
              ))}
            </div>
          </div>
          <div className="border-l border-gray-200 pl-4">
            <div className="text-xl font-bold text-gray-900">{data.reviewsCount}</div>
            <div className="text-xs text-gray-500 underline cursor-pointer">Reviews</div>
          </div>
        </div>
      </div>

      {/* Host Row */}
      <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
        <div className="w-14 h-14 rounded-full bg-[#1c3a27] text-white flex items-center justify-center font-extrabold text-[10px] tracking-wider shrink-0 shadow-sm">
          MIRASHYA
        </div>
        <div>
          <h3 className="font-semibold text-base text-gray-900">Hosted by Mirashya Homes</h3>
          <p className="text-sm text-gray-500 font-normal">2 years hosting</p>
        </div>
      </div>

      {/* Highlights List */}
      <div className="space-y-6 pb-8 border-b border-gray-200">
        <div className="flex gap-4">
          <Tv className="w-6 h-6 text-gray-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base text-gray-900">Outdoor entertainment</h4>
            <p className="text-sm text-gray-500 font-normal">The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Wind className="w-6 h-6 text-gray-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base text-gray-900">Designed for staying cool</h4>
            <p className="text-sm text-gray-500 font-normal">Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <DoorClosed className="w-6 h-6 text-gray-800 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-base text-gray-900">Self check-in</h4>
            <p className="text-sm text-gray-500 font-normal">You can check in with the building staff.</p>
          </div>
        </div>
      </div>

      {/* Translation disclaimer banner */}
      <div className="bg-gray-100/70 border border-gray-200/60 rounded-xl p-4 text-sm text-gray-700">
        Some info has been automatically translated. <button className="font-semibold underline text-gray-900">Show original</button>
      </div>

      {/* About this space */}
      <div className="space-y-4 pb-8 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-[#222222]">About this space</h3>
        <div className="text-base text-gray-700 leading-relaxed space-y-3 font-normal">
          <p>{data.description[0]}</p>
          <p>{data.description[1]}</p>
          {isDescExpanded && <p>{data.description[2]}</p>}
        </div>
        <button
          onClick={() => setIsDescExpanded(!isDescExpanded)}
          className="flex items-center gap-1 font-semibold underline text-[#222222] hover:text-black pt-1"
        >
          <span>{isDescExpanded ? 'Show less' : 'Show more'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${isDescExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Where you'll sleep (Room Photos Preview) */}
      <div className="space-y-4 pb-8 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-[#222222]">Where you'll sleep</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="rounded-2xl overflow-hidden h-44 bg-gray-100">
              <img src="/images/room_bedroom.jpg" alt="Bedroom" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-base text-gray-900 mt-2">Bedroom</h4>
            <p className="text-sm text-gray-500">1 double bed</p>
          </div>
          <div className="space-y-2">
            <div className="rounded-2xl overflow-hidden h-44 bg-gray-100">
              <img src="/images/room_living.jpg" alt="Living room" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-base text-gray-900 mt-2">Living room</h4>
            <p className="text-sm text-gray-500">1 sofa</p>
          </div>
        </div>
      </div>

      {/* What this place offers (Amenities section) */}
      <div id="amenities-section" className="space-y-6 pb-8 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-[#222222]">What this place offers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-base text-gray-800">
          <div className="flex items-center gap-4">
            <Utensils className="w-6 h-6 text-gray-800" />
            <span>Kitchen</span>
          </div>
          <div className="flex items-center gap-4">
            <Wifi className="w-6 h-6 text-gray-800" />
            <span>Wifi</span>
          </div>
          <div className="flex items-center gap-4">
            <Laptop className="w-6 h-6 text-gray-800" />
            <span>Dedicated workspace</span>
          </div>
          <div className="flex items-center gap-4">
            <Car className="w-6 h-6 text-gray-800" />
            <span>Free parking on premises</span>
          </div>
          <div className="flex items-center gap-4">
            <Waves className="w-6 h-6 text-gray-800" />
            <span>Pool</span>
          </div>
          <div className="flex items-center gap-4">
            <Bath className="w-6 h-6 text-gray-800" />
            <span>Hot tub</span>
          </div>
          <div className="flex items-center gap-4">
            <PawPrint className="w-6 h-6 text-gray-800" />
            <span>Pets allowed</span>
          </div>
          <div className="flex items-center gap-4">
            <Video className="w-6 h-6 text-gray-800" />
            <span>Exterior security cameras on property</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 line-through">
            <ShieldOff className="w-6 h-6 text-gray-400" />
            <span>Carbon monoxide alarm</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 line-through">
            <ShieldOff className="w-6 h-6 text-gray-400" />
            <span>Smoke alarm</span>
          </div>
        </div>
        <button
          onClick={onOpenAmenitiesModal}
          className="mt-2 border border-black hover:bg-gray-50 font-semibold text-[#222222] py-3 px-6 rounded-xl transition text-base"
        >
          Show all 10 amenities
        </button>
      </div>

      {/* Dual Month Interactive Calendar Section */}
      <div id="photos-section" className="space-y-6 pb-8">
        <div>
          <h3 className="text-2xl font-semibold text-[#222222]">5 nights in Candolim</h3>
          <p className="text-sm text-gray-500 mt-1">18 Oct 2026 - 23 Oct 2026</p>
        </div>

        {/* Dual Calendar View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          {/* October 2026 */}
          <div>
            <div className="flex items-center justify-between font-semibold text-gray-900 mb-4 px-2">
              <button className="p-1 hover:bg-gray-100 rounded-full"><ChevronLeft className="w-4 h-4" /></button>
              <span>October 2026</span>
              <span className="w-4"></span>
            </div>
            <div className="grid grid-cols-7 text-center font-semibold text-gray-500 text-xs mb-2">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 text-center gap-y-2 text-sm">
              <span className="col-start-5 text-gray-700">1</span>
              <span className="text-gray-700">2</span>
              <span className="text-gray-700">3</span>
              <span className="text-gray-700">4</span>
              <span className="text-gray-700">5</span>
              <span className="text-gray-700">6</span>
              <span className="text-gray-700">7</span>
              <span className="text-gray-700">8</span>
              <span className="text-gray-700">9</span>
              <span className="text-gray-700">10</span>
              <span className="text-gray-700">11</span>
              <span className="text-gray-700">12</span>
              <span className="text-gray-700">13</span>
              <span className="text-gray-700">14</span>
              <span className="text-gray-700">15</span>
              <span className="text-gray-700">16</span>
              <span className="text-gray-700">17</span>
              <span className="bg-black text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto">18</span>
              <span className="bg-gray-100 text-gray-900 w-full h-8 flex items-center justify-center">19</span>
              <span className="bg-gray-100 text-gray-900 w-full h-8 flex items-center justify-center">20</span>
              <span className="bg-gray-100 text-gray-900 w-full h-8 flex items-center justify-center">21</span>
              <span className="bg-gray-100 text-gray-900 w-full h-8 flex items-center justify-center">22</span>
              <span className="bg-black text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto">23</span>
              <span className="text-gray-700">24</span>
              <span className="text-gray-700">25</span>
              <span className="text-gray-700">26</span>
              <span className="text-gray-700">27</span>
              <span className="text-gray-700">28</span>
              <span className="text-gray-700">29</span>
              <span className="text-gray-700">30</span>
              <span className="text-gray-700">31</span>
            </div>
          </div>

          {/* November 2026 */}
          <div>
            <div className="flex items-center justify-between font-semibold text-gray-900 mb-4 px-2">
              <span className="w-4"></span>
              <span>November 2026</span>
              <button className="p-1 hover:bg-gray-100 rounded-full"><ChevronRight className="w-4 h-4" /></button>
            </div>
            <div className="grid grid-cols-7 text-center font-semibold text-gray-500 text-xs mb-2">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 text-center gap-y-2 text-sm text-gray-300">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
              <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
              <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
              <span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
              <span>29</span><span>30</span>
            </div>
          </div>
        </div>

        {/* Calendar Footer Bar */}
        <div className="flex items-center justify-between pt-4">
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Keyboard className="w-4 h-4 text-gray-700" />
          </button>
          <button className="text-sm font-semibold underline text-gray-900 hover:text-black">
            Clear dates
          </button>
        </div>
      </div>
    </div>
  );
};


