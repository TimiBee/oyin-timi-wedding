import React, { useState, useRef, useEffect } from 'react';
import { GALLERY_PHOTOS } from '../data/weddingData';
import { GalleryPhoto } from '../types';
import { OliveBranchDivider } from './BotanicalAccents';
import { ZoomIn, Grid, LayoutList } from 'lucide-react';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';

type CategoryFilter = 'all' | 'editorial' | 'candid' | 'details' | 'culture';

export const PhotoGallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [mobileLayout, setMobileLayout] = useState<'grid' | 'cards'>('grid');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Gallery photos directly loaded from GALLERY_PHOTOS with fallback check
  const [photos] = useState<GalleryPhoto[]>(() => {
    return GALLERY_PHOTOS;
  });

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter((p) => p.category === selectedCategory);

  const lightboxItems: LightboxItem[] = filteredPhotos.map((p) => ({
    id: p.id,
    src: p.src,
    title: p.title,
    subtitle: p.subtitle,
    category: p.category.toUpperCase(),
  }));

  // Categories config
  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All Moments' },
    { key: 'editorial', label: 'Editorial' },
    { key: 'candid', label: 'Candid' },
    { key: 'details', label: 'Details' },
    { key: 'culture', label: 'Heritage' },
  ];

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-20 lg:py-28 bg-[#FDFBF7] border-t border-[#C5A059]/25 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="font-serif text-xs uppercase tracking-[0.28em] text-[#C5A059] font-medium mb-3">
            Moments &amp; Memories
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#4A0E17]">
            Photo Gallery
          </h2>

          <OliveBranchDivider className="my-4 sm:my-5" />

          <p className="text-xs sm:text-sm text-[#23301D]/75 font-serif tracking-wide">
            Tap any photograph to view high-resolution image
          </p>
        </div>

        {/* Mobile View Controls Bar: Categories & Layout Switcher */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Horizontal scrollable category pills for phone ease */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto px-1 -mx-1"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-serif uppercase tracking-wider whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#4A0E17] text-[#FDFBF7] shadow-xs font-semibold border border-[#4A0E17]'
                      : 'bg-white/80 text-[#23301D]/80 border border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Mobile view switch toggle (Visible on mobile/tablet) */}
          <div className="flex sm:hidden items-center justify-between w-full pt-1 px-1 border-t border-[#C5A059]/20 text-xs text-[#23301D]/70 font-serif">
            <span>{filteredPhotos.length} {filteredPhotos.length === 1 ? 'Photograph' : 'Photographs'}</span>
            <div className="flex items-center gap-1 bg-white/80 rounded-lg p-1 border border-[#C5A059]/30">
              <button
                type="button"
                onClick={() => setMobileLayout('grid')}
                className={`p-1.5 rounded-md transition-colors ${
                  mobileLayout === 'grid' ? 'bg-[#4A0E17] text-[#E5C378]' : 'text-[#23301D]/60'
                }`}
                title="2-column grid"
                aria-label="2-column grid layout"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileLayout('cards')}
                className={`p-1.5 rounded-md transition-colors ${
                  mobileLayout === 'cards' ? 'bg-[#4A0E17] text-[#E5C378]' : 'text-[#23301D]/60'
                }`}
                title="Single column portrait cards"
                aria-label="Single column full cards layout"
              >
                <LayoutList className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Responsive Grid:
            - On Mobile: Supports both clean 2-column tight grid OR 1-column visual card feed
            - On Desktop: Clean 3 to 4 column masonry-style layout
        */}
        <div
          className={
            mobileLayout === 'grid'
              ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4'
              : 'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'
          }
        >
          {filteredPhotos.map((photo, index) => {
            const isSingleCardOnMobile = mobileLayout === 'cards';

            return (
              <div
                key={photo.id || index}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#1A1F16] shadow-xs border border-[#C5A059]/35 hover:border-[#4A0E17] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer touch-manipulation"
                onClick={() => setActivePhotoIndex(index)}
                title={`Click to view ${photo.title} large`}
              >
                {/* Aspect Ratio Image Container */}
                <div
                  className={`overflow-hidden bg-[#1A1F16] ${
                    isSingleCardOnMobile
                      ? 'aspect-[4/3] sm:aspect-square'
                      : 'aspect-[4/5] sm:aspect-square'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 active:scale-98 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Subtle, permanent gradient on mobile bottom so caption is always readable */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 sm:p-3 text-white pointer-events-none sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-250">
                  <h3 className="font-display text-xs sm:text-sm font-medium text-[#FDFBF7] leading-tight line-clamp-1">
                    {photo.title}
                  </h3>
                  {photo.subtitle && (
                    <span className="text-[9px] sm:text-[10px] text-[#E5C378] font-serif tracking-wider block mt-0.5 line-clamp-1">
                      {photo.subtitle}
                    </span>
                  )}
                </div>

                {/* Corner quick-zoom indicator */}
                <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-[#E5C378] pointer-events-none opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3 h-3" />
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom subtle note for mobile users */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-xs text-[#23301D]/60 font-serif italic">
            Swipe left or right in full-screen mode to browse through photos
          </p>
        </div>
      </div>

      {/* Pop-up Animated Modal Lightbox */}
      <ImageLightboxModal
        isOpen={activePhotoIndex !== null}
        onClose={() => setActivePhotoIndex(null)}
        items={lightboxItems}
        currentIndex={activePhotoIndex ?? 0}
        onNavigate={(idx) => setActivePhotoIndex(idx)}
      />
    </section>
  );
};
