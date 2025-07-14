"use client"
import React from 'react';
import AuthComponent from '../../../components/auth';

const Login = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
      </div>  
      <AuthComponent/>      
    </section>
  );
};

export default Login;