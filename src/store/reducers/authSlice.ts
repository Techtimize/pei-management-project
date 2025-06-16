import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IAuthSlice {
  isLoggedIn: boolean
  role: number
  name: string
  imageURL?: string
  preferences: { [key: string]: string }
}

const initialState: IAuthSlice = {
  isLoggedIn: !!localStorage.getItem('token')?.length,
  role: 0,
  name: 'Furqan',
  preferences: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    setProfile: (
      state,
      action: PayloadAction<Pick<IAuthSlice, 'imageURL' | 'name' | 'role'>>
    ) => {
      state.name = action.payload.name
      state.role = action.payload.role
      state.imageURL = action.payload.imageURL
    },
    setPreferences: (
      state,
      action: PayloadAction<Pick<IAuthSlice, 'preferences'>>
    ) => {
      state.preferences = action.payload.preferences
    },
    logout: (state) => {
      state.isLoggedIn = false
    }
  }
})

export const { login, setProfile, setPreferences, logout } = authSlice.actions
export default authSlice.reducer
