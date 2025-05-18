import React, { Children } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  StarIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  HeartIcon,
  ShareIcon,
  CheckIcon,
} from 'lucide-react'
import { destinations, accommodations } from '../utils/mockData'
import { useWishlist } from '../contexts/WishlistContext'
const DestinationDetailPage = () => {
  const { id } = useParams()
  const { isInWishlist, toggleWishlist } = useWishlist()
  // Find the destination by ID
  const destination = destinations.find((d) => d.id === id)
  // If destination doesn't exist, show error
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Destination Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The destination you're looking for doesn't exist or has been
            removed.
          </p>
          <Link to="/destinations" className="text-blue-600 hover:underline">
            Browse all destinations
          </Link>
        </div>
      </div>
    )
  }
  // Find accommodations for this destination
  const destinationAccommodations = accommodations
    .filter((acc) => acc.destinationId === destination.id)
    .slice(0, 3) // Show only 3 accommodations
  const isWishlisted = isInWishlist(destination.id)
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-1" />
              <span>{destination.location}</span>
            </div>
            <div className="flex justify-between items-end mt-2">
              <h1 className="text-4xl font-bold">{destination.name}</h1>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleWishlist(destination)}
                  className="flex items-center space-x-1 bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full transition"
                >
                  <HeartIcon
                    className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-current' : ''}`}
                  />
                  <span>{isWishlisted ? 'Saved' : 'Save'}</span>
                </button>
                <button className="flex items-center space-x-1 bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full transition">
                  <ShareIcon className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1">{destination.rating}</span>
              <span className="mx-2">•</span>
              <span>{destination.reviewCount} reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About {destination.name}
              </h2>
              <p className="text-gray-600 mb-6">{destination.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center px-3 py-2 bg-blue-50 rounded-lg">
                  <ClockIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-800">{destination.duration}</span>
                </div>
                <div className="flex items-center px-3 py-2 bg-blue-50 rounded-lg">
                  <UsersIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-800">All ages</span>
                </div>
                <div className="flex items-center px-3 py-2 bg-blue-50 rounded-lg">
                  <CalendarIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-800">
                    {destination.bestSeason}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Highlights
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Accommodations in {destination.name}
              </h2>
              <div className="space-y-6">
                {destinationAccommodations.map((accommodation) => (
                  <div
                    key={accommodation.id}
                    className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <img
                          src={accommodation.image}
                          alt={accommodation.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3 md:pl-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {accommodation.name}
                          </h3>
                          <div className="flex items-center">
                            <StarIcon className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="ml-1 text-gray-700">
                              {accommodation.rating}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">
                          {accommodation.location}
                        </p>
                        <p className="text-gray-700 mb-4">
                          {accommodation.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-gray-600 text-sm">From</span>
                            <p className="text-blue-600 font-bold text-lg">
                              ${accommodation.pricePerNight}{' '}
                              <span className="text-gray-500 font-normal text-sm">
                                / night
                              </span>
                            </p>
                          </div>
                          <Link
                            to={`/accommodations/${accommodation.id}`}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/accommodations"
                  className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
                >
                  View All Accommodations
                </Link>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Book Your Trip
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Dates
                </label>
                <input
                  type="date"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Travelers
                </label>
                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
              <div className="border-t border-b border-gray-200 py-4 my-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Base Price</span>
                  <span className="text-gray-900">
                    ${destination.priceFrom}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="text-gray-900">
                    ${Math.round(destination.priceFrom * 0.15)}
                  </span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-800">Total</span>
                  <span className="text-blue-600">
                    ${Math.round(destination.priceFrom * 1.15)}
                  </span>
                </div>
              </div>
              <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium">
                Book Now
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                No payment required today
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Weather
              </h3>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-600">Current</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {destination.weather.current}°C
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Conditions</p>
                  <p className="text-gray-900">
                    {destination.weather.conditions}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Forecast
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {destination.weather.forecast.map((day, index) => (
                    <div key={index} className="text-center">
                      <p className="text-xs text-gray-500">{day.day}</p>
                      <p className="text-lg font-medium text-gray-900">
                        {day.temp}°C
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DestinationDetailPage
