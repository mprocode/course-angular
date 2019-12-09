var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname:  String,
  lastname: String,
  email: String,
  city: String,
  country: String
});

module.exports = mongoose.model("Person", personSchema);

