import React from "react";
import "../styles.css";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";

export default function App() {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
}
