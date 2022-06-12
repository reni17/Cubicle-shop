const express = require('express')
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')
const accessoryControler = require('./controllers/accessoryControler')
const authController = require('./controllers/authController')

const router = express.Router()

router.use('/', homeController)
router.use('/about', homeController)
router.use('/cube', cubeController)
router.use('/accessory',accessoryControler)
router.use('/auth', authController)

router.use('*', (req, res)=> {
res.render('404')
})

module.exports = router