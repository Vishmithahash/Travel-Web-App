import React from 'react'
import { Globe2Icon, UserCheckIcon, AwardIcon, HeartIcon } from 'lucide-react'
const stats = [
  {
    icon: Globe2Icon,
    number: '100+',
    label: 'Destinations',
    description: 'Explore destinations worldwide',
  },
  {
    
    icon: UserCheckIcon,
    number: '50,000+',
    label: 'Happy Travelers',
    description: 'Satisfied customers and counting',
  },
  {
    icon: AwardIcon,
    number: '15+',
    label: 'Years Experience',
    description: 'Industry expertise',
  },
  {
    icon: HeartIcon,
    number: '98%',
    label: 'Satisfaction Rate',
    description: 'From our valued customers',
  },
]
const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose TravelEase
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover why thousands of travelers trust us for their journeys
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-blue-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="text-center pt-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default WhyChooseUs
