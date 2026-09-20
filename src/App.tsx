import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StickyHeader } from './components/StickyHeader';
import { ListingHeader } from './components/ListingHeader';
import { HeroGallery } from './components/HeroGallery';
import { ListingContent } from './components/ListingContent';
import { ReserveWidget } from './components/ReserveWidget';
import { ReviewsHeroView } from './components/ReviewsHeroView';
import { MapView } from './components/MapView';
import { MeetHostView } from './components/MeetHostView';
import { ThingsToKnow } from './components/ThingsToKnow';
import { NearbyStays } from './components/NearbyStays';
import { PhotoTourModal } from './components/PhotoTourModal';
import { LightboxModal } from './components/LightboxModal';
import { ShareModal } from './components/ShareModal';
import { AmenitiesModal } from './components/AmenitiesModal';
import { Footer } from './components/Footer';
import { LISTING_DATA } from './data/listingData';

export function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col antialiased selection:bg-rose-100 selection:text-rose-900">
      {/* Top Sticky Navbar */}
      <Navbar />

      {/* Scroll Sticky Header Bar */}
      <StickyHeader
        priceText="₹28,499 for 5 nights"
        rating={LISTING_DATA.rating}
        reviewsCount={LISTING_DATA.reviewsCount}
        onReserveClick={() => {
          const el = document.getElementById('reserve-widget');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6">
        {/* Title & Actions */}
        <ListingHeader
          title={LISTING_DATA.title}
          onShareClick={() => setIsShareModalOpen(true)}
        />

        {/* 5-Photo Grid */}
        <HeroGallery
          photos={LISTING_DATA.photos}
          onOpenPhotoTour={() => setIsPhotoTourOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Two Column Layout: Main Content (Left) + Reserve Widget (Right) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start relative">
          {/* Main Listing Details */}
          <div className="lg:col-span-2">
            <ListingContent
              data={LISTING_DATA}
              onOpenAmenitiesModal={() => setIsAmenitiesModalOpen(true)}
            />
          </div>

          {/* Sticky Reserve Widget Sidebar */}
          <div id="reserve-widget" className="hidden lg:block lg:col-span-1">
            <ReserveWidget data={LISTING_DATA} />
          </div>
        </div>

        {/* Full-width Sections Below Grid */}
        <ReviewsHeroView data={LISTING_DATA} />
        <MapView location={LISTING_DATA.location} />
        <MeetHostView data={LISTING_DATA} />
        <ThingsToKnow />
        <NearbyStays stays={LISTING_DATA.nearbyStays} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-screen Photo Tour Modal Overlay */}
      <PhotoTourModal
        isOpen={isPhotoTourOpen}
        onClose={() => setIsPhotoTourOpen(false)}
        data={LISTING_DATA}
        onSelectPhoto={(idx) => {
          handleOpenLightbox(idx);
        }}
        onShareClick={() => setIsShareModalOpen(true)}
      />

      {/* Single Photo Lightbox Viewer Overlay */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        photos={LISTING_DATA.photos}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        title={LISTING_DATA.title}
      />

      {/* Amenities Modal */}
      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        onClose={() => setIsAmenitiesModalOpen(false)}
        amenities={LISTING_DATA.amenities}
      />
    </div>
  );
}

export default App;


