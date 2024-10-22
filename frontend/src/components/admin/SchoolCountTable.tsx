import { tr } from 'framer-motion/client'
import React from 'react'

const SchoolCountTable = (props: any) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>School Name</th>
                <th>Science Stream</th>
                <th>Arts Stream</th>
                <th>Download</th>
            </tr>
        </thead>
        <tbody>
            {
                props.schoolDetails.map((school: any, index:number) => {
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{school.schoolName}</td>
                        <td>{school.scienceCount}</td>
                        <td>{school.artsCount}</td>
                        <td>{school.scienceCount + school.artsCount}</td>
                        <td></td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default SchoolCountTable
