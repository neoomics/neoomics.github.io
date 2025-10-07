import { ChevronDown } from 'lucide-react';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg text-white overflow-hidden pt-20 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-4 md:mt-0">
        <div className="mb-6 mt-8 md:mt-0">
          <img 
            src="/neoomics_text .png" 
            alt="NeoOmics" 
            className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto drop-shadow-2xl relative z-20"
            style={{filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.5))'}} 
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
          Neoomics provides AI-driven multi-omics and translational data science solutions to accelerate drug discovery and development for biotech and pharma teams.
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;