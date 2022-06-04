const express = require('express')
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')
const accessoryControler = require('./controllers/accessoryControler')

const router = express.Router()
router.use('/', homeController)
router.use('/about', homeController)
router.use('/cube', cubeController)
router.use('/accessory',accessoryControler)


module.exports = router