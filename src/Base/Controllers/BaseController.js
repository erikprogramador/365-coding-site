class BaseController {
  constructor () {}

  index (request, response) {
    response.send('Now is from controller')
  }
}

module.exports = BaseController
