import { useState } from "react";
import { registerSchool } from "../api/api";

interface SchoolForm {
  schoolName: String;
  facultyName: String;
  studentCount: Number;
  studentList: {
    studentName: String;
    standard: String;
    stream: String;
  }[];
}

const SchoolForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
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

  const handleStudentChange = (index: number, e: any) => {
    let { name, value } = e;
    if(name == "schoolName")
      value = value.toUpperCase();
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
        { studentName: "", standard: "XI", stream: "Science" },
      ],
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    
    e.preventDefault();
    console.log(formData);
    let response;
    try {
      response = await registerSchool(formData);
      setSubmitResponse(response.message);
      
    } catch (error) {
      setSubmitResponse(response.message);
    }
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        School Registration Form
      </h2>
      <form onSubmit={handleSubmit}>
        {/* College Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2 uppercase"
            htmlFor="schoolName"
          >
            School Name
          </label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
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
                    <th className="px-4 py-2 border">Standard</th>
                    <th className="px-4 py-2 border">Stream</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.studentList.map((_student, index) => (
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
                          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200 bg-transparent"
                          onChange={(e) =>
                            handleStudentChange(index, {
                              name: "standard",
                              value: e.target.selectedOptions[0].value,
                            })
                          }
                        >
                          <option value="XI">XI</option>
                          <option value="XII">XII</option>
                        </select>
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          name="branch"
                          id="branch"
                          className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-200 bg-transparent"
                          onChange={(e) =>
                            handleStudentChange(index, {
                              name: "stream",
                              value: e.target.selectedOptions[0].value,
                            })
                          }
                        >
                          <option value="Science">Science</option>
                          <option value="Arts">Arts</option>
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
              schoolName: "",
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
        {submitResponse.includes("success") ? <p className="text-sm text-green-600 text-center">{submitResponse}</p> : <p className="text-sm text-red-600 text-center">{submitResponse}</p>}
      </form>
    </div>
  );
};

export default SchoolForm;
