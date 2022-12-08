import { createSlice } from '@reduxjs/toolkit'

export const checkSession = createSlice({
  name: 'loggedInStatus',
  initialState: { storedValue: false},
  reducers: {
    login: state => { state.storedValue = true },
    logout: state => { state.storedValue = false }
  }
})

export const getLoggedInStatus = state => state.loggedInStatus.storedValue
export const { login, logout } = checkSession.actions
export default checkSession.reducer