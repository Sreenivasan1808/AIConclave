const express = require("express");
const router = express.Router();
const pdfDownload=require("../pdf")
const excel=require('../excel')
const collegeController=require("../controllers/collegeController")
router.post("/registerCollege",collegeController.registerCollege)
router.get("/download",pdfDownload.collegePdf)
router.get("/getCollegeCount", collegeController.getCollegeCount);
router.get('/excelDownload',excel.collegedownload)
module.exports = router;