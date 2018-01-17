import { buildResponse } from "./Response"

export default class ApiClient {
  constructor(url) {
    this.url = url
  }

  async fetch(path, ...props) {
    const url = `${this.url}/${path}`
    const response = await fetch(url, ...props)
    if(!response.ok) {
      let message = await response.text()
      const status = `${response.status} ${response.statusMessage}`
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
