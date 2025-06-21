
import { BookOpen, FileText, Calculator, Beaker, Globe, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Essay Writing",
      description: "Custom essays, research papers, and academic writing across all subjects and academic levels."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Math & Statistics",
      description: "Complex mathematical problems, statistical analysis, and data interpretation assignments."
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Science Projects",
      description: "Laboratory reports, scientific research, and projects in biology, chemistry, and physics."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      description: "Coding assignments, software development projects, and computer science coursework."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Business Studies",
      description: "Case studies, business plans, marketing strategies, and management assignments."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Literature Reviews",
      description: "Comprehensive literature reviews, thesis writing, and dissertation assistance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive academic assistance across all subjects and academic levels, 
            ensuring high-quality work that meets your university's standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
