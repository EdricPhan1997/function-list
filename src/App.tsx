import Blog from 'pages/Blogs/Blog'
import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <Fragment>
      <ToastContainer />
      <Blog />
    </Fragment>
  )
}

export default App
