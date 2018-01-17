export const LOAD = "users/data/LOAD"
export const REQUEST = "users/data/REQUEST"
export const SUCCESS = "users/data/SUCCESS"
export const FAILURE = "users/data/FAILURE"

export const load = (id) => ({ type: LOAD, id })
export const request = (id) => ({ type: REQUEST, id })
export const success = (id, data) => ({ type: SUCCESS, id, data })
export const failure = (id, error) => ({ type: FAILURE, id, error })

function user(state = {}, action) {
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
  }
}

export default function users(state = {}, action) {
  return {
    ...state,
    [action.id]: user(state[action.id], action)
  }
}
