const router = require("express").Router();
const weightController = require("../../controllers/weightController");


router.route("/")
  .get(weightController.findAll);


router
  .route("/:id")
  .get(weightController.findById)
  .put(weightController.update)
  .delete(weightController.remove);

module.exports = router;