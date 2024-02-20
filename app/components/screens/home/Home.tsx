import React from 'react'
import { Layout } from '@/components/screens/ui/layout/Layout'
import { Timer } from '@/components/widgets/Timer'

export const Home = ({}) => {
  return (
    <Layout title="Timer">
      <Timer />
    </Layout>
  )
}
