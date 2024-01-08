import React, { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import cn from 'clsx'

type Props = PressableProps

const Button: FC<PropsWithChildren<Props>> = ({ children, className, ...rest }) => {
  return (
    <Pressable
      className={cn('self-center mt-3 bg-primary py-3 px-8 rounded-xl', className)}
      {...rest}
    >
      <Text className="flex items-center font-semibold text-white text-xl">{children}</Text>
    </Pressable>
  )
}

export default Button
