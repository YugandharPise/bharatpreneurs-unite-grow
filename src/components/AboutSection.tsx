
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div 
        ref={sectionRef} 
        className="container mx-auto grid md:grid-cols-2 gap-12 items-center animate-on-scroll"
      >
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gold">Bharatpreneurs</span>
          </h2>
          <div className="h-1 w-20 bg-gold mb-6"></div>
          <p className="text-gray-700 mb-4">
            Founded in 2019, Bharatpreneurs is a premium community created to nurture and accelerate India's entrepreneurial ecosystem. We bring together innovators, industry veterans, and investors to share knowledge, forge partnerships, and drive sustainable growth.
          </p>
          <p className="text-gray-700 mb-6">
            Our members benefit from exclusive mentorship, networking opportunities, and strategic resources designed to help them navigate challenges and seize opportunities in today's dynamic business landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <span className="text-gold font-bold text-4xl mr-2">300+</span>
              <span className="text-gray-700">Active Members</span>
            </div>
            <div className="flex items-center">
              <span className="text-gold font-bold text-4xl mr-2">₹40Cr+</span>
              <span className="text-gray-700">Capital Raised</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold"></div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
              alt="Entrepreneur working"
              className="w-full h-auto shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
