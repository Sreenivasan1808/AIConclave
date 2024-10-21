const express = require("express");
const router = express.Router();
const collegeController=require("../controllers/collegeController")
router.post("/registerCollege",collegeController.registerCollege)
module.exports = router;