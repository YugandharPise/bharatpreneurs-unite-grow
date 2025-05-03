
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EventRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);
  
  // Extract event data from location state, or use defaults
  const eventData = location.state?.eventData || {
    title: "Bharatpreneurs Event",
    date: "Upcoming Event"
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Show toast notification
    toast({
      title: "Event Booked!",
      description: `You've successfully registered for ${eventData.title}`,
      variant: "default",
      duration: 5000,
    });
    
    // After 2 seconds, redirect back to home
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="section-padding pt-32 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Register for Event</h1>
            <div className="h-1 w-20 bg-gold mx-auto mb-4"></div>
            <p className="text-xl text-gray-700">{eventData.title}</p>
            <p className="text-gray-600">{eventData.date}</p>
          </div>
          
          {!formSubmitted ? (
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gold"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gold"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gold"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gold"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 font-medium text-gray-700">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gold"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="position" className="block mb-2 font-medium text-gray-700">Position/Title</label>
                  <input
                    type="text"
                    id="position"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gold"
                    placeholder="Your job title"
                  />
                </div>
                
                <div>
                  <label htmlFor="expectations" className="block mb-2 font-medium text-gray-700">What are you hoping to gain from this event?</label>
                  <textarea
                    id="expectations"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gold"
                    placeholder="Share your expectations..."
                  ></textarea>
                </div>
                
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="gold-button rounded-md px-10 py-4"
                  >
                    Register for Event
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gold">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Registration Complete!</h2>
              <p className="text-gray-600 mt-2 mb-6">You have successfully registered for {eventData.title}.</p>
              <p className="text-sm text-gray-500">You will be redirected to the home page shortly...</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EventRegistration;
