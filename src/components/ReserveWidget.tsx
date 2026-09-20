import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tag, Flag } from 'lucide-react';
import { ListingData } from '../data/listingData';

interface ReserveWidgetProps {
  data: ListingData;
}

export const ReserveWidget: React.FC<ReserveWidgetProps> = ({ data }) => {
  const [checkIn, setCheckIn] = useState('10/18/2026');
  const [checkOut, setCheckOut] = useState('10/23/2026');
  const [guestsCount, setGuestsCount] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [reservedSuccess, setReservedSuccess] = useState(false);

  const handleReserve = () => {
    setReservedSuccess(true);
    setTimeout(() => setReservedSuccess(false), 4000);
  };

  return (
    <div className="sticky top-28 space-y-4">
      {/* Top Discount Promo Banner Card */}
      <div className="border border-gray-200 rounded-2xl p-4 flex items-center justify-between bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-600 shrink-0">
            <Tag className="w-5 h-5 fill-emerald-600 text-emerald-600" />
          </div>
          <div className="text-xs leading-snug">
            <p className="font-semibold text-gray-800">Get 10% off your next stay.</p>
            <button className="underline text-gray-600 hover:text-black font-normal">Terms apply</button>
          </div>
        </div>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold px-4 py-2 rounded-xl transition">
          Claim
        </button>
      </div>

      {/* Main Reserve Card */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl space-y-5">
        {/* Price Title Header */}
        <div>
          <span className="text-2xl font-bold text-[#222222] underline decoration-gray-400">
            ₹{data.totalPriceFor5Nights.toLocaleString()}
          </span>
          <span className="text-gray-700 font-normal text-base ml-1"> for 5 nights</span>
        </div>

        {/* Date & Guest Selection Inputs Box */}
        <div className="border border-gray-400 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-black">
          {/* Date Inputs */}
          <div className="grid grid-cols-2 border-b border-gray-300">
            <div className="p-3 border-r border-gray-300">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-700">
                CHECK-IN
              </label>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-xs font-semibold text-gray-800 bg-transparent focus:outline-none cursor-pointer mt-0.5"
              />
            </div>
            <div className="p-3">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-700">
                CHECKOUT
              </label>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-xs font-semibold text-gray-800 bg-transparent focus:outline-none cursor-pointer mt-0.5"
              />
            </div>
          </div>

          {/* Guest Selector Dropdown */}
          <div className="relative p-3 bg-white">
            <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-700">
              GUESTS
            </label>
            <button
              onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
              className="w-full flex items-center justify-between text-xs font-medium text-gray-900 pt-0.5"
            >
              <span>{guestsCount} guests</span>
              {isGuestDropdownOpen ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
            </button>

            {/* Guest Selector Popup */}
            {isGuestDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl z-20 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">Guests</p>
                    <p className="text-xs text-gray-500">Maximum 3 guests</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      disabled={guestsCount <= 1}
                      onClick={() => setGuestsCount(guestsCount - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 disabled:opacity-30"
                    >
                      -
                    </button>
                    <span className="font-semibold text-sm">{guestsCount}</span>
                    <button
                      disabled={guestsCount >= data.details.guests}
                      onClick={() => setGuestsCount(guestsCount + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Free Cancellation Bar */}
        <div className="bg-gray-100/80 rounded-xl py-2.5 px-3 text-center text-xs text-gray-700">
          Free cancellation before <span className="font-bold text-gray-900">17 October</span>
        </div>

        {/* Reserve Action Button */}
        <button
          onClick={handleReserve}
          className="w-full bg-[#E00B41] hover:bg-[#d90b4e] text-white font-semibold text-base py-3.5 rounded-xl shadow-md transition active:scale-[0.99] flex items-center justify-center"
        >
          {reservedSuccess ? 'Reservation Requested!' : 'Reserve'}
        </button>

        {reservedSuccess && (
          <p className="text-xs text-emerald-600 font-semibold text-center animate-pulse">
            ✓ Dates reserved! Confirmation link sent.
          </p>
        )}

        <p className="text-xs text-gray-500 text-center font-normal">
          You won't be charged yet
        </p>
      </div>

      {/* Report this listing link */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-gray-800 transition py-2 cursor-pointer">
        <Flag className="w-3.5 h-3.5 fill-gray-500 text-gray-500" />
        <span className="font-semibold underline">Report this listing</span>
      </div>
    </div>
  );
};

