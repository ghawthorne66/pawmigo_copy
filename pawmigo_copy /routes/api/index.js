const router = require("express").Router();
const petRoutes = require("./pet");
const weightRoutes = require("./weight");
const mediRoutes = require("./medication");
const immuRoutes = require("./immunization");
const dnaRoutes = require("./dna");
const conditionRoutes = require("./condition");

const addPetRoute = require("./addPet");
const addConditionRoute = require("./addCondition");
const addWeightRoute = require("./addWeight");
const addMediRoute = require("./addMedi");
const addImmuRoute = require("./addImmu");
const addDNARoute = require("./addDNA");

router.use("/addpet", addPetRoute);
router.use("/addcondition", addConditionRoute);
router.use("/addweight", addWeightRoute);
router.use("/addmedi", addMediRoute);
router.use("/addimmu", addImmuRoute);
router.use("/adddna", addDNARoute);

router.use("/pets", petRoutes);
router.use("/condition", conditionRoutes);
router.use("/weight", weightRoutes);
router.use("/medication", mediRoutes);
router.use("/immunization", immuRoutes);
router.use("/dna", dnaRoutes);


module.exports = router;
