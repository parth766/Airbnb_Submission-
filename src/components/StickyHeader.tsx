import React, { useEffect, useState } from 'react';

interface StickyHeaderProps {
  priceText: string;
  rating: number;
  reviewsCount: number;
  onReserveClick: () => void;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({
  priceText,
  rating,
  reviewsCount,
  onReserveClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Photos');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollToSection = (id: string, tabName: string) => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all duration-200">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Nav Tabs */}
        <nav className="flex gap-8 text-sm font-semibold h-full">
          {[
            { name: 'Photos', id: 'photos-section' },
            { name: 'Amenities', id: 'amenities-section' },
            { name: 'Reviews', id: 'reviews-section' },
            { name: 'Location', id: 'location-section' },
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => scrollToSection(tab.id, tab.name)}
              className={`h-full border-b-2 flex items-center transition ${
                activeTab === tab.name
                  ? 'border-black text-black font-semibold'
                  : 'border-transparent text-gray-600 hover:text-black font-medium'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>

        {/* Right side price & reserve action */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold text-gray-900">
              {priceText}
            </div>
            <div className="text-xs text-gray-600">
              ★ {rating} · {reviewsCount} reviews
            </div>
          </div>
          <button
            onClick={onReserveClick}
            className="bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow transition"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};
