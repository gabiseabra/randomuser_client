import React from "react"
import { Switch, Route } from "react-router-dom"
import { Shell, Home, User } from "../views"

export default function App() {
  return (
    <Shell>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/u/:id" component={User} />
      </Switch>
    </Shell>
  )
}
