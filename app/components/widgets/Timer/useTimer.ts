import { useEffect, useState } from 'react'
import { StatusesType, TimerProps } from '@/components/widgets/Timer/interfaces'
import { STATUSES_ENUM } from '@/components/widgets/Timer/data'

type Props = Required<TimerProps>

const useTimer = ({ flowDuration, sessionCount, breakDuration }: Props) => {
  const [isRunning, setIsRunning] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [currentSession, setCurrentSession] = useState(1)
  const [status, setStatus] = useState<StatusesType>(STATUSES_ENUM.work)
  const [key, setKey] = useState(0)

  const duration = status === 'WORK' ? flowDuration : breakDuration

  const resetTimer = () => {
    setCurrentSession(1)
    setStatus(STATUSES_ENUM.work)
    setKey(0)
  }

  const refreshTimer = () => {
    setKey((prev) => prev + 1)
    setIsRunning(false)
  }

  const handlePlay = () => {
    setIsRunning((prev) => !prev)
  }

  const handleComplete = () => {
    if (currentSession % 2 === 0 && status !== STATUSES_ENUM.rest) {
      setStatus(STATUSES_ENUM.rest)
    } else {
      if (status === STATUSES_ENUM.rest) setStatus(STATUSES_ENUM.work)
      setCurrentSession((prev) => prev + 1)
    }
    refreshTimer()
  }

  const handlePrevSession = () => {
    if (currentSession % 2 === 0) {
      if (status === STATUSES_ENUM.completed) {
        setStatus(STATUSES_ENUM.work)
        setIsCompleted(false)
      }
      if (status === STATUSES_ENUM.work) {
        setStatus(STATUSES_ENUM.work)
        setCurrentSession((prev) => prev - 1)
      }
      if (status === STATUSES_ENUM.rest) setStatus(STATUSES_ENUM.work)
    } else {
      if (status === STATUSES_ENUM.work) {
        setStatus(STATUSES_ENUM.rest)
        setCurrentSession((prev) => prev - 1)
      }
    }

    refreshTimer()
  }

  const handleNextSession = () => {
    if (currentSession % 2 === 0 && status !== STATUSES_ENUM.rest) {
      if (currentSession === sessionCount) {
        setStatus(STATUSES_ENUM.completed)
      } else {
        setStatus(STATUSES_ENUM.rest)
      }
    } else {
      if (status === STATUSES_ENUM.rest) setStatus(STATUSES_ENUM.work)
      setCurrentSession((prev) => prev + 1)
    }
    refreshTimer()
  }

  useEffect(() => {
    if (currentSession === sessionCount && status !== STATUSES_ENUM.work) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }, [status, currentSession])

  return {
    isRunning,
    isCompleted,
    status,
    currentSession,
    key,
    duration,
    resetTimer,
    handleComplete,
    handlePrevSession,
    handleNextSession,
    handlePlay,
  }
}

export default useTimer
