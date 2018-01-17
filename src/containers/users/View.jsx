import React, { Component } from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { View } from "../../components/users"
import { load } from "../../redux/modules/users/data"
import { getUserData } from "../../redux/modules/users/data/selectors"

class ViewApp extends Component {
  componentDidMount() {
    const { match } = this.props
    const id = match ? match.params.id : undefined
    if(id) this.props.load(id)
  }

  render() {
    const { user } = this.props

    return (user ? <ViewApp user={user} /> : null)
  }
}

const props = (state, { match: { params }}) => ({
  user: getUserData(state, params)
})

export default compose(
  connect(props, { load }),
  withRouter
)(ViewApp)
