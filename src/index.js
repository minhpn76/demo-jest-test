import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './components/App'

const rootElement = document.getElementById('root')
const queryClient = new QueryClient()
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Root>
      <App />
    </Root>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  rootElement
)
