import React from "react"
import { Switch, Route } from "react-router-dom"
import { Shell, View } from "../views"

export default function App() {
  return (
    <Shell>
      <Switch>
        <Route exact path="/u/:id" component={View} />
      </Switch>
    </Shell>
  )
}
