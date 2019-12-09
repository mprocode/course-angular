var mongoose = require('mongoose');
var faker = require('faker');
var Department = require('../models/DepartmentModel.js');

mongoose.connect(
  'mongodb://localhost:27017/ngrx_server', 
  { useNewUrlParser: true }
);

async function add(n) {
    try {
        for(let i=0; i<n; i++) {
            const d = new Department();
            d.name = faker.commerce.department();
            await d.save();
        }
    }
    catch(err) {
        console.log(err);
    }
}

add(10)
    .then(()=>{
        console.log("OK");
        mongoose.disconnect();
    });

