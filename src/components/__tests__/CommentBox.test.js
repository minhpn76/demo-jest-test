// import 'jsdom-global/register';
import React from 'react'
import CommentBox from '../CommentBox'
import { shallow } from 'enzyme'


it('has a text area and a button', () => {
  const wrapped = shallow(<CommentBox />);
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
})