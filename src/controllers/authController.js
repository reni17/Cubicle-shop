const router = require("express").Router();
const cubeService = require('../services/cubeService');
const authService = require('../services/authService')

router.get('/register', (req, res) => {

    res.render('register')
})

router.post('/register',async (req, res) => {

   const createdUser = await authService.register(req.body)
   if(createdUser){

       res.redirect('/')
   }else{
    res.redirect('404')
   }

})

module.exports = router