const express = require('express');
const hadlebars = require('express-handlebars');
const res = require('express/lib/response');
const app = express()
const router = require('./routes')

app.use('/static', express.static('./src/public'));
app.use(express.urlencoded({extended: true}))

app.engine('hbs', hadlebars.engine({
    extname : 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', './src/views');



app.use(router)

app.use((req, res) => 
res.render('404'))

app.listen(5000, ()=> console.log('Server is listening on port 5000...'))
