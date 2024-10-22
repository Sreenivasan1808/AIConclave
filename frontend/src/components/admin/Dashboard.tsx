import React, { useEffect, useState } from 'react'
import { getCollegeCount, getSchoolCount } from '../../api/api';
import CollegeCountTable from './CollegeCountTable';
import SchoolCountTable from './SchoolCountTable';

const Dashboard = () => {

    const fetchData = async () => {
        const school = await getSchoolCount();
        if(school !== null){
            setSchoolData(school);
        }
        const college = await getCollegeCount();
        if(college !== null){
            setCollegeData(college);
        }
    }

    const [schoolData, setSchoolData] = useState();
    const [collegeData, setCollegeData] = useState();
    const [value, setValue] = React.useState("1");
    useEffect(() => {
        fetchData();        
    }, [])

    
  return (
    <div className="w-[70%] flex flex-col border m-8 rounded-md shadow-sm">
        <div className="bg-gray-200 flex justify-start h-14">
            <span onClick={() => setValue("1")} className={`cursor-pointer border m-0 p-4 ${value === "1" ? "border-b-yellow-600 border-2 text-yellow-900" : ""}`}>College</span>
            <span onClick={() => setValue("2")} className={`cursor-pointer border m-0 p-4 ${value === "2" ? "border-b-yellow-600 border-2 text-yellow-900" : ""}`}>School</span>
        </div>
        {value === "1" ? <CollegeCountTable/> : <SchoolCountTable/>}
    </div>
  )
}

export default Dashboard
