import { put, fork, call, select, all, takeEvery } from "redux-saga"
import * as actions from "./index"
import {
  isUserLoading,
  getUserData
} from "./selectors"

export default function create({ apiClient }) {
  function * request({ id }) {
    put(actions.request(id))
    try {
      const data = yield call(apiClient.get, id)
      yield put(actions.failure(id, data))
    } catch(error) {
      yield put(actions.failure(id, error))
    }
  }

  function * load(props) {
    const loading = yield select(isUserLoading, props)
    const data = yield select(getUserData, props)

    if(!loading && !data) {
      yield fork(request(props))
    }
  }

  return function * root() {
    yield all([
			takeLatest(actions.LOAD, load)
		])
  }
}