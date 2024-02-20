import React, { FC } from 'react'
import { Pressable } from 'react-native'
import { BottomMenuItemType, TypeNav } from './bottomMenu.interface'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '@/constants'

interface BottomMenuItemProps {
  item: BottomMenuItemType
  nav: TypeNav
  currentRoute?: string
}

const BottomMenuItem: FC<BottomMenuItemProps> = ({ currentRoute, item, nav }) => {
  const isActive = currentRoute === item.path
  const { primary, secondary } = COLORS
  const iconColor = isActive ? primary.main : secondary.main

  const handleOnPress = () => {
    nav(item.path)
  }

  return (
    <Pressable onPress={handleOnPress} className="w-[24%] items-center ">
      <Feather
        name={item.iconName}
        size={26}
        color={iconColor}
        style={
          isActive && {
            shadowColor: COLORS.primary.main,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.6,
            shadowRadius: 8,
            elevation: 20,
          }
        }
      />
    </Pressable>
  )
}

export default BottomMenuItem
