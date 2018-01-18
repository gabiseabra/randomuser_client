import { put, fork, call, select, all, takeEvery } from "redux-saga/effects"
import * as actions from "./index"
import { isFormLoading } from "./selectors"

export default function create({ apiClient }) {
  function * request({ seed, count }) {
    put(actions.request())
    try {
      yield call(apiClient.create, { seed, count })
      yield put(actions.success())
    } catch(error) {
      yield put(actions.failure(error))
    }
  }

  function * load(props) {
    const loading = yield select(isFormLoading)

    if(!loading) {
      yield fork(request, props)
    }
  }

  return function * root() {
    yield all([
      takeEvery(actions.CREATE, load)
    ])
  }
}
