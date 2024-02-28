import { AuthResponse } from '@/services/auth/auth-service.interface'

export interface AuthInitialState extends Pick<AuthResponse, 'user'> {
  isLoading: boolean
}
