import React, { Component } from "react"
import styled from "styled-components"
import { Button, TextField } from "material-ui"
import SearchIcon from "material-ui-icons/Search"
import Results from "./Results"
const Container = styled.div`
  margin-left: auto;

  > button {
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

  onSubmit = () => this.props.onSubmit(this.state)

  onChangeSubmit = async (e) => {
    await this.onChange(e)
    this.onSubmit()
  }

  render() {
    const { search, results } = this.state

    return (
      <Container>
        <TextField
          type="text"
          name="search"
          value={search}
          onChange={this.onChange} />
        <Results
          name="results"
          value={results}
          onChange={this.onChangeSubmit} />
        <Button fab mini onClick={this.onSubmit}>
          <SearchIcon />
        </Button>
      </Container>
    )
  }
}
