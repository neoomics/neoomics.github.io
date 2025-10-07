import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    projectDetails: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Project details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/mvgwqvrn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          jobTitle: '',
          phone: '',
          projectType: '',
          timeline: '',
          budget: '',
          projectDetails: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: <a href="mailto:admin@neoomics.com" className="text-pharma-teal hover:text-teal-400 transition-colors">admin@neoomics.com</a>,
      description: 'Send us an email anytime'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-pharma-teal">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to accelerate your drug discovery process? Let's discuss how NeoOmics's computational biology
            expertise can transform your research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Let's Start a Conversation</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're looking to optimize your drug discovery pipeline, implement AI/ML solutions,
              or need expert guidance on computational biology challenges, we're here to help.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pharma-teal/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-pharma-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-200">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Why Choose NeoOmics?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pharma-teal mr-3 flex-shrink-0" />
                  20+ years of computational biology expertise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pharma-teal mr-3 flex-shrink-0" />
                  Proven track record with 100+ successful projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pharma-teal mr-3 flex-shrink-0" />
                  Cutting-edge AI/ML and omics analysis capabilities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pharma-teal mr-3 flex-shrink-0" />
                  Collaborative approach with cross-functional teams
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors ${
                      errors.company ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Your company name"
                  />
                  {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                </div>
                
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium mb-2">Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors"
                    placeholder="Your role"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="ai-ml-drug-discovery">AI/ML Drug Discovery</option>
                    <option value="omics-analysis">Omics Data Analysis</option>
                    <option value="bioinformatics-platform">Bioinformatics Platform</option>
                    <option value="computational-biology">Computational Biology</option>
                    <option value="clinical-analytics">Clinical Data Analytics</option>
                    <option value="platform-integration">Platform Integration</option>
                    <option value="consulting">General Consulting</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (ASAP)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="12-months-plus">12+ months</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k-500k">$250K - $500K</option>
                    <option value="500k-plus">$500K+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-pharma-teal focus:border-transparent transition-colors resize-none ${
                    errors.projectDetails ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Please describe your project requirements, challenges, and goals..."
                ></textarea>
                {errors.projectDetails && <p className="text-red-400 text-sm mt-1">{errors.projectDetails}</p>}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center p-4 bg-green-900/50 border border-green-700 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <p className="text-green-300">Message sent successfully! I'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center p-4 bg-red-900/50 border border-red-700 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <p className="text-red-300">There was a technical issue. Please try again in a moment or email me directly at <a href="mailto:admin@neoomics.com" className="text-pharma-teal hover:text-teal-400 underline transition-colors">admin@neoomics.com</a></p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pharma-teal hover:bg-teal-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;