import React from 'react'
import '../styles.css'
import CommentList from './CommentList'
import CommentBox from './CommentBox'
import CommentListQuery from './CommentListQuery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="rq-comment-list">About</Link>
//     </div>
//   )
// }

const Home = () => {
  return (
    <div>
      <a href="/rq-comment-list">CommentListQuery</a>
      <CommentBox />
      <CommentList />
    </div>
  )
}
export default function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="rq-comment-list" element={<CommentListQuery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
