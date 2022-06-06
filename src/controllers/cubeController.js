const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryService = require('../services/accessoryService');

router.get("/create", (req, res) => {
  res.render("create");
});



router.post('/create', (req, res) => {
  const cube = req.body;
  //validate..

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

router.get('/:cubId/attach-accessory',async (req, res) => {
  const cubId = req.params.cubId
  const cube = await cubeService.getOne(cubId).lean()
  const accessories = await accessoryService.getAllAccessories().lean()

res.render('attachAccessory', {cube, accessories})
})


router.post('/:cubId/attach-accessory', (req, res) => {
  const accessoryId = req.body.accessory
   cubeService.attach(accessoryId, req.params.cubId)

res.redirect(`/cube/details/${req.params.cubId}`)
})

module.exports = router;
