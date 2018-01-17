import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from "react-router-redux"
import createSagaMiddleware, { END } from "redux-saga"
import reducer from "./reducer"

export default function create({ history }) {
  const enhancers = []
  const middleware = {
    saga: createSagaMiddleware(),
    router: routerMiddleware(history)
  }
  if(process.env.NODE_ENV === "development") {
    /* eslint-disable no-underscore-dangle */
    if(window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    }
    middleware.logger = require("redux-logger").default // eslint-disable-line global-require
    /* eslint-enable */
  }
  const finalCreateStore = compose(
    applyMiddleware(...Object.values(middleware)),
    ...enhancers
  )(createStore)
  const store = finalCreateStore(reducer)
  store.runSaga = middleware.saga.run
  store.close = () => store.dispatch(END)

  if(process.env.HMR && module.hot) {
    module.hot.accept("./reducer", () => {
      store.replaceReducer(reducer)
    })
  }

  return store
}
