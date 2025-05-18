import React, { useState } from 'react'
import { SearchIcon, CalendarIcon, MapPinIcon } from 'lucide-react'
import { packages } from '../utils/mockData'
const PackagesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedType ? pkg.type === selectedType : true),
  )
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Travel Packages
          </h1>
          <p className="mt-2 text-lg text-blue-100 text-center max-w-3xl mx-auto">
            Choose from our carefully curated travel packages for the perfect
            vacation
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
              placeholder="Search packages"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Package Type
            </label>
            <select
              id="type"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Adventure">Adventure</option>
              <option value="Luxury">Luxury</option>
              <option value="Romance">Romance</option>
              <option value="Cultural">Cultural</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-48 w-full md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {pkg.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-2">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="space-y-2 mb-4">
                    {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                        <span className="text-sm">{inclusion}</span>
                      </div>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <div className="text-sm text-blue-600">
                        +{pkg.inclusions.length - 3} more inclusions
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Starting from</p>
                      <p className="text-2xl font-bold text-blue-600">
                        ${pkg.price}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default PackagesPage
