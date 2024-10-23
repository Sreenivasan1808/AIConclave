import React, { useEffect, useState } from "react";
import { getCollegeCount } from "../../api/api";

interface College {
  collegeName: string;
  cseCount: number;
  eeeCount: number;
  civilCount: number;
  mbaCount: number;
}

const CollegeCountTable = (props: any) => {
  const [collegeData, setCollegeData] = useState<College[] | null>(null);
  const fetchData = async () => {
    const college = await getCollegeCount();
    if (college !== null) {
      setCollegeData(college);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="table-auto w-full mb-4 border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border w-fit">S.No</th>
            <th className="px-4 py-2 border min-w-full">College Name</th>
            <th className="border w-fit">
              CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)
            </th>
            <th className="px-4 py-2 border">
              EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)
            </th>
            <th className="px-4 py-2 border">Civil, MECH, Barch</th>
            <th className="px-4 py-2 border">
              MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)
            </th>
            <th className="px-4 py-2 border">Total Count</th>
            <th className="px-4 py-2 border">Download</th>
          </tr>
        </thead>
        <tbody>
          {collegeData &&
            collegeData.map((college: any, index: number) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2 min-w-fit">
                  {college.collegeName}
                </td>
                <td className="border px-4 py-2">{college.cseCount}</td>
                <td className="border px-4 py-2">{college.eeeCount}</td>
                <td className="border px-4 py-2">{college.civilCount}</td>
                <td className="border px-4 py-2">{college.mbaCount}</td>
                <td className="border px-4 py-2">
                  {college.cseCount +
                    college.eeeCount +
                    college.civilCount +
                    college.mbaCount}
                </td>
                <td className="border px-4 py-2">
                  <span>Click here</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeCountTable;
