const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Condition
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Condition
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Condition.create(req.body)
      .then(function (dbCondition) {
        return db.Pet.findOneAndUpdate({ _id: req.params.id }, { $push: { condition: dbCondition._id } }, { new: true });
      })
      .then(function (dbPet) {
        res.json(dbPet);
      })
      .catch(function (err) {
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.Condition
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Condition
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
