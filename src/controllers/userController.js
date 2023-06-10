const router = require("express").Router();
const userManager = require("../managers/userManager");
const {extractsErrorMessages}= require("../utils/errorHelpers");


router.get("/register", (req, res) => {
  res.render("users/register");
});
router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  try{
    await userManager.register({ username, password, repeatPassword });

    res.redirect("/users/login");
  }catch(err){
    const errorMessages = extractsErrorMessages(err);
    res.status(404).render('users/register',{errorMessages});
  };
 
 
});
router.get("/login", (req, res) => {
  res.render("users/login");
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //res.render('users/login')
  const token = await userManager.login( username, password );
  res.cookie('auth',token,{httpOnly: true})
  res.redirect("/");
});
router.get("/logout", (req, res) => {
  res.clearCookie('auth');
  res.redirect("/");
});

module.exports = router;
