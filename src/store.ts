import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'redux/blog.reducer'
// render ra mot cai store
export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})

// Phuc vu cho van de typescript => Lay RooteState va AppDispatch tu store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
