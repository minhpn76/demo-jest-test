import React from 'react'
import { useSelector } from 'react-redux'
import { useComments } from 'query/useComment'

function CommentList() {
  const comments = useSelector(state => state.comments)
  const listComment = useComments()
  console.log('listComment', listComment)

  const renderComments = () => {
    return (
      <>
        {comments.map((com, idx) => (
          <li key={idx}>{com}</li>
        ))}
      </>
    )
  }
  return <>{comments.length > 0 ? <ul>{renderComments()}</ul> : <></>}</>
}

export default CommentList
