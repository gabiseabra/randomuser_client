export default class ApiResponse {
  constructor(json, headers) {
    if(headers.has("X-Pagination")) {
      this.pagination = JSON.parse(headers.get("X-Pagination"))
    }
    this.json = json
  }

  static async create(response) {
    new ApiResponse(
      await response.json(),
      response.headers
    )
  }
}

export const buildResponse = ApiResponse.build
