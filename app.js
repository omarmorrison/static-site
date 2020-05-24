const express = require('express')
const app = express()
const router = express.Router()
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'files')))
app.use(express.static(path.join(__dirname, 'uploads')))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/register', function (req, res) {
  res.render('register')
})

app.get('/login', function (req, res) {
  res.render('login')
})

app.get('*', function(req, res) {  res.render('error');});


 
app.listen(3000)