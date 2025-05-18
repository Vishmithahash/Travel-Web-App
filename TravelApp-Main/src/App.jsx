
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import DestinationsPage from './pages/DestinationsPage'
import DestinationDetailPage from './pages/DestinationDetailPage'
import AccommodationsPage from './pages/AccommodationsPage'
import BookingForm from './pages/Accommodationbooking';
import PackagesPage from './pages/PackagesPage'
import WishlistPage from './pages/WishlistPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ReviewsPage from './pages/ReviewsPage'
import FaqPage from './pages/FaqPage'
import { AuthProvider } from './contexts/AuthContext'
import { WishlistProvider } from './contexts/WishlistContext'
export function App() {
  return (
    <Router>
      <AuthProvider>
        <WishlistProvider>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route
                  path="/destinations/:id"
                  element={<DestinationDetailPage />}
                />
                <Route
                  path="/accommodations"
                  element={<AccommodationsPage />}
                />
                <Route path="/packages" element={<PackagesPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/booking" element={<BookingForm />} />

              </Routes>
            </main>
            <Footer />
          </div>
        </WishlistProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
