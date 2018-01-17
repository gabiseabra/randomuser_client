import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware, { END } from "redux-saga"
import reducer from "./reducer"

export default function create() {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [
    sagaMiddleware
  ]
  const finalCreateStore = compose(applyMiddleware(...middleware))(createStore)
  const store = finalCreateStore(reducer)
  store.runSaga = sagaMiddleware.run
  store.close = (() => store.dispatch(END))
  if(process.env.HMR && module.hot) {
    module.hot.accept("./reducer", () => {
      store.replaceReducer(reducer)
    })
  }
  return store
}
