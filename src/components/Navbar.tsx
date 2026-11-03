import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Meet The Couple', href: '#couple' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Gift & Donation', href: '#registry' },
    { label: 'Hashtag', href: '#hashtag' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md border-b ${
        isScrolled
          ? 'bg-[#23301D]/85 text-[#FDFBF7] py-3.5 border-[#C5A059]/25 shadow-sm'
          : 'bg-[#23301D]/80 text-[#FDFBF7] py-4 border-[#C5A059]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand: Only the elegant serif brand mark 'Oyin-B & Timi-B' on the left */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="group transition-opacity hover:opacity-90"
          id="nav-brand-logo"
        >
          <span className="font-display text-xl sm:text-2xl font-medium tracking-wide text-[#FDFBF7] group-hover:text-[#E5C378] transition-colors">
            Oyin-B <span className="font-heading italic font-normal text-[#C5A059]">&amp;</span> Timi-B
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-serif uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? 'text-[#FDFBF7] bg-[#4A0E17] border border-[#C5A059]/40'
                    : 'text-[#FDFBF7]/85 hover:text-[#E5C378] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button (Hamburger icon on the right) */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#FDFBF7] hover:text-[#C5A059] focus:outline-none transition-colors"
            aria-label="Toggle menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#23301D]/95 backdrop-blur-lg border-b border-[#C5A059]/30 px-5 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`block px-4 py-2.5 rounded-lg text-sm font-serif uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? 'text-[#FDFBF7] bg-[#4A0E17] font-semibold border-l-2 border-[#C5A059]'
                    : 'text-[#FDFBF7]/85 hover:text-[#C5A059]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
