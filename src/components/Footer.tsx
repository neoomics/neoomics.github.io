import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI/ML Drug Discovery', href: '#services' },
      { name: 'Omics Data Analysis', href: '#services' },
      { name: 'Bioinformatics Platforms', href: '#services' },
      { name: 'Advisory & Communication', href: '#services' },
      { name: 'Clinical Data Analytics', href: '#services' },
      { name: 'Platform Integration', href: '#services' }
    ],
    company: [
      { name: 'About NeoOmics', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tao-xie-9000b744/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-pharma-teal rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 2C12 2 8 4 8 8C8 12 12 14 12 14C12 14 16 12 16 8C16 4 12 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M12 14C12 14 8 16 8 20C8 24 12 22 12 22C12 22 16 24 16 20C16 16 12 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="12" cy="8" r="2" fill="currentColor" />
                    <circle cx="12" cy="16" r="2" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-bold">NeoOmics</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming drug discovery through computational biology and AI/ML innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-pharma-teal" />
                <a href="mailto:admin@neoomics.com" className="text-pharma-teal hover:text-teal-400 transition-colors">admin@neoomics.com</a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-400">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 bg-gray-800 hover:bg-pharma-teal rounded-lg flex items-center justify-center transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pharma-teal transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pharma-teal transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} NeoOmics. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;