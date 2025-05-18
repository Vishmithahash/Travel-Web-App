import React from 'react'
import { Link } from 'react-router-dom'
import { StarIcon, HeartIcon } from 'lucide-react'
import { useWishlist } from '../../contexts/WishlistContext'
const DestinationCard = ({ destination }) => {
  const { isInWishlist, toggleWishlist } = useWishlist()
  const isWishlisted = isInWishlist(destination.id)
  const handleWishlistClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(destination)
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Link to={`/destinations/${destination.id}`}>
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition"
        >
          <HeartIcon
            className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`}
          />
        </button>
        {destination.popular && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
            Popular
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {destination.name}
          </h3>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm text-gray-700">
              {destination.rating}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-3">{destination.location}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-900">
            From{' '}
            <span className="text-blue-600 font-bold">
              ${destination.priceFrom}
            </span>
          </p>
          <span className="text-sm text-gray-500">{destination.duration}</span>
        </div>
      </div>
    </div>
  )
}
export default DestinationCard
