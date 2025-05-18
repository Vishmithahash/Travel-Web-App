import React, { useState, memo } from 'react'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    content:
      'TravelEase made planning my dream vacation effortless. Their attention to detail and personalized service exceeded my expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Traveler',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content:
      "The best travel experience I've had. The team went above and beyond to ensure everything was perfect for my business trip.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Family Traveler',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
    content:
      'Traveling with kids was a breeze thanks to TravelEase. They thought of everything, making our family vacation truly memorable.',
    rating: 5,
  },
]
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }
  const previousTestimonial = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    )
  }
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Travelers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Read about experiences from our satisfied travelers
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-3xl mx-auto">
                    <div className="text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                      />
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="h-5 w-5 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-900 mb-4">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={previousTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials
