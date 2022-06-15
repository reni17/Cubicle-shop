const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryService = require('../services/accessoryService');
const { isAuth } = require("../middlewares/authMiddleware");
const { restart } = require("nodemon");

router.get("/create",isAuth, (req, res) => {
  res.render("create");
});



router.post('/create', (req, res) => {
  const cube = req.body;
  cube.owner = req.user._id
  //validate..

  cubeService.save(cube)
  .then(()=> {
      
        res.redirect('/');
  })
  .catch(err => console.log(err))
 
});

router.get('/details/:id', async (req, res)=> {
  const cube = await cubeService.getOne(req.params.id).lean()
  const isOwner = cube.owner == req.user?._id
  res.render('details', {cube, isOwner})
})

router.get('/:cubId/attach-accessory',async (req, res) => {
  const cubId = req.params.cubId
  const cube = await cubeService.getOne(cubId).lean()
  const accessories = await accessoryService.getAllAvailable(cube.accessories).lean()

res.render('attachAccessory', {cube, accessories})
})


router.post('/:cubId/attach-accessory', (req, res) => {
  const accessoryId = req.body.accessory
   cubeService.attach(accessoryId, req.params.cubId)

res.redirect(`/cube/details/${req.params.cubId}`)
})

router.get('/:cubId/edit',isAuth, async (req, res) => {

  const cube = await cubeService.getOne(req.params.cubId).lean()
  if(cube.owner != req.user._id){
    return res.redirect('/404')
  }
  cube[`difficultyLevel${cube.difficultyLevel}`] = true
  if(!cube){
    res.redirect('/404')
  }
  res.render('edit', {cube})
})

router.post('/:cubId/edit', async (req, res)=> {
  const cube = await cubeService.getOne(req.params.cubId).lean()

  await cubeService.edit(req.params.cubId, req.body)
  res.redirect(`/cube/details/${req.params.cubId}`)
})

router.get('/:cubId/delete', async(req, res) => {
  const cube = await cubeService.getOne(req.params.cubId).lean()
  res.render('delete', {cube})

})

router.post('/:cubId/delete', async(req, res) => {

  await cubeService.delete(req.params.cubId)
  res.redirect('/')
})

module.exports = router;
