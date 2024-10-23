import React, { useState } from "react";
import { registerCollege } from "../api/api";

interface CollegeForm {
  collegeName: String;
  facultyName: String;
  studentCount: Number;
  studentList: {
    studentName: String;
    yearOfStudy: String;
    batch: Number;
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
    let { name, value } = e.target;
    if(name == "collegeName")
      value = value.toUpperCase();
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

  const handleStudentChange = (index: number, e: any) => {
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
        {
          studentName: "",
          yearOfStudy: "I",
          batch:1,
          branch: "CSE",
        },
      ],
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    let response;
    try {
      response = await registerCollege(formData);
      console.log(response);

      setSubmitResponse(response.message);
    } catch (error) {
      console.log(response);

      setSubmitResponse(response.message);
    }
  };

  const batch1Options = (
    <>
      <option value="CSE">CSE</option>
      <option value="IT">IT</option>
      <option value="AI&DS">AI&DS</option>
      <option value="MCA">MCA</option>
      <option value="BSc CS">BSc CS</option>
      <option value="BSc IT">BSc IT</option>
      <option value="BSc CA">BSc CA</option>
      <option value="BSc MAT">BSc MAT</option>
    </>
  );
  const batch2Options = (
    <>
      <option value="EEE">EEE</option>
      <option value="ECE">ECE</option>
      <option value="MEC">MEC</option>
      <option value="BME">BME</option>
      <option value="BT">BT</option>
      <option value="BSc PHY">BSc PHY</option>
      <option value="BSc CHE">BSc CHE</option>
      <option value="BSc BIO">BSc BIO</option>
      <option value="BSc BOT">BSc BOT</option>
      <option value="BSc ZOO">BSc ZOO</option>
    </>
  );
  const batch3Options = (
    <>
      <option value="Civil">Civil</option>
      <option value="Mech">Mech</option>
      <option value="BArch">BArch</option>
    </>
  );
  const batch4Options = (
    <>
      <option value="MBA">MBA</option>
      <option value="BBA">BBA</option>
      <option value="BCom">BCom</option>
      <option value="MCom">MCom</option>
      <option value="BA Eco">BA Eco</option>
      <option value="BA Lit">BA Lit</option>
    </>
  );

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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
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
                    <th className="px-4 py-2 border">Batch</th>
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
                          onChange={(e) =>
                            handleStudentChange(index, {
                              name: e.target.name,
                              value: e.target.value,
                            })
                          }
                          className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200"
                          required
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          name="yearOfStudy"
                          id="yearOfStudy"
                          value={formData.studentList[index].yearOfStudy}
                          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200 bg-transparent"
                          onChange={(e) =>
                            handleStudentChange(index, {
                              name: "yearOfStudy",
                              value: e.target.selectedOptions[0].value,
                            })
                          }
                        >
                          <option value="I">I</option>
                          <option value="II">II</option>
                          <option value="III">III</option>
                          <option value="IV">IV</option>
                        </select>
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          name="batch"
                          id="batch"
                          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200 bg-transparent"
                          onChange={(e) =>
                            handleStudentChange(index, {
                              name: "batch",
                              value: parseInt(e.target.selectedOptions[0].value),
                            })
                          }
                          value={formData.studentList[index].batch || 1} 
                        >
                          <option value={1}>
                            CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)
                          </option>
                          <option value={2}>
                            EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT,
                            ZOO,...)
                          </option>
                          <option value={3}>Civil, MECH, BArch</option>
                          <option value={4}>
                            MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)
                          </option>
                        </select>
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          name="branch"
                          id="branch"
                          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200 bg-transparent"
                          onChange={(e) =>
                            handleStudentChange(index, {
                              name: "branch",
                              value: e.target.selectedOptions[0].value,
                            })
                          }
                        >
                          {formData.studentList[index].batch === 1 && batch1Options}
                          {formData.studentList[index].batch === 2 && batch2Options}
                          {formData.studentList[index].batch === 3 && batch3Options}
                          {formData.studentList[index].batch === 4 && batch4Options}
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
            onClick={() => {
              setFormData({
                collegeName: "",
                facultyName: "",
                studentCount: 0,
                studentList: Array.prototype,
              });
            }}
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
        {submitResponse.includes("success") ? (
          <p className="text-sm text-green-600 text-center">{submitResponse}</p>
        ) : (
          <p className="text-sm text-red-600 text-center">{submitResponse}</p>
        )}
      </form>
    </div>
  );
};

export default CollegeForm;
