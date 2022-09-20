const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const Account = require('./app/models/Account')
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')

const route = require('./routes')
const db = require('./config/db')
// Connect to DB
db.connect();

const app = express();
const port = 3000; 

// Use static folder
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(methodOverride('_method'))
// HTTP logger
app.use(morgan('combined'))  // xem request da gui den server chua

// Template engine
app.engine(
  'hbs', 
  handlebars({
    extname: '.hbs',
    helpers:{
      sum: (a,b)=> a+b,
      sum_3: (a,b,c)=> a+b+c,
    }
  })
)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources','views'))

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// Routes init
route(app);