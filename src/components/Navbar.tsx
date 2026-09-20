import React, { useState } from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 text-[#FF385C] font-bold text-xl tracking-tight">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.608-3.292 8.806-8.5 8.806-3.414 0-6.148-1.859-7.98-4.471-1.833 2.612-4.567 4.471-7.98 4.471-5.208 0-8.5-4.198-8.5-8.806 0-1.285.344-2.472.971-3.711l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.037 1.963 10.492 1 12.5 1h3.5zm0 2h-3.5c-1.258 0-2.277.632-3.284 2.434l-.448.865c-1.849 3.626-5.885 12.062-6.852 14.32l-.128.311c-.538 1.282-.788 2.222-.788 3.07 0 3.676 2.502 6.806 6.5 6.806 3.018 0 5.378-1.87 6.8-4.567l.3-.615.3.615c1.422 2.697 3.782 4.567 6.8 4.567 3.998 0 6.5-3.13 6.5-6.806 0-.848-.25-1.788-.788-3.07l-.128-.311c-.967-2.258-5.003-10.694-6.852-14.32l-.448-.865C18.277 3.632 17.258 3 16 3zm0 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
          </svg>
          <span className="hidden sm:inline font-semibold text-2xl tracking-tighter">airbnb</span>
        </a>

        {/* Search Bar Pill */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer gap-3 text-sm font-medium text-gray-800">
          <div className="flex items-center gap-2 pr-3 border-r border-gray-200">
            <span className="text-gray-500">🏠</span>
            <button className="hover:text-black">Anywhere</button>
          </div>
          <button className="px-3 border-r border-gray-200 hover:text-black">Anytime</button>
          <button className="px-3 text-gray-500 font-normal hover:text-black">Add guests</button>
          <div className="bg-[#FF385C] text-white p-2 rounded-full flex items-center justify-center">
            <Search className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>

        {/* User Right Menu */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block text-sm font-semibold text-gray-800 hover:bg-gray-100 py-2.5 px-4 rounded-full transition">
            Become a host
          </button>
          <button className="p-2.5 hover:bg-gray-100 rounded-full transition text-gray-700" aria-label="Choose a language">
            <Globe className="w-4 h-4" />
          </button>

          {/* Profile Menu Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 border border-gray-300 rounded-full p-2.5 pl-3.5 hover:shadow-md transition bg-white"
              aria-expanded={isMenuOpen}
              aria-label="Main navigation menu"
            >
              <Menu className="w-4 h-4 text-gray-600" />
              <div className="bg-gray-500 text-white rounded-full p-1">
                <User className="w-4 h-4" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 text-sm">
                <a href="#signup" className="block px-4 py-3 font-semibold hover:bg-gray-50">Sign up</a>
                <a href="#login" className="block px-4 py-3 hover:bg-gray-50">Log in</a>
                <hr className="my-2 border-gray-200" />
                <a href="#host" className="block px-4 py-3 hover:bg-gray-50">Airbnb your home</a>
                <a href="#help" className="block px-4 py-3 hover:bg-gray-50">Help Centre</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
