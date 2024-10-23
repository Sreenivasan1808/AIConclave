const express = require("express");
const router = express.Router();
const pdfDownload=require("../pdf")
const collegeController=require("../controllers/collegeController")
router.post("/registerCollege",collegeController.registerCollege)
router.get("/download",pdfDownload.collegePdf)
router.get("/getCollegeCount", collegeController.getCollegeCount);
module.exports = router;