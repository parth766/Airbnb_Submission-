import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { GalleryPhoto } from '../data/listingData';

interface HeroGalleryProps {
  photos: GalleryPhoto[];
  onOpenPhotoTour: () => void;
  onOpenLightbox: (index: number) => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({
  photos,
  onOpenPhotoTour,
  onOpenLightbox
}) => {
  const displayPhotos = photos.slice(0, 5);

  return (
    <div className="relative my-3">
      {/* 5-Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden h-[340px] md:h-[440px]">
        {/* Main Big Photo (Left Column - 2 cols span) */}
        <div
          onClick={() => onOpenLightbox(0)}
          className="md:col-span-2 relative group cursor-pointer overflow-hidden h-full"
        >
          <img
            src={displayPhotos[0]?.url}
            alt={displayPhotos[0]?.caption || 'Hero photo'}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Right 4 Grid Photos */}
        <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2 h-full">
          {displayPhotos.slice(1, 5).map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(idx + 1)}
              className="relative group cursor-pointer overflow-hidden h-full"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating "Show all photos" Button */}
      <button
        onClick={onOpenPhotoTour}
        className="absolute bottom-6 right-6 bg-white border border-black/80 hover:bg-gray-100 text-[#222222] font-semibold text-sm py-2.5 px-4 rounded-xl shadow-md flex items-center gap-2.5 transition active:scale-95"
      >
        <LayoutGrid className="w-4 h-4" />
        <span>Show all photos</span>
      </button>
    </div>
  );
};
