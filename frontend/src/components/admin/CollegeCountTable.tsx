import React from 'react'

const CollegeCountTable = (props:any) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>College Name</th>
                <th>CSE, IT, AI&DS, MCA, BSc(CS,IT,CA,MAT)</th>
                <th>EEE, ECE, MEC, BME, BT, BSc (PHY, CHE, BIO, BOT, ZOO,...)</th>
                <th>Civil, MECH, Barch</th>
                <th>MBA, BBA, BCom, MCom, BA(Eco), BA(Lit)</th>
                <th>Total Count</th>
            </tr>
        </thead>
        <tbody>
            {
                props.collegeDetails.map((college: any, index:number) => {
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{college.collegeName}</td>
                        <td>{college.cseCount}</td>
                        <td>{college.eeeCount}</td>
                        <td>{college.civilCount}</td>
                        <td>{college.mbaCount}</td>
                        <td>{college.cseCount + college.eeeCount + college.civilCount + college.mbaCount}</td>
                        <td><span>Download</span></td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default CollegeCountTable
