import React from 'react'
import VideoHero from '../components/home/VideoHero'
import DestinationMap from '../components/home/DestinationMap'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PopularCategories from '../components/home/PopularCategories'
import FeaturedDestinations from '../components/home/FeaturedDestinations'
import CountdownDeals from '../components/home/CountdownDeals'
import PromotionsSection from '../components/home/PromotionsSection'
import Testimonials from '../components/home/Testimonials'
import TravelTips from '../components/home/TravelTips'
import TravelQuiz from '../components/home/TravelQuiz'
import Newsletter from '../components/home/Newsletter'
const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <VideoHero />
      <WhyChooseUs />
      <PopularCategories />
      <DestinationMap />
      <FeaturedDestinations />
      <CountdownDeals />
      <PromotionsSection />
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Find Your Dream Vacation
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Take our quick quiz to discover your perfect destination
            </p>
          </div>
          <TravelQuiz />
        </div>
      </div>
      <Testimonials />
      <TravelTips />
      <Newsletter />
    </div>
  )
}
export default HomePage
