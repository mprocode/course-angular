var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

var app = express();

var departments_controller = require('./departments_controller.js');
var products_controller = require('./products_controller.js');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(
  'mongodb://localhost:27017/http_test_db', 
  { useNewUrlParser: true }
);

var myLogger = function (req, res, next) {
  console.log(req.body);
  next();
}
app.use(myLogger);


app.use('/departments', departments_controller);
app.use('/products', products_controller);

app.listen(3000)

