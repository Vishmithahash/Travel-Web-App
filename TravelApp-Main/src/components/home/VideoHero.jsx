import React, { useEffect, useState, useRef } from 'react';
import SearchBar from '../common/SearchBar';

const ImageHero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 100);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/Dzzs5jF6/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" // Replace with your image URL
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div
        className={`relative h-full transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
          <div className="text-center mb-12 transform translate-y-0 transition-transform duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block transform hover:scale-105 transition-transform duration-300">
                Discover Your Next
              </span>
              <span className="block mt-2 text-blue-400 transform hover:scale-105 transition-transform duration-300">
                Adventure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Explore the world's most breathtaking destinations
            </p>
          </div>

          {/* Animated Search Bar */}
          <div className="w-full max-w-4xl animate-float">
            <SearchBar />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white p-1">
              <div className="w-1 h-3 bg-white rounded-full mx-auto animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;