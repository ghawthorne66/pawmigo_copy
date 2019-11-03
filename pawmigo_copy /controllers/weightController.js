const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Weight
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Weight
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Weight.create(req.body)
      .then(function (dbWeight) {
        return db.Pet.findOneAndUpdate({ _id: req.params.id }, { $push: { weight: dbWeight._id } }, { new: true });
      })
      .then(function (dbPet) {
        res.json(dbPet);
      })
      .catch(function (err) {
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.Weight
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Weight
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
