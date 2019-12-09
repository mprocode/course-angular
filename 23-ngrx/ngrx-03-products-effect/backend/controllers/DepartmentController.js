var Department = require('../models/DepartmentModel.js');
var Product = require('../models/ProductModel.js');

module.exports = { 

    add: function (req, res) {
      console.log(req.body);
      d = new Department({ name: req.body.name });
      d.save((err, dep) => {
        if (err) 
        res.status(500).send(err);
        else
        res.status(200).send(dep);
      });
    },
    
    all: function (req, res) {
      Department.find().exec(
        (err, deps) => {
          if (err)
            res.status(500).send(err);
          else
            res.status(200).send(deps);
        }
      );
    },
    
    delete: async function(req, res) {
      try {
        prods = await Product.find({ departments: req.params.id}).exec();
        console.log("Prods: " + prods.length);
        if (prods.length > 0)
          res.status(500).send('Could not remove department. You may have to fix its dependencies before.');
        else {
          await Department.deleteOne({_id: req.params.id});
          res.status(200).send({});
        }
      }
      catch(err) {
        res.status(500).send(err);
      }
    },
    
    update: function (req, res) {
      Department.findById(req.params.id, 
        (err, dep) => {
          console.log(err);
          if (err)
            res.status(404).send(err);
          else {
            dep.name = req.body.name;
            dep.save()
              .then(  (d) => res.status(200).send(d))
              .catch( (e) => res.status(500).send(err))
          }
        });
    },
    
    products: function (req, res) {
      Product.find({departments: req.params.id}).lean().exec(
        (err, prods) => {
          if (err)
            res.status(500).send(err);
          else
            res.status(200).send(prods);
        }
      );
    }
};

