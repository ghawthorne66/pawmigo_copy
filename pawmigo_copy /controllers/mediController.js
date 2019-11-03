const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Medication
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Medication
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Medication.create(req.body)
      .then(function (dbMedication) {
        return db.Pet.findOneAndUpdate({ _id: req.params.id }, { $push: { medication: dbMedication._id } }, { new: true });
      })
      .then(function (dbPet) {
        res.json(dbPet);
      })
      .catch(function (err) {
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.Medication
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Medication
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
