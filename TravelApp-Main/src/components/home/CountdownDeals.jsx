import React, { useEffect, useState } from 'react'
import { ClockIcon, TagIcon } from 'lucide-react'
const calculateTimeLeft = (endDate) => {
  const difference = +new Date(endDate) - +new Date()
  let timeLeft = {}
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}
const CountdownDeals = () => {
  const [deals] = useState([
    {
      id: 1,
      destination: 'Bali Paradise',
      discount: '30% OFF',
      endDate: '2024-01-01',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      originalPrice: 1299,
      discountedPrice: 909,
    },
    {
      id: 2,
      destination: 'Santorini Escape',
      discount: '25% OFF',
      endDate: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      originalPrice: 1899,
      discountedPrice: 1424,
    },
  ])
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deals[0].endDate))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deals[0].endDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [deals])
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Flash Deals</h2>
          <p className="mt-4 text-lg text-gray-300">
            Limited time offers on premium destinations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.destination}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                  {deal.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {deal.destination}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <TagIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-500 line-through mr-2">
                      ${deal.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${deal.discountedPrice}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <ClockIcon className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-gray-600">Offer ends in:</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.keys(timeLeft).map((interval) => (
                      <div
                        key={interval}
                        className="text-center bg-blue-600 rounded-lg p-2 text-white"
                      >
                        <div className="text-2xl font-bold">
                          {timeLeft[interval]}
                        </div>
                        <div className="text-xs uppercase">{interval}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CountdownDeals
