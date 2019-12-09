var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var api = require('./api');
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(cors())

mongoose.connect(
  'mongodb://localhost:27017/photosharing', 
  { useNewUrlParser: true }
);


var logger = function (req, res, next) {
  console.log("LOG - ", req.body);
  console.log("LOG - URL ", req.originalUrl);
  console.log("LOG - METHOD ", req.method);
  
  next();
}

app.use(logger);
app.use('/api', api);

app.use(function(req, res, next) {
  res.status(404).send('Route does not exist.');
});


app.listen(9000)
