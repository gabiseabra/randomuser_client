import React from "react"
import styled from "styled-components"
import { withStyles } from "material-ui/styles"
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Avatar as BaseAvatar
} from "material-ui"

const Avatar = withStyles({
  root: {
    width: "200px",
    height: "200px",
    margin: "15px auto"
  }
})(BaseAvatar)

const Title = withStyles({
  root: {
    fontSize: "1.5em",
    margin: "20px auto"
  }
})(Typography)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

export default function View({ user }) {
  return (
    <Container>
      <Avatar src={user.avatar.url} alt={user.name}/>
      <Title type="title" align="center">{user.name}</Title>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone</TableCell>
            <TableCell>{user.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cel</TableCell>
            <TableCell>{user.cel}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  )
}
