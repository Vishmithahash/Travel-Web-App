import React, { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import DestinationCard from '../components/destinations/DestinationCard'
import { destinations } from '../utils/mockData'
const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterRating, setFilterRating] = useState('')
  const [sortOption, setSortOption] = useState('recommended')
  // Filter and sort destinations
  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterRating ? destination.rating >= parseFloat(filterRating) : true),
  )
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.priceFrom - b.priceFrom
      case 'price-high':
        return b.priceFrom - a.priceFrom
      case 'rating':
        return b.rating - a.rating
      default:
        // 'recommended' sorting - no change
        return 0
    }
  })
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Explore Destinations
          </h1>
          <p className="mt-2 text-lg text-blue-100 text-center max-w-3xl mx-auto">
            Discover amazing places around the world and plan your next
            adventure
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
              placeholder="Search destinations"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Rating
              </label>
              <select
                id="rating"
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
              >
                <option value="">All Ratings</option>
                <option value="4.5">4.5 & Above</option>
                <option value="4">4.0 & Above</option>
                <option value="3.5">3.5 & Above</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="sort"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sort By
              </label>
              <select
                id="sort"
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedDestinations.length > 0 ? (
            sortedDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No destinations found matching your criteria. Try adjusting your
                filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default DestinationsPage
