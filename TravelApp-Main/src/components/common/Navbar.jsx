import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { MenuIcon, XIcon, UserIcon, HeartIcon, LogOutIcon } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">
                TravelEase
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link
              to="/destinations"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Destinations
            </Link>
            <Link
              to="/accommodations"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Accommodations
            </Link>
            <Link
              to="/packages"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Packages
            </Link>
            <Link
              to="/reviews"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Reviews
            </Link>
            <Link
              to="/faq"
              className="text-gray-600 transition hover:text-blue-600"
            >
              FAQs
            </Link>
            
            {currentUser ? (
              <div className="flex items-center space-x-6">
                <Link
                  to="/wishlist"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <HeartIcon className="w-5 h-5 mr-1" />
                  <span>Wishlist</span>
                </Link>
                
                <div className="relative">
                  <button 
                    onClick={toggleProfileDropdown}
                    className="flex items-center px-3 py-2 text-gray-600 rounded-md hover:text-blue-600 hover:bg-gray-100"
                  >
                    <UserIcon className="w-5 h-5 mr-2" />
                    <span>Profile</span>
                  </button>
                  
                  {profileDropdownOpen && (
                    <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
                      <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b">
                        {currentUser.email}
                      </div>
                      <Link 
                        to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        My Profile
                      </Link>
                      <Link 
                        to="/bookings" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        My Bookings
                      </Link>
                      <button
                        onClick={logout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOutIcon className="w-4 h-4 mr-2" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="block w-6 h-6" />
              ) : (
                <MenuIcon className="block w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/destinations"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              to="/accommodations"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Accommodations
            </Link>
            <Link
              to="/packages"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Packages
            </Link>
            <Link
              to="/reviews"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              FAQs
            </Link>
            
            {currentUser ? (
              <>
                <Link
                  to="/wishlist"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <HeartIcon className="w-5 h-5 mr-2" />
                  My Wishlist
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <UserIcon className="w-5 h-5 mr-2" />
                  My Profile
                </Link>
                <Link
                  to="/bookings"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  My Bookings
                </Link>
                <button
                  onClick={() => {
                    logout()
                    toggleMenu()
                  }}
                  className="flex items-center w-full px-3 py-2 text-base font-medium text-left text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  <LogOutIcon className="w-5 h-5 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar