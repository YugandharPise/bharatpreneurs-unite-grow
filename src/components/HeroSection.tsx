
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);
  
  useEffect(() => {
    // Load VANTA.js scripts dynamically
    const loadScripts = async () => {
      // Create and load Three.js script
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js';
      threeScript.async = true;
      
      // Create VANTA Birds script
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.22/dist/vanta.birds.min.js';
      vantaScript.async = true;
      
      // Add scripts to document
      document.head.appendChild(threeScript);
      
      // Wait for Three.js to load before loading VANTA
      threeScript.onload = () => {
        document.head.appendChild(vantaScript);
        
        // Initialize VANTA after its script loads
        vantaScript.onload = () => {
          if (!vantaEffectRef.current && containerRef.current && window.VANTA) {
            vantaEffectRef.current = window.VANTA.BIRDS({
              el: containerRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              backgroundColor: 0x111111,
              color1: 0x836c1a,
              color2: 0xae8a12,
              birdSize: 2.00,
              wingSpan: 24.00,
              speedLimit: 3.00,
              separation: 80.00,
              quantity: 5
            });
          }
        };
      };
    };
    
    loadScripts();
    
    // Clean up effect on unmount
    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center bg-charcoal">
      {/* Content overlay */}
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
