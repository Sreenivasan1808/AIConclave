const School = require("../models/school");
const registerSchool = async (req, res) => {
  try {
    const schoolName = req.body.schoolName;
    console.log(req.body);
    const collegeData = await School.findOne({ schoolName: schoolName });
    if (collegeData !== null) {
      res.status(201).json({
        message: "School has already been registered",
      });
      return;
    }
    const newSchool = new School(req.body);
    await newSchool.save();
    res.status(201).json({
      message: "School registered successfully!",
    });
  } catch (error) {
    // Handle errors (validation, etc.)
    res.status(400).json({
      message: "Error registering school",
    });
  }
};

const getSchoolCount = async (req, res) => {
  try {
    const schools = await School.find().exec();
    // Initialize an array to hold results for each school
    const results = [];
    // Iterate over each school
    schools.forEach((school) => {
      // Initialize an object to hold the counts for the current school
      const streamCounts = {};
      // Iterate over the student list and count by stream
      school.studentList.forEach((student) => {
        const stream = student.stream;

        if (streamCounts[stream]) {
          streamCounts[stream]++;
        } else {
          streamCounts[stream] = 1;
        }
      });

      counts = {};
      counts["artsCount"] = streamCounts["Arts"] ? streamCounts["Arts"] : 0;
      counts["scienceCount"] = streamCounts["Science"] ? streamCounts["Science"] : 0;

      // Prepare the result for the current school

      const result = {
        schoolName: school.schoolName,
        ...counts
      };

      

      // Add the result to the results array

      results.push(result);
    });

    // Log all results

    console.log(results);

    res.status(200).json(results);
  } catch (error) {
    console.error("Error retrieving student counts:", error);
    res.status(400).json("Error " + error);
  }
};

module.exports = {
  registerSchool: registerSchool,
  getSchoolCount: getSchoolCount,
};
