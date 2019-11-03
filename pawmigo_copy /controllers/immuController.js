const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Immunization
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Immunization
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Immunization.create(req.body)
      .then(function (dbImmunization) {
        return db.Pet.findOneAndUpdate({ _id: req.params.id }, { $push: { immunization: dbImmunization._id } }, { new: true });
      })
      .then(function (dbPet) {
        res.json(dbPet);
      })
      .catch(function (err) {
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.Immunization
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Immunization
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
