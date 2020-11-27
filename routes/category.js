const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controllerAuth = require('../controllers/category')

const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controllerAuth.getAll)
router.get('/:id', passport.authenticate('jwt', {session: false}), controllerAuth.getById)
router.delete('/:id',passport.authenticate('jwt', {session: false}), controllerAuth.remove)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controllerAuth.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controllerAuth.update)





module.exports = router
