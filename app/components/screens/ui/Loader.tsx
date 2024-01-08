import React from 'react'
import { ActivityIndicator } from 'react-native'
import { COLORS } from '@/constants'

const Loader = () => {
  return <ActivityIndicator color={COLORS.primary.main} size='large'/>
}

export default Loader
