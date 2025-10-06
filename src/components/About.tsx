import { Award, Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Users, value: '100+', label: 'Projects Completed' },
    { icon: Target, value: '50+', label: 'Successful Launches' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      title: 'Scientific Excellence',
      description: 'Rigorous methodology and cutting-edge approaches to solve complex biological challenges.',
    },
    {
      title: 'Innovation Focus',
      description: 'Leveraging AI/ML and advanced analytics to accelerate drug discovery and development.',
    },
    {
      title: 'Collaborative Partnership',
      description: 'Working closely with cross-functional teams to translate research into clinical solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-pharma-teal">NeoOmics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From computational biology research to life-saving therapies, NeoOmics has established itself as a trusted
            partner in pharmaceutical and biotechnology innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pharma-blue/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-pharma-blue" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-white p-12 rounded-2xl shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              To bridge the gap between cutting-edge computational biology and practical clinical applications,
              empowering pharmaceutical and biotech companies to accelerate their drug discovery and development
              processes through innovative AI/ML solutions and deep scientific expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;