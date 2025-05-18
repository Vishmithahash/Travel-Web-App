import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Discover Your Perfect Getaway
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Explore the world's most beautiful destinations and create memories that last a lifetime
        </p>
        <div className="flex justify-center">
          <p>Search bar goes here</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;