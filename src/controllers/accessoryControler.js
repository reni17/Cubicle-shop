const router = require("express").Router();
const accessoryService = require("../services/accessoryService");

router.get("/create", (req, res) => {
  res.render("createAccessory");
});

router.post("/create", (req, res) => {
  const accessory = req.body;
  accessoryService
    .createAccessory(accessory)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});





module.exports = router;
