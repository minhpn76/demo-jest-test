import React from "react";
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import App from "components/App";

//reused with beforeEach
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
})

it("should be show box comment", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("should be show list comment", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
