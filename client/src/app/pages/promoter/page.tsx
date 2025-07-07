import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star, 
  Target, 
  Award,
  Zap,
  Globe,
  CheckCircle
} from 'lucide-react';

const PromoterBenefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Competitive Earnings",
      description: "Earn up to 40% commission on every successful referral with transparent payment tracking",
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-500/20 to-emerald-600/20"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Performance Bonuses",
      description: "Unlock tier-based bonuses and exclusive rewards as you reach promotion milestones",
      gradient: "from-blue-400 to-cyan-600",
      bgGradient: "from-blue-500/20 to-cyan-600/20"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Build Your Network",
      description: "Connect with thousands of creators and build lasting professional relationships",
      gradient: "from-purple-400 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-600/20"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Real-Time Analytics",
      description: "Track your performance with detailed analytics and conversion metrics",
      gradient: "from-yellow-400 to-orange-600",
      bgGradient: "from-yellow-500/20 to-orange-600/20"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Targeted Campaigns",
      description: "Access exclusive campaigns tailored to your audience and expertise",
      gradient: "from-red-400 to-rose-600",
      bgGradient: "from-red-500/20 to-rose-600/20"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Recognition Program",
      description: "Get featured as top promoter and gain platform-wide recognition",
      gradient: "from-indigo-400 to-blue-600",
      bgGradient: "from-indigo-500/20 to-blue-600/20"
    }
  ];

  const eligibilityRequirements = [
    "Active social media presence (1K+ followers)",
    "Demonstrated engagement with your audience", 
    "Content creation experience",
    "Professional communication skills",
    "Commitment to brand guidelines"
  ];

  return (
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
  );
};

export default PromoterBenefits;