const express = require('express')
const controllerAuth = require('../controllers/position')
const router = express.Router()

router.get('/:categoryId', controllerAuth.getByCategoryId)
router.post('/', controllerAuth.create)
router.delete('/:id', controllerAuth.remove)
router.patch('/:id', controllerAuth.update)



module.exports = router
