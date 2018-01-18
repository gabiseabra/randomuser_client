import qs from "querystring"

export default ({ location }) => (
  location.search ?
    qs.parse(location.search.slice(1)) :
    {}
)
