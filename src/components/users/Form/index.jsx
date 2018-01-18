import React, { Component } from "react"
import styled from "styled-components"
import { TextField } from "material-ui"

const Container = styled.div`
  flex: 0 1 auto;
`

const rng = () => (Date.now() * Math.random())

export default class Form extends Component {
  state = {
    count: 1,
    seed: ""
  }

  onSubmit = () => this.props.onSubmit(this.state)

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  randomize = () => this.setState({ seed: rng().toString(36).substring(0, 5) })

  render() {
    const { count, seed } = this.props

    return (
      <Container>
        <TextField
          type="text"
          name="seed"
          value={seed}
          onChange={this.onChange} />
      </Container>
    )
  }
}
