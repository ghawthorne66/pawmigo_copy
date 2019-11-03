const router = require("express").Router();
const weightController = require("../../controllers/weightController");



// Matches with "/api/addweight/:id"
router.route("/:id")
.post(weightController.create);


module.exports = router;
