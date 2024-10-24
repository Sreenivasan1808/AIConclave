import { useEffect, useState } from "react";
import {
  downloadCollege,
  downloadCollegeExcel,
  getCollegeCount,
} from "../../api/api";

interface College {
  collegeName: string;
  cseCount: number;
  eeeCount: number;
  civilCount: number;
  mbaCount: number;
}

const CollegeCountTable = () => {
  const [collegeData, setCollegeData] = useState<College[] | null>(null);
  const [totalCseCount, setTotalCseCount] = useState(0);
  const [totalEeeCount, setTotalEeeCount] = useState(0);
  const [totalCivilCount, setTotalCivilCount] = useState(0);
  const [totalMbaCount, setTotalMbaCount] = useState(0);

  const fetchData = async () => {
    const college = await getCollegeCount();
    if (college !== null) {
      setCollegeData(college);
      setTotalCseCount(college.reduce((acc: any, curr:College) => acc + curr.cseCount, 0));
      setTotalEeeCount(college.reduce((acc: any, curr:College) => acc + curr.eeeCount, 0));
      setTotalCivilCount(college.reduce((acc: any, curr:College) => acc + curr.civilCount, 0));
      setTotalMbaCount(college.reduce((acc: any, curr:College) => acc + curr.mbaCount, 0));
    }
  };
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handlePDFDownload = (index: number) => {
    if (collegeData == null) return;
    const collegeName = collegeData[index].collegeName;

    downloadCollege(collegeName);
  };

  const handleExcelDownload = (index: number) => {
    if (collegeData == null) return;
    const collegeName = collegeData[index].collegeName;

    downloadCollegeExcel(collegeName);
  };

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
                <td className="border px-4 py-2 flex flex-col">
                  <span
                    onClick={() => handlePDFDownload(index)}
                    className="cursor-pointer text-yellow-600 hover:text-yellow-800"
                  >
                    Download PDF
                  </span>
                  <span
                    onClick={() => handleExcelDownload(index)}
                    className="cursor-pointer text-yellow-600 hover:text-yellow-800"
                  >
                    Download Excel
                  </span>
                </td>
              </tr>
            ))}
          <tr>
            <td></td>
            <td className="font-semibold border px-4 py-2 text-right">TOTAL</td>
            <td className="font-semibold border px-4 py-2">
              {totalCseCount}
            </td>
            <td className="font-semibold border px-4 py-2">
              {totalEeeCount}
            </td>
            <td className="font-semibold border px-4 py-2">
              {totalCivilCount}
            </td>
            <td className="font-semibold border px-4 py-2">
              {totalMbaCount}
            </td>
            <td className="font-semibold border px-4 py-2">
              {totalCseCount +
                totalEeeCount +
                totalCivilCount +
                totalMbaCount}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CollegeCountTable;
