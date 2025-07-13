"use client"
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star, 
  Target, 
  Award,
  Zap,
  Globe,
  CheckCircle,
  Facebook,
  Github,
  ArrowLeft
} from 'lucide-react';

const PromoterBenefits = () => {
  const [user, setUser] = useState<any>(null);

  const eligibilityRequirements = [
    "I'm a viewer, need to earn simple money",
    "I'm a promoter, and l wanna get hired", 
    "I'm an artist l need to promote my content",
  ];

  const handleFacebookLogin = () => {
    // Replace this with your real logic
    console.log("Facebook login triggered");
  };

  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* path ways */}
        <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12  mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">pathways</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {eligibilityRequirements.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-300 font-medium text-left">{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Login Section */}
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Start Your Application</h3>
            
            {!user ? (
              <div className="space-y-4">
                {/* Google Login */}
                <div className="flex justify-center">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      if (credentialResponse.credential) {
                        const decoded: any = jwtDecode(credentialResponse.credential);
                        setUser(decoded);
                        console.log('User Info:', decoded);
                      }
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    size="large"
                    theme="filled_black"
                    shape="pill"
                    width="280"
                  />
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-600"></div>
                  <span className="px-4 text-gray-400 text-sm">or</span>
                  <div className="flex-grow border-t border-gray-600"></div>
                </div>

                {/* Facebook Button */}
                <button 
                  onClick={handleFacebookLogin}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Continue with Facebook</span>
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src={user.picture} 
                    alt={user.name} 
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-400"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">Welcome, {user.name}!</h3>
                  <p className="text-gray-300">{user.email}</p>
                </div>
                
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Successfully logged in!</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    Your application will be reviewed within 24-48 hours.
                  </p>
                </div>

                <button 
                  onClick={() => setUser(null)}
                  className="text-purple-400 hover:text-purple-300 text-sm underline"
                >
                  Use different account
                </button>
              </div>
            )}
          </div>

          {/* Cancel Button */}
          <button 
            onClick={handleCancel}
            className="w-full px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-bold rounded-full hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300 mb-6"
          >
            <span className="flex items-center justify-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Cancel Application</span>
            </span>
          </button>

          {/* Footer Text */}
          <p className="text-sm text-gray-400 text-center">
            Join thousands of successful promoters today! rootCubeMedia
          </p>
          <a href='#' className='text-blue-500 text-sm underline'>terms and policies</a>
        </div>
      </div>
    </section>
  );
};

export default PromoterBenefits;