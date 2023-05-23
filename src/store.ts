import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
// createReducer, createAction,
// import blogReducer from 'redux/old_blog.reducer'

// createSlice
import blogReducer from 'redux/createSlice_blog.slice'
// render ra mot cai store
export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})

// Phuc vu cho van de typescript => Lay RooteState va AppDispatch tu store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Khi dung voi createAsyncThunk
export const useAppDispatch = () => useDispatch<AppDispatch>()
