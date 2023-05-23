import { Fragment } from 'react'
import { useGetPostsQuery } from 'redux/blog.service'
import Skeleton from '../Skeleton'
import PostItem from '../PostItem'

export default function PostList() {
  // isLoading chỉ dành cho lần fetch đầu tiên
  // isFetching là cho mỗi lần gọi API => Nen dung isFetching
  const { data, isLoading, isFetching } = useGetPostsQuery()

  console.log('data >>>>>>>>>>', data, isLoading, isFetching)

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
          {isFetching && (
            <Fragment>
              <Skeleton />
              <Skeleton />
            </Fragment>
          )}
          {!isFetching && (
            <>
              {data?.map((post) => (
                <PostItem
                  post={post}
                  key={post.id}
                  // handleDelete={handleDelete}
                  // handleStartEditing={handleStartEditing}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
