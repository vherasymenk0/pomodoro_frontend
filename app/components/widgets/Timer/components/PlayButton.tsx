import { COLORS } from '@/constants'
import cn from 'clsx'
import { Feather } from '@expo/vector-icons'
import { Pressable } from 'react-native'

interface Props {
  disabled: boolean
  isRunning: boolean
  onPress: () => void
}

export const PlayButton = ({ onPress, disabled, isRunning }: Props) => {
  const name = isRunning ? 'pause' : 'play'

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        shadowColor: COLORS.primary.main,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 20,
      }}
      className={cn('mx-7 bg-primary w-[70px] h-[70px] rounded-full items-center justify-center', {
        'pl-1': !isRunning,
        'opacity-10': disabled,
      })}
    >
      <Feather name={name} color="white" size={45} />
    </Pressable>
  )
}
