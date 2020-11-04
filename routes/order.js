const express = require('express')
const controllerAuth = require('../controllers/order')
const router = express.Router()

router.get('/', controllerAuth.getAll)
router.post('/', controllerAuth.create)



module.exports = router
