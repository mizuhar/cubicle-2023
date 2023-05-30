const routes = require('express').Router();
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
accessoryController = require('./controllers/accessoryController');
//const routes = express()

routes.use(homeController)
routes.use('/cubes',cubeController)
routes.use('/accessory',accessoryController)

routes.get('*',(req,res)=>{
    res.redirect('/404')
})

module.exports = routes;
