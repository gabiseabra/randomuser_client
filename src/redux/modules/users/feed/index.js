export const LOAD = "users/feed/LOAD"
export const SEARCH = "users/feed/SEARCH"
export const REQUEST = "users/feed/REQUEST"
export const SUCCESS = "users/feed/SUCCESS"
export const FAILURE = "users/feed/FAILURE"
export const CLEAR = "users/feed/CLEAR"

export const load = (page = 1) => ({ type: LOAD, page })
export const search = (search = "") => ({ type: SEARCH, search })
export const request = (page, search) => ({ type: REQUEST, page, search })
export const success = (page, data, pagination) => ({ type: SUCCESS, page, data, pagination })
export const failure = (page, error) => ({ type: FAILURE, page, error })
export const clear = () => ({ type: CLEAR })

const initialState = {
  loading: false,
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
        data: action.data.map(({ id }) => id)
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
        search: action.search,
        pagination: {
          ...state.pagination,
          current_page: action.page
        }
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
