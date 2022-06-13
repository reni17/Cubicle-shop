const express = require('express');
const {initializeDatabase} = require('./config/database');
const app = express()
const router = require('./routes')
const handlebars = require('./config/handlebars');
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware')

handlebars(app)
app.use('/static', express.static('./src/public'));
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(auth)
app.use(router)


initializeDatabase()
.then(()=> {
    app.listen(5000, ()=> console.log('Server is listening on port 5000...')) 
})
.catch((err) => console.log(err))
    
     
// app.use((req, res) => res.render('404'))