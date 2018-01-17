import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {
  ListItem,
  Avatar as BaseAvatar
} from "material-ui"

const Avatar = styled(BaseAvatar)`
  width: 50px !important;
  height: 50px !important;
  display: inline-block;
`

export default function FeedItem({ id, avatar, title, name, ...props }) {
  return (
    <ListItem>
      <Link to={`/u/${id}`}>
        {avatar && <Avatar src={avatar.url} alt={name} />}
        {title} {name}
      </Link>
    </ListItem>
  )
}
