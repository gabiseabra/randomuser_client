import React from "react"
import styled from "styled-components"
import { AppBar, Toolbar, Typography } from "material-ui"
import Header from "./Header"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  height: 100%;
`

const Main = styled.main`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default function Shell({ children }) {
  return (
    <Container>
      <Header />
      <Main>
        {children}
      </Main>
    </Container>
  )
}
