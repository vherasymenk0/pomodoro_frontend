import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthResponse } from '@/services/auth/auth-service.interface'
import { AuthFormData } from '@/types/auth.interface'
import { AuthService } from '@/services/auth/auth-service'

export const login = createAsyncThunk<AuthResponse, AuthFormData>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password)
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)

export const register = createAsyncThunk<AuthResponse, AuthFormData>(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password)
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout()
  return {}
})
