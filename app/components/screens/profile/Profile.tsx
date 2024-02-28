import React from 'react'
import { Layout } from '@/components/screens/ui/layout/Layout'
import Button from '@/components/screens/ui/Button'
import useActions from '@/hooks/useActions'

export const Profile = ({}) => {
  const { logout } = useActions()

  return (
    <Layout title="Profile">
      <Button onPress={logout}>Logout</Button>
    </Layout>
  )
}
