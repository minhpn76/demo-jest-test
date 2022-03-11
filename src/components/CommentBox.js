import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchComment, saveComment } from '../actions'

function CommentBox() {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')

  const handleChange = e => {
    setComment(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // call
    dispatch(saveComment(comment))
    // reset
    setComment('')
  }

  const handleFetchComment = () => {
    dispatch(fetchComment())
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={handleFetchComment}>
        Fetch comments
      </button>
    </>
  )
}

export default CommentBox
