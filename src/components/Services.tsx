import { Brain, Database, BarChart3, Microscope, Cpu, Network } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Drug Discovery',
      description: 'Advanced machine learning models for target identification, lead optimization, and predictive toxicology.',
      features: ['Deep Learning Models', 'Predictive Analytics', 'Target Validation', 'ADMET Prediction']
    },
    {
      icon: Database,
      title: 'Omics Data Analysis',
      description: 'Comprehensive analysis of genomics, proteomics, and metabolomics data for biomarker discovery.',
      features: ['Multi-omics Integration', 'Biomarker Discovery', 'Pathway Analysis', 'Data Visualization']
    },
    {
      icon: Cpu,
      title: 'Bioinformatics Platforms',
      description: 'Scalable computational infrastructure and pipelines for high-throughput biological data processing.',
      features: ['Cloud Computing', 'Pipeline Development', 'Data Management', 'Workflow Automation']
    },

    {
      icon: BarChart3,
      title: 'Clinical Data Analytics',
      description: 'Statistical analysis and interpretation of clinical trial data for regulatory submissions.',
      features: ['Statistical Modeling', 'Companion Diagnostics', 'Regulatory Support', 'Data Interpretation']
    },
    {
      icon: Network,
      title: 'Platform Integration',
      description: 'Seamless integration of diverse data sources and analytical tools into unified platforms.',
      features: ['API Development', 'System Integration', 'Data Harmonization', 'User Interfaces']
    },
    {
      icon: Microscope,
      title: 'Advisory & Communication',
      description: 'Clear, decision‑oriented deliverables—slides, dashboards, and briefings for biology, chemistry, and exec teams.',
      features: ['Patient/indication selection', 'Roadmapping & study design', 'Program review & troubleshooting', 'Scientific storytelling']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    <span className="text-pharma-teal">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive computational biology and AI/ML solutions for bulk & single‑cell RNA‑seq to spatial and proteomics, TAA identification and ADC/TCE modeling, functional genomics (CRISPR) and translational/clinical studies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pharma-blue/10 rounded-full mb-6 group-hover:bg-pharma-blue/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-pharma-blue" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pharma-teal rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-pharma-blue to-pharma-teal p-12 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Accelerate Your Research?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how NeoOmics's computational biology expertise can transform your drug discovery process.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-pharma-blue font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;