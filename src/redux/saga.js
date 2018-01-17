import { fork, all } from "redux-saga/effects"
import { users } from "./modules/sagas"

export default function create(options) {
  return function * root() {
    yield all([
      fork(users(options))
    ])
  }
}
