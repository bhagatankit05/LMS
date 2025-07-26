import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/asset'
import Loading from '../../components/students/Loading';

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  }

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-medium'>Enrolled Students</h2>

        <div className='overflow-x-auto w-full max-w-4xl rounded-md shadow-md border border-gray-300 bg-white'>
          <table className='min-w-full border-collapse'>
            <thead className='bg-gray-100 text-gray-700 text-sm font-semibold'>
              <tr>
                <th className='px-4 py-3 text-center hidden sm:table-cell border-b border-gray-300'>Sr. No</th>
                <th className='px-4 py-3 text-left border-b border-gray-300'>Student Name</th>
                <th className='px-4 py-3 text-left border-b border-gray-300'>Course Title</th>
                <th className='px-4 py-3 text-left hidden sm:table-cell border-b border-gray-300'>Date</th>
              </tr>
            </thead>

            <tbody className='text-sm text-gray-700'>
              {enrolledStudents.map((item, index) => (
                <tr key={index} className='hover:bg-gray-50 transition-colors border-b border-gray-200'>
                  <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                  <td className='px-4 py-3 truncate'>{item.student.name}</td>
                  <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                  <td className='px-4 py-3 hidden sm:table-cell'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : <Loading />;
}

export default StudentsEnrolled;
