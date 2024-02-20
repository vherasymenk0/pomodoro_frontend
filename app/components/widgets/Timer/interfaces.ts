import { STATUSES_ENUM } from '@/components/widgets/Timer/data'

export type StatusesType = (typeof STATUSES_ENUM)[keyof typeof STATUSES_ENUM]

export interface TimerProps {
  flowDuration?: number
  sessionCount?: number
  breakDuration?: number
}
