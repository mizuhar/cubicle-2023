const exphbs = require('express-handlebars');
const handlebars = exphbs.create({extname:'hbs'})
function handlebarsConfig(app){

app.engine ('hbs', handlebars.engine)
app.set('view engine', 'hbs');
app.set('views','src/views'); 

}
module.exports = handlebarsConfig;