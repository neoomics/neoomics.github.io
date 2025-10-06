import { ChevronDown, Dna } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* DNA Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
            <Dna className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white block">NeoOmics</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
          20+ years at the intersection of biology drug discovery and AI/ML, supporting cross-functional teams to turn research into clinical solutions. Expertise in omics data analysis, scalable bioinformatics platforms, and accessible AI/ML driven drug discovery and development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="btn-primary text-lg px-8 py-4">
            Explore Services
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Get In Touch
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
