import "whatwg-fetch"
import qs from "querystring"
import { buildResponse } from "./Response"

export default class ApiClient {
  static METHODS = ["fetch", "search", "get", "create"]

  constructor(url) {
    this.url = url
    ApiClient.METHODS.forEach((method) => {
      this[method] = this[method].bind(this)
    }, this)
  }

  async fetch(path, ...props) {
    const url = `${this.url}${path}`
    const response = await window.fetch(url, ...props)
    if(!response.ok) {
      let message = await response.text()
      const status = `${response.status} ${response.statusText}`
      if(message) message = `[${status}] ${message}`
      else message = status
      throw new Error(message)
    }
    return response
  }

  async json(...props) {
    return await buildResponse(await this.fetch(...props))
  }

  search(query) {
    return this.json(`/user?${qs.stringify(query)}`)
  }

  get(id) {
    return this.json(`/user/${id}`)
  }

  create(body) {
    return this.fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
  }
}
