const College = require('../models/college');
const registerCollege = async (req, res) => {
    try {
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