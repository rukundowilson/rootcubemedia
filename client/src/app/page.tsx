 "use client"
 import React, { useEffect, useState } from 'react';
import { Youtube, Instagram, Music, ExternalLink, Globe, Star, CheckCircle } from 'lucide-react';

const eligibilityRequirements = [
  "Must have at least 1,000 followers on a major social platform",
  "Active and public social media profile",
  "Pass our social media authenticity review",
  "Ability to promote content to a real audience",
  "Comply with our community guidelines"
];

const benefits = [
  {
    title: "Instant Access to Campaigns",
    description: "Browse and join high-paying campaigns from top creators and brands.",
    icon: <ExternalLink className="w-8 h-8" />,
    gradient: "from-pink-500 to-purple-500",
    bgGradient: "from-pink-500/10 to-purple-500/10"
  },
  {
    title: "Earn Real Rewards",
    description: "Get paid for every successful promotion and engagement you drive.",
    icon: <Star className="w-8 h-8" />,
    gradient: "from-amber-400 to-amber-600",
    bgGradient: "from-amber-400/10 to-amber-600/10"
  },
  {
    title: "Grow Your Audience",
    description: "Build your personal brand and gain followers while promoting content.",
    icon: <Instagram className="w-8 h-8" />,
    gradient: "from-pink-400 via-purple-400 to-indigo-400",
    bgGradient: "from-pink-400/10 via-purple-400/10 to-indigo-400/10"
  },
  {
    title: "Advanced Analytics",
    description: "Track your performance and optimize your campaigns with real-time data.",
    icon: <Globe className="w-8 h-8" />,
    gradient: "from-blue-400 to-purple-400",
    bgGradient: "from-blue-400/10 to-purple-400/10"
  },
  {
    title: "Priority Support",
    description: "Get help fast with our dedicated promoter support team.",
    icon: <Youtube className="w-8 h-8" />,
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-red-500/10 to-red-600/10"
  },
  {
    title: "Exclusive Community",
    description: "Join a network of verified promoters and access exclusive resources.",
    icon: <Music className="w-8 h-8" />,
    gradient: "from-indigo-500 to-pink-500",
    bgGradient: "from-indigo-500/10 to-pink-500/10"
  }
];

const RootCubeLandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const platforms = [
    {
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8" />,
      description: 'Promote your videos and grow your channel',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8" />,
      description: 'Boost your posts, stories, and reels',
      color: 'from-pink-500 via-purple-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50',
      textColor: 'text-purple-600'
    },
    {
      name: 'TikTok',
      icon: <Music className="w-8 h-8" />,
      description: 'Amplify your short-form video content',
      color: 'from-black to-gray-800',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-800'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes rotating-line {
          0% { transform: rotate(0deg); opacity: 0.5; }
          50% { transform: rotate(180deg); opacity: 1; }
          100% { transform: rotate(360deg); opacity: 0.5; }
        }
        
        .rotating-line {
          animation: rotating-line 4s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
<div className="relative min-h-screen overflow-hidden">
  {/* Background Image with Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:bg-center sm:bg-cover bg-[position:60%_center] bg-[length:150%] sm:bg-[length:cover]"
    style={{
      backgroundImage: 'url(https://buse.de/wp-content/uploads/2025/01/sind-influencer-handelsvertreter.webp)'
    }}
  >
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-black/50"></div>
    {/* Gradient overlay to blend with your existing design */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-pink-900/60"></div>
  </div>
  {/* Navigation */}
  <nav className="relative z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-bold text-white">mediabox</span>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8">
        <button 
          onClick={() => scrollToSection('features')}
          className="text-white hover:text-amber-400 transition-colors"
        >
          Features
        </button>
        <button 
          onClick={() => scrollToSection('how-it-works')}
          className="text-white hover:text-amber-400 transition-colors"
        >
          How It Works
        </button>
        <button 
          onClick={() => scrollToSection('tech-stack')}
          className="text-white hover:text-amber-400 transition-colors"
        >
          careers
        </button>
      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="text-white focus:outline-none"
          aria-label="Open menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex space-x-4">
        <button className="px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all text-white">
          Login
        </button>
        <button className="px-6 py-2 bg-amber-500 rounded-full hover:bg-amber-400 transition-all font-semibold text-black">
          Get Started
        </button>
      </div>
    </div>
    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-white/10 shadow-lg z-50">
        <div className="flex flex-col px-6 py-4 space-y-2">
          <button 
            onClick={() => { scrollToSection('features'); setMobileMenuOpen(false); }}
            className="text-white hover:text-amber-400 transition-colors text-left py-2"
          >
            {/* Hide on small screens, show on md+ */}
            <div className="hidden md:flex space-x-4">
              <button className="px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all text-white">
                Login
              </button>
              <button className="px-6 py-2 bg-amber-500 rounded-full hover:bg-amber-400 transition-all font-semibold text-black">
                Get Started
              </button>
            </div></button>
          <button 
            onClick={() => { scrollToSection('how-it-works'); setMobileMenuOpen(false); }}
            className="text-white hover:text-amber-400 transition-colors text-left py-2"
          >
            How It Works
          </button>
          <button 
            onClick={() => { scrollToSection('tech-stack'); setMobileMenuOpen(false); }}
            className="text-white hover:text-amber-400 transition-colors text-left py-2"
          >
            careers
          </button>
          <div className="flex space-x-4 mt-4">
            <button className="px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all text-white">
              Login
            </button>
            <button className="px-6 py-2 bg-amber-500 rounded-full hover:bg-amber-400 transition-all font-semibold text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    )}
  </nav>

  {/* Hero Content */}
  <div className="relative z-40 flex items-center justify-center min-h-screen px-6">
    <div className="text-center max-w-6xl mx-auto">
      {/* Main Heading */}
      <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Where <span className="text-amber-400 drop-shadow-lg">Creators</span><br />
        Meet <span className="text-pink-400 drop-shadow-lg">Audiences</span>
      </h1>
      
      {/* Subtitle */}
      <p className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-white/95 leading-relaxed font-medium transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        The revolutionary platform connecting content creators with engaged viewers.<br />
        <span className="text-amber-200">Promote your videos, earn rewards, and build authentic communities.</span>
      </p>
      
      {/* Call-to-Action Buttons */}
      <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-lg font-bold hover:from-pink-400 hover:to-pink-500 transition-all transform hover:scale-105 text-white shadow-2xl hover:shadow-pink-500/25 min-w-[200px]">
          🚀 Start Creating
        </button>
        <button className="px-10 py-4 bg-white/20 backdrop-blur-md rounded-full text-lg font-bold hover:bg-white/30 transition-all text-white border border-white/30 hover:border-white/50 shadow-2xl hover:shadow-white/10 min-w-[200px]">
          💰 Start Earning
        </button>
      </div>
    </div>
  </div>

  {/* Enhanced Floating Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl animate-float"></div>
    <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
    <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '-1.5s'}}></div>
    <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-4s'}}></div>
  </div>

  {/* Animated Particles */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
    <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-amber-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
    <div className="absolute top-3/4 right-1/2 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
  </div>
</div>

     {/* Enhanced User Types Section */}
      <section id="features" className="py-32 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl floating-element"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-amber-500 rounded-full blur-3xl floating-element"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators, promoters, and viewers in the ultimate content ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Artists/Creators Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-pink-500/10 to-indigo-500/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="text-8xl mb-8 text-center filter drop-shadow-lg">🎨</div>
                <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">
                  Artists & Creators
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Promote your short videos (≤30s) to real audiences",
                    "Advanced analytics & engagement tracking", 
                    "Target specific audiences & categories",
                    "Pay per campaign with mobile money"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 group/item">
                      <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl font-semibold hover:from-pink-400 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 pulse-border">
                  Start Promoting ✨
                </button>
              </div>
            </div>

            {/* Promoters Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-amber-500/10 to-pink-500/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:-rotate-1">
                <div className="text-8xl mb-8 text-center filter drop-shadow-lg">📢</div>
                <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  Verified Promoters
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Apply for promoter status with social media verification",
                    "Get verified after social media review",
                    "Access to premium promotion tools", 
                    "Enhanced reach & targeting options"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 group/item">
                      <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl font-semibold hover:from-amber-400 hover:to-amber-500 transition-all duration-300 text-black hover:shadow-lg hover:shadow-amber-500/25 pulse-border">
                  Apply for Verification ⚡
                </button>
              </div>
            </div>

            {/* Viewers Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-amber-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-indigo-500/10 to-amber-500/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="text-8xl mb-8 text-center filter drop-shadow-lg">👀</div>
                <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                  Viewers & Earners
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Watch engaging short videos (30s max)",
                    "Earn rewards for every view & engagement",
                    "Withdraw up to 300,000 RWF monthly",
                    "Discover new content & creators"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 group/item">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl font-semibold hover:from-indigo-400 hover:to-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 pulse-border">
                  Start Earning 💰
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section id="how-it-works" className="py-32 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-800 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-white/20 rounded-lg floating-element" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Simple, secure, and rewarding process for everyone
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              {[
                {
                  number: "1",
                  title: "Creators Upload & Pay",
                  description: "Artists upload their short videos and set up promotion campaigns with targeted audiences. Payment is simple with mobile money integration.",
                  color: "pink",
                  icon: "🎬"
                },
                {
                  number: "2", 
                  title: "Verification Process",
                  description: "Promoters apply for verification through social media review, ensuring quality and authenticity across the platform.",
                  color: "amber",
                  icon: "✅"
                },
                {
                  number: "3",
                  title: "Viewers Watch & Earn", 
                  description: "Real users watch promoted content, engage authentically, and earn rewards that can be withdrawn monthly up to 300,000 RWF.",
                  color: "indigo",
                  icon: "💎"
                }
              ].map((step, index) => (
                <div key={index} className="group flex items-start space-x-8 hover:scale-105 transition-all duration-500">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${
                    step.color === 'pink' ? 'from-pink-500 to-pink-600' :
                    step.color === 'amber' ? 'from-amber-500 to-amber-600' :
                    'from-indigo-500 to-indigo-600'
                  } rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 group-hover:rotate-12 transition-transform duration-500 shadow-lg ${
                    step.color === 'pink' ? 'shadow-pink-500/25' :
                    step.color === 'amber' ? 'shadow-amber-500/25' :
                    'shadow-indigo-500/25'
                  }`}>
                    <span className={step.color === 'amber' ? 'text-black' : 'text-white'}>{step.number}</span>
                    <div className="absolute -top-2 -right-2 text-2xl">{step.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${
                      step.color === 'pink' ? 'from-pink-400 to-pink-300' :
                      step.color === 'amber' ? 'from-amber-400 to-amber-300' :
                      'from-indigo-400 to-indigo-300'
                    } bg-clip-text text-transparent`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              {/* Main phone mockup */}
              <div className="relative w-full h-96 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center neon-glow">
                <div className="text-9xl animate-pulse">📱</div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center floating-element shadow-lg shadow-amber-500/25">
                <span className="text-3xl">💰</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-500/60 to-purple-500/60 rounded-full flex items-center justify-center floating-element backdrop-blur-sm border border-white/20">
                <span className="text-4xl">🎬</span>
              </div>
              <div className="absolute top-1/2 -right-12 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center floating-element shadow-lg shadow-indigo-500/25">
                <span className="text-2xl">👀</span>
              </div>
              
              {/* Connecting lines */}
              <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-gradient-to-r from-pink-500/50 to-transparent rotating-line"></div>
              <div className="absolute bottom-1/4 right-1/4 w-12 h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent rotating-line" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>


      {/* benefits for promoters highlighted */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Get Hired as a Promoter in a Snap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our elite network of promoters and unlock unlimited earning potential while building your personal brand
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Eligibility Requirements */}
        <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-white/10 mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Eligibility Requirements</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {eligibilityRequirements.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-300 font-medium">{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>Apply as Promoter</span>
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-bold rounded-full hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Learn More</span>
              </span>
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Applications are reviewed within 24-48 hours. Join thousands of successful promoters today!
          </p>
        </div>
      </div>
    </section>

{/* Enhanced Supported Platforms Section */}
<section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900/5 to-gray-800 relative overflow-hidden">
  {/* Animated background network */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
    <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
    <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
    
    {/* Connecting lines */}
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
          <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
        </linearGradient>
      </defs>
      <path d="M200,150 Q400,100 600,200 T1000,250" stroke="url(#networkGradient)" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite"/>
      </path>
    </svg>
  </div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
        Promote Your Content
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Amplify your reach across all major social platforms. Upload, optimize, and promote your content with our integrated promotion tools.
      </p>
      
      {/* Floating stats */}
      <div className="flex justify-center items-center space-x-8 mt-8">
        <div className="flex items-center space-x-2 text-green-400">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">15+ Platforms</span>
        </div>
        <div className="w-px h-6 bg-gray-600"></div>
        <div className="flex items-center space-x-2 text-blue-400">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Real-time Analytics</span>
        </div>
        <div className="w-px h-6 bg-gray-600"></div>
        <div className="flex items-center space-x-2 text-purple-400">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Auto-optimization</span>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 relative">
      {platforms.map((platform, index) => (
        <div
          key={platform.name}
          className="group relative overflow-hidden rounded-3xl holographic-border platform-glow hover:scale-105 transition-all duration-500"
        >
          {/* Network connection lines */}
          <div className="network-lines"></div>
          
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-ping group-hover:animate-pulse"></div>
            <div className="absolute bottom-8 left-6 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative p-8 backdrop-blur-sm">
            <div className={`relative inline-flex items-center justify-center w-20 h-20 ${platform.bgColor} rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 orbit-animation`}>
              <div className={`${platform.textColor} text-2xl`}>
                {platform.icon}
              </div>
              
              {/* Orbit ring */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-3xl transition-all duration-500"></div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {platform.name}
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
              {platform.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-sm text-green-400 font-medium">Active Promotion</span>
              </div>
              
              <button className="group/btn relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-medium hover:from-purple-400 hover:to-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <span>Promote</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>

    {/* Enhanced bottom status bar */}
    <div className="mt-20 text-center">
      <div className="relative inline-flex items-center space-x-6 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-pink-900/30 backdrop-blur-lg rounded-full px-10 py-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative flex items-center space-x-3">
          <div className="relative">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-base font-medium text-white">
            Cross-platform promotion tools integrated
          </span>
        </div>
        
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        
        <div className="relative flex items-center space-x-2">
          <span className="text-gray-300">
            Upload anywhere, promote with us
          </span>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Floating icons */}
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
          🚀
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-32 gradient-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-40">
          <h2 className="text-6xl font-bold mb-8 animate-on-scroll">Ready to Get Started?</h2>
          <p className="text-2xl mb-12 text-white/80 animate-on-scroll">
            Join thousands of creators and viewers building the future of content promotion
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-on-scroll">
            <button className="px-12 py-4 bg-pink-500 rounded-full text-xl font-semibold hover:bg-pink-400 transition-all transform hover:scale-105">
              Create Account
            </button>
            <button className="px-12 py-4 bg-white/10 glass-effect rounded-full text-xl font-semibold hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '-4s'}}></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-2xl font-bold">mediabox</span>
              </div>
              <p className="text-gray-400">
                Connecting creators with audiences through authentic engagement and fair rewards.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">For Creators</button></li>
                <li><button className="hover:text-white transition-colors">For Viewers</button></li>
                <li><button className="hover:text-white transition-colors">Promoter Verification</button></li>
                <li><button className="hover:text-white transition-colors">Analytics</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Help Center</button></li>
                <li><button className="hover:text-white transition-colors">Payment Info</button></li>
                <li><button className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button className="hover:text-white transition-colors">API Docs</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><button className="hover:text-white transition-colors">Community Guidelines</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 mediabox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootCubeLandingPage;