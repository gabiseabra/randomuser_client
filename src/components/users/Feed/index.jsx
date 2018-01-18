import React from "react"
import styled from "styled-components"
import { List } from "material-ui"
import ListItem from "./ListItem"

const Container = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
`

export default function Feed({ users, pagination, onSelect }) {
  return (
    <Container>
      <List>
        {users.map(user => <ListItem key={user.id} onSelect={onSelect} {...user} />)}
      </List>
      {pagination}
    </Container>
  )
}
