import React, { Component } from "react"
import { compose } from "redux"
import { connect } from "react-redux"
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

  render() {
    const { users } = this.props

    return (users ? <Feed users={users} /> : null)
  }
}

const props = (state, { }) => ({
  users: getPageUsers(state, { page: 1 })
})

export default compose(
  connect(props, { load }),
  withRouter
)(FeedApp)
