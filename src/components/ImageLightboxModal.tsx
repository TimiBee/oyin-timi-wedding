import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, ZoomIn, ZoomOut } from 'lucide-react';

export interface LightboxItem {
  id?: string;
  src: string;
  title: string;
  subtitle?: string;
  category?: string;
}

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onNavigate?: (index: number) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate && items.length > 1) {
        onNavigate((currentIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft' && onNavigate && items.length > 1) {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate, currentIndex, items.length]);

  // Reset zoom on photo change
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onNavigate && items.length > 1) {
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onNavigate && items.length > 1) {
      onNavigate((currentIndex + 1) % items.length);
    }
  };

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft && items.length > 1) {
      handleNext();
    } else if (isSwipeRight && items.length > 1) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      id="lightbox-modal-backdrop"
      className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 transition-all duration-300 select-none"
      onClick={onClose}
    >
      {/* Pop-up Animated Modal Container */}
      <div
        id="lightbox-modal-card"
        className="animate-pop-up relative w-full max-w-5xl bg-gradient-to-b from-[#1C2413] via-[#2A121A] to-[#12180D] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C5A059]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-7 py-3 sm:py-4 border-b border-[#C5A059]/40 bg-[#121A0C]/90 text-white">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4A121A] flex items-center justify-center border border-[#C5A059]/40 shrink-0">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5C378] fill-[#E5C378]" />
            </div>
            <div className="min-w-0">
              {currentItem.category && (
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#E5C378] font-bold block truncate">
                  {currentItem.category}
                </span>
              )}
              <h3 className="font-display text-sm sm:text-xl font-medium text-[#FAF7F2] leading-tight truncate">
                {currentItem.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#121A0C] text-white flex items-center justify-center transition-colors border border-white/20 touch-manipulation"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
              aria-label="Toggle zoom"
            >
              {isZoomed ? <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4A121A] hover:bg-[#8E2032] text-white flex items-center justify-center transition-colors border border-[#C5A059]/50 shadow-md touch-manipulation"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Center Stage with High-Res Image & Next/Prev Controls */}
        <div className="relative flex-1 bg-black/95 flex items-center justify-center overflow-auto min-h-[280px] sm:min-h-[320px] max-h-[72vh] p-1.5 sm:p-2">
          <img
            src={currentItem.src}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className={`transition-all duration-300 object-contain max-w-full max-h-full rounded-md sm:rounded-lg shadow-2xl ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Navigation Arrows (if more than 1 item) */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-[#C5A059] hover:text-[#121A0C] text-white flex items-center justify-center transition-all border border-[#C5A059]/50 shadow-xl z-20 touch-manipulation active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-[#C5A059] hover:text-[#121A0C] text-white flex items-center justify-center transition-all border border-[#C5A059]/50 shadow-xl z-20 touch-manipulation active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>
            </>
          )}
        </div>

        {/* Footer Bar */}
        <div className="px-4 sm:px-7 py-2.5 sm:py-3.5 border-t border-[#C5A059]/40 bg-[#121A0C]/90 text-white flex items-center justify-between text-xs">
          <p className="font-heading italic text-xs sm:text-sm text-[#FAF7F2]/90 truncate pr-2">
            {currentItem.subtitle || 'Oyin-B & Timi-B • #OyinTimiLoveBound26'}
          </p>

          {items.length > 1 && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-[#E5C378] font-bold shrink-0">
              <span>{currentIndex + 1}</span>
              <span className="text-white/40">/</span>
              <span>{items.length}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
