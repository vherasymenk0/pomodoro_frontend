import React from 'react'
import { Layout } from '@/components/screens/ui/layout/Layout'
import Button from '@/components/screens/ui/Button'
import useAuth from '@/hooks/useAuth'

export const Profile = ({}) => {
  const { setUser } = useAuth()

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <Layout title="Profile">
      <Button onPress={handleLogout}>Logout</Button>
    </Layout>
  )
}
