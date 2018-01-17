import React from "react"
import { AppBar, Toolbar, Typography } from "material-ui"

export default function Shell({ children }) {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="title" color="inherit">
            Random User App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {children}
      </main>
    </div>
  )
}
