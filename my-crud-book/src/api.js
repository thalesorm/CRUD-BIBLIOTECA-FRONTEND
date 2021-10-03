import axios from 'axios'

const client = axios.create({
  baseURL: 'https://localhost:44366/',
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      return req.data
    })
  },
  getPosts () {
    return this.execute('get', '/api/book')
  },
  getPost (id) {
    return this.execute('get', `/api/book/${id}`)
  },
  createPost (data) {
    return this.execute('post', '/api/book', data)
  },
  updatePost (id, data) {
    return this.execute('put', `/api/book`, data)
  },
  deletePost (id) {
    return this.execute('delete', `/api/book/${id}`)
  }
}
