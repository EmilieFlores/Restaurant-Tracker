const express = require('express')
const router = express('router')
const editController =require('../controllers/edit-controller')

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteFood)
router.post('/:id', editController.updateFood)

module.exports = router 