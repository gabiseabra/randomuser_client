import { createSelector } from "reselect"

export const getAllUsers = state => state.users

export const getUser = createSelector(
  getAllUsers,
  (_, { id }) => id,
  (users, id) => users[id] || {}
)

export const isUserLoading = createSelector(getUser, user => Boolean(user.loading))

export const getUserData = createSelector(getUser, user => user.data)

export const getUserError = createSelector(getUser, user => user.error)
