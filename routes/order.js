const express = require('express')
const controllerAuth = require('../controllers/order')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controllerAuth.getAll)
router.post('/', passport.authenticate('jwt', {session: false}), controllerAuth.create)



module.exports = router
