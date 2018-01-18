import React, { Fragment } from "react"
import { Feed, Form, Pagination } from "../users"

export default function HomePage() {
  return (
    <Fragment>
      <Feed pagination={<Pagination />} />
      <Form />
    </Fragment>
  )
}
