import React from 'react';
import { Shield, Check, GraduationCap, Lightbulb } from 'lucide-react';
import { ListingData } from '../data/listingData';

interface MeetHostViewProps {
  data: ListingData;
}

export const MeetHostView: React.FC<MeetHostViewProps> = ({ data }) => {
  const { host, coHosts } = data;

  return (
    <div id="meet-host" className="py-12 border-b border-gray-200 space-y-8">
      <h3 className="text-2xl font-bold text-[#222222]">Meet your host</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Host Profile Card & Details */}
        <div className="lg:col-span-1 space-y-6">
          {/* Main Host Card */}
          <div className="bg-white border border-gray-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition">
            {/* Avatar with Verified Red Check */}
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-[#1c3a27] text-white flex items-center justify-center font-extrabold text-[11px] tracking-wider shadow-md">
                MIRASHYA
              </div>
              <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-1 rounded-full border-2 border-white shadow">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>

            {/* Name & Title */}
            <h4 className="text-2xl font-bold text-gray-900">{host.name}</h4>
            <p className="text-sm font-semibold text-gray-600 mt-0.5">Host</p>

            {/* Stats Row */}
            <div className="w-full grid grid-cols-3 gap-2 border-t border-gray-200 mt-6 pt-6 text-center">
              <div>
                <div className="text-xl font-bold text-gray-900">{host.totalReviews.toLocaleString()}</div>
                <div className="text-[11px] text-gray-500 font-medium">Reviews</div>
              </div>
              <div className="border-x border-gray-200">
                <div className="text-xl font-bold text-gray-900 flex items-center justify-center gap-0.5">
                  {host.overallRating} <span className="text-xs">★</span>
                </div>
                <div className="text-[11px] text-gray-500 font-medium">Rating</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{host.yearsHosting}</div>
                <div className="text-[11px] text-gray-500 font-medium">Years hosting</div>
              </div>
            </div>
          </div>

          {/* Personal Highlights (Below Card) */}
          <div className="space-y-4 px-2 text-sm text-gray-800">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-gray-700 shrink-0" />
              <span>{host.bornIn}</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-gray-700 shrink-0" />
              <span>{host.school}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts & Host Communication Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Co-Hosts List */}
          {coHosts && coHosts.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-semibold text-base text-gray-900">Co-Hosts</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {coHosts.map((ch) => (
                  <div key={ch.id} className="flex items-center gap-3">
                    {ch.avatar ? (
                      <img src={ch.avatar} alt={ch.name} className="w-10 h-10 rounded-full object-cover shadow-xs" />
                    ) : (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${ch.color || 'bg-gray-200 text-gray-700'}`}>
                        {ch.initials}
                      </div>
                    )}
                    <span className="text-sm font-semibold text-gray-800 line-clamp-1">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Host details */}
          <div className="space-y-3 pt-2">
            <h4 className="font-semibold text-base text-gray-900">Host details</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p>Response rate: <span className="font-semibold text-gray-900">{host.responseRate}</span></p>
              <p>Responds {host.responseTime}</p>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-sm px-6 py-3.5 rounded-xl transition mt-2">
              Message host
            </button>
          </div>

          {/* Security Notice Footer */}
          <div className="flex items-start gap-3 pt-4 border-t border-gray-100 text-xs text-gray-500 max-w-lg leading-relaxed">
            <Shield className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
            <p>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
