
import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Founder & CEO, TechBridge Solutions",
    photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Bharatpreneurs connected me with mentors who helped scale my startup from a local player to a national brand with international ambitions."
  },
  {
    id: 2,
    name: "Rajiv Mehta",
    role: "Co-founder, GreenHarvest",
    photo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The strategic insights and investor connections I gained through this community directly led to our Series A funding of ₹5 crores."
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Founder, HealthConnect",
    photo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Being part of Bharatpreneurs has opened doors I didn't even know existed. The peer network alone has been worth every penny of membership."
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "CEO, Urban Mobility",
    photo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The masterclasses and focused mentorship helped me pivot my business model during challenging times and emerge stronger than before."
  }
];

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const scrollToTestimonial = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const scrollAmount = index * (carouselRef.current.offsetWidth / testimonials.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      scrollToTestimonial((activeIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="success-stories" className="section-padding bg-gray-50">
      <div 
        ref={sectionRef}
        className="container mx-auto animate-on-scroll"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear from our community members who have transformed their businesses through the power of connection and collaboration.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="min-w-full lg:min-w-[50%] px-4 snap-center"
              >
                <div className="testimonial-card flex flex-col items-center text-center p-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-gray-700 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
