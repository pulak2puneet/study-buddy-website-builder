
import { Award, Clock, Shield, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Writers",
      description: "PhD and Masters degree holders from top universities"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and assistance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Confidential",
      description: "Your privacy and academic integrity are guaranteed"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "50,000+ Students",
      description: "Trusted by students from universities worldwide"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About University Assignment Help
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a leading academic writing service dedicated to helping university students 
              achieve their academic goals. With over 10 years of experience, we have successfully 
              assisted thousands of students worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team consists of qualified academic writers with advanced degrees from prestigious 
              universities. We understand the challenges students face and provide personalized 
              solutions to meet their specific requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-blue-600 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Guarantee</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Original, plagiarism-free content</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">On-time delivery guaranteed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Free unlimited revisions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Money-back guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
