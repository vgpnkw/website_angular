const express = require('express')
const controllerAuth = require('../controllers/category')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controllerAuth.getAll)
router.get('/:id', controllerAuth.getById)
router.delete('/:id', controllerAuth.remove)
router.post('/', controllerAuth.create)
router.patch('/:id', controllerAuth.update)





module.exports = router
