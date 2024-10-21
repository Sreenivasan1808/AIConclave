const School = require('../models/school'); 
const registerSchool = async (req, res) => {
    try {
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