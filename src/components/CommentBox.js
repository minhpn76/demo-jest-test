import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import withAuth from 'HOC/withAuth'
import { fetchComment, saveComment } from '../actions'

function CommentBox() {
  const dispatch = useDispatch()
  const [comment, setComment] = useState("")

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // call
    dispatch(saveComment(comment))
    // reset
    setComment("")
  }

  const handleFetchComment = () => {
    dispatch(fetchComment())
  }

  return (
    <>
      <h4>Comment Box</h4>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={handleFetchComment}>Fetch comments</button>
    </>
  )
}

export default memo(withAuth(CommentBox));
