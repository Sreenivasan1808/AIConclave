import { useEffect, useState } from "react";
import { downloadSchool, getSchoolCount } from "../../api/api";

interface School {
  schoolName: string;
  scienceCount: number;
  artsCount: number;
}

const SchoolCountTable = () => {
  const [schoolData, setSchoolData] = useState<School[] | null>(null);
  const fetchData = async () => {
    const school = await getSchoolCount();
    if (school !== null) {
      setSchoolData(school);
    }
  };
  const handleDownload = (index: number) => {
    if (schoolData == null) return;
    const schoolName = schoolData[index].schoolName;

    downloadSchool(schoolName);
  };
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!schoolData || schoolData.length == 0) return <p>Loading...</p>;
  return (
    <div>
      <table className="table-auto w-full mb-4 border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">S.No</th>
            <th className="px-4 py-2 border min-w-full">School Name</th>
            <th className="px-4 py-2 border">Science Stream</th>
            <th className="px-4 py-2 border">Arts Stream</th>
            <th className="px-4 py-2 border">Total Count</th>
            <th className="px-4 py-2 border">Download</th>
          </tr>
        </thead>
        <tbody>
          {schoolData.map((school: any, index: number) => (
            <tr key={index}>
              <td className="text-center border">{index + 1}</td>
              <td className="border px-4 py-2 min-w-fit">
                {school.schoolName}
              </td>
              <td className="border px-4 py-2">{school.scienceCount}</td>
              <td className="border px-4 py-2">{school.artsCount}</td>
              <td className="border px-4 py-2">
                {school.scienceCount + school.artsCount}
              </td>
              <td
                className="border px-4 py-2 cursor-pointer text-yellow-600 hover:text-yellow-800"
                onClick={() => handleDownload(index)}
              >
                Click Here
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolCountTable;
