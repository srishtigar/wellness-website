import React from 'react';
import './App.css';
import { Heart, Leaf, Brain, Users, ArrowRight, Instagram, MessageCircle, Star } from 'lucide-react';
import heroImage from './assets/hero_image_wellness.png';

function App() {
  const healthTips = [
    {
      title: "Daily Wellness Habits",
      description: "30 minutes walking, 8 hours sleep, 30 minutes pranayama - your free health tools!",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Mental Health Matters",
      description: "Recognize burnout signs early. Rest, reset, and reach out when needed.",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Heart Health Awareness",
      description: "Know the 5 early warning signs of heart attack. Early detection saves lives!",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Natural Remedies",
      description: "Discover the power of figs, jamun seeds, and other natural superfoods.",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-800"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The wellness tips are so practical and easy to follow. Love the bilingual content!",
      rating: 5
    },
    {
      name: "Rahul Gupta",
      text: "Finally found reliable health information that fits my lifestyle. Thank you!",
      rating: 5
    },
    {
      name: "Anita Patel",
      text: "The mental health awareness content helped me recognize my burnout early.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">The Wellness Source</h1>
                <p className="text-sm text-gray-600">All about Health</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#tips" className="text-gray-700 hover:text-green-600 transition-colors">Health Tips</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </nav>
            <a 
              href="https://www.instagram.com/the.wellnesssource" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Wellness that fits your 
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> vibe</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  💫 Chill karo, heal karo<br/>
                  🌱 Self-care isn't selfish<br/>
                  🔗 Join the wellness tribe
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Explore Health Tips</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300">
                  Watch Our Videos
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-500" />
                  <span>28+ Followers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>25+ Health Posts</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-3xl transform rotate-6"></div>
              <img 
                src={heroImage} 
                alt="Wellness and Health" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section id="tips" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Your Daily Dose of <span className="text-green-600">Wellness</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical health tips, natural remedies, and wellness wisdom to transform your lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-xl ${tip.color} flex items-center justify-center mb-4`}>
                  {tip.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h4>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center space-x-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  About <span className="text-blue-600">The Wellness Source</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We believe wellness should fit your vibe! Our mission is to make health information accessible, 
                  practical, and engaging for everyone. From ancient Ayurvedic wisdom to modern health science, 
                  we bridge the gap between traditional and contemporary wellness practices.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Join our growing community of health enthusiasts who believe that self-care isn't selfish, 
                  and that small daily habits can create big transformations in your life.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-gray-600">Health Posts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">28+</div>
                  <div className="text-gray-600">Followers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-gray-600">Natural Tips</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Accessible Wellness</h5>
                    <p className="text-gray-600">Health tips that everyone can understand and implement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Evidence-Based</h5>
                    <p className="text-gray-600">Combining traditional wisdom with modern science</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Community First</h5>
                    <p className="text-gray-600">Building a supportive wellness tribe together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-green-600">Community</span> Says
            </h3>
            <p className="text-xl text-gray-600">Real stories from real people on their wellness journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Join the <span className="text-blue-600">Wellness Tribe</span>
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            Ready to start your wellness journey? Connect with us and become part of our growing community!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://www.instagram.com/the.wellnesssource" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
            </a>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h4>
            <p className="text-gray-600 mb-6">Get the latest health tips and wellness content delivered to your feed</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">The Wellness Source</h4>
                  <p className="text-gray-400">All about Health</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Wellness that fits your vibe. Join our community for practical health tips, 
                natural remedies, and wellness wisdom.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/the.wellnesssource" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#tips" className="hover:text-white transition-colors">Health Tips</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Health Topics</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Nutrition</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mental Health</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Natural Remedies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lifestyle</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 The Wellness Source. All rights reserved. Made with ❤️ for your wellness journey.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
