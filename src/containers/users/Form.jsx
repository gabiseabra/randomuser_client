import React, { Component } from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { withRouter } from "react-router-dom"
import { Form } from "../../components/users"
import { create } from "../../redux/modules/users/data"

class FormApp extends Component {
  onSubmit = ({ seed, count }) => this.props.create(count, seed)

  render() {
    return <Form onSubmit={this.onSubmit} />
  }
}

export default connect(undefined, { create })(FormApp)
