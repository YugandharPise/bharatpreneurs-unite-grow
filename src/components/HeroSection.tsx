
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-charcoal">
      {/* Background Video or Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          alt="Entrepreneurs at work"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto text-center relative z-10 px-4 animate-fade-in">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gold mb-4 leading-tight">
          Empowering India's <br className="hidden md:block" />
          Entrepreneurial Spirit
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Join a thriving community of visionaries and changemakers building tomorrow's India.
        </p>
        <div className="flex justify-center space-x-4 flex-wrap">
          <a href="#book" className="gold-button rounded-md mb-2 md:mb-0">
            Book a Free Consultation
          </a>
          <a href="#about" className="dark-button rounded-md">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="#FFD700" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
