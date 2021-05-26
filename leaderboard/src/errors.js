export class HttpError extends Error {
  constructor (res) {
    super(res.statusText)
    this.name = this.constructor.name
    this.status = res.status
    Error.captureStackTrace(this, HttpError)
  }
}
