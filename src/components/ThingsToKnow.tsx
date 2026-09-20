import React from 'react';
import { CalendarDays, Key, Shield } from 'lucide-react';

export const ThingsToKnow: React.FC = () => {
  return (
    <div id="things-to-know" className="py-12 border-b border-gray-200 space-y-6">
      <h3 className="text-2xl font-bold text-[#222222]">Things to know</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Column 1: Cancellation policy */}
        <div className="space-y-3">
          <CalendarDays className="w-6 h-6 text-gray-800" />
          <h4 className="font-semibold text-base text-gray-900">Cancellation policy</h4>
          <p className="text-gray-600 leading-relaxed font-normal">
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <p className="text-gray-600 font-normal">Review this host's full policy for details.</p>
          <button className="font-semibold underline text-gray-900 block pt-1 hover:text-black">
            Learn more
          </button>
        </div>

        {/* Column 2: House rules */}
        <div className="space-y-3">
          <Key className="w-6 h-6 text-gray-800" />
          <h4 className="font-semibold text-base text-gray-900">House rules</h4>
          <p className="text-gray-600 font-normal">Check-in after 2:00 pm</p>
          <p className="text-gray-600 font-normal">Checkout before 11:00 am</p>
          <p className="text-gray-600 font-normal">3 guests maximum</p>
          <button className="font-semibold underline text-gray-900 block pt-1 hover:text-black">
            Learn more
          </button>
        </div>

        {/* Column 3: Safety & property */}
        <div className="space-y-3">
          <Shield className="w-6 h-6 text-gray-800" />
          <h4 className="font-semibold text-base text-gray-900">Safety & property</h4>
          <p className="text-gray-600 font-normal">Carbon monoxide alarm not reported</p>
          <p className="text-gray-600 font-normal">Smoke alarm not reported</p>
          <p className="text-gray-600 font-normal">Exterior security cameras on property</p>
          <button className="font-semibold underline text-gray-900 block pt-1 hover:text-black">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

