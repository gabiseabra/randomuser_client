import React from "react"
import { Link } from "react-router-dom"
import { List, ListItem } from "material-ui"

export default function Feed({ users }) {
  return (
    <List>
      {users.map(user => (
        <ListItem>
          <Link to={`/u/${user.id}`}>
            {user.title} {user.name}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}
