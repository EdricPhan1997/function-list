// import PostItem from '../PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import PostItem from '../PostItem'
// import { deletePost, startEdittingPost } from 'redux/old_blog.reducer'
import { deletePost, startEdittingPost } from 'redux/createSlice_blog.slice'

export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList)
  const dispatch = useDispatch()
  const handleDelete = (_postId: string) => {
    dispatch(deletePost(_postId))
  }

  const handleStartEditing = (postId: string) => {
    dispatch(startEdittingPost(postId))
  }

  console.log('postList', postList)

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
          {postList.map((post) => (
            <PostItem post={post} key={post.id} handleDelete={handleDelete} handleStartEditing={handleStartEditing} />
          ))}
        </div>
      </div>
    </div>
  )
}
