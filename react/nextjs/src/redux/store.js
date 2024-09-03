import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'
import boxslice from './reducerSlice/boxslice'
import productSlice from './reducerSlice/productSlice'
import userSlice from './reducerSlice/userSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    box: boxslice,
    product: productSlice,
    user:userSlice
  }
})