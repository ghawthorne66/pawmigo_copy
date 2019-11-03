const router = require("express").Router();
const petController = require("../../controllers/petController");


// Matches with "/api/addpet/:id"
router.route("/:id")
.post(petController.create);


module.exports = router;
