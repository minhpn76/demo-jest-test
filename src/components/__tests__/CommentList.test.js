import React from 'react'
import Root from 'Root'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'

let wrapped

beforeEach(() => {
	const initState = {
		comments: ['comment 1', 'comment 2']
	}
	wrapped = mount(
		<Root initState={initState}>
			<CommentList/>
		</Root>
	)
});

afterEach(() => {
	
});

it('creates on LI per comment', () => {
	expect(wrapped.find('li').length).toEqual(2)
});

it('shows the text for each comment', () => {
	expect(wrapped.render().text()).toContain('comment 1')
	expect(wrapped.render().text()).toContain('comment 2')
});