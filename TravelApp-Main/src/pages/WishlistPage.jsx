import React from 'react'
import { HeartIcon, TrashIcon } from 'lucide-react'
import { useWishlist } from '../contexts/WishlistContext'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
const WishlistPage = () => {
  const { wishlist, clearWishlist, toggleWishlist } = useWishlist()
  const { currentUser } = useAuth()
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <HeartIcon className="h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Sign in to view your wishlist
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Create an account or sign in to save your favorite destinations
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
          >
            Create Account
          </Link>
        </div>
      </div>
    )
  }
  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <HeartIcon className="h-16 w-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your wishlist is empty
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Start exploring destinations and save your favorites
        </p>
        <Link
          to="/destinations"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Explore Destinations
        </Link>
      </div>
    )
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Wishlist</h1>
            <p className="mt-2 text-gray-600">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-800"
            >
              <TrashIcon className="h-4 w-4 mr-1" />
              Clear Wishlist
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition"
                >
                  <HeartIcon className="h-5 w-5 text-red-500 fill-current" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.location}</p>
                <Link
                  to={`/destinations/${item.id}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default WishlistPage
