import React, { memo, useState, useEffect  } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchComment, saveComment } from '../actions'

function CommentBox() {
  const dispatch = useDispatch()
  const [comment, setComment] = useState("")

  //TODO: check condition without login
  const location = useLocation()
  const navigate = useNavigate()

  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth) {
      navigate('/')
    }
  }, [location.pathname])

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

export default memo(CommentBox);
