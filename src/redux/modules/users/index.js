import { combineReducers } from "redux"
import data from "./data"
import feed from "./feed"
import form from "./form"

export default combineReducers({ data, feed, form })
