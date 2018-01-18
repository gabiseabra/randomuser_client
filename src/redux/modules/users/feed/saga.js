import { isEqual } from "lodash"
import { put, fork, call, select, all, takeEvery, takeLatest } from "redux-saga/effects"
import { SUCCESS as FORM_SUCCESS } from "../form"
import * as actions from "./index"
import {
  isPageLoading,
  getPageData,
  getSearch
} from "./selectors"

export default function create({ apiClient }) {
  function * request({ page }) {
    yield put(actions.request(page))
    try {
      const query = yield select(getSearch)
      const { data, pagination } = yield call(apiClient.search, { page, ...query })
      yield put(actions.success(page, data, pagination))
    } catch(error) {
      yield put(actions.failure(page, error))
    }
  }

  function * clear({ search }) {
    yield put(actions.update(search))
  }

  function * load(props) {
    const loading = yield select(isPageLoading, props)
    const data = yield select(getPageData, props)

    if(!loading && !data) yield fork(request, props)
  }

  function * search(props) {
    const q = yield select(getSearch)
    // reset pagination when search changes
    if(!isEqual(q, props.search)) {
      yield fork(clear, props)
    }
  }

  return function * root() {
    yield all([
      takeEvery(actions.LOAD, load),
      takeLatest(actions.SEARCH, search),
      takeEvery(FORM_SUCCESS, clear)
    ])
  }
}
