import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'
import boxslice from './reducerSlice/boxslice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    box: boxslice
  }
})