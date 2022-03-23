import axios from 'axios'

export async function fetchComment() {
  const resps = axios.get('https://jsonplaceholder.typicode.com/comments')
  return resps
}
