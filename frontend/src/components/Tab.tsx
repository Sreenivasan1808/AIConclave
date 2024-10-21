import * as React from "react";
import CollegeForm from "./CollegeForm";
import SchoolForm from "./SchoolForm";


export default function Tabs() {
  const [value, setValue] = React.useState("1");

  return (
    <div className="w-[70%] flex flex-col border m-8 rounded-md shadow-sm">
        <div className="bg-gray-200 flex justify-start h-14">
            <span onClick={() => setValue("1")} className={`cursor-pointer border m-0 p-4 ${value === "1" ? "border-b-blue-700 border-2 text-blue-900" : ""}`}>College</span>
            <span onClick={() => setValue("2")} className={`cursor-pointer border m-0 p-4 ${value === "2" ? "border-b-blue-700 border-2 text-blue-900" : ""}`}>School</span>
        </div>
        {value == "1" ? <CollegeForm/> : <SchoolForm/>}
    </div>
  );
}
