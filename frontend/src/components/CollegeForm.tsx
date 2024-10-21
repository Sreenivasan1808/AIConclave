import React, { useState } from "react";
import { registerCollege } from "../api/api";

interface CollegeForm {
  collegeName: String;
  facultyName: String;
  studentCount: Number;
  studentList: {
    studentName: String;
    yearOfStudy: String;
    branch: String;
  }[];
}

const CollegeForm = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    facultyName: "",
    studentCount: 0,
    studentList: Array.prototype,
  });
  const [submitResponse, setSubmitResponse] = useState("");

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name == "studentCount") {
      if (value <= formData.studentCount) {
        let studentList = formData.studentList;
        studentList = studentList.slice(0, value);
        setFormData((prevData) => ({
          ...prevData,
          studentList: studentList,
        }));
      } else {
        for (let i = 1; i <= value - formData.studentCount; i++) addStudent();
      }
    }
  };

  const handleStudentChange = (
    index: number,
    e: any
  ) => {
    const { name, value } = e;
    const updatedStudents = [...formData.studentList];
    updatedStudents[index] = { ...updatedStudents[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      studentList: updatedStudents,
    }));
  };


  

  const addStudent = () => {
    setFormData((prevData) => ({
      ...prevData,
      studentList: [
        ...prevData.studentList,
        { studentName: "", yearOfStudy: "", branch: "" },
      ],
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    const response = registerCollege(formData);
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        College Registration Form
      </h2>
      <form onSubmit={handleSubmit}>
        {/* College Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2 uppercase"
            htmlFor="collegeName"
          >
            College Name
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        {/* Faculty Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2 uppercase"
            htmlFor="facultyName"
          >
            Faculty Name
          </label>
          <input
            type="text"
            id="facultyName"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        {/* Student Count */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2 uppercase"
            htmlFor="studentCount"
          >
            Student Count
          </label>
          <input
            type="number"
            id="studentCount"
            name="studentCount"
            value={formData.studentCount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>

        {/* Student List Table */}
        {formData.studentCount > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-2">Student List</h3>
            <div className="overflow-x-auto">
              <table className="table-auto w-full mb-4 border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">S.No</th>
                    <th className="px-4 py-2 border">Student Name</th>
                    <th className="px-4 py-2 border">Year of Study</th>
                    <th className="px-4 py-2 border">Branch</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.studentList.map((student, index) => (
                    <tr key={index}>
                      <td className="text-center border border-gray-300">
                        {index + 1}
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          name="studentName"
                          onChange={(e) => handleStudentChange(index, {name: e.target.name, value: e.target.value})}
                          className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                          required
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          name="yearOfStudy"
                          id="yearOfStudy"
                          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-transparent"
                          onChange={(e) => handleStudentChange(index, {name: "yearOfStudy", value: e.target.selectedOptions[0].value})}
                        >
                          <option value="I">I</option>
                          <option value="II">II</option>
                          <option value="III">III</option>
                          <option value="IV">IV</option>
                        </select>
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          name="branch"
                          id="branch"
                          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-transparent"
                          onChange={(e) => handleStudentChange(index, {name: "branch", value: e.target.selectedOptions[0].value})}
                        >
                          <option value="CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)">CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)</option>
                          <option value="EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)">EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)</option>
                          <option value="Civil, MECH, BArch">Civil, MECH, BArch</option>
                          <option value="MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)">MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Submit Button */}
        <div className="flex justify-end gap-2">
          <button
            type="reset"
            className="w-fit p-4 bg-white text-black py-2 rounded-md border border-black hover:bg-gray-300"
            onClick={() => {setFormData({
              collegeName: "",
              facultyName: "",
              studentCount: 0,
              studentList: Array.prototype,
            })}}
          >
            Clear
          </button>
          <button
            type="submit"
            className="w-fit p-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CollegeForm;
