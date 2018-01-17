import React from "react"
import styled from "styled-components"
import { withStyles } from "material-ui/styles"
import {
  ListItem,
  Avatar as BaseAvatar
} from "material-ui"

const Avatar = withStyles({
  root: {
    width: "50px",
    height: "50px",
    display: "inline-block"
  }
})(BaseAvatar)

export default function FeedItem({ id, avatar, title, name, onSelect }) {
  return (
    <ListItem
      button
      key="user"
      onClick={() => onSelect(id)}>
      {avatar && <Avatar src={avatar.url} alt={name} />}
      {title} {name}
    </ListItem>
  )
}
