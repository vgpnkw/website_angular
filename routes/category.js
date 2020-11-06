const express = require('express')
const controllerAuth = require('../controllers/category')
const router = express.Router()

router.get('/', controllerAuth.getAll)
router.get('/:id', controllerAuth.getById)
router.delete('/:id', controllerAuth.remove)
router.post('/', controllerAuth.create)
router.patch('/:id', controllerAuth.update)





module.exports = router
