
import React, { useEffect } from 'react';

const AnimationObserver: React.FC = () => {
  useEffect(() => {
    // Setup Intersection Observer to detect elements with animate-on-scroll class
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Once the animation is triggered, we can stop observing this element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '-50px 0px', // Slightly offset when animation triggers
      }
    );
    
    animateOnScrollElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      // Cleanup observer when component unmounts
      animateOnScrollElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default AnimationObserver;
