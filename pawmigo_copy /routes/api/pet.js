const router = require("express").Router();
const petController = require("../../controllers/petController");


// Matches with "/api/pets"
router.route("/")
  .get(petController.findAll);

// Matches with "/api/pets/:id"
router
  .route("/:id")
  .get(petController.findById)
  .put(petController.update)
  .delete(petController.remove);

module.exports = router;
