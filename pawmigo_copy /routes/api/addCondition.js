const router = require("express").Router();
const conditionController = require("../../controllers/conditionController");



// Matches with "/api/addcondition/:id"
router.route("/:id")
.post(conditionController.create);


module.exports = router;
