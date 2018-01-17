import React from "react"
import { Link } from "react-router-dom"
import { List } from "material-ui"
import ListItem from "./ListItem"

export default function Feed({ users }) {
  return (
    <List>
      {users.map(user => <ListItem key={user.id} {...user} />)}
    </List>
  )
}
