import qs from "querystring"
import React, { Component } from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { withRouter } from "react-router-dom"
import { Search } from "../../components/users"
import { search } from "../../redux/modules/users/feed"
import { getSearch } from "../../redux/modules/users/feed/selectors"

class SearchApp extends Component {
  componentWillMount() {
    const { search, results } = this.query
    this.props.search(search, results)
  }

  onSubmit = ({ search, results }) => {
    this.props.push({
      pathname: "/",
      search: qs.stringify({
        ...this.query,
        search,
        results
      })
    })
    this.props.search(search, results)
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
    return <Search onSubmit={this.onSubmit} initialValue={this.query}/>
  }
}

export default compose(
  connect(undefined, { search, push }),
  withRouter
)(SearchApp)
