import React, { useState, useEffect } from 'react';
import { WEDDING_DETAILS, HERO_STRIP_PHOTOS } from '../data/weddingData';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';

export const Hero: React.FC = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Hero photos state with fallback
  const [heroPhotos] = useState(() => {
    try {
      const saved = localStorage.getItem('wedding_hero_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not load saved hero photos', e);
    }
    return HERO_STRIP_PHOTOS;
  });

  // Auto-changing hero images every 5 seconds with smooth cross-fade
  useEffect(() => {
    if (isLightboxOpen) return;
    const slideTimer = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % heroPhotos.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [isLightboxOpen, heroPhotos.length]);

  const openPhotoModal = (idx: number) => {
    setActivePhotoIdx(idx);
    setIsLightboxOpen(true);
  };


  const lightboxItems: LightboxItem[] = heroPhotos.map((p) => ({
    id: p.id,
    src: p.src,
    title: p.caption,
    subtitle: p.subtitle || `#OyinTimiLoveBound26`,
    category: 'Editorial Studio Portrait',
  }));

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 bg-[#FDFBF7] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================
            1. EDITORIAL HERO IMAGE SHOWCASE (Clean, no dashboard controls)
           ================================================================ */}
        <div className="relative mx-auto max-w-2xl sm:max-w-xl">
          <div
            className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-h-[75vh] overflow-hidden rounded-2xl cursor-pointer shadow-lg border border-[#C5A059]/35 bg-[#1A1F16]"
            onClick={() => openPhotoModal(activePhotoIdx)}
            title="Click to view full photograph"
          >
            {heroPhotos.map((photo, idx) => {
              const isActive = idx === activePhotoIdx;
              return (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top sm:object-[center_15%] transform hover:scale-102 transition-transform duration-700"
                  />
                  {/* Gentle subtle bottom gradient for visual contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />
                </div>
              );
            })}

            {/* Subtle, minimal pagination lines at the bottom edge */}
            <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-1.5 pointer-events-auto">
              {heroPhotos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIdx(idx);
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === activePhotoIdx ? 'w-6 bg-[#C5A059]' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================
            2. EDITORIAL TYPOGRAPHY & HEADER (No boxy cards, breathing space)
           ================================================================ */}
        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
          
          {/* Holy Matrimony in spaced-out, sophisticated serif small-caps */}
          <div className="font-serif text-xs uppercase tracking-[0.28em] text-[#C5A059] font-medium mb-3">
            Holy Matrimony
          </div>

          {/* Together With Their Families in spaced-out serif small-caps */}
          <div className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#23301D] font-semibold mb-6">
            Together With Their Families
          </div>

          {/* Couple Full Names in Grand Editorial Serif Typography */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-[#4A0E17] tracking-tight leading-[1.2] mb-6">
            Oyindamola Serah Oshadare
            <span className="block my-2 font-heading italic text-2xl sm:text-3xl md:text-4xl text-[#C5A059] font-normal">
              weds
            </span>
            Busayo Timileyin Akomolede
          </h1>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <span className="h-[1px] w-12 sm:w-16 bg-[#C5A059]/40" />
            <span className="text-sm text-[#C5A059]">✦</span>
            <span className="h-[1px] w-12 sm:w-16 bg-[#C5A059]/40" />
          </div>

          {/* Welcome Text breathing freely without card boxes */}
          <p className="font-heading italic text-base sm:text-lg text-[#23301D]/85 max-w-xl mx-auto leading-relaxed">
            &ldquo;{WEDDING_DETAILS.welcomeText}&rdquo;
          </p>
        </div>

      </div>

      {/* Pop-up Lightbox Modal for Full-Size Photo View */}
      <ImageLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={activePhotoIdx}
        onNavigate={(idx) => setActivePhotoIdx(idx)}
      />
    </section>
  );
};
