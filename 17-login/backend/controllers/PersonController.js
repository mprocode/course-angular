var PersonModel = require('../models/PersonModel.js');

module.exports = {
    all: function(req, res) {
        PersonModel.find({}).lean().exec(function(err, people) {
            return res.json(people);    
        })
    }
};
