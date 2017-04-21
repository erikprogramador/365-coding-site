class BaseController {
  constructor () {}

  index (request, response) {
    response.render('index')
  }
}

module.exports = BaseController
