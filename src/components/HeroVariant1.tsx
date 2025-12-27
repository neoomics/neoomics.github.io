import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroVariant1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder demo images (Science/Tech/Bio themed)
  const slides = [
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1920', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/2560px-Fronalpstock_big.jpg', 
    'https://www.pockettactics.com/wp-content/sites/pockettactics/2023/06/big-pokemon-3.jpeg', 
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1920'  
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20 md:pt-0">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-6 text-center relative z-10 mt-4 md:mt-0">
        <div className="mb-6 mt-8 md:mt-0">
          <img 
            src="/NeoOmics_text.png" 
            alt="NeoOmics" 
            className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto drop-shadow-2xl relative z-20"
            style={{filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.5))'}} 
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
          NeoOmics partners with biotech and pharma teams to transform complex biological data into actionable insights, advancing discovery and early clinical development through AI-powered multi-omics analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-200"
          >
            Schedule Consultation
          </button>
          <button 
            onClick={scrollToServices}
            className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-pharma-blue font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-lg px-8 py-4 hover:scale-105 transform"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Navigation Controls Container */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-8 z-20">
        {/* Navigation Dots */}
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroVariant1;
