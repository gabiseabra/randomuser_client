import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import { MuiThemeProvider } from "material-ui/styles"
import theme from "../../styles/theme"

export default function AppProvider({ store, history, children }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          {children}
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}
