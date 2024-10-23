
const PDFDocument = require('pdfkit');
const fs = require('fs');
const schoolModel=require("./models/school")
const collegeModel=require("./models/college")

const collegePdf = async (req,res)=> {
    // Create a new PDF document
    const data =await collegeModel.findOne({collegeName:req.query.collegeName})
    const doc = new PDFDocument();

    let filename = 'output_with_borders.pdf';
    filename = encodeURIComponent(filename) + '.pdf';

    // Set headers to download the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');
    doc.pipe(res);

    // Add a title/header
    doc.fontSize(18).text('Mepco Schlenk Engineering College', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`College Name: ${data.collegeName}`, { align: 'left' });
    doc.moveDown();
    doc.fontSize(14).text(`Accompanying FacultyName: ${data.facultyName}`, { align: 'left' });

    // Move to a new line
    doc.moveDown(2);


    // Table header coordinates
    let startX = 100;
    let startY = 180;
    let columnWidth = 170;
    let rowHeight = 30;

    // Draw the table header with borders
    doc.rect(60,startY,40,rowHeight).stroke();
    doc.rect(startX, startY, columnWidth, rowHeight).stroke(); // Name column
    doc.rect(startX + columnWidth, startY, columnWidth, rowHeight).stroke(); // Branch column
    doc.rect(startX + 2 * columnWidth, startY, columnWidth/3, rowHeight).stroke(); // Year column

    // Add header text
    doc.fontSize(14);
    doc.text('S.No',65,startY+10)
    doc.text('Name', startX + 10, startY + 10);
    doc.text('Branch', startX + columnWidth + 10, startY + 10);
    doc.text('Year', startX + 2 * columnWidth + 10, startY + 10);
    doc.fontSize(10);
    // Draw table rows with data and borders
    let i=1;
    let count=0;
    let n=1;
    let y = startY + rowHeight;
    let data1=data.studentList
    data1.forEach((row) => {
        // Draw borders for each row
        if(count==17&&i==1){
            doc.addPage();
            // doc.addContent();
            count=0;
            i=0;
            y=20;
        }
        else if(count==23&&i==0){
            doc.addPage();
            // doc.addContent();
            count=0;
            y=20;

        }
        doc.rect(60,y,40,rowHeight).stroke();
        doc.rect(startX, y, columnWidth, rowHeight).stroke(); // Name column
        doc.rect(startX + columnWidth, y, columnWidth, rowHeight).stroke(); // Branch column
        doc.rect(startX + 2 * columnWidth, y, columnWidth/3, rowHeight).stroke(); // Year column

        // Add text inside each cell
        let branch = row.branch.slice(0,24) + '\n' + row.branch.slice(24);
        doc.text(n,65,y+10);
        doc.text(row.studentName, startX + 10, y + 10);
        doc.text(branch, startX + columnWidth + 10, y + 10);
        doc.text(row.yearOfStudy, startX + 2 * columnWidth + 10, y + 10);
        count+=1;
        n+=1;
        y += rowHeight; // Move to the next row
    });

    // Finalize the PDF and end the stream
    doc.end();
}

const schoolPdf=async(req,res)=> {
    // Create a new PDF document
    console.log(req.query);
    const data =await schoolModel.findOne({schoolName:req.query.schoolName})
    console.log(data)
    const doc = new PDFDocument();

    let filename = 'output_with_borders.pdf';
    filename = encodeURIComponent(filename) + '.pdf';

    // Set headers to download the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');
    doc.pipe(res);

    // Add a title/header
    doc.fontSize(18).text('Mepco Schlenk Engineering College', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`School Name: ${data.schoolName}`, { align: 'left' });
    doc.moveDown();
    doc.fontSize(14).text(`Accompanying Faculty Name: ${data.facultyName}`, { align: 'left' });

    // Move to a new line
    doc.moveDown(2);


    // Table header coordinates
    let startX = 100;
    let startY = 180;
    let columnWidth = 150;
    let rowHeight = 30;

    // Draw the table header with borders
    doc.rect(60,startY,40,rowHeight).stroke();
    doc.rect(startX, startY, columnWidth, rowHeight).stroke(); // Name column
    doc.rect(startX + columnWidth, startY, columnWidth, rowHeight).stroke(); // Branch column
    doc.rect(startX + 2 * columnWidth, startY, columnWidth, rowHeight).stroke(); // Year column

    // Add header text
    doc.fontSize(14);
    doc.text('S.No',65,startY+10)
    doc.text('Name', startX + 10, startY + 10);
    doc.text('Standard', startX + columnWidth + 10, startY + 10);
    doc.text('Stream', startX + 2 * columnWidth + 10, startY + 10);
    doc.fontSize(10);
    // Draw table rows with data and borders
    let i=1;
    let count=0;
    let n=1;
    let y = startY + rowHeight;
    let data1=data.studentList
    data1.forEach((row) => {
        // Draw borders for each row
        if(count==17&&i==1){
            doc.addPage();
            // doc.addContent();
            count=0;
            i=0;
            y=20;
        }
        else if(count==23&&i==0){
            doc.addPage();
            // doc.addContent();
            count=0;
            y=20;

        }
        doc.rect(60,y,40,rowHeight).stroke();
        doc.rect(startX, y, columnWidth, rowHeight).stroke(); // Name column
        doc.rect(startX + columnWidth, y, columnWidth, rowHeight).stroke(); // Branch column
        doc.rect(startX + 2 * columnWidth, y, columnWidth, rowHeight).stroke(); // Year column

        // Add text inside each cell
        doc.text(n,65,y+10);
        doc.text(row.studentName, startX + 10, y + 10);
        doc.text(row.standard, startX + columnWidth + 10, y + 10);
        doc.text(row.stream, startX + 2 * columnWidth + 10, y + 10);
        count+=1;
        n+=1;
        y += rowHeight; // Move to the next row
    });

    // Finalize the PDF and end the stream
    doc.end();
}
module.exports={
    schoolPdf:schoolPdf,
    collegePdf:collegePdf
}