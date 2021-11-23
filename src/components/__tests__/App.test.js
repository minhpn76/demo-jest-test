import React from "react";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import App from "../App";

it("should be show box comment", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
