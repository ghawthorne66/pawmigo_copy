const router = require("express").Router();
const mediController = require("../../controllers/mediController");



// Matches with "/api/addmedi/:id"
router.route("/:id")
.post(mediController.create);


module.exports = router;
