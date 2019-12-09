var mongoose = require('mongoose');
var faker = require('faker');
var ProductModel = require('../model/ProductModel.js');

mongoose.connect(
  'mongodb://localhost:27017/auth_test', 
  { useNewUrlParser: true }
);

async function add(n) {
    try {
        for(let i=0; i<n; i++) {
            const p = new ProductModel();
            p.name = faker.commerce.productName();
            p.department = faker.commerce.department();
            p.price = faker.commerce.price();
            await p.save();
            console.log(p);
        }
    }
    catch(err) {
        console.log(err);
    }
}

add(100)
    .then(()=>{
        console.log("OK");
        mongoose.disconnect();
    });
