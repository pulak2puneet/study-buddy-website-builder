
import { FileText, Calculator, Beaker, Code, Globe, BookOpen, Pen, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Assignment Writing",
      description: "Custom assignments written by PhD experts across all subjects and academic levels.",
      features: ["Original Content", "Proper Citations", "Free Revisions"]
    },
    {
      icon: <Pen className="w-8 h-8" />,
      title: "Essay Writing",
      description: "Professional essay writing services with proper structure and compelling arguments.",
      features: ["All Essay Types", "Perfect Grammar", "Timely Delivery"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research Papers",
      description: "In-depth research papers with comprehensive analysis and authentic sources.",
      features: ["Quality Research", "Proper Methodology", "Authentic Sources"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Math & Statistics",
      description: "Complex mathematical problems, statistical analysis, and data interpretation.",
      features: ["Step Solutions", "Data Analysis", "SPSS/R Help"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Help",
      description: "Coding assignments, software development, and computer science projects.",
      features: ["All Languages", "Clean Code", "Documentation"]
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Lab Reports",
      description: "Scientific laboratory reports with proper methodology and analysis.",
      features: ["Scientific Format", "Data Analysis", "Conclusions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Assignment Help Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert help across all subjects and academic levels. Our PhD qualified writers 
            deliver high-quality, plagiarism-free assignments with guaranteed satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Help Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-yellow-400">98.5%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-blue-100">Plagiarism Free</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-blue-100">Expert Writers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
