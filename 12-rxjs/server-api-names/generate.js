var mongoose = require('mongoose');
var faker = require('faker');
var Person = require('./person.js');

faker.locale = "pt_BR";

mongoose.connect(
  'mongodb://localhost:27017/namesdb', 
  { useNewUrlParser: true }
);

async function createRandomPeople() {
    for(let i=0; i<1000; i++) {
        let p = new Person({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            city: faker.address.city(),
            country: faker.address.country()
        });
        try {
            await p.save();
        }
        catch(err) {
            throw new Error('Error generating new person');
        }
    }
}

createRandomPeople()
    .then(()=> {
        mongoose.disconnect();
    });

console.log("OK");
