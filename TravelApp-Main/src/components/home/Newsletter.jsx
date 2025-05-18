import React, { useState } from 'react'
import { MailIcon, CheckIcon } from 'lucide-react'
const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      // In a real app, you would handle the subscription here
    }
  }
  return (
    <div className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-50"></div>
          <div className="relative text-center">
            <MailIcon className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest travel deals, destination guides, and
              exclusive offers
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center text-white space-x-2">
                <CheckIcon className="h-6 w-6" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-900 text-white rounded-r-md hover:bg-blue-800 transition duration-300"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-blue-100 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
