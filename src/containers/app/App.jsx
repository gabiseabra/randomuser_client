import React from "react"
import { Switch, Route } from "react-router-dom"
import { View } from "../users"

export default function App() {
  return (
    <Switch>
      <Route exact path="/u/:id" component={View} />
    </Switch>
  )
}
