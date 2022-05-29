const express = require('express');
const hadlebars = require('express-handlebars');
const app = express()
const router = require('./routes')

app.use('/static', express.static('./src/public'));


app.engine('hbs', hadlebars.engine({
    extname : 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(router)


app.listen(5000, ()=> console.log('Server is listening on port 5000...'))
