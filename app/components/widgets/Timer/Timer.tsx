import { View } from 'react-native'
import { CircleTimer } from './components/CircleTimer'
import { SessionIndicators } from '@/components/widgets/Timer/components/SessionIndicators'
import { TimerProps } from '@/components/widgets/Timer/interfaces'
import { ArrowButton } from '@/components/widgets/Timer/components/ArrowButton'
import { PlayButton } from '@/components/widgets/Timer/components/PlayButton'
import useTimer from '@/components/widgets/Timer/useTimer'

export const Timer = ({ flowDuration = 1, breakDuration = 1, sessionCount = 6 }: TimerProps) => {
  const {
    status,
    key,
    isRunning,
    isCompleted,
    currentSession,
    duration,
    resetTimer,
    handleComplete,
    handlePrevSession,
    handleNextSession,
    handlePlay,
  } = useTimer({ flowDuration, breakDuration, sessionCount })

  const isSmallIndicator = sessionCount > 7

  return (
    <View className="flex-1 justify-center">
      <View className="items-center">
        <CircleTimer
          status={status}
          key={key}
          duration={duration}
          isRunning={isRunning}
          onReset={resetTimer}
          onComplete={handleComplete}
        />

        <SessionIndicators
          currentSession={currentSession}
          isSmallIndicator={isSmallIndicator}
          sessionCount={sessionCount}
          status={status}
        />
      </View>
      <View className="flex-row items-center justify-center mt-14">
        <ArrowButton
          variant="chevron-left"
          disabled={currentSession === 1}
          onPress={handlePrevSession}
        />
        <PlayButton disabled={isCompleted} isRunning={isRunning} onPress={handlePlay} />
        <ArrowButton variant="chevron-right" disabled={isCompleted} onPress={handleNextSession} />
      </View>
    </View>
  )
}
