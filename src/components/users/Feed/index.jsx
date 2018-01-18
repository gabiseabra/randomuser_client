import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "material-ui/styles"
import { List as BaseList } from "material-ui"
import ListItem from "./ListItem"

const List = withStyles({
  root: {
    overflowY: "auto"
  }
})(BaseList)

export default function Feed({ users, onSelect }) {
  return (
    <List>
      {users.map(user => <ListItem key={user.id} onSelect={onSelect} {...user} />)}
    </List>
  )
}
