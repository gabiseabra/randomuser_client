import React from "react"
import { AppBar, Toolbar, Typography } from "material-ui"
import Header from "./Header"

export default function Shell({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}
