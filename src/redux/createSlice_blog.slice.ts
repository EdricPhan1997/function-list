import { createReducer, createAction, current, PayloadAction, nanoid, createSlice } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initalPostList,
  editingPost: null
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPostId = state.postList.findIndex((post) => post.id === postId)
      if (foundPostId !== -1) {
        state.postList.splice(foundPostId, 1)
      }
    },
    startEdittingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    },
    cancleEdittingPost: (state) => {
      state.editingPost = null
    },
    finishEditingPost: (state, action: PayloadAction<Post>) => {
      // console.log('finishEditingPost', action.payload)
      const postId = action.payload.id
      // khi return true no se dung lai vao khong chay nua
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    },
    addPostRepaire: {
      reducer: (state, action: PayloadAction<Post>) => {
        // immerjs => giup chung ta mutable state an toan
        const post = action.payload
        state.postList.push(post)
      },
      prepare: (post: Omit<Post, 'id'>) => ({
        payload: {
          ...post,
          id: nanoid()
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.includes('cancle'),
        (state, action) => {
          console.log('cancle', current(state))
        }
      )
      .addDefaultCase((state, action) => {
        console.log(`action ${action.type} is not handled by this reducer`, current(state))
      })
  }
})

export const { addPostRepaire, deletePost, startEdittingPost, cancleEdittingPost, finishEditingPost } =
  blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer
