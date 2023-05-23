import { createSlice } from '@reduxjs/toolkit'
import { Post } from 'types/blog.type'

interface BlogState {
  postId: string
}

const initialState: BlogState = {
  postId: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {}
})

const blogReducer = blogSlice.reducer

export default blogReducer
