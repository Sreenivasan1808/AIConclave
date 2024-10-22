const College = require('../models/college');
const registerCollege = async (req, res) => {
    try {
        const collegeName = req.body.collegeName;
        const collegeData = await College.findOne({collegeName: collegeName});
        if(collegeData !== null){
            res.status(201).json({
                message: "College has already been registered"
            });
            return;
        }
        const newCollege = new College(req.body);
        await newCollege.save();
        res.status(201).json({
            message: 'College registered successfully!',
            college: newCollege,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error registering college',
            error: error.message,
        });
    }
};

module.exports = {
    registerCollege:registerCollege,
};