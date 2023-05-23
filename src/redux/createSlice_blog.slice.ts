import { current, PayloadAction, nanoid, createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'
import http from 'utils/http'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
  loading: boolean
  currentRequestId: string | undefined
}

const initialState: BlogState = {
  postList: [],
  editingPost: null,
  loading: false,
  currentRequestId: undefined
}

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkAPI) => {
  const response = await http.get<Post[]>('/posts', {
    signal: thunkAPI.signal
  })
  return response.data
})

export const addPostList = createAsyncThunk('blog/addPostList', async (_body: Omit<Post, 'id'>, thunkAPI) => {
  try {
    const response = await http.post<Post>('/posts', _body, {
      signal: thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    if (error.name === 'AxiosError' && error.response.status === 422) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
    // Bao cho createAsyncThunk no bi loi va reject ra ngoai
    throw error
  }
})

export const updatePost = createAsyncThunk(
  'blog/updatePost',
  async ({ _body, postId }: { _body: Post; postId: string }, thunkAPI) => {
    try {
      const response = await http.put<Post>(`/posts/${postId}`, _body, {
        signal: thunkAPI.signal
      })
      return response.data
    } catch (error: any) {
      if (error.name === 'AxiosError' && error.response.status === 422) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
      // Bao cho createAsyncThunk no bi loi va reject ra ngoai
      throw error
    }
  }
)
export const deletePost = createAsyncThunk('blog/deletePost', async (postId: string, thunkAPI) => {
  const response = await http.delete<Post>(`/posts/${postId}`, {
    signal: thunkAPI.signal
  })
  return response.data
})

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase('blog/getPostListSuccess', (state, action: any) => {
        //
        state.postList = action.payload
      })
      .addCase(getPostList.fulfilled, (state, action) => {
        //
        state.postList = action.payload
      })
      .addCase(addPostList.fulfilled, (state, action) => {
        //
        state.postList.push(action.payload)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const postId = action.payload.id
        state.postList.find((post, index) => {
          if (post.id === postId) {
            state.postList[index] = action.payload
            return true
          }
          return false
        })
        state.editingPost = null
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        // action.meta.arg : chinh la tham so truyen vao
        const postId = action.meta.arg
        const deletePostId = state.postList.findIndex((post) => post.id === postId)
        if (deletePostId !== -1) {
          state.postList.splice(deletePostId, 1)
        }
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true
          // Moi createAsyncThunk sinh ra => action.meta.requestId tao ra Id unit duy nhat va khong trung lap
          state.currentRequestId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false
            state.currentRequestId = undefined
          }
        }
      )
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false
            state.currentRequestId = undefined
          }
        }
      )
      .addDefaultCase((state, action) => {
        // console.log(`action ${action.type} is not handled by this reducer`, current(state))
      })
  }
})

export const { startEdittingPost, cancleEdittingPost, finishEditingPost } = blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer
