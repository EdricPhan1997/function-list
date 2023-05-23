import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { useDispatch } from 'react-redux'
import { blogApi } from 'redux/blog.service'
// createReducer, createAction,
// import blogReducer from 'redux/old_blog.reducer'

// createSlice
// import blogReducer from 'redux/createSlice_blog.slice'

// rtk
import blogReducer from 'redux/rtk_blog.slice'
// render ra mot cai store
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    [blogApi.reducerPath]: blogApi.reducer // them reducer dc tao ra tu api slice
  },
  // Thêm api middleware để enable các tính năng như caching, invalidation, polling của rtk-query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware)
})

// Optional, nhưng bắt buộc nếu dùng tính năng refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

// Phuc vu cho van de typescript => Lay RooteState va AppDispatch tu store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Khi dung voi createAsyncThunk
export const useAppDispatch = () => useDispatch<AppDispatch>()
