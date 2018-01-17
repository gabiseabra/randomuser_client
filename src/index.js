import React from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory as createHistory } from "history"
import ApiClient from "./lib/ApiClient"
import createStore from "./redux/store"
import createSaga from "./redux/saga"
import { App, Provider } from "./containers/app"
import "./index.css"

const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || "/"
const API_URL = process.env.REACT_APP_API_URL || "/api"

const root = document.getElementById("root")

const context = {
  apiClient: new ApiClient(API_URL),
  history: createHistory({ basename: PUBLIC_PATH })
}

const saga = createSaga(context)

const store = createStore(context)

store.runSaga(saga)

ReactDOM.render(
  <Provider store={store} history={context.history}>
    <App />
  </Provider>,
  root
);
