const router = require("express").Router();
const conditionController = require("../../controllers/conditionController");


router.route("/")
  .get(conditionController.findAll);


router
  .route("/:id")
  .get(conditionController.findById)
  .put(conditionController.update)
  .delete(conditionController.remove);

module.exports = router;