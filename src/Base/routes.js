const router = require('express').Router()
const { base } = require('../../app/modules.js')

router.get('/', base.BaseController.index)

module.exports = router
