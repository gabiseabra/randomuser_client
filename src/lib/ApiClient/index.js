import "whatwg-fetch"
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
    return buildResponse(response)
  }

  search() {
    return this.fetch(`/`)
  }

  get(id) {
    return this.fetch(`/${id}`)
  }

  create(body) {
    return this.fetch("/", {
      method: "POST",
      body: JSON.stringify(body)
    })
  }
}
