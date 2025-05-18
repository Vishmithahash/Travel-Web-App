import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
const tips = [
  {
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    category: 'Travel Tips',
    date: 'June 15, 2023',
    title: '10 Essential Tips for Solo Travelers',
    excerpt:
      'Discover the best practices and safety tips for solo traveling around the world.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Destinations',
    date: 'June 12, 2023',
    title: 'Hidden Gems of Southeast Asia',
    excerpt:
      'Explore the lesser-known but equally beautiful destinations in Southeast Asia.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Culture',
    date: 'June 10, 2023',
    title: 'Understanding Local Customs',
    excerpt:
      'Learn about different cultural practices to enhance your travel experience.',
  },
]
const TravelTips = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Travel Tips & Blog
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get inspired with our latest travel stories and tips
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center text-blue-600 hover:text-blue-700"
          >
            View all articles
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-semibold text-blue-600">
                    {tip.category}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{tip.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4">{tip.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read more
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all articles
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default TravelTips
