
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Funding Strategies for Tech Startups",
    date: "2025-06-15T10:00:00",
    location: "Mumbai",
    description: "Learn how to secure funding from VCs and angel investors in the current market."
  },
  {
    id: 2,
    title: "Scaling Your D2C Business",
    date: "2025-06-28T14:00:00",
    location: "Bangalore",
    description: "Practical strategies for scaling direct-to-consumer businesses in India."
  },
  {
    id: 3,
    title: "AI Integration for Business Growth",
    date: "2025-07-10T09:30:00",
    location: "Delhi NCR",
    description: "Explore how artificial intelligence can transform your operations and customer experience."
  }
];

const EventsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time remaining for the next event
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const nextEventDate = new Date(upcomingEvents[0].date);
      const difference = nextEventDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
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

  // Format date for display
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short',
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Format time for display
  const formatEventTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    });
  };

  const handleRegister = (event: any) => {
    navigate('/event-registration', { state: { eventData: event } });
  };

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div 
        ref={sectionRef}
        className="container mx-auto animate-on-scroll"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Join us at our exclusive events designed to inspire, educate, and connect entrepreneurs across India.
          </p>
        </div>

        {/* Countdown to next event */}
        <div className="bg-charcoal text-white p-8 rounded-lg mb-12">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
            Next Event: <span className="text-gold">{upcomingEvents[0].title}</span>
          </h3>
          <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gold">{timeRemaining.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gold">{timeRemaining.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gold">{timeRemaining.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gold">{timeRemaining.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600">{event.location}</p>
                </div>
                <div className="bg-gold text-black px-3 py-1 rounded text-sm font-medium">
                  {formatEventDate(event.date).split(',')[0]}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-gray-700">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {formatEventDate(event.date)}
                  </div>
                  <div className="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatEventTime(event.date)}
                  </div>
                </div>
                <button 
                  className="dark-button rounded-md text-sm"
                  onClick={() => handleRegister(event)}
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
