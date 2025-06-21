
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "Harvard University",
      course: "Business Administration",
      rating: 5,
      text: "Amazing service! They helped me with my complex business case study and delivered exceptional work on time. Highly recommended!"
    },
    {
      name: "Michael Chen",
      university: "MIT",
      course: "Computer Science",
      rating: 5,
      text: "The programming assignment help was outstanding. The code was well-commented and worked perfectly. Great communication throughout."
    },
    {
      name: "Emily Rodriguez",
      university: "Stanford University",
      course: "Psychology",
      rating: 5,
      text: "I was struggling with my research paper, but their expert writers helped me create a well-structured and insightful piece. Thank you!"
    },
    {
      name: "David Thompson",
      university: "Oxford University",
      course: "Economics",
      rating: 5,
      text: "Professional service with attention to detail. My economics assignment received top marks. Will definitely use their services again."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what students from top universities 
            around the world have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 relative">
              <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-50" />
              
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.course}</p>
                <p className="text-sm text-blue-600">{testimonial.university}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Successful Students</h3>
            <p className="text-gray-600 mb-6">
              Get the academic support you need to excel in your studies and achieve your goals.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
