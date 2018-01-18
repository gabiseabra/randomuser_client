export const CREATE = "users/form/CREATE"
export const REQUEST = "users/form/REQUEST"
export const SUCCESS = "users/form/SUCCESS"
export const FAILURE = "users/form/FAILURE"

export const create = (count, seed = "giga") => ({ type: CREATE, count, seed })
export const request = () => ({ type: REQUEST })
export const success = (/* data */) => ({ type: SUCCESS })
export const failure = (error) => ({ type: FAILURE, error })

export default function loadingReducer(state = true, action) {
  switch(action) {
    case REQUEST: return { loading: true }
    case SUCCESS: return { loading: false }
    case FAILURE: return { loading: false, error: action.error }
    default: return state
  }
}
