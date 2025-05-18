import React from 'react'
import PromotionCard from './PromotionCard'
import { promotions } from '../../utils/mockData'
const PromotionsSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Special Deals & Promotions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Take advantage of our limited-time offers and exclusive deals on top
            destinations
          </p>
        </div>
        <div className="space-y-6">
          {promotions.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default PromotionsSection
