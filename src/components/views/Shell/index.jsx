import React from "react"
import styled from "styled-components"
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

export default function Shell({ children, search }) {
  return (
    <Container>
      <Header>{search}</Header>
      <Main>
        {children}
      </Main>
    </Container>
  )
}
