const router = require("express").Router();
const cubeManager = require("../managers/cubeManager");

router.get("/create", (req, res) => {

    res.render("accessory/create");
  });
  router.post("/create", (req, res) => {
     const body = req.body
     
     res.redirect("/");
  });



  module.exports = router;