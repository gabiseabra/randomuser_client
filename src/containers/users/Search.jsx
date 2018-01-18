import qs from "querystring"
import React, { Component } from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { withRouter } from "react-router-dom"
import parseQuery from "../../lib/parseQuery"
import { Search } from "../../components/users"

class SearchApp extends Component {
  onSubmit = ({ search: q, results }) => {
    this.props.push({
      pathname: "/",
      search: qs.stringify({
        ...this.query,
        q,
        results
      })
    })
  }

  get query() { return parseQuery(this.props) }

  render() {
    return <Search onSubmit={this.onSubmit} initialValue={this.query}/>
  }
}

export default compose(
  connect(undefined, { push }),
  withRouter
)(SearchApp)
