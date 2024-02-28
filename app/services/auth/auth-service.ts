import { instance } from '@/services/api/interceptors'
import { AuthResponse } from '@/services/auth/auth-service.interface'
import { removeTokenFromStorage, saveTokenToStorage } from './auth.helper'

export const AuthService = {
  async login(email: string, password: string) {
    const response = await instance.post<AuthResponse>('/auth/login', {
      email,
      password,
    })

    if (response.data.accessToken) saveTokenToStorage(response.data.accessToken)
    return response.data
  },

  async register(email: string, password: string) {
    const response = await instance.post<AuthResponse>('/auth/register', {
      email,
      password,
    })

    if (response.data.accessToken) saveTokenToStorage(response.data.accessToken)
    return response.data
  },

  async logout() {
    removeTokenFromStorage()
  },
}
