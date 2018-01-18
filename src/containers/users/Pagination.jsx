import qs from "querystring"
import React, { Component } from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { withRouter } from "react-router-dom"
import { Pagination } from "../../components/shared"
import { load } from "../../redux/modules/users/feed"
import { getPagination } from "../../redux/modules/users/feed/selectors"

class PaginationApp extends Component {
  onSubmit = (page) => {
    this.props.push({
      pathname: "/",
      search: qs.stringify({
        ...this.query,
        page
      })
    })
    this.props.load(page)
  }

  get query() {
    const { location } = this.props
    return (
      location.search ?
        qs.parse(location.search.slice(1)) :
        {}
    )
  }

  render() {
    const { pagination } = this.props
    return (pagination ? <Pagination {...pagination} onSubmit={this.onSubmit} /> : null)
  }
}

const props = state => ({
  pagination: getPagination(state)
})

export default compose(
  connect(props, { load, push }),
  withRouter
)(PaginationApp)
