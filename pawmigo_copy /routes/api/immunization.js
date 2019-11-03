const router = require("express").Router();
const immuController = require("../../controllers/immuController");


router.route("/")
  .get(immuController.findAll);


router
  .route("/:id")
  .get(immuController.findById)
  .put(immuController.update)
  .delete(immuController.remove);

module.exports = router;