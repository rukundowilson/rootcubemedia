"use client";
import React from "react";
import { Hand } from "lucide-react"; // Optional: or use an image/icon

const MikonojuuLogo = () => {
  return (
    <div className="flex items-center space-x-1 text-white text-4xl font-bold">
      <span>Mik</span>

      {/* Hand inside circular "o" */}
      <span className="w-10 h-10 rounded-full bg-[#ff5f56] flex items-center justify-center">
        <Hand className="w-5 h-5 text-white" />
      </span>

      <span>nojuu</span>
    </div>
  );
};

export default MikonojuuLogo;
