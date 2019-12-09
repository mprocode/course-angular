var mongoose = require('mongoose');
var faker = require('faker');
var Product = require('../models/ProductModel.js');
var Department = require('../models/DepartmentModel.js');

mongoose.connect(
  'mongodb://localhost:27017/ngrx_server', 
  { useNewUrlParser: true }
);


let departments = [];

async function loadDepartments() {
    departments = await Department.find().lean();
}

function getRandomDepartmentsIDs() {
    const n = Math.ceil(Math.random()*10);
    const deps = [];
    for(let i=0;i<n;i++) {
        let d = Math.floor(Math.random()*departments.length);
        deps.push(departments[d]._id);
    }
    return deps;
}


async function add(n) {
    try {
        await loadDepartments();
        for(let i=0; i<n; i++) {
            const p = new Product();
            p.name = faker.commerce.productName();
            p.departments = getRandomDepartmentsIDs();
            p.price = faker.commerce.price();
            p.stock = Math.floor(Math.random()*100);
            console.log(p);
            await p.save();
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
