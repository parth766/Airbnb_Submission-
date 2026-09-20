import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share, Heart } from 'lucide-react';
import { ListingData } from '../data/listingData';

interface PhotoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ListingData;
  onSelectPhoto: (photoIndex: number) => void;
  onShareClick: () => void;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  isOpen,
  onClose,
  data,
  onSelectPhoto,
  onShareClick
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(data.categories[0]?.id || '');
  const [isSaved, setIsSaved] = useState(false);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  // Prevent background body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = categoryRefs.current[categoryId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed inset-0 z-50 bg-white overflow-y-auto flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Full-screen photo gallery"
      >
        {/* Sticky Header Bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-[#222222]"
            aria-label="Back to listing page"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <h2 className="hidden md:block font-semibold text-base text-[#222222] truncate max-w-md">
            {data.title}
          </h2>

          <div className="flex items-center gap-4 text-sm font-semibold">
            <button
              onClick={onShareClick}
              className="flex items-center gap-2 underline p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="flex items-center gap-2 underline p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-[#222222]'
                }`}
              />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </header>

        {/* Sticky Category Tabs Bar */}
        <nav className="sticky top-[65px] z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 max-w-6xl mx-auto min-w-max">
            {data.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    isActive
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Photo Tour Content Grid Area */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-8 space-y-12">
          {data.categories.map((cat) => {
            const catPhotos = data.photos.filter((p) => p.category === cat.name);
            return (
              <section
                key={cat.id}
                ref={(el) => (categoryRefs.current[cat.id] = el)}
                className="scroll-mt-36 space-y-4"
              >
                {/* Category Header */}
                <div>
                  <h3 className="text-2xl font-bold text-[#222222]">{cat.name}</h3>
                  {cat.amenities.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1 font-normal">
                      {cat.amenities.join(' · ')}
                    </p>
                  )}
                </div>

                {/* Photos Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catPhotos.map((photo) => {
                    const fullIndex = data.photos.findIndex((p) => p.id === photo.id);
                    return (
                      <div
                        key={photo.id}
                        onClick={() => onSelectPhoto(fullIndex)}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption}
                          className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-95"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium bg-black/60 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          {photo.caption}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      </motion.div>
    </AnimatePresence>
  );
};
