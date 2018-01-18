import React from "react"
import { withStyles } from "material-ui/styles"
import {
  ListItem,
  Typography,
  Avatar as BaseAvatar
} from "material-ui"

const Avatar = withStyles({
  root: {
    width: "50px",
    height: "50px",
    display: "inline-block"
  }
})(BaseAvatar)

const Name = withStyles({
  root: {
    flex: "1",
    marginLeft: "30px"
  }
})(Typography)

export default function FeedItem({ id, avatar, title, name, onSelect }) {
  return (
    <ListItem
      button
      key="user"
      onClick={() => onSelect(id)}>
      {avatar && <Avatar src={avatar.url} alt={name} />}
      <Name type="title">{title}. {name}</Name>
    </ListItem>
  )
}
