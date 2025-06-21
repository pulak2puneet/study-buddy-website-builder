
import { CheckCircle, Star, Users, ArrowRight, BookOpen, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                #1 Assignment Help Service
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Instant 
              <span className="text-yellow-400"> Assignment Help </span>
              From Experts
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Struggling with deadlines? Get professional assignment writing help from PhD experts. 
              100% plagiarism-free work with unlimited revisions guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center">
                Order Now - 50% OFF
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Get Free Quote
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <BookOpen className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="font-bold text-lg">10,000+</div>
                <div className="text-sm text-blue-100">Orders Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="font-bold text-lg">500+</div>
                <div className="text-sm text-blue-100">PhD Experts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="font-bold text-lg">4.9/5</div>
                <div className="text-sm text-blue-100">Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="font-bold text-lg">24/7</div>
                <div className="text-sm text-blue-100">Support</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Zero Plagiarism</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>On-Time Delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Instant Price Quote</h3>
              <form className="space-y-4">
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-yellow-400">
                    <option>Select Academic Level</option>
                    <option>High School</option>
                    <option>Undergraduate</option>
                    <option>Masters</option>
                    <option>PhD</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-yellow-400">
                    <option>Select Subject</option>
                    <option>Business Studies</option>
                    <option>Computer Science</option>
                    <option>Engineering</option>
                    <option>Literature</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="number" placeholder="Pages" className="px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-yellow-400" />
                  <select className="px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-yellow-400">
                    <option>24 Hours</option>
                    <option>3 Days</option>
                    <option>7 Days</option>
                    <option>14 Days</option>
                  </select>
                </div>
                <button className="w-full bg-yellow-400 text-blue-900 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                  Calculate Price & Order
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold text-yellow-400">Starting from $8/page</div>
                <div className="text-sm text-blue-100">Free plagiarism report & unlimited revisions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
