import React, { useState, Children } from 'react'
import { SearchIcon, CalendarIcon, UsersIcon } from 'lucide-react'
const SearchBar = () => {
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [travelers, setTravelers] = useState('1 Adult')
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false)
  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, this would trigger a search with the parameters
    console.log('Search for:', {
      destination,
      dates,
      travelers,
    })
  }
  const travelerOptions = [
    '1 Adult',
    '2 Adults',
    '2 Adults, 1 Child',
    '2 Adults, 2 Children',
    '3 Adults',
    '4 Adults',
  ]
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Where to?
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="destination"
                name="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Search destinations"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="dates"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Dates
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="dates"
                name="dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="Add dates"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text'
                }}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="travelers"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Travelers
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UsersIcon className="h-5 w-5 text-gray-400" />
              </div>
              <button
                type="button"
                className="block w-full text-left pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}
              >
                {travelers}
              </button>
              {showTravelersDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1">
                  {travelerOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setTravelers(option)
                        setShowTravelersDropdown(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
export default SearchBar
