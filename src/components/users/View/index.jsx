import React from "react"
import styled from "styled-components"
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Avatar as BaseAvatar
} from "material-ui"

const Avatar = styled(BaseAvatar)`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  height: 100%;
`

export default function View({ user }) {
  return (
    <Container>
      <Avatar src={`/api/${user.avatar.url}`} alt={user.name}/>
      <Typography type="title">{user.name}</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>${user.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone</TableCell>
            <TableCell>${user.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cel</TableCell>
            <TableCell>${user.cel}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  )
}
