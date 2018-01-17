import React, { Component } from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { withRouter } from "react-router-dom"
import { Feed } from "../../components/users"
import { load } from "../../redux/modules/users/feed"
import { getPageUsers } from "../../redux/modules/users/feed/selectors"

class FeedApp extends Component {
  componentDidMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(next) {
    if(!next.users) this.load(next)
  }

  load(props) {
    console.log(props)
    this.props.load(1)
  }

  onSelect = id => this.props.push(`/u/${id}`)

  render() {
    const { users } = this.props
    return (users ? <Feed users={users} onSelect={this.onSelect} /> : null)
  }
}

const props = (state, { }) => ({
  users: getPageUsers(state, { page: 1 })
})

export default compose(
  connect(props, { push, load }),
  withRouter
)(FeedApp)
