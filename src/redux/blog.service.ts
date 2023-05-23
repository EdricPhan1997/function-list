import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  tagTypes: ['Posts'], // Những kiểu tag cho phép dùng trong blogApi
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts', // method khong co argument
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
      invalidatesTags: (result, error, body) => [{ type: 'Posts', id: 'LIST' }]
    }),
    getPost: builder.query<Post, string>({
      query: (_id) => `posts/${_id}`
    }),
    updatePost: builder.mutation<Post, { id: string; body: Post }>({
      query: (_data) => {
        return {
          url: `posts/${_data.id}`,
          method: 'PUT',
          body: _data.body
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
      invalidatesTags: (result, error, _data) => [{ type: 'Posts', id: _data.id }] // or [{ type: 'Posts', id: result.id }]
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

// https://www.youtube.com/watch?v=PdfekG8RjPo&t=39s   30:09
