import React, { Component } from "react"
import { connect } from "react-redux"
import { View } from "../../components/users"
import { load } from "../../redux/modules/users/data"
import { getUserData } from "../../redux/modules/users/data/selectors"

class ViewApp extends Component {
  componentWillMount() {
    const { match: { params: { id } } } = this.props
    this.props.load(id)
  }

  render() {
    const { user } = this.props

    return (user ? <ViewApp user={user} /> : null)
  }
}

const props = (state, { match: { params }}) => ({
  user: getUserData(state, params)
})

export default connect(props, { load })(ViewApp)
