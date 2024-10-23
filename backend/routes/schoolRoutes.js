const express = require("express");
const router = express.Router();
const pdfDownload=require("../pdf")
const schoolController=require("../controllers/schoolController")
const excel=require('../excel')
router.post("/registerSchool",schoolController.registerSchool)
router.get("/download",pdfDownload.schoolPdf)
router.get("/getSchoolCount", schoolController.getSchoolCount);
router.get('/excelDownload',excel.schooldownload)
module.exports = router;