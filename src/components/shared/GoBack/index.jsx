import React from "react"
import { Route, Link } from "react-router-dom"
import { IconButton } from "material-ui"
import ArrowBackIcon from "material-ui-icons/ArrowBack"

const isActive = ({ location }) => location.pathname !== "/"

export default function GoBack(props) {
	return (
    <Route exact path="/">
      {route => (
        <Link to="/">
          <IconButton
            disabled={!isActive(route)}
            aria-label="go back"
            {...props}>
            <ArrowBackIcon />
          </IconButton>
        </Link>
      )}
    </Route>
	)
}
