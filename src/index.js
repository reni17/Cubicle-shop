const express = require('express');
const hadlebars = require('express-handlebars');
const app = express()

app.use('/static', express.static('./src/public'));


app.engine('hbs', hadlebars.engine({
    extname : 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', './src/views');


app.get('/', (req, res) => {
    res.render('index')
  })

app.listen(5000, ()=> console.log('Server is listening on port 5000...'))
