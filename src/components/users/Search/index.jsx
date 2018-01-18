import React, { Component } from "react"
import styled from "styled-components"
import { Button, TextField } from "material-ui"
import SearchIcon from "material-ui-icons/Search"
import Results from "./Results"

const Container = styled.form`
  flex: 1;
  display: flex;
  align-items: flex-end;
  margin-left: 30px;

  > button {
    flex: 0 0 auto;
    margin: 0 15px;
  }
`

export default class Search extends Component {
  state = {
    search: "",
    results: 15
  }

  constructor(props) {
    super(props)
    if(props.initialValue) {
      this.state = {
        ...this.state,
        ...props.initialValue
      }
    }
  }

  onChange = ({ target }) => this.setState({ [target.name]: target.value })

  onSubmit = (e) => {
    this.props.onSubmit(this.state)
    if(e) e.preventDefault()
  }

  onChangeSubmit = async (e) => {
    await this.onChange(e)
    this.onSubmit()
  }

  render() {
    const { search, results } = this.state

    return (
      <Container onSubmit={this.onSubmit}>
        <TextField
          fullWidth
          type="text"
          name="search"
          value={search}
          onChange={this.onChange} />
        <Results
          name="results"
          value={results}
          onChange={this.onChangeSubmit} />
        <Button fab mini type="submit">
          <SearchIcon />
        </Button>
      </Container>
    )
  }
}
