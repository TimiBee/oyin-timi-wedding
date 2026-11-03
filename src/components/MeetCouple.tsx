import React, { useState, useEffect } from 'react';
import { BRIDE_PROFILE, GROOM_PROFILE } from '../data/weddingData';
import { OliveBranchDivider } from './BotanicalAccents';
import { ImageLightboxModal, LightboxItem } from './ImageLightboxModal';
import { ZoomIn, Linkedin, Facebook, ExternalLink } from 'lucide-react';

export const MeetCouple: React.FC = () => {
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState<number | null>(null);

  // Profile photos: strictly uses bride.jfif for Oyindamola and groom.jpg for Busayo
  const [brideImg, setBrideImg] = useState<string>('/bride.jfif');
  const [groomImg, setGroomImg] = useState<string>('/groom.jpg');

  // Ensure bride.jfif and groom.jpg are the active portraits with fallback if needed
  useEffect(() => {
    try {
      localStorage.removeItem('wedding_bride_photo');
      localStorage.removeItem('wedding_groom_photo');
    } catch {
      // ignore
    }

    const testBride = new Image();
    testBride.onerror = () => {
      setBrideImg('/bride.jpg');
    };
    testBride.src = '/bride.jfif';

    const testGroom = new Image();
    testGroom.onerror = () => {
      setGroomImg('/groom.jpeg');
    };
    testGroom.src = '/groom.jpg';
  }, []);

  const couplePhotos: LightboxItem[] = [
    {
      src: brideImg,
      title: BRIDE_PROFILE.fullName,
      subtitle: `${BRIDE_PROFILE.title} • "${BRIDE_PROFILE.nickname}"`,
      category: 'The Bride',
    },
    {
      src: groomImg,
      title: GROOM_PROFILE.fullName,
      subtitle: `${GROOM_PROFILE.title} • "${GROOM_PROFILE.nickname}"`,
      category: 'The Groom',
    },
  ];

  return (
    <section
      id="couple"
      className="relative py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#C5A059]/25 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="font-serif text-xs uppercase tracking-[0.28em] text-[#C5A059] font-medium mb-3">
            Two Souls, One Sacred Journey
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#4A0E17]">
            Meet The Couple
          </h2>

          <OliveBranchDivider className="my-5" />
        </div>

        {/* Side-by-Side Flowing Editorial Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* =========================================
              BRIDE PROFILE
             ========================================= */}
          <article id="bride-profile" className="flex flex-col items-center text-center lg:text-left">
            {/* 1. "The Bride" Header */}
            <div className="font-serif text-xs uppercase tracking-[0.28em] text-[#C5A059] font-semibold mb-4 text-center lg:text-left w-full max-w-[280px] sm:max-w-[320px]">
              The Bride
            </div>

            {/* 2. Portrait Picture */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-[#C5A059]/50 hover:border-[#4A0E17] transition-all duration-300 group mb-6 bg-[#1A1F16]">
              <img
                src={brideImg}
                alt={BRIDE_PROFILE.fullName}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== `${window.location.origin}/bride.jpg`) {
                    target.src = '/bride.jpg';
                  }
                }}
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out cursor-pointer"
                onClick={() => setSelectedPhotoIdx(0)}
                title="Click to view photograph large"
              />
              
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
              />
              
              {/* Quick View Full Button */}
              <button
                type="button"
                onClick={() => setSelectedPhotoIdx(0)}
                className="absolute bottom-3 right-3 text-[10px] uppercase font-serif tracking-[0.2em] text-[#FDFBF7] bg-black/70 hover:bg-[#C5A059] hover:text-[#121A0C] px-2.5 py-1 rounded-full backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1 shadow-md cursor-pointer"
                title="View full-size photo"
              >
                <ZoomIn className="w-3 h-3" />
                <span>View</span>
              </button>
            </div>

            {/* Content under picture */}
            <div className="w-full max-w-lg">
              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#4A0E17] leading-snug mb-1">
                {BRIDE_PROFILE.fullName}
              </h3>

              {/* 3. Nickname under */}
              <div className="font-heading italic text-base sm:text-lg text-[#C5A059] font-medium mb-4">
                &ldquo;{BRIDE_PROFILE.nickname}&rdquo;
              </div>

              {/* Bio story */}
              <div className="mb-4 space-y-3 text-sm sm:text-base text-[#2C2825]/90 font-sans-clean leading-relaxed text-left">
                <p>
                  Multi-talented, driven, endlessly kind, a woman of exceptional grace, ambition, and heart. Oyindamola is the kind of person who leaves an impact on everyone she meets. Professionally, she wears many hats with effortless poise, working as a Regulatory &amp; Pharmacovigilance Pharmacist (Madonna University alumnus), Bodycare Expert, and Women Health Advocate, empowering people through wellness as a Senior Partner at Oriflame, and coaching emerging entrepreneurs through her online business guides.
                </p>
                <p>
                  Yet, for all her drive and success, her biggest superpower is simply her heart. Oyin is a semi-gentle, sweet fellow who naturally looks out for others, ensuring everyone around her feels cared for, valued, and at peace. To know her is to admire her, but to be loved by her is life’s greatest blessing.
                </p>
              </div>

              {/* 5. Very Short Quote */}
              <blockquote className="pl-3.5 border-l-2 border-[#C5A059] text-left italic font-heading text-sm sm:text-base text-[#4A0E17] leading-relaxed mb-5">
                &ldquo;{BRIDE_PROFILE.quote}&rdquo;
              </blockquote>

              {/* Connect with her world: Clickable social links */}
              <div className="pt-3 border-t border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <span className="font-serif text-[#C5A059] uppercase tracking-wider font-semibold text-xs">
                  Connect with her world:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://ng.linkedin.com/in/oyindamola-oshadare-371ab5273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FDFBF7] transition-all font-medium"
                    title="Oyindamola's LinkedIn Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                  <span className="text-[#C5A059]/60">|</span>
                  <a
                    href="https://www.facebook.com/honeydam.charles/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FDFBF7] transition-all font-medium"
                    title="Oyindamola's Facebook Profile"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                    <span>Facebook</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* =========================================
              GROOM PROFILE
             ========================================= */}
          <article id="groom-profile" className="flex flex-col items-center text-center lg:text-left">
            {/* 1. "The Groom" Header */}
            <div className="font-serif text-xs uppercase tracking-[0.28em] text-[#C5A059] font-semibold mb-4 text-center lg:text-left w-full max-w-[280px] sm:max-w-[320px]">
              The Groom
            </div>

            {/* 2. Portrait Picture */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-[#C5A059]/50 hover:border-[#4A0E17] transition-all duration-300 group mb-6 bg-[#1A1F16]">
              <img
                src={groomImg}
                alt={GROOM_PROFILE.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out cursor-pointer"
                onClick={() => setSelectedPhotoIdx(1)}
                title="Click to view photograph large"
              />
              
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
              />
              
              {/* Quick View Full Button */}
              <button
                type="button"
                onClick={() => setSelectedPhotoIdx(1)}
                className="absolute bottom-3 right-3 text-[10px] uppercase font-serif tracking-[0.2em] text-[#FDFBF7] bg-black/70 hover:bg-[#C5A059] hover:text-[#121A0C] px-2.5 py-1 rounded-full backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1 shadow-md cursor-pointer"
                title="View full-size photo"
              >
                <ZoomIn className="w-3 h-3" />
                <span>View</span>
              </button>
            </div>

            {/* Content under picture */}
            <div className="w-full max-w-lg">
              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#4A0E17] leading-snug mb-1">
                {GROOM_PROFILE.fullName}
              </h3>

              {/* 3. Nickname under */}
              <div className="font-heading italic text-base sm:text-lg text-[#C5A059] font-medium mb-4">
                &ldquo;{GROOM_PROFILE.nickname}&rdquo;
              </div>

              {/* Bio story */}
              <div className="mb-4 space-y-3 text-sm sm:text-base text-[#2C2825]/90 font-sans-clean leading-relaxed text-left">
                <p>
                  Brilliant, hardworking, and effortlessly funny, Busayo is the kind of person who brings light, intellect, and easy laughter wherever he goes. A true technologist at heart, he is deeply passionate about innovation, spending his days building intuitive web tools, developing modern sites, and securing digital infrastructure with over five years of IT support and cybersecurity experience.
                </p>
                <p>
                  A proud graduate of the University of Lagos (UNILAG), his talents don’t stop behind a computer screen; he is also a gifted drummer and a natural educator with a heart for inspiring others. Above all his drive and technical craft, Busayo is funny, deeply caring, and tirelessly hardworking, a devoted partner whose gentle kindness and infectious humor make life an adventure.
                </p>
              </div>

              {/* 5. Very Short Quote */}
              <blockquote className="pl-3.5 border-l-2 border-[#C5A059] text-left italic font-heading text-sm sm:text-base text-[#4A0E17] leading-relaxed mb-5">
                &ldquo;{GROOM_PROFILE.quote}&rdquo;
              </blockquote>

              {/* Connect with his world: Clickable social links */}
              <div className="pt-3 border-t border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <span className="font-serif text-[#C5A059] uppercase tracking-wider font-semibold text-xs">
                  Connect with his world:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://ng.linkedin.com/in/busayo-akomolede"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FDFBF7] transition-all font-medium"
                    title="Busayo's LinkedIn Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                  <span className="text-[#C5A059]/60">|</span>
                  <a
                    href="https://www.facebook.com/people/Busayo-Timileyin-Akomolede/61571194372634/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#4A0E17] hover:bg-[#4A0E17] hover:text-[#FDFBF7] transition-all font-medium"
                    title="Busayo's Facebook Profile"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                    <span>Facebook</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* Pop-up Animated Modal Lightbox */}
      <ImageLightboxModal
        isOpen={selectedPhotoIdx !== null}
        onClose={() => setSelectedPhotoIdx(null)}
        items={couplePhotos}
        currentIndex={selectedPhotoIdx ?? 0}
        onNavigate={(idx) => setSelectedPhotoIdx(idx)}
      />
    </section>
  );
};
