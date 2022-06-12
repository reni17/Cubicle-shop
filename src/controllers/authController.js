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

router.get('/login', (req, res)=> {

    res.render('login')
})

router.post('/login',async (req, res) => {
const token =await authService.login(req.body)

if(!token){
    res.redirect('/404')
}
console.log(token);
res.redirect('/')

})

module.exports = router