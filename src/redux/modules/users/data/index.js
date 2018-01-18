import { SUCCESS as FEED_SUCCESS } from "../feed"

export const LOAD = "users/data/LOAD"
export const CREATE = "users/data/CREATE"
export const REQUEST = "users/data/REQUEST"
export const SUCCESS = "users/data/SUCCESS"
export const FAILURE = "users/data/FAILURE"

export const load = (id) => ({ type: LOAD, id })
export const create = (count, seed = "giga") => ({ type: CREATE, count, seed })
export const request = (id) => ({ type: REQUEST, id })
export const success = (id, data) => ({ type: SUCCESS, id, data })
export const failure = (id, error) => ({ type: FAILURE, id, error })

function userReducer(state = {}, action) {
  switch(action.type) {
    case REQUEST:
      return {
        loading: true
      }
    case SUCCESS:
      return {
        loading: false,
        data: action.data
      }
    case FAILURE:
      return {
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

userReducer.delegate = (state, action) => ({
  ...state,
  [action.id]: userReducer(state[action.id], action)
})

export default function userListReducer(state = {}, action) {
  switch(action.type) {
    case REQUEST:
    case SUCCESS:
    case FAILURE:
      return userReducer.delegate(state, action)
    case FEED_SUCCESS:
      return action.data.reduce((list, user) => ({ [user.id]: { data: user }, ...list }), state)
    default:
      return state
  }
}
