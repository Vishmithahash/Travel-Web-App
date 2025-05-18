import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { StarIcon } from 'lucide-react'
import { destinations } from '../../utils/mockData'
const FeaturedDestinations = () => {
  // Only show the first 6 destinations on the home page
  const featuredDestinations = destinations.slice(0, 6)
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Destinations
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most sought-after destinations, each offering unique
            experiences and unforgettable memories.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <Link
              to={`/destinations/${destination.id}`}
              key={destination.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {destination.name}
                    </h3>
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="ml-1 text-gray-700">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-4">{destination.location}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-900 font-medium">
                      From{' '}
                      <span className="text-blue-600 font-bold">
                        ${destination.priceFrom}
                      </span>
                    </p>
                    <span className="text-sm text-gray-500">
                      {destination.duration}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/destinations"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FeaturedDestinations
