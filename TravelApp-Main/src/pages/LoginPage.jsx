
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, PlaneIcon, MapIcon, CloudIcon, SunIcon } from 'lucide-react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const { login } = useAuth()
  const navigate = useNavigate()

  // Enhanced high-quality travel background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070', // Mountain lake panorama
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070', // Breathtaking mountain view
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070', // Tropical beach sunset
    'https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2070', // Santorini blue dome view
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070', // Forest landscape
  ]

  // Background image rotation effect - keeping original timing
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 8000) // Change image every 8 seconds

    return () => clearInterval(intervalId)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    try {
      setError('')
      setLoading(true)
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError('Failed to log in. Please check your credentials.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Animation components - keeping all original animations
  const FlyingPlane = () => {
    return (
      <div className="absolute top-12 right-full animate-fly-across">
        <PlaneIcon className="w-12 h-12 text-white transform rotate-12" />
      </div>
    )
  }

  const FloatingClouds = () => {
    return (
      <>
        <div className="absolute top-20 left-24 animate-float-slow">
          <CloudIcon className="w-16 h-16 text-white opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-float-medium">
          <CloudIcon className="w-10 h-10 text-white opacity-40" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float-fast">
          <CloudIcon className="w-8 h-8 text-white opacity-30" />
        </div>
      </>
    )
  }

  const ShiningEffect = () => {
    return (
      <div className="absolute top-10 right-10 animate-pulse-slow">
        <SunIcon className="text-yellow-200 h-14 w-14 opacity-80" />
      </div>
    )
  }

  return (
    <div 
      className="relative flex items-center justify-center min-h-screen overflow-hidden transition-all duration-1000 ease-in-out bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Enhanced overlay with better gradient and light blur for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 backdrop-blur-sm"></div>
      
      {/* Animations - kept exactly as original */}
      <FlyingPlane />
      <FloatingClouds />
      <ShiningEffect />
      
      {/* Modern landscape-oriented layout */}
      <div className="container relative z-10 w-full max-w-6xl px-4 mx-auto">
        <div className="flex flex-col overflow-hidden shadow-2xl md:flex-row md:items-center md:h-auto rounded-xl">
          {/* Enhanced left visual section - brand info */}
          <div className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 md:w-1/2 md:py-16 md:px-12 md:items-start">
            <div className="absolute inset-0 bg-blue-900/20 backdrop-filter backdrop-blur-sm"></div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-center md:justify-start">
                <MapIcon className="w-12 h-12 mr-3 text-white" />
                <h1 className="text-5xl font-bold">TravelEase</h1>
              </div>
              <h2 className="mt-2 text-2xl font-semibold">Explore the world with ease</h2>
              <p className="max-w-md text-lg">
                Log in to access your travel plans, find new destinations, and continue your journey of discovery.
              </p>
              
              {/* Image slider indicators - enhanced with better visual feedback */}
              <div className="flex pt-6 space-x-3">
                {backgroundImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentBgIndex(idx)}
                    className={`h-3 w-10 rounded-full transition-all duration-300 ${currentBgIndex === idx ? 'bg-white scale-105' : 'bg-white/40 hover:bg-white/60'}`}
                    aria-label={`View destination ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="hidden mt-8 md:block">
                <p className="text-sm opacity-90">
                  "The world is a book and those who do not travel read only one page."
                </p>
                <p className="mt-1 text-sm font-semibold">— Saint Augustine</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced right section - login form with improved visuals */}
          <div className="px-6 py-10 bg-white md:w-1/2 md:py-12 md:px-16">
            <div className="max-w-md mx-auto">
              <h3 className="mb-6 text-2xl font-bold text-gray-800">Welcome back</h3>
              
              {error && (
                <div className="p-4 mb-6 border-l-4 border-red-500 rounded bg-red-50">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MailIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full py-3 pl-10 pr-3 placeholder-gray-400 transition-colors duration-200 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <LockIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full py-3 pl-10 pr-10 placeholder-gray-400 transition-colors duration-200 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-gray-700"
                  >
                    Remember me for 30 days
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 transform bg-blue-600 border border-transparent rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 hover:-translate-y-px"
                  >
                    {loading ? 'Signing in...' : 'Sign in to account'}
                  </button>
                </div>
              </form>
              
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 bg-white">
                      Or continue with
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
                    Google
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-500"
                  >
                    Create a free account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations - kept exactly as original */}
      <style jsx>{`
        @keyframes flyAcross {
          0% {
            transform: translateX(0) translateY(0) rotate(12deg);
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(12deg);
          }
        }
        
        .animate-fly-across {
          animation: flyAcross 15s linear infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float-medium {
          animation: float-medium 10s ease-in-out infinite;
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-fast {
          animation: float-fast 8s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default LoginPage