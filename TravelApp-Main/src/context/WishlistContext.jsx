import React, { useEffect, useState, createContext, useContext } from 'react'
// Create Wishlist context
const WishlistContext = createContext(null)
// Wishlist provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(true)
  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
    setLoading(false)
  }, [])
  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
  }, [wishlist, loading])
  // Check if an item is in the wishlist
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id)
  }
  // Add or remove item from wishlist
  const toggleWishlist = (item) => {
    if (isInWishlist(item.id)) {
      setWishlist(wishlist.filter((wishItem) => wishItem.id !== item.id))
    } else {
      setWishlist([...wishlist, item])
    }
  }
  // Clear the entire wishlist
  const clearWishlist = () => {
    setWishlist([])
  }
  const value = {
    wishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist,
    loading,
  }
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}
// Custom hook to use the wishlist context
export const useWishlist = () => {
  return useContext(WishlistContext)
}
