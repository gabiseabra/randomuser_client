import React, { Component } from "react"
import { connect } from "react-redux"
import { Form } from "../../components/users"
import { create } from "../../redux/modules/users/form"
import { isFormLoading } from "../../redux/modules/users/form/selectors"

class FormApp extends Component {
  onSubmit = ({ seed, count }) => this.props.create(count, seed)

  render() {
    const { loading } = this.props
    return <Form disabled={loading} onSubmit={this.onSubmit} />
  }
}

const props = state => ({
  loading: isFormLoading(state)
})

export default connect(props, { create })(FormApp)
