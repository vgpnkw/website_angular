const express = require('express')
const controllerAuth = require('../controllers/position')
const router = express.Router()

router.get('/:categoryId', passport.authenticate('jwt', {session: false}), controllerAuth.getByCategoryId)
router.post('/', passport.authenticate('jwt', {session: false}), controllerAuth.create)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controllerAuth.remove)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controllerAuth.update)



module.exports = router
