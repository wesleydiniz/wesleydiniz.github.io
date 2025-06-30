import React, { useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  MessageCircle, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  CheckCircle, 
  Star,
  Instagram,
  Linkedin,
  Phone
} from 'lucide-react';

// Import assets
import phoneMockup from './assets/ley-phone-mockup.png';
import whatsappIcon from './assets/whatsapp-icon.png';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you! We will notify you when Ley launches.');
    setFormData({ name: '', whatsapp: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 font-['Inter']">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Ley</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  🚀 Coming Soon
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Investment Assistant on{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                    WhatsApp
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get relevant news, weekly reports, and ask investment questions to Ley — an AI that tracks the companies you invest in. All via WhatsApp.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold"
                >
                  Notify me at launch
                </Button>
              </form>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={phoneMockup} 
                  alt="Ley WhatsApp conversation mockup" 
                  className="w-80 h-auto drop-shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to stay informed about your investments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:border-blue-200 transition-colors">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Smart Monitoring</h3>
                <p className="text-gray-600">
                  Ley monitors the companies in your portfolio and detects important events in real-time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 hover:border-green-200 transition-colors">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Weekly Reports</h3>
                <p className="text-gray-600">
                  Every week you receive a digest with performance, events, news, and trends.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 hover:border-purple-200 transition-colors">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Ask Anything</h3>
                <p className="text-gray-600">
                  Ask things like "Is PETR4 still worth it?" or "What happened with Itaú today?"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Ley?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay on top of your investments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No noise, only what matters</h3>
                <p className="text-gray-600">Get filtered, relevant information about your specific investments.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Works directly on WhatsApp</h3>
                <p className="text-gray-600">No new apps to download. Use the platform you already know and love.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Powered by AI and market data</h3>
                <p className="text-gray-600">Advanced algorithms analyze market trends and company performance.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Helps you make more informed decisions</h3>
                <p className="text-gray-600">Get insights and analysis to support your investment strategy.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Saves hours of research every week</h3>
                <p className="text-gray-600">Stop manually checking multiple sources for investment updates.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe and private</h3>
                <p className="text-gray-600">Your investment data is encrypted and never shared with third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of investors who trust Ley
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg">
                  "I save hours every week! Ley sends only the important stuff about the stocks I hold."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">JM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">João M.</p>
                    <p className="text-gray-600 text-sm">Long-term investor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg">
                  "I finally understand what's going on with my investments, no need to open 10 tabs."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">CS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Camila S.</p>
                    <p className="text-gray-600 text-sm">Junior Analyst</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Track your portfolio with intelligence and simplicity.
            </h2>
            <p className="text-xl text-blue-100">
              Get Ley on WhatsApp and invest with more confidence.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
            >
              I want to try Ley
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-2xl font-bold">Ley</span>
              </div>
              <p className="text-gray-400">
                Your intelligent investment assistant on WhatsApp.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <p className="text-gray-400 text-sm">
                Ley is an investment assistant. It does not offer buy or sell recommendations.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ley. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

