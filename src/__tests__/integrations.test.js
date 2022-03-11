import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetch #1' }, { name: 'Fetch #2' }]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', done => {
  // Attempt to render the entries app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  // find action fetchComments button to click it
  wrapped.find('.fetch-comments').simulate('click')

  // introduce tiny litte pauses 2 way: 1. settimeout (not should), 2. moxios.wait

  // setTimeout(() => {
  // 	wrapped.update()
  // 	// expect to find a list of comments return 500 LI's
  // 	expect(wrapped.find('li').length).toEqual(3)
  // 	done()
  // 	wrapped.unmount()
  // }, 100);

  moxios.wait(() => {
    wrapped.update()
    // expect to find a list of comments return 500 LI's
    expect(wrapped.find('li').length).toEqual(2)
    done()
    wrapped.unmount()
  })
})
