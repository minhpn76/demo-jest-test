import React from "react";
import "../styles.css";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeAuth } from "actions";

export default function App() {

  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)

  const changeAuthAction = (payload) => {
    dispatch(changeAuth(payload))
  }
  const renderButton = () => {
    if (auth) {
      return <button onClick={() => changeAuthAction(false)}
        >Sign Out</button>
    }
    return <button onClick={() => changeAuthAction(true)}
      >Sign In</button>
  }
  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {renderButton()}
        </li>
      </ul>
    )
  }
  return (
    <>
      {renderHeader()}
      <Routes>
        <Route path="/post" element={<CommentBox />} />
        <Route path="/" element={<CommentList />} />
      </Routes>
    </>
  );
}
