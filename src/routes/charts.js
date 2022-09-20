const express = require('express')
const router = express.Router()

const chartController = require('../app/controllers/ChartController')

// router.get('/:slug', chartController.show)
router.get('/', chartController.test)
router.get('/line-chart', chartController.line)
router.get('/bar-chart', chartController.bar)
router.get('/pie-chart', chartController.pie)


module.exports = router