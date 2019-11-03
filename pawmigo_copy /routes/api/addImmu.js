const router = require("express").Router();
const immuController = require("../../controllers/immuController");



// Matches with "/api/addimmu/:id"
router.route("/:id")
.post(immuController.create);


module.exports = router;
