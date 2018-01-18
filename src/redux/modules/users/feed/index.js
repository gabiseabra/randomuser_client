export const LOAD = "users/feed/LOAD"
export const SEARCH = "users/feed/SEARCH"
export const UPDATE = "users/feed/UPDATE"
export const REQUEST = "users/feed/REQUEST"
export const SUCCESS = "users/feed/SUCCESS"
export const FAILURE = "users/feed/FAILURE"

export const load = (page = 1) => ({ type: LOAD, page })
export const search = (q, results = 15) => ({ type: SEARCH, search: { q, results } })
export const update = (search) => ({ type: UPDATE, search })
export const request = (page) => ({ type: REQUEST, page })
export const success = (page, data, pagination) => ({ type: SUCCESS, page, data, pagination })
export const failure = (page, error) => ({ type: FAILURE, page, error })

const initialState = {
  loading: false,
  data: {},
  search: {},
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
    default:
      return state
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
    case LOAD:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          current_page: action.page
        }
      }
    case REQUEST:
    case FAILURE:
      return pageReducer.delegate(state, action)
    case SUCCESS:
      return {
        ...pageReducer.delegate(state, action),
        pagination: action.pagination
      }
    case UPDATE:
      return {
        ...initialState,
        search: action.search || state.search
      }
    default:
      return state
  }
}
