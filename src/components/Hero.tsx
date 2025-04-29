
import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    
    if (title) title.classList.add('animate-fade-in');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-instocks-light">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-instocks-dark opacity-0">
            Fresh Food Inventory with <span className="text-instocks-teal">Food</span>
            <span>Stocks</span>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-instocks-gray opacity-0 delay-300">
            A modern way to track and showcase your grocery store's available products.
            Keep your customers informed about the freshest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a 
              href="#fruits" 
              className="px-6 py-3 bg-instocks-teal text-white rounded-lg hover:bg-opacity-90 transition-all shadow-md"
            >
              Browse Food Items
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-white text-instocks-dark border border-gray-200 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="mt-20 opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-instocks-teal/20 to-instocks-amber/20 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-semibold text-instocks-dark mb-2">Fresh Food Inventory Dashboard</h3>
                <p className="text-instocks-gray">Track your grocery store's inventory in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
