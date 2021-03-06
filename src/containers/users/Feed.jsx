import React, { Component } from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { withRouter } from "react-router-dom"
import { Feed } from "../../components/users"
import { load } from "../../redux/modules/users/feed"
import {
  getPageUsers,
  getCurrentPage
} from "../../redux/modules/users/feed/selectors"

class FeedApp extends Component {
  componentDidMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(next) {
    if(!next.users || !next.users.length) this.load(next)
  }

  load({ currentPage }) {
    this.props.load(currentPage)
  }

  onSelect = id => this.props.push(`/u/${id}`)

  render() {
    const props = this.props
    return (props.users ? <Feed {...props} onSelect={this.onSelect} /> : null)
  }
}

const props = (state) => ({
  users: getPageUsers(state),
  currentPage: getCurrentPage(state)
})

export default compose(
  connect(props, { push, load }),
  withRouter
)(FeedApp)
