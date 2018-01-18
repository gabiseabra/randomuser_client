import { isEqual, pick } from "lodash"
import { put, fork, call, select, all, takeEvery, takeLatest } from "redux-saga/effects"
import { LOCATION_CHANGE } from "react-router-redux"
import parseQuery from "../../../../lib/parseQuery"
import { SUCCESS as FORM_SUCCESS } from "../form"
import * as actions from "./index"
import {
  isPageLoading,
  getPageData,
  getSearch
} from "./selectors"

const pickSearch = _ => pick(_, [ "q", "results" ])

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

  // Reset pagination when search changes
  function * search(props) {
    const q = yield select(getSearch)
    if(!isEqual(q, props.search)) {
      yield fork(clear, props)
    }
  }

  // Update api search on LOCATION_CHANGE
  function * locationChange({ payload }) {
    const query = pickSearch(parseQuery({ location: payload }))
    const storedQuery = yield select(getSearch)
    if(!isEqual(query, storedQuery)) {
      yield fork(clear, { search: query })
    }
  }

  return function * root() {
    yield all([
      takeEvery(actions.LOAD, load),
      takeLatest(actions.SEARCH, search),
      takeEvery(FORM_SUCCESS, clear),
      takeEvery(LOCATION_CHANGE, locationChange)
    ])
  }
}
