import React, { FC } from 'react'
import { Pressable } from 'react-native'
import { BottomMenuItemType, TypeNav } from './bottomMenu.interface'
import { Feather } from '@expo/vector-icons'
import { PRIMARY_COLOR } from '@/constants'

interface BottomMenuItemProps {
  item: BottomMenuItemType
  nav: TypeNav
  currentRoute?: string
}

const BottomMenuItem: FC<BottomMenuItemProps> = ({ currentRoute, item, nav }) => {
  const isActive = currentRoute === item.path
  const iconColor = isActive ? PRIMARY_COLOR : '#8d8a97'

  const handleOnPress = () => {
    nav(item.path)
  }

  return (
    <Pressable className="w-[24%] items-center" onPress={handleOnPress}>
      <Feather name={item.iconName} size={26} color={iconColor} />
    </Pressable>
  )
}

export default BottomMenuItem
