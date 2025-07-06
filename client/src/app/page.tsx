 "use client"
 import React, { useEffect, useState } from 'react';
import { Youtube, Instagram, Music, ExternalLink } from 'lucide-react';

const RootCubeLandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <span className="text-indigo-600 font-bold text-xl">R</span>
        </div>
        <span className="text-2xl font-bold text-white">RootCubeMedia</span>
      </div>
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
      <div className="flex space-x-4">
        <button className="px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all text-white">
          Login
        </button>
        <button className="px-6 py-2 bg-amber-500 rounded-full hover:bg-amber-400 transition-all font-semibold text-black">
          Get Started
        </button>
      </div>
    </div>
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
      
      {/* Stats or Features Preview */}
      <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-400 mb-2">10K+</div>
          <div className="text-white/80 text-sm font-medium">Active Creators</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-400 mb-2">1M+</div>
          <div className="text-white/80 text-sm font-medium">Video Views</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-400 mb-2">$50K+</div>
          <div className="text-white/80 text-sm font-medium">Rewards Distributed</div>
        </div>
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


      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20 text-gradient animate-on-scroll">
            Platform Impact
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 animate-on-scroll">
              <div className="text-5xl font-bold text-pink-400 mb-4">10K+</div>
              <div className="text-xl text-gray-300">Active Creators</div>
            </div>
            <div className="p-8 animate-on-scroll">
              <div className="text-5xl font-bold text-amber-400 mb-4">50K+</div>
              <div className="text-xl text-gray-300">Video Views Daily</div>
            </div>
            <div className="p-8 animate-on-scroll">
              <div className="text-5xl font-bold text-indigo-400 mb-4">25K+</div>
              <div className="text-xl text-gray-300">Earning Viewers</div>
            </div>
            <div className="p-8 animate-on-scroll">
              <div className="text-5xl font-bold text-white mb-4">500+</div>
              <div className="text-xl text-gray-300">Verified Promoters</div>
            </div>
          </div>
        </div>
      </section>

      {/* supported platforms */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className=".">
            Promote Your Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Amplify your reach across all major social platforms. Upload, optimize, and promote your content with our integrated promotion tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${platform.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={platform.textColor}>
                    {platform.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {platform.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Active Promotion</span>
                  </div>
                  
                  <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-300">
                    <span>Promote</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Cross-platform promotion tools integrated
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <span className="text-sm text-gray-500">
              Upload once, promote everywhere
            </span>
          </div>
        </div>
      </div>
    </section>

      Tech Stack
      <section id="tech-stack" className="py-32 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-gradient animate-on-scroll">
            Built with Modern Tech
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-hover p-8 bg-white/5 rounded-3xl glass-effect border border-white/10 text-center animate-on-scroll">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-xl font-bold mb-3">Next.js Frontend</h3>
              <p className="text-gray-400">TypeScript/TSX for robust, scalable user interfaces</p>
            </div>
            <div className="card-hover p-8 bg-white/5 rounded-3xl glass-effect border border-white/10 text-center animate-on-scroll">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-3">Node.js API</h3>
              <p className="text-gray-400">Express backend for fast, reliable performance</p>
            </div>
            <div className="card-hover p-8 bg-white/5 rounded-3xl glass-effect border border-white/10 text-center animate-on-scroll">
              <div className="text-5xl mb-6">🗄️</div>
              <h3 className="text-xl font-bold mb-3">MySQL Database</h3>
              <p className="text-gray-400">Relational database for secure data management</p>
            </div>
            <div className="card-hover p-8 bg-white/5 rounded-3xl glass-effect border border-white/10 text-center animate-on-scroll">
              <div className="text-5xl mb-6">🐳</div>
              <h3 className="text-xl font-bold mb-3">Docker Deploy</h3>
              <p className="text-gray-400">Containerized services for seamless scaling</p>
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
                <span className="text-2xl font-bold">RootCubeMedia</span>
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
            <p>&copy; 2025 RootCubeMedia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootCubeLandingPage;