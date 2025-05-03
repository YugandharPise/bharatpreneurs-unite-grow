
import React, { useEffect, useRef, useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    setFormSubmitted(true);
    toast({
      title: "Consultation Request Received",
      description: "We have your information and will get in touch with you shortly.",
      duration: 5000,
    });
  };

  return (
    <section id="book" className="section-padding bg-charcoal text-white">
      <div 
        ref={sectionRef}
        className="container mx-auto animate-on-scroll"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="text-gold">Join Us?</span></h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto">
            Book a free consultation with one of our expert advisors to discuss how Bharatpreneurs can help accelerate your entrepreneurial journey.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gold"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gold"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gold"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">How can we help?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-gold"
                  placeholder="Tell us about your business and what you hope to achieve"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="gold-button rounded-md px-8 py-4"
                >
                  Book Your Free Consultation
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 px-6 bg-black/40 border border-gold/30 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-300 mb-6">
                We have received your information and will get in touch with you shortly to schedule your consultation.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)} 
                className="gold-button rounded-md"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
