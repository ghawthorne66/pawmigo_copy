const router = require("express").Router();
const mediController = require("../../controllers/mediController");


router.route("/")
  .get(mediController.findAll);


router
  .route("/:id")
  .get(mediController.findById)
  .put(mediController.update)
  .delete(mediController.remove);

module.exports = router;