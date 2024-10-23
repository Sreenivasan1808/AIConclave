const express = require("express");
const router = express.Router();
const pdfDownload = require("../pdf");
const excel = require("../excel");

const schoolController = require("../controllers/schoolController");
router.post("/registerSchool", schoolController.registerSchool);
router.get("/downloadPDF", pdfDownload.schoolPdf);
router.get("/downloadExcel", excel.schooldownload);
router.get("/getSchoolCount", schoolController.getSchoolCount);
module.exports = router;
