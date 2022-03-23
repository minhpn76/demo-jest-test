import React from 'react'
import { useComments } from 'query/useComment'

function CommentListQuery() {
  const { data, isLoading, isError, error, refetch, isFetching } = useComments()
  if (isLoading || isFetching) {
    return <h2>Feetching...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>List Comment by React Query</h2>
      <a href="/">Home</a>
      <button onClick={refetch}>Click me</button>
      <>
        {data?.data.map(com => {
          return <div key={com?.id}>{com?.name}</div>
        })}
      </>
    </>
  )
}

export default CommentListQuery
