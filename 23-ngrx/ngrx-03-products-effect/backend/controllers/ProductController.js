var Department = require('../models/DepartmentModel.js');
var Product = require('../models/ProductModel.js');

module.exports = { 

    add: function (req, res) {
      console.log(req.body);
      p = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        departments : req.body.departments
      });
      p.save((err, prod) => {
        if (err) 
          res.status(500).send(err);
        else
          res.status(200).send(prod);
      });
    },
    
    all: function (req, res) {
      Product.find().lean().exec(
        (err, prods) => {
          if (err)
            res.status(500).send(err);
          else
            res.status(200).send(prods);
        }
      );
    },
    
    delete: function (req, res) {
      Product.deleteOne({_id: req.params.id},
        (err) => {
          if (err)
            res.status(500).send(err);
          else
            res.status(200).send({});
        }
      );
    },
    
    update: function (req, res) {
      console.log(req.body);
      Product.findById(req.params.id, 
        (err, prod) => {
          if (err) 
            res.status(404).send(err);
          else {
            prod.name = req.body.name;
            prod.price = req.body.price;
            prod.stock = req.body.stock;
            prod.departments = req.body.departments;
            prod.save((err,prod) => {
              if (err) {
                res.status(500).send(err);
              }
              else
                res.status(200).send(prod);
            });
          }
        }); 
    }
}
