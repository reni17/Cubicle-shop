const hadlebars = require('express-handlebars');

module.exports = (app)=>{
 app.engine('hbs', hadlebars.engine({
    extname : 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', './src/views');   
}
