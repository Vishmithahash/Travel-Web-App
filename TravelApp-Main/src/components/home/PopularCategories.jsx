import React from 'react'
import {
  UmbrellaIcon,
  TreePineIcon,
  BuildingIcon,
  MountainIcon,
  ShipIcon,
  HeartIcon,
} from 'lucide-react'
const categories = [
  {
    icon: UmbrellaIcon,
    name: 'Beach Holidays',
    count: 45,
    color: 'bg-blue-500',
  },
  {
    icon: TreePineIcon,
    name: 'Adventure Tours',
    count: 32,
    color: 'bg-green-500',
  },
  {
    icon: BuildingIcon,
    name: 'City Breaks',
    count: 28,
    color: 'bg-purple-500',
  },
  {
    icon: MountainIcon,
    name: 'Mountain Trips',
    count: 24,
    color: 'bg-orange-500',
  },
  {
    icon: ShipIcon,
    name: 'Cruises',
    count: 18,
    color: 'bg-teal-500',
  },
  {
    icon: HeartIcon,
    name: 'Honeymoon',
    count: 21,
    color: 'bg-pink-500',
  },
]
const PopularCategories = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse our most popular travel categories
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`inline-flex p-3 rounded-full ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.count} destinations
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default PopularCategories
