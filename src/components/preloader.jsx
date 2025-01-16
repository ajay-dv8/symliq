"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Preloader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-b from-teal-500 via-white to-gray-50 z-50">
        <div className="animate-fadeInOut">
          <div className="animate-logoZoom">
            <Image
              src="/fullLogo.webp" // Replace with your logo path
              alt="Logo"
              width={380}
              height={120} 
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Preloader;
