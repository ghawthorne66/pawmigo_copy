const router = require("express").Router();
const dnaController = require("../../controllers/dnaController");



// Matches with "/api/adddna/:id"
router.route("/:id")
.post(dnaController.create);


module.exports = router;
