// import PostItem from '../PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import PostItem from '../PostItem'
// import { deletePost, startEdittingPost } from 'redux/old_blog.reducer'
import { deletePost, getPostList, startEdittingPost } from 'redux/createSlice_blog.slice'
import { Fragment, useEffect } from 'react'
import http from 'utils/http'

import Skeleton from '../Skeleton'

// Goi API trong UseEffect
// Neu goi thanh cong thi dispatch action type "blog/getPostListSuccess"
// Neu goi that bai thi dispatch action type "blog/getPostListFailed"

// Khong dc xu ly bat dong bo trong reducer

export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList)
  const loading = useSelector((state: RootState) => state.blog.loading)
  const dispatch = useAppDispatch()
  const handleDelete = (_postId: string) => {
    dispatch(deletePost(_postId))
  }

  const handleStartEditing = (postId: string) => {
    dispatch(startEdittingPost(postId))
  }

  // console.log('postList', postList)

  // useEffect(() => {
  //   const controller = new AbortController()
  //   http
  //     .get('posts', { signal: controller.signal })
  //     .then((response) => {
  //       console.log(response)
  //       const postsListResult = response.data
  //       dispatch({
  //         type: 'blog/getPostListSuccess',
  //         payload: postsListResult
  //       })
  //     })
  //     .catch((error) => {
  //       // console.log(error)
  //       if (!(error.code === 'ERR_CANCELED')) {
  //         dispatch({
  //           type: 'blog/getPostListFailed',
  //           payload: error
  //         })
  //       }
  //     })

  //   return () => {
  //     controller.abort()
  //   }
  // }, [dispatch])

  useEffect(() => {
    const promise = dispatch(getPostList())

    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>EdricPhan Blog</h2>
          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
          </p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {loading && (
            <Fragment>
              <Skeleton />
              <Skeleton />
            </Fragment>
          )}
          {!loading && (
            <>
              {postList.map((post) => (
                <PostItem
                  post={post}
                  key={post.id}
                  handleDelete={handleDelete}
                  handleStartEditing={handleStartEditing}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
