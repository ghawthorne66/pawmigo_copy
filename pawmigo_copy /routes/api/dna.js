const router = require("express").Router();
const dnaController = require("../../controllers/dnaController");


router.route("/")
  .get(dnaController.findAll);


router
  .route("/:id")
  .get(dnaController.findById)
  .put(dnaController.update)
  .delete(dnaController.remove);

module.exports = router;