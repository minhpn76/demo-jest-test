// import 'jsdom-global/register';
import React from 'react'
import CommentBox from '../CommentBox'
import { mount, shallow } from 'enzyme'

let wrapped

beforeEach(() => {
	// const wrapped = mount(<CommentBox />);
	wrapped = shallow(<CommentBox />);
})

afterEach(() => {
	// wrapped.ummount()
})

it('has a text area and a button', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
})

describe('the text area', () => {
	
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' }
		})
		wrapped.update();
	});

	it('has a text area that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
	})
	
	it('when form is submiited, textarea gets emptied', () => {
		wrapped.find('form').simulate('submit')
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('')
	
	})
});
