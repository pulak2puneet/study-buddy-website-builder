
import { Star, Quote, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "Harvard University",
      course: "Business Administration",
      rating: 5,
      text: "Outstanding service! They delivered my complex business case study ahead of deadline. The quality was exceptional and helped me secure an A+ grade. Highly recommended!",
      grade: "A+",
      subject: "Strategic Management"
    },
    {
      name: "Michael Chen",
      university: "MIT",
      course: "Computer Science",
      rating: 5,
      text: "The programming assignment help was incredible. Clean, well-commented code with detailed explanations. The expert understood my requirements perfectly.",
      grade: "A",
      subject: "Data Structures"
    },
    {
      name: "Emily Rodriguez",
      university: "Stanford University",
      course: "Psychology",
      rating: 5,
      text: "I was struggling with my research methodology paper. Their expert provided brilliant insights and helped me create a well-structured, insightful piece.",
      grade: "A-",
      subject: "Research Methods"
    },
    {
      name: "David Thompson",
      university: "Oxford University",
      course: "Economics",
      rating: 5,
      text: "Professional service with excellent attention to detail. My econometrics assignment received top marks. The statistical analysis was perfect!",
      grade: "A+",
      subject: "Econometrics"
    },
    {
      name: "Lisa Wang",
      university: "Yale University",
      course: "Literature",
      rating: 5,
      text: "Amazing essay writing service! The literary analysis was thorough and the arguments were compelling. Delivered exactly what I needed.",
      grade: "A",
      subject: "Victorian Literature"
    },
    {
      name: "James Wilson",
      university: "Cambridge University",
      course: "Engineering",
      rating: 5,
      text: "The technical report was perfectly formatted and included all necessary calculations. Their engineering expert really knew the subject matter.",
      grade: "A+",
      subject: "Mechanical Engineering"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 10,000+ satisfied students from top universities worldwide trust our services. 
            Read their success stories and join the community of achievers.
          </p>
          
          <div className="flex justify-center items-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="flex justify-center mb-2">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98.5%</div>
              <div className="flex justify-center mb-2">
                <ThumbsUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-blue-600 opacity-50" />
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Grade: {testimonial.grade}
                </div>
              </div>
              
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.course}</p>
                <p className="text-sm text-blue-600 font-medium">{testimonial.university}</p>
                <p className="text-xs text-gray-500 mt-1">Subject: {testimonial.subject}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join 50,000+ Successful Students</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Get the academic support you need to excel in your studies and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Start Your Success Story
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              View Sample Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
