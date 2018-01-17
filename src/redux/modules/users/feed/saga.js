import { put, fork, call, select, all, takeEvery } from "redux-saga/effects"
import * as actions from "./index"
import {
  isPageLoading,
  getPageData,
  getSearch
} from "./selectors"

export default function create({ apiClient }) {
  function * request({ page, search }) {
    put(actions.request(page, search))
    try {
      const { data, pagination } = yield call(apiClient.search, { page, q: search })
      yield put(actions.failure(page, data, pagination))
    } catch(error) {
      yield put(actions.failure(page, error))
    }
  }

  function * load(props) {
    const search = yield select(getSearch, props)

    // reset pagination when search changes
    if(search !== props.search) yield put(actions.clear())

    const loading = yield select(isPageLoading, props)
    const data = yield select(getPageData, props)

    if(!loading && !data) yield fork(request, props)
  }

  return function * root() {
    yield all([
      takeEvery(actions.LOAD, load)
    ])
  }
}
