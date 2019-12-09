var ProductModel = require('../models/ProductModel.js');

module.exports = {
    all: function(req, res) {
        ProductModel.find({}).lean().exec(function(err, products) {
            return res.json(products);    
        })
    }
};



