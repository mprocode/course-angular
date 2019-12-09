var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name:  String,
  department: String,
  price: Number
});

module.exports = mongoose.model("Product", productSchema);

