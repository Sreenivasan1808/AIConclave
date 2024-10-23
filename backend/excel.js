const XLSX = require('xlsx');
const schoolModel=require("./models/school")
const collegeModel=require("./models/college")
const axios=require("axios")

// Sample JSON data
const schooldownload = async (req, res) => {
    try {
        
            const data1 = (await schoolModel.find({ schoolName: req.query.schoolName })).studenList;
            let jsonData = [];
            
            data1.forEach((data)=> { 
                    jsonData.push({studentName:data.studentName,standard:data.standard,stream:data.stream});
            }
        )

            

            // Convert JSON data to worksheet
            const worksheet = XLSX.utils.json_to_sheet(jsonData);

            // Create a new workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Student Data');

            // Write the workbook to a buffer
            const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

            // Set headers to trigger file download
            res.setHeader('Content-Disposition', `attachment; filename=${req.query.schoolName}_student_data.xlsx`);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

            // Send the buffer as response
            res.send(buffer);
        
        
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).send('Error generating file');
    }
};
const collegedownload = async (req, res) => {
    try {
        
            const data1 = (await collegeModel.find({ collegeName: req.query.collegeName })).studenList;
            let jsonData = [];
            
            data1.forEach((data)=> { 
                if(data.batch==1)
                    jsonData.push({studentName:data.studentName,year:data.yearOfStudy,'CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)':'yes','EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)':'','Civil, MECH, Barch':'','MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)':''});
                else if(data.batch==2)
                    jsonData.push({studentName:data.studentName,year:data.yearOfStudy,'CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)':'','EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)':'yes','Civil, MECH, Barch':'','MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)':''});
                else if(data.batch==3)
                    jsonData.push({studentName:data.studentName,year:data.yearOfStudy,'CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)':'','EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)':'','Civil, MECH, Barch':'yes','MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)':''});
                else if(data.batch==4)
                    jsonData.push({studentName:data.studentName,year:data.yearOfStudy,'CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)':'','EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)':'','Civil, MECH, Barch':'','MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)':'yes'});
            }
        )

            

            // Convert JSON data to worksheet
            const worksheet = XLSX.utils.json_to_sheet(jsonData);

            // Create a new workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Student Data');

            // Write the workbook to a buffer
            const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

            // Set headers to trigger file download
            res.setHeader('Content-Disposition', `attachment; filename=${req.query.collgeName}_student_data.xlsx`);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

            // Send the buffer as response
            res.send(buffer);
        
        
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).send('Error generating file');
    }
};

module.exports = {
    schooldownload: schooldownload,
    collegedownload:collegedownload
};
