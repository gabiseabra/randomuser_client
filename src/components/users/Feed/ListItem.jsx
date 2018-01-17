import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {
  ListItem,
  Avatar as BaseAvatar
} from "material-ui"

const Avatar = styled(BaseAvatar)`
  width: 50px;
  height: 50px;
  display: inline-block;
`

export default function FeedItem({ avatar, title, name }) {
  return (
    <ListItem>
      <Link to={`/u/${user.id}`}>
        <Avatar src={avatar.url} alt={user.name} />
        {user.title} {user.name}
      </Link>
    </ListItem>
  )
}
