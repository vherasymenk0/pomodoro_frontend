import { User } from '@/types/user.interface'

export interface AuthResponse {
  user: User | null
  accessToken: string
}
