import React from "react"
import styled from "styled-components"
import { withStyles } from "material-ui/styles"
import { Button, Typography } from "material-ui"
import PreviousIcon from "material-ui-icons/ArrowBack"
import NextIcon from "material-ui-icons/ArrowForward"

const Text = withStyles({
  root: {
    marginLeft: "auto",
    marginRight: "15px"
  }
})(Typography)

const Results = styled.span`
  margin: 0 5px;
  font-style: italic;
`

const Container = styled.div`
  margin: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Pagination({
  per_page: perPage,
  pages,
  entries,
  onSubmit,
  ...props
}) {
  const current = parseInt(props.current_page, 10)
  return (
    <Container>
      <Button fab mini disabled={current <= 0} onClick={() => onSubmit(current - 1)}>
        <PreviousIcon />
      </Button>
      <Text align="right">
        {current} / {pages}
        <Results>(showing {perPage} of {entries})</Results>
      </Text>
      <Button fab mini onClick={() => onSubmit(current + 1)}>
        <NextIcon />
      </Button>
    </Container>
  )
}
