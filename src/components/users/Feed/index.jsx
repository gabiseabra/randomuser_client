import React from "react"
import { Link } from "react-router-dom"
import { List } from "material-ui"
import ListItem from "./ListItem"

export default function Feed({ users, onSelect }) {
  return (
    <List>
      {users.map(user => <ListItem key={user.id} onSelect={onSelect} {...user} />)}
    </List>
  )
}
