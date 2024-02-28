import { Pressable, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { COLORS } from '@/constants'
import { useMemo } from 'react'

interface Props {
  key: number
  isRunning: boolean
  duration: number
  status: string
  onReset: () => void
  onComplete: () => void
}

export const CircleTimer = ({ key, status, duration, isRunning, onReset, onComplete }: Props) => {
  const {
    primary: { main, dark, light },
  } = COLORS

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={isRunning}
      duration={duration}
      colors={[main, light]}
      colorsTime={[duration, 0]}
      trailColor={dark}
      onComplete={onComplete}
      size={300}
      strokeWidth={10}
    >
      {({ remainingTime }) => {
        const [formattedMinutes, formattedSeconds] = useMemo(() => {
          const minutes = Math.floor(remainingTime / 60)
          const seconds = remainingTime % 60
          const formattedMinutes = minutes.toString().padStart(2, '0')
          const formattedSeconds = seconds.toString().padStart(2, '0')
          return [formattedMinutes, formattedSeconds]
        }, [remainingTime])

        return (
          <View className="items-center gap-2">
            <Text className="mt-1 text-white text-6xl font-semibold mb-1">
              {formattedMinutes}:{formattedSeconds}
            </Text>
            <Text className="text-center text-white text-2xl pt-1.5 ">{status}</Text>

            <Pressable onPress={onReset} className="opacity-40 self-center">
              <Entypo name="ccw" color="white" size={34} />
            </Pressable>
          </View>
        )
      }}
    </CountdownCircleTimer>
  )
}
