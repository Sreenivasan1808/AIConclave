import { useState } from "react";
import CollegeCountTable from "./CollegeCountTable";
import SchoolCountTable from "./SchoolCountTable";
import Navbar from "../Navbar";


const Dashboard = () => {
  const [value, setValue] = useState("1");

  return (
    <div className="flex flex-col justify-center items-center min-h-fit my-8 py-8">
      <div className="w-[60%] m-2 fixed top-0 z-10">
        <Navbar></Navbar>
      </div>
      <h2 className="text-4xl text-center my-2 uppercase">Admin Panel</h2>
      <div className="md:w-[90%] sm:w-full flex flex-col border m-8 rounded-md shadow-sm min-h-screen">
        <div className="bg-gray-200 flex justify-start h-14">
          <span
            onClick={() => setValue("1")}
            className={`cursor-pointer border m-0 p-4 ${
              value === "1"
                ? "border-b-yellow-600 border-2 text-yellow-900"
                : ""
            }`}
          >
            College
          </span>
          <span
            onClick={() => setValue("2")}
            className={`cursor-pointer border m-0 p-4 ${
              value === "2"
                ? "border-b-yellow-600 border-2 text-yellow-900"
                : ""
            }`}
          >
            School
          </span>
        </div>

        {value === "1" ? <CollegeCountTable /> : <SchoolCountTable />}
      </div>

    </div>
  );
};

export default Dashboard;
