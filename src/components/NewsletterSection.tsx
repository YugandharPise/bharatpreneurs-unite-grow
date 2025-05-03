
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form submission logic would go here
    
    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
      duration: 5000,
    });
    
    setEmail('');
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
        <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates, industry insights, and exclusive content for entrepreneurs.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:border-gold w-full"
            required
          />
          <button
            type="submit"
            className="gold-button rounded-r-md mt-2 sm:mt-0 px-6"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
