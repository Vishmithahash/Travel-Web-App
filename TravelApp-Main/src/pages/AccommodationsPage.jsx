import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, StarIcon } from 'lucide-react';
import { accommodations } from '../utils/mockData';

const AccommodationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const navigate = useNavigate();

  const filteredAccommodations = accommodations.filter(
    (accommodation) =>
      accommodation.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (priceRange ? accommodation.pricePerNight <= parseInt(priceRange) : true)
  );

  // Navigate to booking page with accommodation id in state or query
  const handleBookNow = (accommodationId) => {
    // Option 1: Pass accommodation id as state (recommended)
    navigate('/booking', { state: { accommodationId } });

    // Option 2: Or pass as URL param or query string (alternative)
    // navigate(`/booking?accommodationId=${accommodationId}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Find Your Perfect Stay
          </h1>
          <p className="mt-2 text-lg text-blue-100 text-center max-w-3xl mx-auto">
            Discover comfortable and luxurious accommodations at the best prices
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="relative mb-4 md:mb-0 md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search accommodations"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Max Price per Night
            </label>
            <select
              id="price"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Any Price</option>
              <option value="200">Under $200</option>
              <option value="300">Under $300</option>
              <option value="500">Under $500</option>
              <option value="1000">Under $1000</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccommodations.map((accommodation) => (
            <div
              key={accommodation.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {accommodation.name}
                  </h3>
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="ml-1 text-gray-700">
                      {accommodation.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 mb-4">{accommodation.location}</p>
                <p className="text-gray-600 mb-4">{accommodation.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {accommodation.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-600 text-sm">Per night</span>
                    <p className="text-blue-600 text-xl font-bold">
                      ${accommodation.pricePerNight}
                    </p>
                  </div>
                  <button
                    onClick={() => handleBookNow(accommodation.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationsPage;
