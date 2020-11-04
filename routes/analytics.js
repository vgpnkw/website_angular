const express = require('express')
const controllerAuth = require('../controllers/analytics')
const router = express.Router()

router.get('/overview', controllerAuth.overview)
router.get('/analytics', controllerAuth.analytics)



module.exports = router
