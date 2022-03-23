import { fetchComment } from 'api/api'
import { useQuery } from 'react-query'

export const useComments = () =>
  useQuery(['comments'], fetchComment, {
    // cacheTime: 5000, // cache data trong 5m,
    staleTime: 30000, // cache,
    enabled: true // disable automatic call API when frist time
  })
