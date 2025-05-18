import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from 'lucide-react'
const PromotionCard = ({ promotion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={promotion.image}
            alt={promotion.title}
            className="h-48 md:h-full w-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center mb-2">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
              {promotion.discount}
            </span>
            {promotion.limitedTime && (
              <span className="inline-block ml-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                Limited Time
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {promotion.title}
          </h3>
          <p className="text-gray-600 mb-4">{promotion.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">From</p>
              <div className="flex items-center">
                {promotion.originalPrice && (
                  <span className="text-gray-500 line-through mr-2">
                    ${promotion.originalPrice}
                  </span>
                )}
                <span className="text-blue-600 text-2xl font-bold">
                  ${promotion.price}
                </span>
              </div>
            </div>
            <Link
              to={`/destinations/${promotion.destinationId}`}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              View Deal <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PromotionCard
