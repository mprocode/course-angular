var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Person = require('./person.js');
var cors = require('cors')
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

mongoose.connect(
  'mongodb://localhost:27017/namesdb', 
  { useNewUrlParser: true }
);

app.get('/:text', (req, res) => {
    let text = req.params.text;

    var query = { $or: [
            {firstName: {$regex: text, $options: 'i'}},
            {lastName:{$regex: text, $options: 'i'}}, 
            {country:{$regex: text, $options: 'i'}}, 
            {email:{$regex: text, $options: 'i'}}, 
            {city:{$regex: text, $options: 'i'}}, 
    ]};

    Person.find(query).lean().exec( 
        (err, data) => { 
            if (err)
                return res.status(500).json({ 
                    error: err, message: 'Internal error.' });
            setTimeout(()=>
                res.status(200).json(data), 2000);
        })
})

app.use(function(req, res, next) {
  res.status(404).send('Route does not exist.');
});


app.listen(9000)
