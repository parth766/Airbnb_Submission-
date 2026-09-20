import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../data/listingData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: GalleryPhoto[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate
}) => {
  const currentPhoto = photos[currentIndex] || photos[0];
  const totalPhotos = photos.length;

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + totalPhotos) % totalPhotos;
    onNavigate(prevIndex);
  }, [currentIndex, totalPhotos, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalPhotos;
    onNavigate(nextIndex);
  }, [currentIndex, totalPhotos, onNavigate]);

  // Keyboard navigation listener (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-6 selection:bg-none"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox Viewer"
      >
        {/* Top Lightbox Header */}
        <div className="flex items-center justify-between z-20 text-white">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-white/10 transition text-white/90 hover:text-white"
            aria-label="Close photo viewer"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Counter */}
          <div className="text-sm font-semibold tracking-wider text-white/80">
            {currentIndex + 1} / {totalPhotos}
          </div>

          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Center Main Photo Stage */}
        <div className="relative flex-1 flex items-center justify-center my-2 max-w-6xl mx-auto w-full">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition active:scale-95 shadow-lg backdrop-blur-sm"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Animated Image View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="max-h-[75vh] max-w-full flex items-center justify-center"
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition active:scale-95 shadow-lg backdrop-blur-sm"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Caption */}
        <div className="text-center text-white/90 text-sm font-medium z-20 pb-2 max-w-xl mx-auto truncate">
          <p>{currentPhoto.caption}</p>
          {currentPhoto.subtext && (
            <p className="text-xs text-white/60 mt-0.5">{currentPhoto.subtext}</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
