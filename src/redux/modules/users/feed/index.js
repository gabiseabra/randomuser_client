import { keyBy } from "lodash"

export const LOAD = "users/feed/LOAD"
export const REQUEST = "users/feed/REQUEST"
export const SUCCESS = "users/feed/SUCCESS"
export const FAILURE = "users/feed/FAILURE"
export const CLEAR = "users/feed/CLEAR"

export const load = (page = 1, search = "") => ({ type: LOAD, page, search })
export const request = (page, search) => ({ type: REQUEST, page, search })
export const success = (page, data, pagination) => ({ type: SUCCESS, page, data, pagination })
export const failure = (page, error) => ({ type: FAILURE, page, error })
export const clear = () => ({ type: CLEAR })

const initialState = {
  data: {},
  search: "",
  pagination: {
    current_page: 1
  }
}

function pageReducer(state = {}, action) {
  switch(action.type) {
    case REQUEST:
      return {
        loading: true
      }
    case SUCCESS:
      return {
        loading: false,
        data: keyBy(action.data, "id")
      }
    case FAILURE:
      return {
        loading: false,
        error: action.error
      }
  }
}

pageReducer.delegate = (state, action) => ({
  ...state,
  data: {
    ...state.data,
    [action.page]: pageReducer(state.data[action.page], action)
  }
})

export default function feedReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST:
      return {
        ...pageReducer.delegate(state, action),
        search: action.search
      }
    case SUCCESS:
      return {
        ...pageReducer.delegate(state, action),
        pagination: action.pagination
      }
    case FAILURE:
      return pageReducer.delegate(state, action)
    case CLEAR:
      return initialState
    default:
      return state
  }
}