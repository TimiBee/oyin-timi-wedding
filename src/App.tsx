/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MeetCouple } from './components/MeetCouple';
import { PhotoGallery } from './components/PhotoGallery';
import { GiftRegistry } from './components/GiftRegistry';
import { HashtagFooter } from './components/HashtagFooter';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id') || '';
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2825] font-sans-clean antialiased selection:bg-[#4A0E17] selection:text-[#FDFBF7]">
      {/* Fixed Frosted Glass Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Wedding Presentation */}
      <main>
        {/* 1. Hero Header with full names, Nov 6 2026 */}
        <Hero />

        {/* 2. Meet The Couple - Editorial portraits and flowing narrative */}
        <MeetCouple />

        {/* 3. Photo Gallery - Cohesive photography grid with modal lightbox */}
        <PhotoGallery />

        {/* 4. Gift & Donation - Bespoke wedding gift stationery cards */}
        <GiftRegistry />
      </main>

      {/* 5. Official Wedding Hashtag & Gratitude */}
      <HashtagFooter />
    </div>
  );
}
