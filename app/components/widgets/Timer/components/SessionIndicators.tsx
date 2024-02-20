import { View } from 'react-native'
import cn from 'clsx'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '@/constants'

interface Props {
  sessionCount: number
  currentSession: number
  isSmallIndicator: boolean
  status: string
}

export const SessionIndicators = ({
  isSmallIndicator,
  currentSession,
  sessionCount,
  status,
}: Props) => {
  const {
    primary: { p900, dark },
  } = COLORS

  return (
    <View className="mt-14 flex-row items-center justify-center">
      {Array.from(Array(sessionCount)).map((_, idx) => {
        const indicatorSize = isSmallIndicator ? 'w-3 h-3 border-2' : 'w-6 h-6 border-4'
        const isNotWorkStatus = status === 'REST' || status === 'COMPLETED'
        const isDoneSession = idx + 1 <= currentSession && isNotWorkStatus

        return (
          <View className="flex-row items-center" key={`point ${idx}`}>
            <View
              className={cn(`${indicatorSize} bg-[#2c2b3c] rounded-full`, {
                'bg-primary opacity-70': idx + 1 <= currentSession,
                'border-transparent': idx + 1 !== currentSession,
                'border-primary bg-[#2c2b3c] opacity-70': idx + 1 === currentSession,
                'border-primary bg-primary opacity-70': isDoneSession,
              })}
            />
            {idx + 1 !== sessionCount && (
              <View
                className={cn('w-7 h-0.5 bg-[#2c2b3c] relative items-center', {
                  'bg-primary opacity-70': idx + 2 <= currentSession,
                  'w-5': isSmallIndicator,
                })}
              >
                {(idx + 1) % 2 === 0 && (
                  <View className="absolute z-10 top-2">
                    <AntDesign
                      name="rest"
                      size={14}
                      color={idx + 2 <= currentSession ? p900 : dark}
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        )
      })}
    </View>
  )
}
