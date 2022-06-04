const router = require("express").Router();
const cubeService = require("../services/cubeService");

router.get("/create", (req, res) => {
  res.render("create");
});


router.post('/create', (req, res) => {
  const cube = req.body;
  //validate..


  //save data

  cubeService.save(cube)
  .then(()=> {
        res.redirect('/');
  })
  .catch(err => console.log(err))
 
});

router.get('/details/:id', (req, res)=> {
  const cube = cubeService.getOne(req.params.id)
  res.render('details', {cube})
})



module.exports = router;
