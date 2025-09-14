'use client'

import { useState, useEffect } from 'react'
import Dashboard from '@/components/Dashboard'
import Landing from '@/components/Landing'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const user = localStorage.getItem('user')
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = () => {
    // In a real app, you'd have a proper login form.
    // Here, we'll just simulate a login.
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      subscription: 'premium',
    }
    localStorage.setItem('user', JSON.stringify(user))
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
  }

  if (!isMounted) {
    return null
  }

  return (
    <main className="min-h-screen">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Landing onLogin={handleLogin} />
      )}
    </main>
  )
}
