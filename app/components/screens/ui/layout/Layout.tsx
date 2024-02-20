import { Platform, SafeAreaView, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props extends PropsWithChildren {
  title: string
}

export const Layout = ({ title, children }: Props) => {
  const { top } = useSafeAreaInsets()
  const safeTopOffset = top || 20

  return (
    <SafeAreaView className="flex-1">
      <View
        className="flex-1 px-6"
        style={{
          paddingTop: Platform.OS === 'ios' ? safeTopOffset / 5 : safeTopOffset * 1.6,
        }}
      >
        <Text className="text-3xl text-center font-semibold text-white">{title}</Text>
        <View className="flex-1">{children}</View>
      </View>
    </SafeAreaView>
  )
}
