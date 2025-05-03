import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import OfferingsSection from '@/components/OfferingsSection';
import EventsSection from '@/components/EventsSection';
import BookingSection from '@/components/BookingSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import AnimationObserver from '@/components/AnimationObserver';
const Index = () => {
  // Disable body scroll when modal is open
  useEffect(() => {
    document.title = "Bharatpreneurs | Empowering India's Entrepreneurial Spirit";
  }, []);
  return <div className="min-h-screen bg-white">
      <Navbar />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-[80px] py-0">
        <HeroSection />
        <AboutSection />
        <SuccessStoriesSection />
        <OfferingsSection />
        <EventsSection />
        <BookingSection />
        <NewsletterSection />
        <Footer />
      </div>
      <ScrollToTopButton />
      <AnimationObserver />
    </div>;
};
export default Index;