var mongoose = require('mongoose');
var Product = require('./product.js');
var Faker = require('faker');

mongoose.connect(
  'mongodb://localhost:27017/http_client', 
  { useNewUrlParser: true }
);

for(let i=0;i<10;i++) {
    p = new Product({
        name: Faker.commerce.productName() ,
        department: Faker.commerce.department() ,
        price: Faker.commerce.price()
    });
    p.save((err, prod) => {
      if (err) 
        console.log("Error");
      else
        console.log("OK");
    });
}

