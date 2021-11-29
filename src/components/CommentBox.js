import React, { useState } from "react";

function CommentBox() {
  const [comment, setComment] = useState("")

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // call
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
