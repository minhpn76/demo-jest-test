import React from "react";
import { useSelector } from 'react-redux'

function CommentList() {
  const comments = useSelector(state => state.comments)
  return (
    <> 
      {
        comments.length > 0 ? (
          <ul>
            {
              comments.map((com, idx) => (
                <li key={idx}>{com}</li>
              ))
            }
          </ul>
        ) : (<></>)
      }
    </>
    
  )
}

export default CommentList;
