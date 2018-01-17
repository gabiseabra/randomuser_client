import { all, fork } from "redux-saga/effects"
import data from "./data/saga"
import feed from "./feed/saga"

export default function createSaga(context) {
  return function * watch() {
    yield all([
      fork(data(context)),
      fork(feed(context))
    ])
  }
}
