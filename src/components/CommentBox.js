import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveComment } from '../actions/index'

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

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={handleChange}/>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CommentBox;
