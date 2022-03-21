import { SAVE_COMMENT, FETCH_COMMENT } from 'actions/types'

export default function (state = [], action) {
  switch (action.type) {
    /**
     * Action Creator - saveComment
     * This action is use call the service able to save comment in redux
     * @param {string} - payload - The comment of user
     */
    case SAVE_COMMENT:
      return [...state, action.payload]
    /**
     * Action Creator - fetchComment
     * This action is use call the service able to get comment from third system
     * @param {string[]} - payload - The list comment of user
     */
    case FETCH_COMMENT:
      return [...state, ...action.payload.data.map(com => com.name)]
    default:
      return state
  }
}
