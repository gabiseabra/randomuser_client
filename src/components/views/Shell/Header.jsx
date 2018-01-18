import React from "react"
import { AppBar, Toolbar, Typography } from "material-ui"
import { GoBack } from "../../shared"

export default function Header({ children }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <div style={{ width: "70px" }}>
          <GoBack color="contrast" />
        </div>
        <Typography type="title" color="inherit">
          Random User App
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  )
}
