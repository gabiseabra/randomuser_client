import { put, fork, call, select, all, takeEvery } from "redux-saga/effects"
import { SUCCESS as FORM_SUCCESS } from "../form"
import * as actions from "./index"
import {
  isPageLoading,
  getPageData,
  getSearch
} from "./selectors"

export default function create({ apiClient }) {
  function * request({ page, search }) {
    yield put(actions.request(page, search))
    try {
      const q = typeof search === "undefined" ? (yield select(getSearch)) : search
      const { data, pagination } = yield call(apiClient.search, { page, q })
      yield put(actions.success(page, data, pagination))
    } catch(error) {
      yield put(actions.failure(page, error))
    }
  }

  function * clear() {
    yield put(actions.clear())
  }

  function * load(props) {
    const loading = yield select(isPageLoading, props)
    const data = yield select(getPageData, props)

    if(!loading && !data) yield fork(request, props)
  }

  function * search(props) {
    const search = yield select(getSearch)
    // reset pagination when search changes
    if(search !== props.search) yield fork(clear)
  }

  return function * root() {
    yield all([
      takeEvery(actions.LOAD, load),
      takeEvery(actions.SEARCH, search),
      takeEvery(FORM_SUCCESS, clear)
    ])
  }
}
