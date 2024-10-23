import React from 'react'

const ExcelDownload = () => {
  return (
    <div className='border rounded-md '>
        <div className='bg-gray-300 w-full p-4'>Excel Download</div>
        <div>
            <form>
                <div>
                    <label htmlFor="collegeName">College Name</label>
                    <select name="collegeName" id="collegeName">

                    </select>
                </div>
                <div>
                    <label htmlFor="schoolName">College Name</label>
                    <select name="schoolName" id="schoolName">
                        
                    </select>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default ExcelDownload
