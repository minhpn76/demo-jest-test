import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveComment } from '../actions'
import { fetchComment } from '../api/api'

/**
 * Component could be user typing data
 *
 * @component
 * @example
 * return (<CommentBox/>)
 */

function CommentBox() {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')

  /**
   * Func for change action in textarea
   * @param {*} e - The event from textarea
   */
  const handleChange = e => {
    setComment(e.target.value)
  }

  /**
   * Func for click button submit
   * @param {*} e - The event from button submit
   */
  const handleSubmit = e => {
    e.preventDefault()
    // call
    dispatch(saveComment(comment))
    // reset
    setComment('')
  }

  /**
   * Func for fetch comment from API
   */
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
