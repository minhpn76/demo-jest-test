import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from 'reducers'
import reduxPromise from 'redux-promise'

export default ({children, initState = {}}) => {
	const store = createStore(
		reducers, 
		initState, 
		applyMiddleware(reduxPromise)
	)

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}