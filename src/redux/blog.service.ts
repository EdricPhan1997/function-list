import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'
import { CustomError } from 'utils/helper'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  tagTypes: ['Posts'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${localStorage.getItem('token') || 'ABC'}`)
      return headers
    }
  }),
  // focus vao tab thi se refetch lai
  refetchOnFocus: true,
  // mat mang thi se refetch lai
  // refetchOnReconnect: true,
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts', // method khong co argument
      /*
      keepUnusedDataFor: 10,
      */

      /**
       * providesTags có thể là array hoặc callback return array
       * Nếu có bất kỳ một invalidatesTag nào match với providesTags này
       * thì sẽ làm cho getPosts method chạy lại
       * và cập nhật lại danh sách các bài post cũng như các tags phía dưới
       * result la ket qua khi get post thanh cong
       */
      providesTags(result) {
        /**
         * Cái callback này sẽ chạy mỗi khi getPosts chạy
         * Mong muốn là sẽ return về một mảng kiểu
         * ```ts
         * interface Tags: {
         *    type: "Posts";
         *    id: string;
         *  }[]
         *```
         * vì thế phải thêm as const vào để báo hiệu type là Read only, không thể mutate
         */
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts' as const, id: 'LIST' }
          ]
          return final
        }
        // const final = [{ type: 'Posts' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Posts', id: 'LIST' }]
      }
    }),
    addPost: builder.mutation<Post, Omit<Post, 'id'>>({
      query: (body) => {
        return {
          url: 'posts',
          method: 'POST',
          body
        }
      },
      /**
       * invalidatesTags cung cấp các tag để báo hiệu cho những method nào có providesTags
       * match với nó sẽ bị gọi lại
       * Trong trường hợp này getPosts sẽ chạy lại
       */
      invalidatesTags: (result, error, body) => (error ? [] : [{ type: 'Posts', id: 'LIST' }])
    }),
    getPost: builder.query<Post, string>({
      // query: (_id) => `posts/${_id}`
      query: (_id) => ({
        url: `posts/${_id}`,
        headers: { hello: 'EdricPhan' },
        params: {
          first_name: 'Hieu',
          last_name: 'Phan'
        }
      })
    }),
    updatePost: builder.mutation<Post, { id: string; body: Post }>({
      query: (_data) => {
        // Error do nguoi dung code sai
        // throw new Error('Hahahahaha')
        try {
          // throw new Error('Hahahahaha')
          // let a: any = null
          // a.b = 1

          return {
            url: `posts/${_data.id}`,
            method: 'PUT',
            body: _data.body
          }
        } catch (error: any) {
          throw new CustomError(error.message)
        }
      },
      /*
      OR
        query: ({ id, body }) => {
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body
        }
      }
      */
      // Trong truong hop nay thi cai getPosts se chay lai
      invalidatesTags: (result, error, _data) => (error ? [] : [{ type: 'Posts', id: _data.id }]) // or [{ type: 'Posts', id: result.id }]
    }),
    deletePost: builder.mutation<{}, string>({
      query: (_id) => {
        return {
          url: `posts/${_id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (result, error, _id) => [{ type: 'Posts', id: _id }]
    })
  })
})

export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  blogApi

// Tai lieu: https://redux-toolkit.js.org/rtk-query/usage/cache-behavior#re-fetching-on-window-focus-with-refetchonfocus
