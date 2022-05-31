const router = require('express'). Router()
const cubes = require('../cubes.json')
const fs = require('fs/promises')
const path = require('path')

router.get('/create', (req, res)=> {
    res.render('create')
})
router.post('/create', (req, res)=> {
    const cube = req.body
    //validate

    //save data
 cubes.push(cube)
 fs.writeFile(path.resolve('src', 'cubes.json'), JSON.stringify(cubes, '', 4), 'utf-8')
 .then(()=> {
     res.redirect('/')
 })
 .catch((err)=>alert(err))

    //redirect page
  })
module.exports = router