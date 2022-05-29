const router = require('express'). Router()

router.get('/create', (req, res)=> {
    res.render('create')
})
router.post('/create', (req, res)=> {
    const cube =req.body
    //validate

    //save data

    //redirect page
  })
module.exports = router