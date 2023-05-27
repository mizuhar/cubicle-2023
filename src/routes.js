const routes = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
//const routes = express()

routes.use(homeController)
routes.use('/cubes',cubeController)
routes.get('*',(req,res)=>{
    res.redirect('/404')
})

module.exports = routes;
