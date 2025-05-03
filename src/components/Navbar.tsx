import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className="rounded-none py-[15px] bg-[charco] bg-charcoal">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-2xl">
          <span className="text-gold">Bharat</span>preneurs
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-gold transition-colors">
            About
          </a>
          <a href="#success-stories" className="text-white hover:text-gold transition-colors">
            Success Stories
          </a>
          <a href="#offerings" className="text-white hover:text-gold transition-colors">
            Offerings
          </a>
          <a href="#events" className="text-white hover:text-gold transition-colors">
            Events
          </a>
        </div>

        <div className="hidden md:block">
          <a href="#book" className="gold-button rounded">Book a Consultation</a>
        </div>

        <button className="block md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <nav className="md:hidden bg-black absolute top-full left-0 w-full border-t border-gray-800">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-gold transition-colors px-4" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#success-stories" className="text-white hover:text-gold transition-colors px-4" onClick={() => setMobileMenuOpen(false)}>
              Success Stories
            </a>
            <a href="#offerings" className="text-white hover:text-gold transition-colors px-4" onClick={() => setMobileMenuOpen(false)}>
              Offerings
            </a>
            <a href="#events" className="text-white hover:text-gold transition-colors px-4" onClick={() => setMobileMenuOpen(false)}>
              Events
            </a>
            <a href="#book" className="gold-button rounded mx-4" onClick={() => setMobileMenuOpen(false)}>
              Book a Consultation
            </a>
          </div>
        </nav>}
    </header>;
};
export default Navbar;