import { createSelector } from "reselect"
import { getAllUsers } from "../data/selectors"

export const getFeed = state => state.users.feed

export const getPagination = createSelector(getFeed, feed => feed.pagination)

export const getCurrentPage = createSelector(getPagination, pagination => parseInt(pagination.current_page, 10))

export const getSearch = createSelector(getFeed, feed => feed.search)

export const getAllPages = createSelector(getFeed, feed => feed.data)

export const getPage = createSelector(
  getAllPages,
  (state, { page } = {}) => (
    typeof page === "undefined" ?
      getCurrentPage(state) :
      page
    ),
  (data, page) => data[page] || {}
)

export const isPageLoading = createSelector(getPage, page => Boolean(page.loading))

export const getPageData = createSelector(getPage, page => page.data)

export const getPageError = createSelector(getPage, page => page.error)

export const getPageUsers = createSelector(
  getAllUsers,
  getPageData,
  (users, ids) => ids ? ids.map(id => users[id].data) : []
)
