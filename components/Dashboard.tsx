'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface DashboardProps {
  onLogout: () => void
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [user, setUser] = useState<{ name: string; email: string; subscription: string } | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={onLogout}>Logout</Button>
      </div>

      {user && (
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {user.name}!</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your subscription plan: <span className="font-semibold">{user.subscription}</span></p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Dashboard
