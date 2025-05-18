import React, { useState } from 'react';
import { Star, Camera, User, MessageSquare, MapPin, X } from 'lucide-react';
import { destinations } from '../utils/mockData';

const ReviewsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    reviewerName: '',
    reviewText: '',
    rating: 5,
    placeId: '',
  });
  const [hoveredRating, setHoveredRating] = useState(5);
  const navigate = () => {
    // Simulate navigation
    window.history.pushState({}, '', '/reviews');
    window.dispatchEvent(new PopStateEvent('popstate')); // Trigger re-render if needed
  };

  const handleRatingClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake success toast
   const Toast = ({ message, type = "success", onClose }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 transition-opacity duration-300 ease-in-out`}
    >
      {type === "success" ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 font-bold">
        &times;
      </button>
    </div>
  );
};

    // Reset form
    setFormData({
      reviewerName: '',
      reviewText: '',
      rating: 5,
      placeId: '',
    });

    // Navigate to /reviews
    setShowForm(false);
    navigate();
  };

  // Generate mock reviews using template literals
  const reviews = destinations.map((destination) => ({
    id: destination.id,
    destinationName: destination.name,
    destinationImage: destination.image,
    rating: destination.rating,
    reviewCount: destination.reviewCount,
    recentReviews: [
      {
        id: `${destination.id}-1`,
        userName: 'John Doe',
        userImage:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80 ',
        rating: 5,
        date: '2 days ago',
        comment: `Amazing experience at ${destination.name}! The location was perfect and everything exceeded our expectations.`,
      },
      {
        id: `${destination.id}-2`,
        userName: 'Jane Smith',
        userImage:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 ',
        rating: 4,
        date: '1 week ago',
        comment: `Great destination! ${destination.name} offers beautiful scenery and lots of activities. Would recommend to others.`,
      },
    ],
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white text-center">Traveler Reviews</h1>
          <p className="mt-2 text-lg text-blue-100 text-center max-w-3xl mx-auto">
            Read authentic reviews from our community of travelers
          </p>
          {/* Add Review Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-100 transition flex items-center gap-2 mx-auto"
            >
              <Star className="w-5 h-5" />
              {showForm ? 'Close Form' : 'Add Reviews & Ratings'}
            </button>
          </div>

          {/* Review Submission Form */}
          {showForm && (
            <div className="max-w-2xl mx-auto mt-6 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white">Share Your Experience</h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-white hover:bg-blue-700 p-1 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-blue-100 text-sm">Your review helps travelers make better choices</p>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex flex-col items-center">
                    <div className="text-gray-700 font-medium mb-2">Rate your experience</div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(formData.rating)}
                          onClick={() => handleRatingClick(star)}
                          className="focus:outline-none transition-transform hover:scale-110"
                          aria-label={`Rate ${star} stars`}
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= hoveredRating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {hoveredRating === 1 && "Poor"}
                      {hoveredRating === 2 && "Fair"}
                      {hoveredRating === 3 && "Good"}
                      {hoveredRating === 4 && "Very Good"}
                      {hoveredRating === 5 && "Excellent"}
                    </div>
                  </div>

                  {/* Destination Selector */}
                  <div className="relative">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      Destination
                    </label>
                    <select
                      value={formData.placeId}
                      onChange={(e) =>
                        setFormData({ ...formData, placeId: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white"
                      required
                    >
                      <option value="">Select a destination</option>
                      {destinations.map((destination) => (
                        <option key={destination.id} value={destination.id}>
                          {destination.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-9 pointer-events-none text-gray-500">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <User className="w-4 h-4 mr-2 text-blue-600" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.reviewerName}
                      onChange={(e) =>
                        setFormData({ ...formData, reviewerName: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
                      Your Review
                    </label>
                    <textarea
                      value={formData.reviewText}
                      onChange={(e) =>
                        setFormData({ ...formData, reviewText: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                      rows={4}
                      placeholder="Tell us about your experience..."
                      required
                    />
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <Camera className="w-4 h-4 mr-2 text-blue-600" />
                      Add Photos (optional)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <div className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <p className="text-sm text-gray-500">Drop your images here, or click to browse</p>
                          <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reviews List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">
          {reviews.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={destination.destinationImage}
                    alt={destination.destinationName}
                    className="h-48 w-full md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {destination.destinationName}
                      </h2>
                      <div className="flex items-center mt-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="ml-1 text-gray-700">{destination.rating}</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-600">{destination.reviewCount} reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {destination.recentReviews.map((review) => (
                      <div key={review.id} className="border-t pt-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={review.userImage}
                            alt={review.userName}
                            className="h-10 w-10 rounded-full shadow-md"
                          />
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {review.userName}
                            </div>
                            <div className="text-gray-500 text-sm">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className={`h-4 w-4 ${
                                index < review.rating
                                  ? 'text-yellow-500 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;