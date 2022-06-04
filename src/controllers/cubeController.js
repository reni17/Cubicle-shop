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

router.get('/details/:id', async (req, res)=> {
  const cube = await cubeService.getOne(req.params.id).lean()
  res.render('details', {cube})
})



module.exports = router;
