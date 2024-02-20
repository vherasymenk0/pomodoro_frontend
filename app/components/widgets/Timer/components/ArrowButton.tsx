import cn from 'clsx'
import { Entypo } from '@expo/vector-icons'
import { Pressable } from 'react-native'

interface Props {
  disabled: boolean
  onPress: () => void
  variant: 'chevron-left' | 'chevron-right'
}

export const ArrowButton = ({ disabled, onPress, variant }: Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      className={cn('opacity-40', {
        'opacity-10': disabled,
      })}
    >
      <Entypo name={variant} color="white" size={34} />
    </Pressable>
  )
}
