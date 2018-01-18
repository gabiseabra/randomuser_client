import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import {
  Paper,
  TextField,
  Button,
  IconButton
} from "material-ui"
import RefreshIcon from "material-ui-icons/Refresh"

const Container = withStyles({
  root: {
    flex: "0 1 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px"
  }
})(Paper)

const rng = () => (Date.now() * Math.random() * 10000).toString(36)

export default class Form extends Component {
  state = {
    count: 1,
    seed: rng()
  }

  onSubmit = () => {
    const { disabled, onSubmit } = this.props
    if(!disabled) onSubmit(this.state)
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  randomize = () => this.setState({ seed: rng() })

  render() {
    const { disabled } = this.props
    const { count, seed } = this.state

    return (
      <Container elevation={12}>
        <TextField
          type="text"
          label="Seed"
          name="seed"
          value={seed}
          onChange={this.onChange} />
        <IconButton
          color="primary"
          onClick={this.randomize}>
          <RefreshIcon />
        </IconButton>
        <TextField
          type="number"
          label="Amount"
          name="count"
          value={count}
          onChange={this.onChange} />
        <Button
          raised
          color="primary"
          disabled={disabled}
          onClick={this.onSubmit}>
          Insert Users
        </Button>
      </Container>
    )
  }
}
