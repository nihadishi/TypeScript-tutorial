import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../todos/TodoSlice'

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
})