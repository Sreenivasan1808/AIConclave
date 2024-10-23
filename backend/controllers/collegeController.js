const College = require("../models/college");
const registerCollege = async (req, res) => {
  try {
    const collegeName = req.body.collegeName;
    const collegeData = await College.findOne({ collegeName: collegeName });
    if (collegeData !== null) {
      res.status(201).json({
        message: "College has already been registered",
      });
      return;
    }
    const newCollege = new College(req.body);
    await newCollege.save();
    res.status(201).json({
      message: "College registered successfully!",
      college: newCollege,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error registering college",
      error: error.message,
    });
  }
};

const getCollegeCount = async (req, res) => {
  try {
    // Find all colleges

    const colleges = await College.find().exec();

    // Initialize an array to hold results for each college

    const results = [];

    // Iterate over each college

    colleges.forEach((college) => {
      // Initialize an object to hold the counts for the current college

      const branchCounts = {};

      // Iterate over the student list and count by branch

      college.studentList.forEach((student) => {
        const branch = student.branch;

        if (branchCounts[branch]) {
          branchCounts[branch]++;
        } else {
          branchCounts[branch] = 1;
        }
      });

      counts = {};

      counts["cseCount"] = branchCounts["CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)"]
        ? branchCounts["CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)"]
        : 0;
      counts["eeeCount"] = branchCounts[
        "EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)"
      ]
        ? branchCounts[
            "EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)"
          ]
        : 0;
      counts["civilCount"] = branchCounts["Civil, MECH, BArch"]
        ? branchCounts["Civil, MECH, BArch"]
        : 0;
      counts["mbaCount"] = branchCounts["MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)"]
        ? branchCounts["MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)"]
        : 0;

      // Prepare the result for the current college

      const result = {
        collegeName: college.collegeName,

        ...counts,
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
  registerCollege: registerCollege,
  getCollegeCount: getCollegeCount,
};
