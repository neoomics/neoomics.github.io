import { Calendar, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'AI-Driven Target Identification Platform',
      category: 'Machine Learning',
      description: 'Developed a comprehensive ML platform that reduced target identification time by 60% for a major pharmaceutical company.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20AI%20laboratory%20with%20scientists%20working%20on%20computers%2C%20molecular%20structures%20on%20screens%2C%20clean%20professional%20biotech%20environment&image_size=landscape_4_3',
      timeline: '8 months',
      team: '6 specialists',
      results: ['60% faster target ID', '40% cost reduction', '15 validated targets']
    },
    {
      title: 'Multi-Omics Biomarker Discovery',
      category: 'Data Analytics',
      description: 'Integrated genomics, proteomics, and metabolomics data to identify novel biomarkers for oncology therapeutics.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=DNA%20double%20helix%20with%20data%20visualization%20charts%2C%20genomics%20analysis%20interface%2C%20scientific%20laboratory%20setting&image_size=landscape_4_3',
      timeline: '12 months',
      team: '8 specialists',
      results: ['3 novel biomarkers', '85% accuracy', 'FDA breakthrough designation']
    },
    {
      title: 'Cloud-Based Bioinformatics Pipeline',
      category: 'Platform Development',
      description: 'Built scalable cloud infrastructure processing 10TB+ of genomic data daily with automated quality control.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=cloud%20computing%20data%20center%20with%20bioinformatics%20workflows%2C%20servers%20and%20data%20visualization%20screens&image_size=landscape_4_3',
      timeline: '6 months',
      team: '4 specialists',
      results: ['10TB daily processing', '99.9% uptime', '70% cost savings']
    },
    {
      title: 'Predictive ADMET Modeling',
      category: 'Computational Chemistry',
      description: 'Developed machine learning models for early-stage ADMET prediction, reducing late-stage failures by 45%.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=molecular%20modeling%20software%20interface%20showing%20drug%20compounds%2C%20chemical%20structures%20and%20prediction%20models&image_size=landscape_4_3',
      timeline: '10 months',
      team: '5 specialists',
      results: ['45% fewer failures', '30% faster screening', '200+ compounds analyzed']
    },
    {
      title: 'Clinical Trial Data Integration',
      category: 'Data Management',
      description: 'Unified disparate clinical data sources into a single platform, enabling real-time analytics and reporting.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=clinical%20research%20dashboard%20with%20patient%20data%20analytics%2C%20medical%20charts%20and%20statistical%20graphs&image_size=landscape_4_3',
      timeline: '9 months',
      team: '7 specialists',
      results: ['5 data sources unified', '50% faster reporting', 'Real-time insights']
    },
    {
      title: 'Personalized Medicine Algorithm',
      category: 'Precision Medicine',
      description: 'Created patient stratification algorithms using genetic and clinical data to optimize treatment selection.',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=personalized%20medicine%20concept%20with%20patient%20profiles%2C%20genetic%20data%20visualization%20and%20treatment%20recommendations&image_size=landscape_4_3',
      timeline: '14 months',
      team: '9 specialists',
      results: ['78% response rate', '25% better outcomes', '1000+ patients stratified']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-pharma-teal">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped pharmaceutical and biotech companies accelerate their research
            and development through innovative computational solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pharma-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pharma-blue transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Project Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.timeline}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {project.team}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pharma-teal rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to create your own success story?
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;