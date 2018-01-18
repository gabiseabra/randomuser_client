import React from "react"
import { Shell } from "../../components/views"
import { Search } from "../users"

export default function ShellApp(props) {
  return (
    <Shell search={<Search />} {...props} />
  )
}
