import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  UserIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  MapIcon,
  PlaneIcon,
  Trees,
  Mountain,
  Cloud,
  Sun,
} from 'lucide-react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const { signup } = useAuth();
  const navigate = useNavigate();

  // Animate background elements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    try {
      setError('');
      setLoading(true);
      await signup(email, password, name);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Dynamic animated elements for the landscape
  const AnimatedPlane = () => (
    <div
      className="absolute z-10 transition-all duration-1000 ease-in-out"
      style={{
        top: '15%',
        right: animationStep === 0 ? '10%' : animationStep === 1 ? '40%' : '70%',
        transform: 'rotate(-15deg)',
      }}
    >
      <PlaneIcon className="w-16 h-16 text-white drop-shadow-lg" />
    </div>
  );

  const AnimatedClouds = () => (
    <>
      <div
        className="absolute top-1/4 left-10 z-10 opacity-80 transition-all duration-[8000ms] ease-in-out"
        style={{ transform: `translateX(${animationStep * 20}px)` }}
      >
        <Cloud className="w-24 h-12 text-white" />
      </div>
      <div
        className="absolute top-1/3 right-20 z-10 opacity-90 transition-all duration-[12000ms] ease-in-out"
        style={{ transform: `translateX(${-animationStep * 15}px)` }}
      >
        <Cloud className="w-16 h-10 text-white" />
      </div>
      <div
        className="absolute bottom-2/3 left-1/4 z-10 opacity-70 transition-all duration-[10000ms] ease-in-out"
        style={{ transform: `translateX(${animationStep * 10}px)` }}
      >
        <Cloud className="w-20 h-8 text-white" />
      </div>
    </>
  );

  return (
    <div className="relative flex flex-col justify-center min-h-screen py-12 overflow-hidden bg-center bg-cover"
         style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
           backgroundAttachment: "fixed"
         }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-40" />
      
      {/* Sun element */}
      <div className="absolute z-10 top-16 right-16">
        <Sun className="w-16 h-16 text-yellow-300 animate-pulse" />
      </div>
      
      {/* Animated elements */}
      <AnimatedPlane />
      <AnimatedClouds />

      {/* Landscape Elements */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-44 bg-gradient-to-t from-emerald-800 to-transparent" />
      <div className="absolute z-10 transform scale-125 bottom-16 left-10">
        <Trees className="w-24 h-24 text-emerald-700" />
      </div>
      <div className="absolute z-10 transform scale-110 bottom-20 right-16">
        <Trees className="w-20 h-20 text-emerald-800" />
      </div>
      <div className="absolute z-10 transform scale-150 bottom-36 left-1/3">
        <Mountain className="w-32 h-32 text-emerald-900" />
      </div>
      <div className="absolute z-10 transform -translate-x-1/2 bottom-24 left-2/3">
        <MapIcon className="w-12 h-12 text-amber-500" />
      </div>

      {/* Logo & Title */}
      <div className="relative z-20 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white rounded-full shadow-lg bg-opacity-90">
          <PlaneIcon className="w-12 h-12 text-blue-600 transform rotate-45" />
        </div>
        <h2 className="mt-6 text-4xl font-extrabold text-center text-white drop-shadow-md">
          Join TravelEase
        </h2>
        <p className="mt-2 text-lg text-center text-white drop-shadow-md">
          Start planning your dream vacation today
        </p>
      </div>

      {/* Sign Up Form */}
      <div className="relative z-20 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white border border-white shadow-xl backdrop-blur-md bg-opacity-90 sm:rounded-xl sm:px-10 border-opacity-30">
          {error && (
            <div className="p-4 mb-4 border-l-4 border-red-500 rounded bg-red-50">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <UserIcon className="w-5 h-5 text-blue-500" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full py-2 pl-10 pr-3 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MailIcon className="w-5 h-5 text-blue-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full py-2 pl-10 pr-3 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <LockIcon className="w-5 h-5 text-blue-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full py-2 pl-10 pr-10 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 transition-colors duration-300 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 6 characters
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <LockIcon className="w-5 h-5 text-blue-500" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="block w-full py-2 pl-10 pr-3 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="w-4 h-4 text-blue-600 transition-colors duration-300 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="block ml-2 text-sm text-gray-900">
                I agree to the{' '}
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white transition-all duration-300 transform bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 hover:scale-105"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating account...
                  </span>
                ) : (
                  'Start Your Journey'
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">Or continue with</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div>
                <a
                  href="#"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >
                  <span className="sr-only">Sign up with Google</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >
                  <span className="sr-only">Sign up with Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute z-20 hidden transform lg:block bottom-16 left-16 rotate-12">
        <div className="p-2 bg-white rounded shadow-lg bg-opacity-90">
          <div className="flex items-center justify-center w-20 h-16 bg-orange-100">
            <span className="text-xs font-bold text-orange-600">BOARDING PASS</span>
          </div>
        </div>
      </div>
      <div className="absolute z-20 hidden transform md:block top-24 right-24 -rotate-6">
        <div className="p-1 bg-white rounded-lg shadow-lg bg-opacity-90">
          <div className="flex items-center justify-center bg-blue-100 rounded-full w-14 h-14">
            <span className="text-lg font-bold text-blue-600">✈️</span>
          </div>
        </div>
      </div>
      <div className="absolute z-20 hidden transform md:block bottom-20 right-36 rotate-3">
        <div className="p-2 bg-white rounded shadow-lg bg-opacity-90">
          <div className="flex items-center justify-center w-16 h-12 bg-yellow-100">
            <span className="text-xs font-bold text-yellow-600">PASSPORT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;