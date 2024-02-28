import { AuthInitialState } from './auth.interface'
import { createSlice } from '@reduxjs/toolkit'
import { login, logout, register } from './auth.actions'

const initialState: AuthInitialState = {
  isLoading: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, { payload: { user } }) => {
        state.isLoading = false
        state.user = user
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload: { user } }) => {
        state.isLoading = false
        state.user = user
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
  },
})
