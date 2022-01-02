import React from "react";
import { useSelector } from 'react-redux'

function CommentList() {
  const comments = useSelector(state => state.comments)

  const renderComments = () => {
    return (
      <>
        {
          comments.map((com, idx) => (
            <li key={idx}>{com}</li>
          ))
        }
      </>
    )
  }
  return (
    <>
      <h4>Comment List</h4>
      {
        comments.length > 0 ? (
          <ul>
            {renderComments()}
          </ul>
        ) : (<></>)
      }
    </>

  )
}

export default CommentList;
