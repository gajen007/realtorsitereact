import { configureStore } from '@reduxjs/toolkit'
import checkSessionReducer from '../Features/checkSession'

export default configureStore({
  reducer: {
    loggedInStatus: checkSessionReducer
  }
})