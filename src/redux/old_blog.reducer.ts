import { createReducer, createAction, current, PayloadAction, nanoid } from '@reduxjs/toolkit'
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

// Tao Action
export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('/blog/deletePost')
export const startEdittingPost = createAction<string>('/blog/startEdittingPost')
export const cancleEdittingPost = createAction('/blog/cancleEdittingPost')
export const finishEditingPost = createAction<Post>('/blog/finishEditingPost')

// Custom payload voi Repaire callback
export const addPostRepaire = createAction('blog/addPostRepaire', function (post: Omit<Post, 'id'>) {
  return {
    payload: {
      ...post,
      id: nanoid()
    }
  }
})

const blogReducer = createReducer(initialState, (builder) => {
  // Xu ly action va state
  builder
    .addCase(addPost, (state, action) => {
      // immerjs => giup chung ta mutable state an toan
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(addPostRepaire, (state, action) => {
      // immerjs => giup chung ta mutable state an toan
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const foundPostId = state.postList.findIndex((post) => post.id === postId)
      if (foundPostId !== -1) {
        state.postList.splice(foundPostId, 1)
      }
    })
    .addCase(startEdittingPost, (state, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    })
    .addCase(cancleEdittingPost, (state, action) => {
      state.editingPost = null
    })
    .addCase(finishEditingPost, (state, action) => {
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
    })
    .addMatcher(
      (action) => action.type.includes('cancle'),
      (state, action) => {
        console.log('cancle', current(state))
      }
    )
})

export default blogReducer

/*
  console.log('state', current(state)) // State hien tai
  State ===  const initialState: BlogState  = { postList: initalPostList, editingPost: null }

  action.payload la di lieu truyen len khi handleFunction
    
} 

*/
