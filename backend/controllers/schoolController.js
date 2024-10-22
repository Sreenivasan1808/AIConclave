const School = require('../models/school'); 
const registerSchool = async (req, res) => {
    try {
        const schoolName = req.body.schoolName;
        console.log(req.body);
        const collegeData = await School.findOne({schoolName: schoolName});
        if(collegeData !== null){
            res.status(201).json({
                message: "School has already been registered"
            });
            return;
        }
        const newSchool = new School(req.body);
        await newSchool.save();
        res.status(201).json({
            message: 'School registered successfully!'
        });
    } catch (error) {
        // Handle errors (validation, etc.)
        res.status(400).json({
            message: 'Error registering school'
        });
    }
};

module.exports = {
    registerSchool:registerSchool,
};