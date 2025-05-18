import React, { useEffect, useState, createContext, useContext } from 'react'
// Create Auth context
const AuthContext = createContext(null)
// Auth provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])
  // Login function
  const login = (email, password) => {
    // In a real app, this would make an API request to authenticate
    // For this demo, we'll simulate a successful login
    const user = {
      id: '1',
      email,
      name: 'Demo User',
    }
    setCurrentUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    return Promise.resolve(user)
  }
  // Signup function
  const signup = (email, password, name) => {
    // In a real app, this would make an API request to register
    // For this demo, we'll simulate a successful registration
    const user = {
      id: '1',
      email,
      name,
    }
    setCurrentUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    return Promise.resolve(user)
  }
  // Logout function
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('user')
    return Promise.resolve()
  }
  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext)
}
