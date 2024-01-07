import React, { FC } from 'react'
import { BottomMenuProps } from './bottomMenu.interface'
import { View } from 'react-native'
import { bottomMenu } from './data'
import BottomMenuItem from './BottomMenuItem'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const BottomMenu: FC<BottomMenuProps> = (props) => {
  const { bottom } = useSafeAreaInsets()
  return (
    <View
      className="justify-between items-center w-full pt-5 px-3 flex-row bg-[#1e1c2e]"
      style={{ paddingBottom: bottom + 10 }}
    >
      {bottomMenu.map((item) => (
        <BottomMenuItem key={item.path} item={item} {...props} />
      ))}
    </View>
  )
}
