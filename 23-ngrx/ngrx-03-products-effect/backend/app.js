var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

var departments = require('./routes/departments');
var products = require('./routes/products');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

mongoose.connect(
  'mongodb://localhost:27017/ngrx_server', 
  { useNewUrlParser: true }
);

app.use(departments);
app.use(products);

app.listen(3000)

